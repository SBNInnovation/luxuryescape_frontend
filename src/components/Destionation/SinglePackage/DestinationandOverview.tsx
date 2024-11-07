"use client"
import React, { useState } from 'react'
import { LuxuryPackage } from './types'
import { antic } from '@/utility/font'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
const DestinationandOverview: React.FC<LuxuryPackage> = ({destinations,description}) => {
    const [expanded,setExpaned]=useState(false)

    const toggleExpanded=()=>{
        setExpaned(!expanded)

    }
    return (
        <>
            <h1 className={`text-3xl ${antic.className} font-semibold text-primary my-8 `}>Destinations</h1>
            <div className='grid grid-cols-3 gap-12 w-full'>
                {destinations?.map((destination) => (
                    <div key={destination.city} className='flex justify-between w-full items-center shadow-md'>
                        <div className='w-[75%] flex flex-col my-2 bg-white h-full px-6 pt-4'>
                            <p className='font-semibold text-sm'>Days {destination.days}</p>
                            <h2 className={`text-xl ${antic.className} font-bold mt-4`}>{destination?.city}</h2>    
                        </div>
                        <div className='w-[25%] h-full'>
                            <Image src={destination.image!} alt={destination.city!} width={1000} height={1000} className='w-full h-full object-cover'/>
                        </div>
                    </div>

                ))}

            </div>


            <h1 className={`text-3xl ${antic.className} font-semibold text-primary mt-20 mb-8 `}>Trip Overview</h1>
            <p className="text-justify font-light leading-9">
                {expanded ? description : `${description?.slice(0, 800)}...`}
            </p>
            <Button onClick={toggleExpanded} variant='light' className="text-primary underline underline-offset-2 rounded-sm my-4">
                {expanded ? 'Show Less' : 'Read More'}
            </Button>
        </>
    )
}

export default DestinationandOverview
