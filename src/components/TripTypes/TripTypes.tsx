"use client"
import React from 'react';
import {Button} from '@nextui-org/react';
import { antic } from '@/utility/font';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { getTourTypes } from '@/services/tours';
import Loader from '@/shared/Loader';
import Link from 'next/link';

interface Exp{
    tourType:string
    thumbnail:string
    _id:string
}

const TripTypes = () => {

    const destinations = [
        {
        country: "Bhutan",
        description: "Exclusive access to ancient temples and private monastery tours.",
        image: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?auto=format&fit=crop&q=80",
        features: ["Royal Accommodations", "Private Ceremonies", "Elite Access"],
        link:"/destinations/bhutan"
        },
        {
        country: "Nepal",
        description: "Luxury Everest experiences with premium lodges and helicopter services.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80",
        features: ["Mountain Luxury", "Private Flights", "Gourmet Dining"],
        link:"/destinations/nepal"
        },
        {
        country: "Tibet",
        description: "Ultra-luxury journeys through the spiritual heart of the Himalayas.",
        image: "https://images.unsplash.com/photo-1503641926155-5c17619b79d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGliZXR8ZW58MHx8MHx8fDA%3D",
        features: ["Premium Retreats", "Sacred Access", "Private Tours"],
        link:"/destinations/tibet"
        }
    ];

    const {data:experienceTypeData,isLoading}=useQuery({
        queryKey:["experienceType"],
        queryFn:()=>getTourTypes()
    })

    return (
        <div className=" ">
            <div className="relative h-[500px] overflow-hidden">
                <Image
                src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&q=80"
                alt="Background"
                className="w-full h-full object-cover"
                height={1000}
                width={1000}
                />
                <div className="absolute inset-0 bg-black/40" />
                    <div className="w-full items-center px-8 h-full flex flex-col justify-center absolute inset-0">
                    <h1 className={`${antic.className} text-6xl font-bold mb-6 text-white leading-tight`}>
                        Extraordinary <span className='text-primary'>Journeys</span>
                    </h1>
                    <p className="text-xl text-white/90 font-light">
                        Experience the Himalayas through a lens of unparalleled luxury and authenticity
                    </p>
                </div>
            </div>

        <div className="px-4 py-24">
                <h2 className={`text-5xl text-center mb-16 ${antic.className} text-primary`}>
                    Curated Luxury Experiences
                </h2>
                {isLoading && <Loader/>}
                <div className="grid grid-cols-3 gap-8 px-16">
                    {experienceTypeData?.allTourTypes.map((exp:Exp) => (
                        <div key={exp._id} className="group relative overflow-hidden cursor-pointer">
                            {/* Dark Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 z-20" />

                            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                                <div className="relative h-36">
                                    <Image 
                                        src={exp.thumbnail}
                                        alt={exp.tourType}
                                        height={1000}
                                        width={1000}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-2 left-2 text-white z-[100]">
                                        <h3 className={`${antic.className} text-xl`}>{exp.tourType}</h3>
                                    </div>
                                </div>
                            </div>

                            <Link href={`/search?q=${exp?.tourType}`}>
                                <Button 
                                    isIconOnly 
                                    className="absolute right-2 top-6 text-white -translate-y-1/2 z-30 bg-transparent group-hover:bg-primary rounded-full p-2 transition-all duration-500 transform group-hover:-rotate-45"
                                >
                                    <FaArrowRight size={18}/>
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
        </div>

        <div className="container mx-auto px-4 py-24 max-w-7xl">
            <h2 className={`text-5xl text-center text-primary mb-16 ${antic.className} text-neutral-900`}>
            Premium Destinations
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
                <div key={dest.country} className="group">
                <Link href={dest.link}>
                    <div className="bg-white rounded-lg overflow-hidden transition-all duration-300">
                        <div className="relative h-96">
                            <Image 
                                src={dest.image}
                                height={1000}
                                width={1000}
                                alt={dest.country}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className={`text-3xl mb-3 ${antic.className}`}>{dest.country}</h3>
                                <div className="flex gap-2 flex-wrap">
                                {dest.features.map((feature, index) => (
                                    <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                    {feature}
                                    </span>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default TripTypes;