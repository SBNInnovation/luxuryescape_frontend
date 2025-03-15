"use client"
import { antic } from '@/utility/font'
import React, { use, useRef } from 'react'
import TripCard from './TripCard'
import { Pagination } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { getTours } from '@/services/tours'
import { Tour } from '@/types/types'
import Loader from '@/shared/Loader'
import NoDataFound from '@/shared/NoData/NoData'

const items_per_page=6

const TripsInNepal = () => {
    const [page,setPage]=React.useState(1)
    const first=useRef<HTMLParagraphElement>(null)

    const {data:tourData,isLoading}=useQuery({
        queryKey:["tourData-nepal",page],
        queryFn:()=>getTours(page,items_per_page,"Nepal")
    })

    const handlePagination=(newPage:number)=>{
        setPage(newPage)
        first.current?.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})
    }

    return (
        <div className='w-full lg:-mb-12 mb-4'>
            <h1 className={`${antic.className} text-primary lg:text-5xl text-3xl lg:mb-8 mb-4`}>Trips in Nepal</h1>
            <p ref={first} className='text-justify lg:text-base text-sm'>Nepal offers an incredible blend of adventure, culture, and luxury, making it the perfect destination for an unforgettable journey. From the bustling streets of Kathmandu rich with history and tradition to the serene lakeside charm of Pokhara, every corner of Nepal offers unique experiences. Explore the pristine wilderness of Chitwan National Park on a luxury safari, or indulge in breathtaking mountain views from Nagarkot’s exclusive retreats. Whether it’s a helicopter tour over the majestic Himalayas, guided treks through ancient trails, or peaceful moments by tranquil rivers, our tailored trips in Nepal promise a seamless blend of luxury and exploration, creating memories to last a lifetime.
                </p>
            <div className='w-full lg:px-32 px-4 flex flex-col lg:gap-12 gap-4 py-12 '>
                {isLoading && <Loader/>}
                {tourData?.data?.tours?.length===0 && <NoDataFound title='No Tours Found'/>}
                {tourData?.data?.tours?.map((item:Tour,index:number)=>(
                    <TripCard key={index} {...item}/>
                ))}
            </div>
            <div className='w-full flex items-center justify-center'>
                <Pagination className='z-[1]' isCompact showControls total={tourData?.data?.pagination?.totalPages} page={page} onChange={handlePagination} initialPage={1} />
            </div>
        </div>
    )
}

export default TripsInNepal
