"use client"
import { getTourTypes } from '@/services/tours';
import Loader from '@/shared/Loader';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Image from 'next/image';
import { antic } from '@/utility/font';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { Button } from '@nextui-org/react';
import { getDestinations } from '@/services/destinations';
import Customize from '@/shared/Customize';

interface Exp{
   title:string
    image:string
    description:string;
    _id:string
    thumbnail:string
}

const ExploreNepal = () => {
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

    const {data:destinationsData,isLoading}=useQuery({
        queryKey:["all-destinations"],
        queryFn:()=>getDestinations()
    })

  return (
        <div>
            <div className="relative h-[500px] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Tours in Nepal"
                                className="w-full h-full object-cover"
                                width={1920}
                                height={1080}
                                priority
                            />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="w-full items-center px-8 h-full flex flex-col justify-center absolute inset-0">
                                <h1
                                    className={`${antic.className} lg:text-6xl text-4xl font-bold mb-6 text-white leading-tight text-center`}
                                >
                                    Discover Iconic & Hidden <span className="text-primary">Destinations</span> Across Nepal
                                </h1>
                                <p className="lg:text-xl text-lg text-white/90 font-light text-center max-w-2xl">
                                    Explore Nepal&apos;s enchanting landscapes — from the serene lakes to the mystical temples, and the untouched beauty of the Himalayas
                                </p>
                            </div>
                        </div>
        <div className="px-4 lg:py-12 py-8">
                <h2 className={`lg:text-4xl text-3xl text-center lg:mb-16 mb-4 ${antic.className} text-primary`}>
                    Explore Destinations in Nepal
                </h2>
                {isLoading && <Loader/>}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:px-16 px-4 lg:mt-0 mt-8">
                    {destinationsData?.data?.map((exp:Exp) => (
                        <Link key={exp._id}  href={`/explore-nepal/${exp?._id}`}>
                            <div className="group relative overflow-hidden cursor-pointer">
                                {/* Dark Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 z-20" />

                                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                                    <div className="relative h-[300px]">
                                        <Image 
                                            src={exp.thumbnail}
                                            alt={exp.title}
                                            height={1000}
                                            width={1000}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-2 left-2 text-white z-[100]">
                                            <h3 className={`${antic.className} text-xl`}>{exp.title}</h3>
                                        </div>
                                    </div>
                                </div>

                                
                                    <Button 
                                        isIconOnly 
                                        className="absolute right-2 top-6 text-white -translate-y-1/2 z-30 bg-transparent group-hover:bg-primary rounded-full p-2 transition-all duration-500 transform group-hover:-rotate-45"
                                    >
                                        <FaArrowRight size={18}/>
                                    </Button>
                            </div>
                        </Link>
                    ))}
                </div>
        </div>

        <div className="container mx-auto max-md:px-4 lg:py-12 py-8 max-w-7xl">
            <h2 className={`lg:text-4xl text-3xl  text-center text-primary lg:mb-16 mb-8 ${antic.className} text-neutral-900`}>
            Premium Countries
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
        <div className='lg:px-20 px-4'>
            <Customize/>
            </div>
        </div>
  )
}

export default ExploreNepal
