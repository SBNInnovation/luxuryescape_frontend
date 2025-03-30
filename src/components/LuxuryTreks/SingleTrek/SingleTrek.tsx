"use client"
import { antic } from '@/utility/font'
import { Button, Link } from '@nextui-org/react'
import React from 'react'
import MainSlider from './MainSlider'
import DestinationandOverview from './DestinationandOverview'
import TripHighlights from './TrekHighlights'
import DetailedItenary from './DetailedItenary'
import FAQPackage from './FAQPackage'
import QuoteModal from './QuoteModal'
import { useQuery } from '@tanstack/react-query'
import Loader from '@/shared/Loader'
import { getTrekBySlug } from '@/services/trek'
import WhyLuxury from '@/components/Destionation/SinglePackage/WhyLuxury'
import { saveBookingDetails } from '@/utility/BookingStorageHandler'
import { useRouter } from 'next/navigation'

interface props{
    id:string
}
const SingleTrek:React.FC<props> = ({id}) => {
    const [isOpen,setIsOpen] = React.useState(false)
    const router=useRouter()

    const {data:singleTrek,isLoading}=useQuery({
        queryKey:["singleTrek",id],
        queryFn:()=>getTrekBySlug(id)
    })

    const activitiesWithImages = singleTrek?.data?.specificTrek?.trekHighlights?.map((activity:any, index:number) => ({
        activity: activity,
        image: singleTrek.data.specificTrek?.highlightPicture[index] || ""
    }));

    const itineraryWithImages = singleTrek?.data?.specificTrek?.trekItinerary?.map((item:any, index:number) => ({
        days: `Day ${item.day}`,
        title: item.title,
        description: item.description,
        image: singleTrek.data.specificTrek?.itineraryDayPhoto[index] || "",
    }));

    const trip = {
        "title": singleTrek?.data?.specificTrek?.trekName,
        "totalDays": singleTrek?.data?.specificTrek?.duration,
        "ideal_date": singleTrek?.data?.specificTrek?.idealTime?.join(', '),
        "price": singleTrek?.data?.specificTrek?.cost,
        "description": singleTrek?.data?.specificTrek?.trekOverview,
        "activities": activitiesWithImages,
        "inclusions": singleTrek?.data?.specificTrek?.trekInclusion,
        "exclusions": singleTrek?.data?.specificTrek?.trekExclusion,
        "itinerary": itineraryWithImages,
        "faqs": singleTrek?.data?.specificTrek?.faq,
    }

    const handleBookNow = () => {
            
            const bookingDetails = {
                adventureId: singleTrek?.data?.specificTrek?._id,
                adventureName: trip.title,
                adventureSlug: singleTrek?.data?.specificTrek?.slug,
                price: trip.price,
                quantity: 1,
                adventureType: "Trekking" as const,
            };
            
            saveBookingDetails(bookingDetails);
            
            router.push('/checkout');
        };

    if(isLoading)return <Loader/>

    return (
        <div className='lg:px-20 px-4 lg:my-16 my-4'>
            {/* Header Section */}
            <div className='flex flex-col gap-6'>
                <h1 className={`text-primary lg:text-5xl text-3xl tracking-wide ${antic.className}`}>{trip.title}</h1>
                <section className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='flex gap-20 items-center '>
                                            <main className=''>
                                                <h1 className={` font-semibold tracking-wide lg:text-base text-sm`}>Trek Duration</h1>
                                                <p>{trip.totalDays} days</p>
                                            </main>
                                            <main className=''>
                                                <h1 className={` font-semibold tracking-wide lg:text-base text-sm`}>Ideal Time</h1>
                                                <p>{trip.ideal_date}</p>
                                            </main>
                                            <main className=''>
                                                <h1 className={` font-semibold tracking-wide lg:text-base text-sm`}>Total Cost</h1>
                                                <p>{trip.price} <span className='text-gray-500'>/per person</span></p>
                                            </main>
                                        </div>
                                        <div className='flex flex-col gap-2 lg:mt-0 mt-8'>
                                            <Button onPress={()=>setIsOpen(true)} variant='bordered' className='border border-primary rounded-sm px-8 py-0 text-primary'>Get Customized Quote</Button>
                                            <Button onPress={handleBookNow} className='bg-primary rounded-sm px-8 py-0 text-white'>Book with us</Button>
                                        </div>
                </section>
            </div>
            <QuoteModal isOpen={isOpen} onClose={()=>setIsOpen(false)} Title={trip.title} type={singleTrek?.data?.specificTrek?.type} trekId={singleTrek?.data?.specificTrek?._id}/>
            <MainSlider gallery={singleTrek.data.specificTrek?.gallery} thumbnail={singleTrek.data.specificTrek?.thumbnail} />
            <DestinationandOverview description={trip.description} />
            <TripHighlights activities={trip.activities} inclusions={trip.inclusions} exclusions={trip.exclusions}/>
            <DetailedItenary itinerary={trip.itinerary}/>
            <FAQPackage faqs={trip.faqs} />
            <WhyLuxury/>

            <div className='bg-primary/10 w-full my-16 gap-4 flex flex-col items-center justify-center py-12'>
                            <h1 className={` lg:text-5xl text-3xl tracking-wide ${antic.className}`}>Customize Your Trip</h1>
                            <p className='w-4/5 text-justify lg:text-base text-sm my-4'>Discover the freedom to design your dream luxury experience. Choose your destinations, hand-pick activities, and set the pace of your journey, all while staying in premier accommodations. Our custom travel packages allow you to create a unique itinerary that reflects your personal tastes and interests. Whether it&apos; an exclusive cultural experience, a breathtaking helicopter tour, or a relaxing retreat, we're here to bring your vision to life with seamless planning and expert guidance. Enjoy a journey that is crafted uniquely for you, ensuring every moment is unforgettable.</p>
                            <Button className='rounded-sm bg-primary px-12 text-white'>
                                <Link href='/tailor-made' className='text-white'>Get Started</Link>
                            </Button>
                        </div>  
        </div>
    )
}

export default SingleTrek