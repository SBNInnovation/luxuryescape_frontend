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

const TripsInBhutan = () => {
    const [page,setPage]=React.useState(1)
    const first=useRef<HTMLParagraphElement>(null)

    const {data:tourData,isLoading}=useQuery({
        queryKey:["tourData-tibet",page],
        queryFn:()=>getTours(page,items_per_page,"Tibet")
    })

    const handlePagination=(newPage:number)=>{
        setPage(newPage)
        first.current?.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})
    }

    return (
        <div className='w-full -mb-12'>
            <h1 className={`${antic.className} text-primary text-5xl mb-8`}>Trips in Tibet</h1>
            <p ref={first} className='text-justify'>
                Tibet offers an extraordinary fusion of adventure, spirituality, and luxury, making it a truly unique destination. From the sacred city of Lhasa, home to the iconic Potala Palace and Jokhang Temple, to the tranquil beauty of Yamdrok Lake, every corner of Tibet promises an enriching experience. Journey through the vast Tibetan Plateau on a private guided tour, or marvel at the breathtaking views of Mount Everest’s northern face from a luxury retreat. Whether it’s a scenic drive through high-altitude passes, immersive visits to ancient monasteries, or serene moments in remote spiritual sanctuaries, our bespoke tours in Tibet ensure a perfect balance of luxury and exploration, creating memories to last a lifetime.
            </p>
            <div className='w-full px-32 flex flex-col gap-12 py-12 '>
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

export default TripsInBhutan
