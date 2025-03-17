"use client"
import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import {
  Input,
  Slider,
  Button,
  Checkbox,
  Select,
  SelectItem,
  Textarea,
  Divider,
  Autocomplete,
  AutocompleteItem,
  CheckboxGroup,
  RadioGroup,
  Radio,
  Switch,
} from "@nextui-org/react";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCalendar,
  FaUsers,
  FaDollarSign,
  FaPaperPlane,
  FaCrown,
  FaHotel,
  FaCar,
  FaCalendarAlt,
  FaUtensils
} from "react-icons/fa";
import { antic } from '@/utility/font';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { postTailor } from '@/services/form';
import { months, selectDestinations, vehicleOptions } from '@/utility/constants';

interface FormErrors {
    [key: string]: string;
}

interface FormattedData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    dreamDestination: string[];
    fixedDates: {
        arrival: string;
        departure: string;
    } | null;
    flexibleDates: {
        preferredMonth: string;
        approximateDays: number;
    } | null;
    travelDuration: number;
    travelers: {
        adults: number;
        children: number;
    };
    experienceLevel: string;
    hotelStandard: string;
    hotelBrandPreference: string;
    transportationPreferences: string[];
    mealPreferences: string;
    budget: string;
    dreamExperience: string;
}

const TailorForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [country, setCountry] = useState<string>("");
    const [showChildPolicy, setShowChildPolicy] = useState<boolean>(false);
    const [childrenCount, setChildrenCount] = useState<number>(0);
    const [isDateFixed, setIsDateFixed] = useState<boolean>(true);
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [budgetValue, setBudgetValue] = useState<number[]>([5000, 30000]);
    
    const { data: countries, isLoading } = useQuery({
        queryKey: ["countries"],
        queryFn: async () => {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            return data.map((country: any) => country.name.common);
        },
    });

    const resetForm = () => {
        if (formRef.current) {
            formRef.current.reset();
            setCountry("");
            setChildrenCount(0);
            setShowChildPolicy(false);
            setIsDateFixed(true);
            setFormErrors({});
            setBudgetValue([10000, 30000]);
        }
    };

    const onSelectionChange = (key: React.Key | null) => {
        if (key) {
            setCountry(String(key));
        }
    };

    const handleChildrenChange = (e: ChangeEvent<HTMLInputElement>) => {
        const count = parseInt(e.target.value);
        setChildrenCount(count);
        setShowChildPolicy(count > 0);
    };

    const handleBudgetChange = (values: number | number[]) => {
    // Ensure we're working with an array
    if (Array.isArray(values)) {
        setBudgetValue(values);
    } else {
        // If a single value is provided, maintain the array structure
        // This shouldn't normally happen with a range slider, but handling it for type safety
        setBudgetValue([values, values]);
    }
};

    const {mutate: postTailorMutation, isPending} = useMutation({
        mutationFn: (data: FormattedData) => postTailor(data),
        onSuccess: () => {
            toast.success("Your journey request has been sent successfully!");
            resetForm(); // Reset the form on successful submission
        },
        onError: (error: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
            const errorMessage = error?.response?.data?.message || "Failed to send your request. Please try again.";
            toast.error(errorMessage);
        }
    });

    const validateForm = (formData: FormattedData): boolean => {
        const requiredFields = [
            'firstName', 
            'lastName', 
            'email', 
            'phone', 
            'country',
            'travelDuration',
            'adults'
        ] as const;
        
        const errors: FormErrors = {};
        let isValid = true;
        
        // Check required fields
        for (const field of requiredFields) {
            if (field === 'travelDuration' || field === 'adults') {
                // Handle numeric fields
                if (field === 'travelDuration' && (!formData.travelDuration || formData.travelDuration <= 0)) {
                    errors[field] = `${field} is required`;
                    isValid = false;
                } else if (field === 'adults' && (!formData.travelers.adults || formData.travelers.adults <= 0)) {
                    errors.adults = `Number of adults is required`;
                    isValid = false;
                }
            } else if (field === 'country') {
                // Special handling for country field
                if (!formData[field] || formData[field] === '') {
                    errors[field] = `${field} is required`;
                    isValid = false;
                }
            } else {
                // Handle string fields
                if (!formData[field as keyof FormattedData] || typeof formData[field as keyof FormattedData] === 'string' && (formData[field as keyof FormattedData] as string).trim() === '') {
                    errors[field] = `${field} is required`;
                    isValid = false;
                }
            }
        }
        
        // Email validation
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Please enter a valid email address";
            isValid = false;
        }
        
        // Phone validation
        if (formData.phone && !/^[0-9+\-\s()]{7,20}$/.test(formData.phone)) {
            errors.phone = "Please enter a valid phone number";
            isValid = false;
        }
        
        // Date validation for fixed dates
        if (isDateFixed && formData.fixedDates) {
            if (!formData.fixedDates.arrival || !formData.fixedDates.departure) {
                errors.dates = "Please select both arrival and return dates";
                isValid = false;
            }
        }
        
        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData) as Record<string, string>;
        
        // Get array values correctly
        const dreamDestinations = formData.getAll('dreamDestination') as string[];
        const transportationPrefs = formData.getAll('transportationPreferences') as string[];
        
        // Format budget string
        const budgetString = `$${budgetValue[0].toLocaleString()} - $${budgetValue[1].toLocaleString()}`;
        
        // Process data into the expected format
        const formattedData: FormattedData = {
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            email: data.email || '',
            phone: data.phone || '',
            country: country || '',
            // Convert arrays to JSON strings if needed
            dreamDestination: dreamDestinations,
            fixedDates: isDateFixed ? {
                arrival: data.arrival || '',
                departure: data.return || ''
            } : null,
            flexibleDates: !isDateFixed ? {
                preferredMonth: data.preferredMonth || '',
                approximateDays: parseInt(data.approximateDays) || 0
            } : null,
            travelDuration: parseInt(data.travelDuration) || 0,
            travelers: {
                adults: parseInt(data.adults) || 0,
                children: parseInt(childrenCount.toString()) || 0
            },
            experienceLevel: data.experienceLevel || '',
            hotelStandard: data.hotelStandard || '',
            hotelBrandPreference: data.hotelBrandPreference || '',
            transportationPreferences: transportationPrefs,
            mealPreferences: data.mealPlan || '',
            budget: budgetString,
            dreamExperience: data.dreamExperience || ''
        };
        
        // Validate form
        if (!validateForm(formattedData)) {
            toast.error("Please fill all required fields");
            return;
        }
        
        try {
            // Submit form
            postTailorMutation(formattedData);
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred while submitting your request. Please try again.");
        }
    };

    return (
        <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h2 className={`${antic.className} text-3xl font-semibold mb-2 text-primary`}>
                Design Your Experience
            </h2>
            <p className="text-gray-600 mb-8">Craft your perfect journey with our luxury travel experts</p>
            
            <form className="space-y-8" onSubmit={handleSubmit} ref={formRef}>
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        name="firstName"
                        label="First Name"
                        placeholder="Enter your first name"
                        variant="bordered"
                        className="hover:border-primary"
                        required
                        isInvalid={!!formErrors.firstName}
                        errorMessage={formErrors.firstName}
                    />
                    <Input
                        name="lastName"
                        label="Last Name"
                        placeholder="Enter your last name"
                        variant="bordered"
                        className="hover:border-primary"
                        required
                        isInvalid={!!formErrors.lastName}
                        errorMessage={formErrors.lastName}
                    />
                    <Input
                        name="email"
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        variant="bordered"
                        className="hover:border-primary"
                        required
                        isInvalid={!!formErrors.email}
                        errorMessage={formErrors.email}
                    />
                    <Input
                        name="phone"
                        label="Phone"
                        placeholder="Enter your phone number"
                        variant="bordered"
                        className="hover:border-primary"
                        required
                        isInvalid={!!formErrors.phone}
                        errorMessage={formErrors.phone}
                    />
                    <div className="flex flex-col gap-2 sm:col-span-2">
                        <h1 className="text-sm text-gray-500">Select your country</h1>
                        <Autocomplete
                            name="country"
                            label="Select a country"
                            radius="none"
                            isClearable={false}
                            className='max-w-sm'
                            selectedKey={country || undefined}
                            onSelectionChange={onSelectionChange}
                            isInvalid={!!formErrors.country}
                            errorMessage={formErrors.country}
                        >
                            {!isLoading &&
                            countries?.map((country: string) => (
                                <AutocompleteItem key={country} value={country}>
                                    {country}
                                </AutocompleteItem>
                            ))}
                        </Autocomplete>
                    </div>
                </div>

                <Divider className="my-8" />

                {/* Travel Preferences */}
                <div className="space-y-8">
                    <CheckboxGroup 
                        name="dreamDestination" 
                        orientation='horizontal' 
                        label="Dream Destination" 
                        className="space-y-2"
                    >
                        {selectDestinations.map((dest) => (
                            <Checkbox key={dest.value} value={dest.value}>
                                {dest.label}
                            </Checkbox>
                        ))}
                    </CheckboxGroup>

                    {/* Date Selection with Fixed/Not Fixed option */}
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <FaCalendarAlt className="text-primary text-xl" />
                            <span className="font-medium">Travel Dates</span>
                        </div>
                        
                        <div className="mb-4 flex items-center gap-3">
                            <Switch 
                                name="isDateFixed"
                                isSelected={isDateFixed}
                                onValueChange={setIsDateFixed}
                                size="sm"
                                color="primary"
                            />
                            <span className="text-sm text-gray-700">
                                {isDateFixed ? "Fixed Dates" : "Flexible Dates"}
                            </span>
                        </div>

                        {isDateFixed ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    name="arrival"
                                    label="Arrival"
                                    type="date"
                                    variant="bordered"
                                    className="hover:border-primary"
                                    required={isDateFixed}
                                    startContent={<FaCalendar className="text-primary" />}
                                    isInvalid={!!formErrors.dates}
                                />
                                <Input
                                    name="return"
                                    label="Return"
                                    type="date"
                                    variant="bordered"
                                    className="hover:border-primary"
                                    required={isDateFixed}
                                    startContent={<FaCalendar className="text-primary" />}
                                    isInvalid={!!formErrors.dates}
                                    errorMessage={formErrors.dates}
                                />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Select
                                    name="preferredMonth"
                                    label="Preferred Month"
                                    placeholder="Select month"
                                    variant="bordered"
                                    className="hover:border-primary"
                                >
                                    {months.map(month => (
                                        <SelectItem key={month.value} value={month.value}>
                                            {month.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Input
                                    name="approximateDays"
                                    label="Approximate Days"
                                    type="number"
                                    min="1"
                                    placeholder="How many days?"
                                    variant="bordered"
                                    className="hover:border-primary"
                                    disabled={isDateFixed}
                                />
                            </div>
                        )}
                    </div>

                    {/* Number of Days */}
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <FaCalendar className="text-primary text-xl" />
                            <span className="font-medium">Duration of Travel</span>
                        </div>
                        <Input
                            name="travelDuration"
                            label="Number of Days"
                            type="number"
                            min="1"
                            placeholder="How many days?"
                            variant="bordered"
                            className="hover:border-primary w-full md:w-1/2"
                            required
                            isInvalid={!!formErrors.travelDuration}
                            errorMessage={formErrors.travelDuration}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <FaUsers className="text-primary text-xl" />
                                <span className="font-medium">Travelers</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    name="adults"
                                    label="Adults"
                                    type="number"
                                    min="1"
                                    variant="bordered"
                                    className="hover:border-primary"
                                    required
                                    isInvalid={!!formErrors.adults}
                                    errorMessage={formErrors.adults}
                                />
                                <Input
                                    name="children"
                                    label="Children"
                                    type="number"
                                    min="0"
                                    variant="bordered"
                                    className="hover:border-primary"
                                    value={childrenCount.toString()}
                                    onChange={handleChildrenChange}
                                />
                            </div>
                            {showChildPolicy && (
                                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                    <h4 className="text-sm font-medium text-primary mb-2">Children Policy</h4>
                                    <ul className="text-sm text-gray-700 space-y-1 pl-5 list-disc">
                                        <li>Children above 10 years: Full price</li>
                                        <li>Children 5-10 years: 50% off</li>
                                        <li>Children below 5 years: Free</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <FaCrown className="text-primary text-xl" />
                                <span className="font-medium">Experience Level</span>
                            </div>
                            <Select
                                name="experienceLevel"
                                placeholder="Select luxury level"
                                variant="bordered"
                                className="hover:border-primary"
                            >
                                <SelectItem key={"premium"} value="premium">Premium</SelectItem>
                                <SelectItem key={"luxury"} value="luxury">Luxury</SelectItem>
                                <SelectItem key={"ultra"} value="ultra">Ultra-Luxury</SelectItem>
                            </Select>
                        </div>
                    </div>

                    {/* Hotel Standard */}
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <FaHotel className="text-primary text-xl" />
                            <span className="font-medium">Hotel Preferences</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <RadioGroup name="hotelStandard" label="Hotel Standard">
                                <Radio value="4 Star">4 Star</Radio>
                                <Radio value="5 Star">5 Star</Radio>
                                <Radio value="Above 5 Star">Above 5 Star</Radio>
                            </RadioGroup>
                            
                            <RadioGroup name="hotelBrandPreference" label="Hotel Brand Preference">
                                <Radio value="international">International Hotel Brands</Radio>
                                <Radio value="local">Local Hotel Brands</Radio>
                                <Radio value="mixed">Mix of Both</Radio>
                            </RadioGroup>
                        </div>
                    </div>

                    {/* Vehicle Standard */}
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <FaCar className="text-primary text-xl" />
                            <span className="font-medium">Transportation Preferences</span>
                        </div>
                        <CheckboxGroup name="transportationPreferences" label="Preferred Transportation Options" orientation="horizontal">
                            {vehicleOptions.map(option => (
                                <Checkbox key={option.value} value={option.value}>
                                    {option.label}
                                </Checkbox>
                            ))}
                        </CheckboxGroup>
                    </div>

                    {/* Meal Plan */}
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <FaUtensils className="text-primary text-xl" />
                            <span className="font-medium">Meal Preferences</span>
                        </div>
                        <RadioGroup name="mealPlan" label="Meal Plan">
                            <Radio value="all-inclusive">All Inclusive + Soft drinks</Radio>
                            <Radio value="half-board">Half Board (Breakfast + Dinner/Lunch)</Radio>
                            <Radio value="bed-breakfast">Bed & Breakfast Only</Radio>
                        </RadioGroup>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <FaDollarSign className="text-primary text-xl" />
                            <span className="font-medium">Budget Range</span>
                        </div>
                        <Slider 
                            name="budget"
                            label="Budget"
                            step={1000}
                            maxValue={50000}
                            minValue={500}
                            value={budgetValue}
                            onChange={handleBudgetChange}
                            className="max-w-md"
                            color="primary"
                        />
                        <div className="text-sm text-gray-600 mt-2">
                            Budget: ${budgetValue[0].toLocaleString()} - ${budgetValue[1].toLocaleString()}
                        </div>
                    </div>

                    <Textarea
                        name="dreamExperience"
                        label="Your Dream Experience"
                        placeholder="Tell us about your perfect journey..."
                        variant="bordered"
                        className="hover:border-primary"
                        rows={4}
                    />
                </div>

                <div className="space-y-6">
                    <Checkbox name="marketingConsent" className="text-primary">
                        I agree to receive personalized travel recommendations
                    </Checkbox>

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary rounded-sm text-white hover:bg-primary/90"
                        endContent={<FaPaperPlane />}
                        disabled={isPending}
                    >
                        {isPending ? "Sending Request..." : "Begin Your Journey"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default TailorForm;