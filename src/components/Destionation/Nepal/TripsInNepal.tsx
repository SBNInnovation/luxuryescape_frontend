import { antic } from '@/utility/font'
import React from 'react'
import TripCard from './TripCard'
import { Pagination } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { getTours } from '@/services/tours'

const TripsInNepal = () => {

    const {data:tourData}=useQuery({
        queryKey:["tourData"],
        queryFn:()=>getTours(1,20)
    })

    console.log(tourData)

    const topselling=[
    {
        "image": "https://images.unsplash.com/photo-1509883488717-779cd2d85976?q=80&w=2397&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Everest Base Camp Heli Tour & Luxury Retreat",
        "description": "Experience a breathtaking helicopter ride to Everest Base Camp, followed by a luxurious stay at a premier Himalayan resort.",
        "best_time": "Jan - March"
    },
    {
        "image": "https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Chitwan National Park Luxury Safari",
        "description": "Indulge in private wildlife safaris, glamping experiences, and cultural immersion in the enchanting jungles of Chitwan.",
        "best_time": "All year"
    },
    {
        "image": "https://images.unsplash.com/photo-1729176990188-b11bdb3d902a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Bhutan Royal Retreat & Cultural Immersion",
        "description": "Explore Bhutan&apos;s heritage sites with a private trek to the iconic Tiger&apos;s Nest Monastery and luxury accommodations.",
        "best_time": "Oct - Jan"
    },
    {
        "image": "https://images.unsplash.com/photo-1691735214703-310c6594c6a8?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Tibet Spiritual Journey & Luxury Stay",
        "description": "Immerse yourself in Tibetan culture with visits to ancient monasteries and a stay in a luxury hotel in Lhasa.",
        "best_time": "Feb - Oct"
    },
    {
        "image": "https://images.unsplash.com/photo-1531719555052-632b0348c404?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Annapurna Luxury Trek & Spa Retreat",
        "description": "Experience a guided luxury trek in the Annapurna region, complemented by spa treatments in a lavish mountain lodge.",
        "best_time": "All Year"
    }
]
    return (
        <div className='w-full -mb-12'>
            <h1 className={`${antic.className} text-primary text-5xl mb-8`}>Trips in Nepal</h1>
            <p className='text-justify'>Nepal offers an incredible blend of adventure, culture, and luxury, making it the perfect destination for an unforgettable journey. From the bustling streets of Kathmandu rich with history and tradition to the serene lakeside charm of Pokhara, every corner of Nepal offers unique experiences. Explore the pristine wilderness of Chitwan National Park on a luxury safari, or indulge in breathtaking mountain views from Nagarkot’s exclusive retreats. Whether it’s a helicopter tour over the majestic Himalayas, guided treks through ancient trails, or peaceful moments by tranquil rivers, our tailored trips in Nepal promise a seamless blend of luxury and exploration, creating memories to last a lifetime.
                </p>
            <div className='w-full px-32 flex flex-col gap-12 py-12 '>
                {topselling.map((item,index)=>(
                    <TripCard key={index} {...item}/>
                ))}
            </div>
            <div className='w-full flex items-center justify-center'>
                <Pagination className='z-[1]' isCompact showControls total={10} initialPage={1} />
            </div>
        </div>
    )
}

export default TripsInNepal
