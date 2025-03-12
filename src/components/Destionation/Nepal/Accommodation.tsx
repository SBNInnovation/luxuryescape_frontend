"use client"
import { antic } from '@/utility/font'
import React, { useState } from 'react'
import AccommodationCard from './AccommodationCard';
import { getAccomsByCountry } from '@/services/accom';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/shared/Loader';

const Accommodation = () => {
    const ITEMS_PER_PAGE=6
    const [currentPage,setCurrentPage] = useState(1);

    const {data:accommodationData,isLoading}=useQuery({
        queryKey: ["accommodations-nepal", currentPage],
        queryFn: () => getAccomsByCountry(currentPage, ITEMS_PER_PAGE, "Nepal"),
    })


    if(isLoading){
        return <Loader/>
    }
    
    return (
        <div className='w-full -mb-8'>
            <h1 className={`${antic.className} text-primary text-5xl mb-8`}>Luxury Accommodations</h1>
            <p className='text-justify'>Nepal offers an incredible blend of adventure, culture, and luxury, making it the perfect destination for an unforgettable journey. From the bustling streets of Kathmandu rich with history and tradition to the serene lakeside charm of Pokhara, every corner of Nepal offers unique experiences. Explore the pristine wilderness of Chitwan National Park on a luxury safari, or indulge in breathtaking mountain views from Nagarkot’s exclusive retreats. Whether it’s a helicopter tour over the majestic Himalayas, guided treks through ancient trails, or peaceful moments by tranquil rivers, our tailored trips in Nepal promise a seamless blend of luxury and exploration, creating memories to last a lifetime.
                </p>
            <div className='w-full flex gap-12 items-center justify-center flex-wrap mt-12'>
                {accommodationData?.data?.formattedData?.map((item:any,index:number) => ( //eslint disable-line @typescript-eslint/no-explicit-any
                    <AccommodationCard key={index} name={item.accommodationTitle} image={item.accommodationPics[0]} location={item.accommodationLocation} description={item.accommodationDescription} slug={item.slug}/>
                ))}
            </div>
        </div>
    )
}

export default Accommodation
