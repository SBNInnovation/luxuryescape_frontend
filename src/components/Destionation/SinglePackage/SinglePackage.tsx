import { antic } from '@/utility/font'
import { Button } from '@nextui-org/react'
import React from 'react'
import MainSlider from './MainSlider'
import DestinationandOverview from './DestinationandOverview'
import TripHighlights from './TrekHighlights'
import DetailedItenary from './DetailedItenary'

const SinglePackage = () => {
    const trip = {
    "title": "Luxury Highlights of Nepal Tour",
    "totalDays": 12,
    "ideal_date":"May to August",
    "price": "$6,500",
    "description": "Discover Nepal in ultimate style and comfort with our Luxury Highlights Tour, a curated journey through the most stunning landscapes and rich cultural heritage this remarkable country has to offer. Start with Kathmandu, a vibrant city where ancient temples and bustling markets come alive under the backdrop of the Himalayas. Here, indulge in private tours of UNESCO World Heritage sites, guided by experts who unveil the stories behind each temple, stupa, and palace. Relax in five-star accommodations that blend Nepali tradition with modern opulence. Next, escape to the serene haven of Pokhara, nestled beside tranquil lakes and surrounded by stunning mountain vistas. Enjoy exclusive activities, such as a private boat ride across Phewa Lake, or unwind at a luxury lakeside retreat, where the sunrise over the Annapurna Range becomes a personal spectacle. The journey continues to Chitwan National Park, a paradise for wildlife lovers and adventure enthusiasts alike. Embark on a luxury jungle safari, offering up-close encounters with majestic Bengal tigers, rare one-horned rhinos, and elephants in their natural habitat. Conclude your journey in Nagarkot, where breathtaking sunrise views over the Himalayan range await. This all-inclusive experience is designed to cater to discerning travelers who seek both adventure and elegance. With exceptional service, private guides, and thoughtfully planned itineraries, this tour elevates travel into an experience of true luxury, making it the ideal escape for those who wish to experience Nepal&apos;s extraordinary beauty and timeless traditions without compromise.",
    "destinations": [
        {
            "city": "Kathmandu",
            "days": "1-3",
            "image": "https://images.unsplash.com/photo-1507743617593-0a422c9bb7f5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "city": "Pokhara",
            "days": "4-6",
            "image": "https://images.unsplash.com/photo-1654607351830-c00fda86b329?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "city": "Chitwan National Park",
            "days": "7-9",
            "image": "https://images.unsplash.com/photo-1647679208174-7c3dcbcd2336?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "city": "Nagarkot",
            "days": "10-12",
            "image": "https://images.unsplash.com/photo-1610428418346-535c21b8a678?q=80&w=2745&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ],
    "tripHighlight": [
        "Private tours of Kathmandu's UNESCO sites",
        "Luxury lakeside retreat in Pokhara",
        "Exclusive jungle safari in Chitwan",
        "Sunrise views over the Himalayas in Nagarkot",
        "Five-star accommodations throughout the tour"
    ],
    "activities": [
        {
            "activity": "Heritage Site Tours in Kathmandu",
            "image": "https://images.unsplash.com/photo-1507743617593-0a422c9bb7f5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        },
        {
            "activity": "Private Boat Ride in Pokhara",
            "image": "https://images.unsplash.com/photo-1647679208174-7c3dcbcd2336?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "activity": "Luxury Jungle Safari in Chitwan",
            "image": "https://images.unsplash.com/photo-1610428418346-535c21b8a678?q=80&w=2745&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "activity": "Himalayan Sunrise in Nagarkot",
            "image": "https://images.unsplash.com/photo-1654607351830-c00fda86b329?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ],
    "inclusions": [
        "Five-star hotel accommodations",
        "Daily breakfast and select meals",
        "Private guided tours in each city",
        "All transportation within Nepal",
        "Personalized concierge service",
        "Entry fees to all included attractions"
    ],
    "itinerary": [
        {
            "days": "Day 1-3",
            "description": "Arrival in Kathmandu with private airport transfer, followed by guided city tours exploring Durbar Square, Swayambhunath Stupa, and Pashupatinath Temple.",
            "image": "https://unsplash.com/photos/tOw8lfv92Ck",
            "hotel": {
                "name": "Dwarika’s Hotel",
                "image": "https://unsplash.com/photos/q3fT1YefIYY"
            }
        },
        {
            "days": "Day 4-6",
            "description": "Travel to Pokhara with luxury lakeside hotel stay, private boat tour on Phewa Lake, and day hikes for panoramic mountain views.",
            "image": "https://unsplash.com/photos/9PfyoZATkU8",
            "hotel": {
                "name": "Tiger Mountain Pokhara Lodge",
                "image": "https://unsplash.com/photos/3Z70SDuYs5g"
            }
        },
        {
            "days": "Day 7-9",
            "description": "Journey to Chitwan National Park for a luxury safari experience with guided wildlife tours, river canoeing, and cultural performances.",
            "image": "https://unsplash.com/photos/0wvdp0KsZmE",
            "hotel": {
                "name": "Meghauli Serai, Chitwan",
                "image": "https://unsplash.com/photos/Uy0to7z2bFU"
            }
        },
        {
            "days": "Day 10-12",
            "description": "Transfer to Nagarkot for a peaceful mountain retreat, with a sunrise viewpoint over the Himalayas and relaxation time in a scenic lodge.",
            "image": "https://unsplash.com/photos/WLxQvbMyfas",
            "hotel": {
                "name": "Club Himalaya Nagarkot",
                "image": "https://unsplash.com/photos/VRNPOw7TzB4"
            }
        }
    ]
}
    

    return (
        <div className='px-20 my-16'>
            {/* Header Section */}
            <div className='flex flex-col gap-6'>
                <h1 className={`text-primary text-5xl tracking-wide ${antic.className}`}>{trip.title}</h1>
                <section className='flex items-center justify-between'>
                    <div className='flex gap-20 items-center '>
                        <main className=''>
                            <h1 className={` font-semibold tracking-wide`}>Trip Duration</h1>
                            <p>{trip.totalDays} days</p>
                        </main>
                        <main className=''>
                            <h1 className={` font-semibold tracking-wide`}>Ideal Time</h1>
                            <p>{trip.ideal_date}</p>
                        </main>
                        <main className=''>
                            <h1 className={` font-semibold tracking-wide`}>Total Cost</h1>
                            <p>{trip.price} <span className='text-gray-500 text-sm'>/per person</span></p>
                        </main>
                    </div>
                    <Button className='bg-primary rounded-sm px-8 py-0 text-white'>Get Quote</Button>
                </section>
            </div>

            <MainSlider/>
            <DestinationandOverview destinations={trip.destinations} description={trip.description} />
            <TripHighlights tripHighlight={trip.tripHighlight} activities={trip.activities} inclusions={trip.inclusions}/>
            <DetailedItenary itinerary={trip.itinerary}/>
        </div>
    )
}

export default SinglePackage
