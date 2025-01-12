import React from 'react';
import { Card, Button, Divider } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { antic } from '@/utility/font';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import SharedTitle from '@/shared/SharedTitle';

const TripTypes = () => {
    const experiences = [
        {
        type: "Private Jet Expeditions",
        description: "Experience the ultimate in luxury travel with private jet tours across the Himalayas.",
        image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80",
        price: "From $25,000"
        },
        {
        type: "Ultra-Luxury Lodges",
        description: "Stay in exclusive mountain retreats with personal butler service and premium amenities.",
        image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80",
        price: "From $15,000"
        },
        {
        type: "Yacht Adventures",
        description: "Navigate sacred lakes in private luxury yachts with gourmet dining experiences.",
        image: "https://images.pexels.com/photos/382167/pexels-photo-382167.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: "From $12,000"
        },
        {
        type: "Wellness Sanctuaries",
        description: "Immerse in ancient healing traditions with luxury spa treatments and private yoga sessions.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
        price: "From $8,000"
        },
        {
        type: "Heritage Palace Stays",
        description: "Reside in converted royal palaces with exclusive access to private chambers and royal collections.",
        image: "https://images.unsplash.com/photo-1516477485464-abbcea8f9b1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmVwYWx8ZW58MHwwfDB8fHwy",
        price: "From $18,000"
        },
        {
        type: "Helicopter Wine Tours",
        description: "Discover high-altitude vineyards and exclusive wine tastings via private helicopter transfers.",
        image: "https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVsaWNvcHRlciUyMHdpbmV8ZW58MHwwfDB8fHwy",
        price: "From $9,500"
        },
        {
        type: "Private Island Retreats",
        description: "Escape to exclusive island sanctuaries with personal chef and dedicated wellness team.",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80",
        price: "From $22,000"
        },
        {
        type: "Archaeological Expeditions",
        description: "Private access to restricted archaeological sites with world-renowned historians.",
        image: "https://images.unsplash.com/photo-1691901657830-6d3f97e595d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXJjaGFlb2xvZ3l8ZW58MHwwfDB8fHwy",
        price: "From $16,500"
        },
        {
        type: "Culinary Masterclasses",
        description: "Private cooking sessions with Michelin-starred chefs in stunning mountain locations.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80",
        price: "From $10,000"
        },
        {
        type: "Photography Expeditions",
        description: "Expert-led photography journeys with exclusive sunrise access to sacred sites.",
        image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&q=80",
        price: "From $13,500"
        },
        {
        type: "Wildlife Safaris",
        description: "Ultra-luxury wildlife tracking experiences with conservation experts and photographers.",
        image: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FmYXJpfGVufDB8MHwwfHx8Mg%3D%3D",
        price: "From $17,000"
        }
    ];

    const travelStyles = [
    {
        type: "Solo Escapes",
        description: "Tailored experiences for solo travelers seeking luxury and self-discovery.",
        image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["Personalized Itineraries", "Luxury Accommodations", "Wellness Retreats"]
    },
    {
        type: "Romantic Getaways",
        description: "Intimate experiences for couples, designed to create unforgettable memories.",
        image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["Private Dinners", "Couples Spa", "Sunset Cruises"]
    },
    {
        type: "Group Adventures",
        description: "Luxury group tours with curated activities for friends and families.",
        image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["Group Excursions", "Luxury Villas", "Private Chefs"]
    },
    {
        type: "Special Occasions",
        description: "Exclusive experiences for celebrations like anniversaries, birthdays, and milestones.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["Custom Celebrations", "VIP Services", "Luxury Venues"]
    }
];

    const destinations = [
        {
        country: "Bhutan",
        description: "Exclusive access to ancient temples and private monastery tours.",
        image: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?auto=format&fit=crop&q=80",
        features: ["Royal Accommodations", "Private Ceremonies", "Elite Access"]
        },
        {
        country: "Nepal",
        description: "Luxury Everest experiences with premium lodges and helicopter services.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80",
        features: ["Mountain Luxury", "Private Flights", "Gourmet Dining"]
        },
        {
        country: "Tibet",
        description: "Ultra-luxury journeys through the spiritual heart of the Himalayas.",
        image: "https://images.unsplash.com/photo-1503641926155-5c17619b79d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGliZXR8ZW58MHx8MHx8fDA%3D",
        features: ["Premium Retreats", "Sacred Access", "Private Tours"]
        }
    ];

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
                <div className="grid grid-cols-3 gap-8 px-16">
                    {experiences.map((exp) => (
                        <div key={exp.type} className="group relative overflow-hidden cursor-pointer">
                            {/* Dark Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 z-20" />

                            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                                <div className="relative h-36">
                                    <Image 
                                        src={exp.image}
                                        alt={exp.type}
                                        height={1000}
                                        width={1000}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-2 left-2 text-white z-[100]">
                                        <h3 className={`${antic.className} text-xl`}>{exp.type}</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Button with Rotation on Hover */}
                            <Button 
                                isIconOnly 
                                className="absolute right-2 top-6 text-white -translate-y-1/2 z-30 bg-transparent group-hover:bg-primary rounded-full p-2 transition-all duration-500 transform group-hover:-rotate-45"
                            >
                                <FaArrowRight size={18}/>
                            </Button>
                        </div>
                    ))}
                </div>
        </div>

        <div className="py-8">
            <div className="container mx-auto px-4 max-w-7xl">
            <SharedTitle title='Distinctive Travel Styles' subtitle='Discover' classname='mb-12'/>
            <div className="grid lg:grid-cols-4 gap-8">
                {travelStyles.map((style) => (
                <div key={style.type} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img 
                        src={style.image}
                        alt={style.type}
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-colors" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                        <h3 className={`text-xl mb-2 ${antic.className}`}>{style.type}</h3>
                        <p className="text-sm text-white/90 mb-4">{style.description}</p>
                        <div className="flex gap-2 flex-wrap">
                        {style.features.map((feature, index) => (
                            <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                            {feature}
                            </span>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>

        <div className="container mx-auto px-4 py-24 max-w-7xl">
            <h2 className={`text-5xl text-center text-primary mb-16 ${antic.className} text-neutral-900`}>
            Premium Destinations
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
                <div key={dest.country} className="group">
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
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default TripTypes;