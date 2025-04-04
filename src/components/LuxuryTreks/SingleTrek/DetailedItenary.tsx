import React from 'react'
import { LuxuryPackage } from './types'
import { antic } from '@/utility/font'
import SharedTitle from '@/shared/SharedTitle'
import Image from 'next/image'

const DetailedItenary: React.FC<LuxuryPackage> = ({itinerary}) => {
    // Guard against undefined or empty itinerary
    if (!itinerary || itinerary.length === 0) {
        return null;
    }
    
    return (
        <div className='w-full my-16'>
            <h1 className={`text-3xl ${antic.className} font-semibold text-primary my-8 `}>Trek Itinerary</h1>
            <p className='mb-12 text-gray-700 text-justify'>Embark on a thoughtfully curated journey through Nepal's most iconic landscapes and cultural treasures with this luxury itinerary. Each day has been designed to balance adventure, relaxation, and immersion in Nepal&apos;s rich heritage. However, we understand that every traveler&apos;s dream is unique. This itinerary serves as an inspiration, and we invite you to personalize every detail—from the pace of the journey to the experiences in each destination. Whether you wish to linger longer at a serene lakeside, add an exclusive activity, or customize accommodations, our team is dedicated to crafting a bespoke adventure that reflects your ideal luxury getaway.</p>
            <div className='w-full flex flex-col gap-12'>
                {itinerary.map((item, index) => (
                    <div className='flex gap-6 flex-col bg-white rounded-sm px-8 border border-gray-200 py-8' key={index}>
                        <div className='flex flex-col lg:flex-row gap-12'>
                            <div className='w-full lg:w-1/2'>
                                <div className='bg-gray-100 p-4 rounded-sm'>
                                    <SharedTitle 
                                        title={item?.title || `Day ${index + 1}`} 
                                        subtitle={item?.days || `Day ${index + 1}`}
                                    />
                                </div>
                                <p className='text-justify mt-4'>{item?.description}</p>
                            </div>
                            <div className='w-full lg:w-1/2 lg:h-[400px] h-[250px]'>
                                <Image 
                                    src={item?.image || "/placeholder-image.jpg"} 
                                    alt={item?.title || `Day ${index + 1}`} 
                                    width={1000} 
                                    height={1000} 
                                    className='w-full h-full object-cover rounded-sm shadow-md'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DetailedItenary