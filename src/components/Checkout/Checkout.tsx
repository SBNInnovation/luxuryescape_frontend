"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FiUser, FiCalendar, FiMinus, FiPlus } from 'react-icons/fi';
import { MdMail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
import { BookingDetails, clearBookingDetails, getBookingDetails } from '@/utility/BookingStorageHandler';
import { useMutation } from '@tanstack/react-query';
import Loader from '@/shared/Loader';
import { toast } from 'sonner';
import { createBookingCheckout } from '@/services/checkout';
import { DatePicker } from '@nextui-org/react';
import { CalendarDate } from '@internationalized/date';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  // State for selected date
  const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(null);

  const {mutate:checkoutMutation}=useMutation({
    mutationFn:(data:any)=>createBookingCheckout(data), //eslint-disable-line @typescript-eslint/no-explicit-any
    onSuccess:()=>{
      toast.success('Your booking has been submitted successfully.')
      
    },
    onError:()=>{
      toast.error('Failed to submit your booking.')
    } 
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
    const loadBookingDetails = () => {
      const details = getBookingDetails();
      setBookingDetails(details);
      if (details && details.bookingDate) {
        const bookingDate = new Date(details.bookingDate);
        setSelectedDate(dateToCalendarDate(bookingDate));
      }
      setLoading(false);
    };
    
    setTimeout(loadBookingDetails, 0);
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

  if (loading) {
    return (
      <Loader/>
    );
  }

  if (!bookingDetails) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card>
          <CardBody>
            <p className="mb-4">No booking details found. Please return to the trek or tour page and try booking again.</p>
            <Button color="primary" onPress={() => router.push('/')}>Return to Home</Button>
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleQuantityChange = (increment: boolean) => {
    if (!bookingDetails) return;
    
    let newQuantity = increment ? bookingDetails.quantity! + 1 : bookingDetails.quantity! - 1;
    
    newQuantity = Math.max(1, newQuantity);
    
    const updatedDetails = {
      ...bookingDetails,
      quantity: newQuantity,
      totalPrice: newQuantity * bookingDetails.price!
    };
    
    setBookingDetails(updatedDetails);
  };

  // Handle date change from DatePicker
  const handleDateChange = (date: CalendarDate | null) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const jsDate = selectedDate ? calendarDateToDate(selectedDate) : null;
    
    // Prepare data for the POST request, excluding quantity
    const checkoutData = {
      ...formData,
      adventureName: bookingDetails.adventureName,
      adventureType: bookingDetails.adventureType,
      adventureId: bookingDetails.adventureId,
      adventureSlug: bookingDetails.adventureSlug,
      totalPrice: bookingDetails.totalPrice,
      bookingDate: jsDate?.toISOString()
    };
    
    checkoutMutation(checkoutData);
    setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',       
      })
      clearBookingDetails();
      router.push('/')
  };

  // Get today's date as CalendarDate for minDate
  const today = dateToCalendarDate(new Date());

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            <Card className='px-4 py-4'>
              <CardHeader className="flex flex-col gap-1">
                <h4 className="text-xl font-bold">Customer Information</h4>
                <p className="text-sm text-gray-500">Please enter your details</p>
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
                  startContent={<CiLocationOn className="text-gray-400" size={16} />}
                />

                <div className="space-y-2">
                  <label className="text-sm font-medium">Booking Date</label>
                  <DatePicker 
                    label="Select your booking date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    minValue={today}
                    classNames={{
                      base: "w-full",
                      input: "text-small",
                    }}
                    startContent={<FiCalendar className="text-gray-400" size={16} />}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Number of Persons</label>
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
                      <span className="text-lg font-medium">{bookingDetails.quantity}</span>
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
              </CardBody>
            </Card>
          </div>

          <div>
            <Card className="sticky top-8 px-4 py-4">
              <CardHeader className="flex flex-col gap-1">
                <h4 className="text-xl font-bold">Order Summary</h4>
                <p className="text-sm text-gray-500">Review your booking details</p>
              </CardHeader>
              <CardBody className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{bookingDetails.adventureName}</h3>
                  <p className="text-gray-600">Booking Type: {bookingDetails.adventureType === 'Trek' ? 'Trek' : 'Tour'}</p>
                  <p className="text-gray-600">Booking Date: {bookingDetails.bookingDate ? formatDate(bookingDetails.bookingDate) : 'Select a date'}</p>
                  <p className="text-gray-600">Number of Persons: {bookingDetails.quantity}</p>
                </div>

                <Divider />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base Price ({bookingDetails.quantity} x ${bookingDetails.price})</span>
                    <span>${bookingDetails.quantity!>1? bookingDetails.totalPrice:bookingDetails.price}</span>
                  </div>
                </div>

                <Divider />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${bookingDetails.quantity!>1? bookingDetails.totalPrice:bookingDetails.price}</span>
                </div>

                <Button 
                  color="primary"
                  size="lg"
                  className="w-full rounded-sm"
                  type="submit"
                >
                  Pay ${bookingDetails.quantity!>1? bookingDetails.totalPrice:bookingDetails.price}
                </Button>
              </CardBody>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
}