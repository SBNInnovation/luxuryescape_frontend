"use client"
import React from 'react';
import {
  Input,
  Slider,
  Button,
  Checkbox,
  Select,
  SelectItem,
  Textarea,
  Divider,
} from "@nextui-org/react";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaCalendar,
  FaDollarSign,
  FaPaperPlane,
  FaGlobe,
  FaPlane,
  FaCompass,
  FaCocktail,
  FaCrown
} from "react-icons/fa";
import { antic } from '@/utility/font';
import Image from 'next/image';
import WhyLuxury from '../Destionation/SinglePackage/WhyLuxury';

    const Tailor = () => {
    const destinations = [
        { label: "Nepal", value: "Nepal", image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { label: "Bhutan", value: "Bhutan", image: "https://images.unsplash.com/photo-1729174518995-8c4546b3dd53?q=80&w=2840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { label: "Tibet", value: "Tibet", image: "https://images.unsplash.com/photo-1709866535864-93035b6208e8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ];


    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section with Dynamic Background */}
        <div className="relative h-[500px] overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1446822775955-c34f483b410b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Background"
                className=" w-full h-full object-cover"
                height={1000}
                width={1000}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Text Content */}
            <div className=" max-w-7xl mx-auto px-8 h-full flex flex-col justify-center absolute inset-0">
                <h1 className={`${antic.className} text-6xl font-bold mb-6 text-white leading-tight`}>
                    Craft Your <span className="text-primary">Perfect</span> Journey
                </h1>
                <p className="text-2xl text-white/90 max-w-2xl">
                    Where luxury meets authenticity. Experience handcrafted journeys designed exclusively for the discerning traveler.
                </p>
                <div className="mt-12 flex gap-4">
                    <Button
                        size="lg"
                        variant="bordered"
                        className="text-white border-white hover:bg-white/10"
                        startContent={<FaPlane />}
                    >
                        View Destinations
                    </Button>
                </div>
            </div>
        </div>



        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-8 py-16 relative -mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                {/* Contact Card */}
                <div className="bg-white p-8 rounded-3xl shadow-xl backdrop-blur-lg bg-white/90">
                    <h3 className={`${antic.className} text-2xl font-semibold mb-6 text-primary`}>
                    Luxury Concierge
                    </h3>
                    <div className="space-y-2">
                    {[
                        { icon: <FaPhone />, text: "+1 (555) 123-4567" },
                        { icon: <FaEnvelope />, text: "luxury@travel.com" },
                        { icon: <FaMapMarkerAlt />, text: "123 Luxury Ave, NY" },
                        { icon: <FaClock />, text: "24/7 Concierge Service" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 group hover:bg-gray-50 p-3 rounded-xl transition-all">
                        <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-all">
                            <span className="text-primary text-lg">{item.icon}</span>
                        </div>
                        <span className="text-gray-700">{item.text}</span>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Featured Destinations */}
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                    <h3 className={`${antic.className} text-2xl font-semibold mb-6 text-primary`}>
                    Featured Escapes
                    </h3>
                    <div className="space-y-4">
                    {destinations.slice(0, 3).map((dest, index) => (
                        <div key={index} className="group cursor-pointer">
                        <div className="relative h-24 rounded-2xl overflow-hidden mb-3">
                            <Image
                            src={dest.image} 
                            alt={dest.label}
                            height={1000}
                            width={1000}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                            <span className="font-medium">{dest.label}</span>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h2 className={`${antic.className} text-3xl font-semibold mb-2 text-primary`}>
                    Design Your Experience
                </h2>
                <p className="text-gray-600 mb-8">Craft your perfect journey with our luxury travel experts</p>
                
                <form className="space-y-8">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="First Name"
                        placeholder="Enter your first name"
                        variant="bordered"
                        className="hover:border-primary"
                        required
                    />
                    <Input
                        label="Last Name"
                        placeholder="Enter your last name"
                        variant="bordered"
                        className="hover:border-primary"
                        required
                    />
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        variant="bordered"
                        className="hover:border-primary"
                        required
                    />
                    <Input
                        label="Phone"
                        placeholder="Enter your phone number"
                        variant="bordered"
                        className="hover:border-primary"
                        required
                    />
                    </div>

                    <Divider className="my-8" />

                    {/* Travel Preferences */}
                    <div className="space-y-8">
                    <Select
                        label="Dream Destination"
                        placeholder="Where would you like to go?"
                        variant="bordered"
                        className="hover:border-primary"
                    >
                        {destinations.map((dest) => (
                        <SelectItem key={dest.value} value={dest.value}>
                            {dest.label}
                        </SelectItem>
                        ))}
                    </Select>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                        <Input
                            label="Departure"
                            type="date"
                            variant="bordered"
                            className="hover:border-primary"
                            required
                            startContent={<FaCalendar className="text-primary" />}
                        />
                        </div>
                        <div className="space-y-2">
                        <Input
                            label="Return"
                            type="date"
                            variant="bordered"
                            className="hover:border-primary"
                            required
                            startContent={<FaCalendar className="text-primary" />}
                        />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <FaUsers className="text-primary text-xl" />
                            <span className="font-medium">Travelers</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                            label="Adults"
                            type="number"
                            min="1"
                            variant="bordered"
                            className="hover:border-primary"
                            required
                            />
                            <Input
                            label="Children"
                            type="number"
                            min="0"
                            variant="bordered"
                            className="hover:border-primary"
                            required
                            />
                        </div>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <FaCrown className="text-primary text-xl" />
                            <span className="font-medium">Experience Level</span>
                        </div>
                        <Select
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

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                        <FaDollarSign className="text-primary text-xl" />
                        <span className="font-medium">Investment Range</span>
                        </div>
                        <Slider 
                        label="Budget"
                        step={1000}
                        maxValue={50000}
                        minValue={5000}
                        defaultValue={10000}
                        className="max-w-md"
                        color="primary"
                        />
                    </div>

                    <Textarea
                        label="Your Dream Experience"
                        placeholder="Tell us about your perfect journey..."
                        variant="bordered"
                        className="hover:border-primary"
                        rows={4}
                    />
                    </div>

                    <div className="space-y-6">
                    <Checkbox className="text-primary">
                        I agree to receive personalized travel recommendations
                    </Checkbox>

                    <Button
                        size="lg"
                        className="w-full bg-primary text-white hover:bg-primary/90"
                        endContent={<FaPaperPlane />}
                    >
                        Begin Your Journey
                    </Button>
                    </div>
                </form>
                </div>
            </div>
            </div>
            <WhyLuxury/>
        </div>
        </div>
    );
    };

export default Tailor;