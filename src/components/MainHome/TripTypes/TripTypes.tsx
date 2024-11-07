import SharedTitle from '@/shared/SharedTitle'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const TripTypes = () => {
    const trips=[
    {
        "type": "Active & Adventure",
        "image": "https://images.unsplash.com/photo-1567253508824-bb5a911a5ec5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Thrilling treks and expeditions."
    },
    {
        "type": "Wildlife & Safari",
        "image": "https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Luxury wildlife encounters."
    },
    {
        "type": "Honeymoon Escapes",
        "image": "https://images.unsplash.com/photo-1535913989690-f90e1c2d4cfa?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Romantic, private getaways."
    },
    {
        "type": "Family Journeys",
        "image": "https://images.unsplash.com/photo-1653481158231-1092b7d377d8?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Memorable family adventures."
    },
    {
        "type": "Cultural & Heritage Tours",
        "image": "https://images.unsplash.com/photo-1516477485464-abbcea8f9b1f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
        "description": "Immersive cultural experiences."
    },
    {
        "type": "Wellness & Spa Retreats",
        "image": "https://images.unsplash.com/photo-1532926381893-7542290edf1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Rejuvenate in serene luxury."
    },
    {
        "type": "Private Luxury Cruises",
        "image": "https://images.unsplash.com/photo-1655107614517-dc106f8cf1a5?q=80&w=2358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Exclusive scenic cruises."
    },
    {
        "type": "Exclusive Festival Experiences",
        "image": "https://images.unsplash.com/photo-1551757891-24a8dabd2708?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Celebrate in vibrant style."
    }
]

    return (
        <div className='w-full pb-16'>
            <div className='px-16'>
                <SharedTitle title='Unforgettable Trips' subtitle='Dont miss out'/>
            </div>
            <div className='flex flex-col gap-4 w-full mt-28 px-16'>
                <section className='flex gap-4 w-full relative'>
                    {trips.slice(0,4).map((item,index) => (
                        <div 
                            className={`w-1/4 cursor-pointer group overflow-hidden h-[300px] relative ${index % 2 !== 0 ? "-mt-16" : "mt-0"}`} 
                            key={index}
                        >
                            <Image 
                                src={item.image} 
                                alt={item.type} 
                                height={1000} 
                                width={1000} 
                                className='object-cover group-hover:scale-[1.1] transition duration-300 h-full w-full rounded-sm'
                            />
                            <div className='z-[10] flex justify-between items-center absolute bottom-0 w-full px-4 py-4 bg-black/60 text-white'>
                                <div className='flex flex-col'>       
                                    <h1>{item.type}</h1>
                                    <p className='text-xs text-gray-400'>{item.description}</p>
                                </div>
                                <FaArrowRight size={22} className='text-primary group-hover:-rotate-45 transition duration-300'/>
                            </div>

                        </div>
                    ))}
                </section>
                <section className='flex gap-4 w-full relative'>
                    {trips.slice(4).map((item,index) => (
                        <div 
                            className={`w-1/4 h-[300px] cursor-pointer overflow-hidden group relative ${index % 2 == 0 ? "mt-0" : "-mt-16"}`} 
                            key={index}
                        >
                            <Image 
                                src={item.image} 
                                alt={item.type} 
                                height={1000} 
                                width={1000} 
                                className='object-cover group-hover:scale-[1.1] transition duration-300 h-full w-full rounded-sm'
                            />
                            <div className='z-[10] flex  justify-between items-center absolute bottom-0 w-full px-4 py-4 bg-black/60 text-white'>
                                <div className='flex flex-col'>       
                                    <h1>{item.type}</h1>
                                    <p className='text-xs text-gray-400'>{item.description}</p>
                                </div>
                                <FaArrowRight size={22} className='text-primary group-hover:-rotate-45 transition duration-300'/>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default TripTypes
