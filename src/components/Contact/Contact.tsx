"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Tabs, Tab, Input, Textarea, Button, Checkbox, Divider } from "@nextui-org/react";
import Image from "next/image";
import SharedTitle from "@/shared/SharedTitle";
import { antic } from "@/utility/font";
import { useMutation } from "@tanstack/react-query";
import { postContact } from "@/services/form";
import { toast } from "sonner";

// Interface for form values
interface FormValues {
    name: string;
    email: string;
    country: string;
    number: string;
    message: string;
    privacyPolicy: boolean;
}

// Interface for form errors
interface FormErrors {
    name: boolean;
    email: boolean;
    country: boolean;
    number: boolean;
    message: boolean;
    privacyPolicy: boolean;
}

// Interface for stats details
interface DetailItem {
    title: string;
    subtitle: string;
}

// Contact data interface for API request
interface ContactData {
    name: string;
    email: string;
    country: string;
    number: string;
    message: string;
}

const Contact: React.FC = () => {
    // Form state
    const [formValues, setFormValues] = useState<FormValues>({
        name: "",
        email: "",
        country: "",
        number: "",
        message: "",
        privacyPolicy: false
    });

    // Error state
    const [errors, setErrors] = useState<FormErrors>({
        name: false,
        email: false,
        country: false,
        number: false,
        message: false,
        privacyPolicy: false
    });

    const details: DetailItem[] = [
        {
            title: "Tours",
            subtitle: "500"
        },
        {
            title: "Years",
            subtitle: "15"
        },
        {
            title: "Countries",
            subtitle: "3"
        },
        {
            title: "Customers",
            subtitle: "1000"
        }
    ];

    const { mutate: postContactMutation, isPending } = useMutation({
        mutationFn: (data: ContactData) => postContact(data),
        onSuccess: () => {
            toast.success("Message sent successfully");
            // Reset form after successful submission
            setFormValues({
                name: "",
                email: "",
                country: "",
                number: "",
                message: "",
                privacyPolicy: false
            });
        },
        onError: (error: unknown) => {
            toast.error("Failed to send message. Please try again.");
            console.error("Contact form submission error:", error);
        }
    });

    // Handle input changes
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormValues({
            ...formValues,
            [name]: type === "checkbox" ? checked : value
        });

        // Clear error for this field when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors({
                ...errors,
                [name]: false
            });
        }
    };

    // Handle checkbox change specifically
    const handleCheckboxChange = (isSelected: boolean) => {
        setFormValues({
            ...formValues,
            privacyPolicy: isSelected
        });
        
        // Clear error for this field when user changes selection
        if (errors.privacyPolicy) {
            setErrors({
                ...errors,
                privacyPolicy: false
            });
        }
    };

    // Validate form
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {
            name: !formValues.name.trim(),
            email: !formValues.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email),
            country: !formValues.country.trim(),
            number: !formValues.number.trim(),
            message: !formValues.message.trim(),
            privacyPolicy: !formValues.privacyPolicy
        };

        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Submit the form
            const contactData: ContactData = {
                name: formValues.name,
                email: formValues.email,
                country: formValues.country,
                number: formValues.number,
                message: formValues.message
            };
            
            postContactMutation(contactData);
        } else {
            toast.error("Please fill in all required fields correctly");
        }
    };

    return (
        <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:pl-24 lg:pr-8">
            {/* Flex Container for Two Divs */}
            <div className="w-full relative mx-auto py-8 lg:py-12 mt-6 lg:mt-12 flex flex-col lg:flex-row gap-8">
                {/* Left Div with Shared Title and Image */}
                <div className="flex flex-col w-full lg:w-3/5">
                    <SharedTitle title="Need a vacation ?" subtitle="Contact us" />
                    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] mt-6 lg:mt-12">
                        <Image
                            src="https://images.unsplash.com/photo-1523496922380-91d5afba98a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5fGVufDB8MHwwfHx8Mg%3D%3D"
                            alt="Vacation"
                            fill
                            className="rounded-none shadow-lg object-cover"
                            quality={100}
                        />
                    </div>
                </div>

                {/* Right Div with Tabs */}
                <div className="w-full lg:w-1/2 relative lg:-left-24 lg:-top-8 mt-8 lg:mt-0">
                    {/* NextUI Tabs */}
                    <Tabs
                        aria-label="Contact Options"
                        className="mb-4"
                        color="primary"
                        variant="underlined"
                    >
                        <Tab key="form" title="Contact Form" className="text-primary">
                            <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    {/* Name Field */}
                                    <Input
                                        type="text"
                                        name="name"
                                        label="Your Name"
                                        placeholder="Enter your name"
                                        fullWidth
                                        value={formValues.name}
                                        onChange={handleInputChange}
                                        isInvalid={errors.name}
                                        errorMessage={errors.name ? "Name is required" : ""}
                                        required
                                    />

                                    {/* Email Field */}
                                    <Input
                                        type="email"
                                        name="email"
                                        label="Your Email"
                                        placeholder="Enter your email"
                                        fullWidth
                                        value={formValues.email}
                                        onChange={handleInputChange}
                                        isInvalid={errors.email}
                                        errorMessage={errors.email ? "Valid email is required" : ""}
                                        required
                                    />

                                    {/* Country Field */}
                                    <Input
                                        type="text"
                                        name="country"
                                        label="Country"
                                        placeholder="Enter your country"
                                        fullWidth
                                        value={formValues.country}
                                        onChange={handleInputChange}
                                        isInvalid={errors.country}
                                        errorMessage={errors.country ? "Country is required" : ""}
                                        required
                                    />

                                    {/* Phone Number Field - Fixed name attribute */}
                                    <Input
                                        type="tel"
                                        name="number"
                                        label="Phone Number"
                                        placeholder="Enter your phone number"
                                        fullWidth
                                        value={formValues.number}
                                        onChange={handleInputChange}
                                        isInvalid={errors.number}
                                        errorMessage={errors.number ? "Phone number is required" : ""}
                                        required
                                    />

                                    {/* Message Field */}
                                    <Textarea
                                        name="message"
                                        label="Your Message"
                                        placeholder="Enter your message"
                                        fullWidth
                                        value={formValues.message}
                                        onChange={handleInputChange}
                                        isInvalid={errors.message}
                                        errorMessage={errors.message ? "Message is required" : ""}
                                        required
                                    />

                                    {/* Privacy Policy Checkbox */}
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="privacy-policy"
                                            name="privacyPolicy"
                                            color="primary"
                                            isSelected={formValues.privacyPolicy}
                                            onValueChange={handleCheckboxChange}
                                            isInvalid={errors.privacyPolicy}
                                            required
                                        >
                                            <span className="text-sm text-gray-700">
                                                I agree to the company's privacy policy
                                            </span>
                                        </Checkbox>
                                    </div>
                                    {errors.privacyPolicy && (
                                        <p className="text-xs text-danger">You must agree to the privacy policy</p>
                                    )}

                                    {/* Submit Button */}
                                    <Button 
                                        type="submit" 
                                        color="primary" 
                                        className="w-full rounded-sm mt-8"
                                        isLoading={isPending}
                                        disabled={isPending}
                                    >
                                        {isPending ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>
                            </div>
                        </Tab>

                        <Tab key="details" title="Contact Details" className="text-primary">
                            <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold">Our Office</h3>
                                    <p>Kathmandu Metropolitan-2 Uttardhoka, Lazimpat, Nepal</p>
                                    <p>Email: info@goingnepal.com, goingnepal@gmail.com, ceo@goingnepal.com</p>
                                    <p>Phone: +977 1-4519145 / 01-4517230 / +977 9851032961</p>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>

            {/* Flex Grid for Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12 lg:my-16 lg:mt-28 relative px-4 lg:pr-12">
                {details.map((detail, index) => (
                    <div
                        key={detail.title}
                        className="p-6 lg:p-8 relative group border-b sm:border-b-0 sm:border-r last:border-r-0 border-gray-200"
                    >
                        {/* Background Number (Subtitle) */}
                        <h1
                            className={`text-7xl sm:text-8xl lg:text-9xl absolute inset-0 text-gray-300 flex items-center justify-center ${antic.className}`}
                        >
                            {detail.subtitle}
                        </h1>

                        {/* Title */}
                        <h1
                            className={`${antic.className} text-gray text-xl sm:text-2xl font-light absolute inset-0 flex items-center justify-center z-10`}
                        >
                            {detail.title}
                        </h1>

                        {/* Removed divider lines as we're using borders instead */}
                    </div>
                ))}
            </div>

            <div className="w-full h-[50vh] sm:h-[60vh] lg:h-[90vh] my-12 lg:my-24 px-4 lg:pr-12">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9927385581045!2d85.32190857546776!3d27.717510476176777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19da434dc251%3A0x9f38fff86882064b!2sGoing%20Nepal%20Pvt%20Ltd%2C%20Tailor-Made%20Luxury%20DMC!5e0!3m2!1sen!2snp!4v1728413039018!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    style={{ border: "none", outline: "none" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
};

export default Contact;