'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import { FiUser, FiCalendar, FiMinus, FiPlus } from 'react-icons/fi';
import { MdMail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
import {
  BookingDetails,
  clearBookingDetails,
  getBookingDetails,
} from '@/utility/BookingStorageHandler';
import { useMutation, useQuery } from '@tanstack/react-query';
import Loader from '@/shared/Loader';
import { toast } from 'sonner';
import { createBookingCheckout } from '@/services/checkout';
import {
  Autocomplete,
  AutocompleteItem,
  DatePicker,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { CalendarDate } from '@internationalized/date';

// Define accommodation types based on API response
type AccommodationType =
  | 'Standard'
  | 'Four Star'
  | 'Five Star'
  | 'Premium Five Star';

// Define supplementary room configuration
interface SupplementaryConfig {
  numberOfSupplementaryRooms: number;
  supplementaryRoomType: AccommodationType;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState<string>('');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  // State for selected date
  const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(null);

  // State for accommodation type
  const [accommodationType, setAccommodationType] =
    useState<AccommodationType>('Four Star');

  // State for multiple supplementary room configurations
  const [supplementaryConfigs, setSupplementaryConfigs] = useState<
    SupplementaryConfig[]
  >([]);

  const { data: countries, isLoading: isCountriesLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      return data.map((country: any) => country.name.common);
    },
  });

  const onSelectionChange = (key: React.Key | null) => {
    if (key) {
      setCountry(String(key));
    }
  };

  const { mutate: checkoutMutation } = useMutation({
    mutationFn: (data: any) => createBookingCheckout(data),
    onSuccess: () => {
      toast.success('Your booking has been submitted successfully.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
      });
      clearBookingDetails();
      router.push('/');
    },
    onError: () => {
      toast.error('Failed to submit your booking.');
    },
  });

  const dateToCalendarDate = (date: Date): CalendarDate => {
    return new CalendarDate(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    );
  };

  const calendarDateToDate = (calendarDate: CalendarDate): Date => {
    return new Date(
      calendarDate.year,
      calendarDate.month - 1,
      calendarDate.day
    );
  };

  useEffect(() => {
    const loadBookingDetails = async () => {
      const details = getBookingDetails();
      setBookingDetails(details);

      if (details) {
        if (details.bookingDate) {
          const bookingDate = new Date(details.bookingDate);
          setSelectedDate(dateToCalendarDate(bookingDate));
        }

        // Initialize supplementary configs as empty
        setSupplementaryConfigs([]);
      }
      setLoading(false);
    };

    loadBookingDetails();
  }, []);

  useEffect(() => {
    if (bookingDetails && selectedDate) {
      const jsDate = calendarDateToDate(selectedDate);
      const updatedDetails = {
        ...bookingDetails,
        bookingDate: jsDate.toISOString(),
      };
      setBookingDetails(updatedDetails);
    }
  }, [selectedDate]);

  // Get accommodation upgrade cost per person
  const getAccommodationUpgradeCost = (): number => {
    if (!bookingDetails) return 0;

    switch (accommodationType) {
      case 'Four Star':
        return 0;
      case 'Five Star':
        return bookingDetails.standardFiveStar;
      case 'Premium Five Star':
        return bookingDetails.standardPremiumFiveStar;
      default:
        return bookingDetails.standardFourStar;
    }
  };

  // Get supplementary room cost for all configurations
  const getSupplementaryRoomCost = (): number => {
    if (!bookingDetails || supplementaryConfigs.length === 0) return 0;

    let totalCost = 0;
    supplementaryConfigs.forEach((config) => {
      let costPerRoom = 0;
      switch (config.supplementaryRoomType) {
        case 'Four Star':
          costPerRoom = bookingDetails.singleSupplementaryFourStar;
          break;
        case 'Five Star':
          costPerRoom = bookingDetails.singleSupplementaryFiveStar;
          break;
        case 'Premium Five Star':
          costPerRoom = bookingDetails.singleSupplementaryPremiumFiveStar;
          break;
        default:
          costPerRoom = 0;
      }
      totalCost += costPerRoom * config.numberOfSupplementaryRooms;
    });

    return totalCost;
  };

  // Get solo traveler cost
  const getSoloTravelerCost = (): number => {
    if (!bookingDetails || bookingDetails.quantity !== 1) return 0;

    switch (accommodationType) {
      case 'Four Star':
        return bookingDetails.soloFourStar;
      case 'Five Star':
        return bookingDetails.soloFiveStar;
      case 'Premium Five Star':
        return bookingDetails.soloPremiumFiveStar;
      default:
        return bookingDetails.solo;
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!bookingDetails) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card>
          <CardBody>
            <p className="mb-4">
              No booking details found. Please return to the trek or tour page
              and try booking again.
            </p>
            <Button color="primary" onPress={() => router.push('/')}>
              Return to Home
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch (error) {
      throw error;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!selectedDate) {
      toast.error('Please select a booking date');
      return false;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleQuantityChange = (increment: boolean) => {
    if (!bookingDetails) return;

    let newQuantity = increment
      ? bookingDetails.quantity! + 1
      : bookingDetails.quantity! - 1;

    newQuantity = Math.max(1, newQuantity);

    const updatedDetails = {
      ...bookingDetails,
      quantity: newQuantity,
      totalPrice: newQuantity * bookingDetails.price!,
    };

    setBookingDetails(updatedDetails);

    // Reset supplementary configs when quantity changes
    setSupplementaryConfigs([]);
  };

  // Handle date change from DatePicker
  const handleDateChange = (date: CalendarDate | null) => {
    setSelectedDate(date);
  };

  // Calculate the total price including all upgrades and supplements
  const calculateTotalPrice = (): number => {
    if (!bookingDetails) return 0;

    // Base price
    let total = bookingDetails.quantity! * bookingDetails.price!;

    // Add accommodation upgrade costs (per person)
    total += bookingDetails.quantity! * getAccommodationUpgradeCost();

    // Add supplementary room costs
    total += getSupplementaryRoomCost();

    // Add solo traveler cost if applicable
    total += getSoloTravelerCost();

    return total;
  };

  // Handle supplementary room number change for a specific index
  const handleSupplementaryRoomChange = (index: number, value: string) => {
    const numberOfRooms = parseInt(value);
    const newConfigs = [...supplementaryConfigs];
    newConfigs[index] = {
      ...newConfigs[index],
      numberOfSupplementaryRooms: numberOfRooms,
    };
    setSupplementaryConfigs(newConfigs);
  };

  // Handle supplementary room type change for a specific index
  const handleSupplementaryRoomTypeChange = (
    index: number,
    value: AccommodationType
  ) => {
    const newConfigs = [...supplementaryConfigs];
    newConfigs[index] = {
      ...newConfigs[index],
      supplementaryRoomType: value,
    };
    setSupplementaryConfigs(newConfigs);
  };

  // Calculate remaining people after accounting for current supplementary rooms
  const getRemainingPeople = () => {
    if (!bookingDetails) return 0;
    const totalSupplementaryRooms = supplementaryConfigs.reduce(
      (sum, config) => sum + config.numberOfSupplementaryRooms,
      0
    );
    return bookingDetails.quantity! - totalSupplementaryRooms;
  };

  // Generate supplementary room options based on remaining people
  const getSupplementaryRoomOptions = (remainingPeople: number) => {
    if (!bookingDetails || remainingPeople < 1) return [];

    const options = [];
    for (let i = 0; i <= remainingPeople; i++) {
      options.push({
        value: i.toString(),
        label:
          i === 0
            ? 'No supplementary rooms'
            : `${i} supplementary room${i > 1 ? 's' : ''}`,
      });
    }
    return options;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const jsDate = selectedDate ? calendarDateToDate(selectedDate) : null;

    const finalTotalPrice = calculateTotalPrice();

    // Prepare data for the POST request
    const checkoutData = {
      ...formData,
      adventureName: bookingDetails.adventureName,
      adventureType: bookingDetails.adventureType,
      adventureId: bookingDetails.adventureId,
      adventureSlug: bookingDetails.adventureSlug,
      totalPrice: finalTotalPrice,
      numberOfPerson: bookingDetails.quantity,
      country: country,
      bookingDate: jsDate?.toISOString().split('T')[0],
      accommodationType: accommodationType,
      supplementaryConfigs: supplementaryConfigs, // Send all configurations
    };

    if (!country || country === '') {
      toast.error('Please select a country');
      return;
    }

    checkoutMutation(checkoutData);
  };

  const today = dateToCalendarDate(new Date());

  // Render supplementary room selection recursively
  const renderSupplementarySection = (
    index: number,
    remainingPeople: number
  ) => {
    if (remainingPeople < 1) return null;

    const currentConfig = supplementaryConfigs[index] || {
      numberOfSupplementaryRooms: 0,
      supplementaryRoomType: 'Four Star',
    };

    return (
      <div key={index} className="space-y-3 border-l-2 pl-4 ml-2">
        <Select
          label={`Number of supplementary rooms (Set ${index + 1})`}
          placeholder="Select number of supplementary rooms"
          selectedKeys={[currentConfig.numberOfSupplementaryRooms.toString()]}
          onSelectionChange={(keys) => {
            const selectedKey = Array.from(keys)[0] as string;
            if (selectedKey) {
              handleSupplementaryRoomChange(index, selectedKey);
            }
          }}
          className="max-w-sm"
        >
          {getSupplementaryRoomOptions(remainingPeople).map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        {currentConfig.numberOfSupplementaryRooms > 0 && (
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Supplementary Room Type (Set {index + 1})
            </label>
            <RadioGroup
              value={currentConfig.supplementaryRoomType}
              onValueChange={(value) =>
                handleSupplementaryRoomTypeChange(
                  index,
                  value as AccommodationType
                )
              }
            >
              <Radio value="Four Star">
                Four Star (${bookingDetails?.singleSupplementaryFourStar || 0})
              </Radio>
              <Radio value="Five Star">
                Five Star (${bookingDetails?.singleSupplementaryFiveStar || 0})
              </Radio>
              <Radio value="Premium Five Star">
                Premium Five Star ($
                {bookingDetails?.singleSupplementaryPremiumFiveStar || 0})
              </Radio>
            </RadioGroup>

            <p className="text-xs text-gray-500">
              Cost for this set: $
              {(bookingDetails?.singleSupplementaryFourStar || 0) *
                (currentConfig.supplementaryRoomType === 'Four Star'
                  ? currentConfig.numberOfSupplementaryRooms
                  : 0) +
                (bookingDetails?.singleSupplementaryFiveStar || 0) *
                  (currentConfig.supplementaryRoomType === 'Five Star'
                    ? currentConfig.numberOfSupplementaryRooms
                    : 0) +
                (bookingDetails?.singleSupplementaryPremiumFiveStar || 0) *
                  (currentConfig.supplementaryRoomType === 'Premium Five Star'
                    ? currentConfig.numberOfSupplementaryRooms
                    : 0)}
            </p>
          </div>
        )}

        {currentConfig.numberOfSupplementaryRooms > 0 &&
          renderSupplementarySection(
            index + 1,
            remainingPeople - currentConfig.numberOfSupplementaryRooms
          )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            <Card className="px-4 py-4">
              <CardHeader className="flex flex-col gap-1">
                <h4 className="text-xl font-bold">Customer Information</h4>
                <p className="text-sm text-gray-500">
                  Please enter your details
                </p>
              </CardHeader>
              <CardBody className="space-y-4">
                <Input
                  label="Full Name"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  errorMessage={errors.fullName}
                  isInvalid={!!errors.fullName}
                  startContent={<FiUser className="text-gray-400" size={16} />}
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  errorMessage={errors.email}
                  isInvalid={!!errors.email}
                  startContent={<MdMail className="text-gray-400" size={16} />}
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  errorMessage={errors.phone}
                  isInvalid={!!errors.phone}
                  startContent={<FaPhone className="text-gray-400" size={16} />}
                />

                <Input
                  label="Address"
                  name="address"
                  placeholder="123 Trek Street"
                  value={formData.address}
                  onChange={handleInputChange}
                  errorMessage={errors.address}
                  isInvalid={!!errors.address}
                  startContent={
                    <CiLocationOn className="text-gray-400" size={16} />
                  }
                />

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <h1 className="text-sm text-gray-500">Select your country</h1>
                  <Autocomplete
                    name="country"
                    label="Select a country"
                    radius="none"
                    isClearable={false}
                    className="max-w-sm"
                    value={country}
                    selectedKey={country || undefined}
                    onSelectionChange={onSelectionChange}
                  >
                    {!isCountriesLoading &&
                      countries?.map((country: string) => (
                        <AutocompleteItem key={country} value={country}>
                          {country}
                        </AutocompleteItem>
                      ))}
                  </Autocomplete>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Booking Date</label>
                  <DatePicker
                    label="Select your booking date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    minValue={today}
                    classNames={{
                      base: 'w-full',
                      input: 'text-small',
                    }}
                    startContent={
                      <FiCalendar className="text-gray-400" size={16} />
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Number of Persons
                  </label>
                  <div className="flex items-center">
                    <Button
                      isIconOnly
                      variant="bordered"
                      aria-label="Decrease quantity"
                      onPress={() => handleQuantityChange(false)}
                      isDisabled={bookingDetails.quantity! <= 1}
                    >
                      <FiMinus size={16} />
                    </Button>
                    <div className="w-16 text-center">
                      <span className="text-lg font-medium">
                        {bookingDetails.quantity}
                      </span>
                    </div>
                    <Button
                      isIconOnly
                      variant="bordered"
                      aria-label="Increase quantity"
                      onPress={() => handleQuantityChange(true)}
                    >
                      <FiPlus size={16} />
                    </Button>
                  </div>
                </div>

                {/* Accommodation Options */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">
                    Accommodation Type
                  </label>
                  <RadioGroup
                    value={accommodationType}
                    onValueChange={(value) =>
                      setAccommodationType(value as AccommodationType)
                    }
                  >
                    <Radio value="Four Star">
                      Four Star (${bookingDetails?.standardFourStar || 0})
                    </Radio>
                    <Radio value="Five Star">
                      Five Star (${bookingDetails?.standardFiveStar || 0})
                    </Radio>
                    <Radio value="Premium Five Star">
                      Premium Five Star ($
                      {bookingDetails?.standardPremiumFiveStar || 0})
                    </Radio>
                  </RadioGroup>
                </div>

                {/* Supplementary Room Selection */}
                {bookingDetails.quantity! >= 2 && (
                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      Supplementary Rooms
                    </label>

                    {bookingDetails.quantity === 3 && (
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-700">
                          <strong>Note:</strong> For 3 people, you can assign
                          supplementary rooms for up to 3 people, with each set
                          having its own room type.
                        </p>
                      </div>
                    )}

                    {bookingDetails.quantity! >= 2 && (
                      <div className="space-y-2">
                        {renderSupplementarySection(
                          0,
                          bookingDetails.quantity!
                        )}
                      </div>
                    )}

                    {supplementaryConfigs.length > 0 && (
                      <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong>Total supplementary room cost:</strong> $
                          {getSupplementaryRoomCost()}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Solo Traveler Information */}
                {bookingDetails.quantity === 1 && (
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-700">
                      <strong>Solo Traveler:</strong> Additional cost of $
                      {getSoloTravelerCost()} applies for single occupancy.
                    </p>
                  </div>
                )}
              </CardBody>
            </Card>
          </div>

          <div>
            <Card className="sticky top-8 px-4 py-4">
              <CardHeader className="flex flex-col gap-1">
                <h4 className="text-xl font-bold">Order Summary</h4>
                <p className="text-sm text-gray-500">
                  Review your booking details
                </p>
              </CardHeader>
              <CardBody className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    {bookingDetails.adventureName}
                  </h3>
                  <p className="text-gray-600">
                    Booking Type:{' '}
                    {bookingDetails.adventureType === 'Trekking'
                      ? 'Trek'
                      : 'Tour'}
                  </p>
                  <p className="text-gray-600">
                    Booking Date:{' '}
                    {bookingDetails.bookingDate
                      ? formatDate(bookingDetails.bookingDate)
                      : 'Select a date'}
                  </p>
                  <p className="text-gray-600">
                    Number of Persons: {bookingDetails.quantity}
                  </p>
                  <p className="text-gray-600">
                    Accommodation: {accommodationType}
                  </p>
                  {supplementaryConfigs.map(
                    (config, index) =>
                      config.numberOfSupplementaryRooms > 0 && (
                        <p key={index} className="text-gray-600">
                          Supplementary Rooms (Set {index + 1}):{' '}
                          {config.numberOfSupplementaryRooms} (
                          {config.supplementaryRoomType})
                        </p>
                      )
                  )}
                </div>

                <Divider />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>
                      Base Price ({bookingDetails.quantity} x $
                      {bookingDetails.price})
                    </span>
                    <span>
                      ${bookingDetails.quantity! * bookingDetails.price!}
                    </span>
                  </div>

                  {accommodationType !== 'Four Star' && (
                    <div className="flex justify-between">
                      <span>
                        {accommodationType} Accommodation (
                        {bookingDetails.quantity} x $
                        {getAccommodationUpgradeCost()})
                      </span>
                      <span>
                        +$
                        {bookingDetails.quantity! *
                          getAccommodationUpgradeCost()}
                      </span>
                    </div>
                  )}

                  {supplementaryConfigs.map(
                    (config, index) =>
                      config.numberOfSupplementaryRooms > 0 && (
                        <div key={index} className="flex justify-between">
                          <span>
                            Supplementary Rooms (Set {index + 1}) (
                            {config.numberOfSupplementaryRooms} x{' '}
                            {config.supplementaryRoomType})
                          </span>
                          <span>
                            +$
                            {(bookingDetails?.singleSupplementaryFourStar ||
                              0) *
                              (config.supplementaryRoomType === 'Four Star'
                                ? config.numberOfSupplementaryRooms
                                : 0) +
                              (bookingDetails?.singleSupplementaryFiveStar ||
                                0) *
                                (config.supplementaryRoomType === 'Five Star'
                                  ? config.numberOfSupplementaryRooms
                                  : 0) +
                              (bookingDetails?.singleSupplementaryPremiumFiveStar ||
                                0) *
                                (config.supplementaryRoomType ===
                                'Premium Five Star'
                                  ? config.numberOfSupplementaryRooms
                                  : 0)}
                          </span>
                        </div>
                      )
                  )}

                  {bookingDetails.quantity === 1 &&
                    getSoloTravelerCost() > 0 && (
                      <div className="flex justify-between">
                        <span>Solo Traveler Supplement</span>
                        <span>+${getSoloTravelerCost()}</span>
                      </div>
                    )}
                </div>

                <Divider />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${calculateTotalPrice()}</span>
                </div>

                <Button
                  color="primary"
                  size="lg"
                  className="w-full rounded-sm"
                  type="submit"
                >
                  Pay ${calculateTotalPrice()}
                </Button>
              </CardBody>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
}
