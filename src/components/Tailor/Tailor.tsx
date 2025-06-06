"use client"
import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPlane,
} from "react-icons/fa";
import { antic } from '@/utility/font';
import Image from 'next/image';
import TailorForm from './TailorForm';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getContactData } from '@/services/form';

const Tailor = () => {
    const destinations = [
        { label: "Nepal", value: "Nepal", image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { label: "Bhutan", value: "Bhutan", image: "https://images.unsplash.com/photo-1729174518995-8c4546b3dd53?q=80&w=2840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { label: "Tibet", value: "Tibet", image: "https://images.unsplash.com/photo-1709866535864-93035b6208e8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ];

    const {data:contactData}=useQuery({
            queryKey:["contact"],
            queryFn:()=>getContactData()
        })

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
                <h1 className={`${antic.className} lg:text-6xl text-3xl font-bold mb-6 text-white leading-tight`}>
                    Craft Your <span className="text-primary">Perfect</span> Journey
                </h1>
                <p className="lg:text-2xl text-lg text-white/90 max-w-2xl">
                    Where luxury meets authenticity. Experience handcrafted journeys designed exclusively for the discerning traveler.
                </p>
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
                        { icon: <FaPhone />, text: `${contactData?.data?.contactNumbers?.join(", ")}` || "9843218281"},
                        { icon: <FaEnvelope />, text: `${contactData?.data?.contactEmails?.join(", ")}` || "goingnepal@gmail.com" },
                        { icon: <FaMapMarkerAlt />, text: `${contactData?.data?.location}`|| "Uttardhoka, Kathmandu"},
                        { icon: <FaClock />, text: "24/7 Concierge Service" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 group hover:bg-gray-50 p-3 rounded-xl transition-all">
                        <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-all">
                            <span className="text-primary text-lg">{item.icon}</span>
                        </div>
                        <span className="text-gray-700 text-sm">{item.text}</span>
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
                        <Link key={index} href={`/destinations/${dest.label.toLocaleLowerCase()}`}>
                                            <div className="group cursor-pointer">
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
                        </Link>
                    ))}
                    </div>
                </div>
                </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-2">
                <TailorForm />
            </div>
            </div>
        </div>
        </div>
    );
};

export default Tailor;