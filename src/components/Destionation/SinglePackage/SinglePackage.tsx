
"use client"
import { antic } from '@/utility/font'
import { Button, Link } from '@nextui-org/react'
import React from 'react'
import MainSlider from './MainSlider'
import DestinationandOverview from './DestinationandOverview'
import TripHighlights from './TrekHighlights'
import DetailedItenary from './DetailedItenary'
import FAQPackage from './FAQPackage'
import WhyUs from '@/components/MainHome/WhyUs/WhyUs'
import WhyLuxury from './WhyLuxury'
import QuoteModal from './QuoteModal'

const SinglePackage = () => {
    const [isOpen,setIsOpen] = React.useState(false)
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
        "itinerary" : [
        {
        days: "Day 1-3",
        title: "Cultural Immersion in Kathmandu",
        description: "Begin your luxury journey with a private airport transfer to Kathmandu, where you'll enjoy a guided exploration of historic Durbar Square, the iconic Swayambhunath Stupa, and the sacred Pashupatinath Temple. Dive into Nepal's rich heritage and vibrant culture while staying in one of Kathmandu's most celebrated hotels.",
        image: "https://images.unsplash.com/photo-1507743617593-0a422c9bb7f5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hotel: {
            name: "Dwarika's Hotel",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800"
        }
        },
        {
        days: "Day 4-6",
        title: "Lakeside Luxury in Pokhara",
        description: "Fly to the serene city of Pokhara, where you'll stay in a luxury lakeside hotel. Enjoy a private boat tour on the tranquil Phewa Lake and embark on scenic hikes with panoramic mountain views, all tailored for the luxury traveler seeking natural beauty and adventure.",
        image: "https://images.unsplash.com/photo-1647679208174-7c3dcbcd2336?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hotel: {
            name: "Tiger Mountain Pokhara Lodge",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800"
        }
        },
        {
        days: "Day 7-9",
        title: "Luxury Safari in Chitwan National Park",
        description: "Experience a luxurious adventure in Chitwan National Park with guided wildlife tours, private canoe rides on the Rapti River, and cultural performances by the Tharu community. Encounter Bengal tigers, rhinos, and more while staying at an upscale safari lodge.",
        image: "https://images.unsplash.com/photo-1610428418346-535c21b8a678?q=80&w=2745&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hotel: {
            name: "Meghauli Serai, Chitwan",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800"
        }
        },
        {
        days: "Day 10-12",
        title: "Mountain Retreat in Nagarkot",
        description: "End your journey in the scenic town of Nagarkot, known for its breathtaking sunrise views over the Himalayas. Relax in a luxurious mountain lodge, savor the tranquility, and witness a stunning morning panorama of snow-capped peaks.",
        image: "https://images.unsplash.com/photo-1654607351830-c00fda86b329?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hotel: {
            name: "Club Himalaya Nagarkot",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800"
        }
        }
    ],
    faqs: [
    {
        question: "What is included in a luxury tour package?",
        answer: "Our luxury packages include accommodations at top-tier hotels, private guided tours, premium transportation, exclusive experiences, and some meals. Specific inclusions may vary per itinerary, and we’re happy to discuss any additional inclusions you desire."
    },
    {
        question: "Can I customize the itinerary?",
        answer: "Absolutely! Our itineraries are fully customizable. You can adjust destinations, activities, accommodation options, and the trip duration to make your journey truly unique and tailored to your preferences."
    },
    {
        question: "What is the best time of year to visit Nepal, Bhutan, and Tibet?",
        answer: "The best time for travel is generally from October to April when the weather is pleasant, skies are clear, and the views are breathtaking. However, each country offers unique experiences in every season, so we can help you plan based on your preferences."
    },
    {
        question: "How many people can join a luxury tour?",
        answer: "We cater to both individual travelers and groups. Whether you're traveling solo, with a partner, or a larger group, we’ll tailor the experience to provide maximum comfort and exclusivity for your party size."
    },
    {
        question: "Are flights included in the package?",
        answer: "International flights are not included, but we can assist in booking them if needed. Domestic flights and private transfers between destinations are typically included in our luxury packages."
    },
    {
        question: "Do I need a visa to travel to Nepal, Bhutan, and Tibet?",
        answer: "Yes, visas are required for each of these countries. We provide detailed guidance and assistance with the visa process to ensure a smooth journey."
    },
    {
        question: "What types of accommodations are provided on luxury tours?",
        answer: "We select the finest accommodations available, from luxurious five-star hotels to unique boutique resorts, each offering high-end amenities, exceptional service, and unforgettable views."
    },
    {
        question: "How do you ensure the safety and security of travelers?",
        answer: "Your safety is our priority. We work with trusted local partners, experienced guides, and high-standard accommodations. Additionally, all itineraries are designed with care, and we continuously monitor travel advisories for your security."
    },
    {
        question: "Can I book additional activities or experiences during the trip?",
        answer: "Of course! Our team is happy to arrange additional experiences based on your interests. Whether it&apos; a helicopter tour, private meditation session, or cultural workshop, we’ll make it happen."
    },
    {
        question: "What is your cancellation and refund policy?",
        answer: "We understand that plans can change. Our cancellation policy varies depending on the specific package and booking terms. Please contact us directly for details on flexible options and travel insurance recommendations."
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
                    <div className='flex flex-col gap-2'>
                        <Button onPress={()=>setIsOpen(true)} variant='bordered' className='border border-primary rounded-sm px-8 py-0 text-primary'>Get Quote</Button>
                        <Button className='bg-primary rounded-sm px-8 py-0 text-white'>Book with us</Button>
                    </div>
                </section>
            </div>
            <QuoteModal isOpen={isOpen} onClose={()=>setIsOpen(false)} Title={trip.title}/>
            <MainSlider/>
            <DestinationandOverview destinations={trip.destinations} description={trip.description} />
            <TripHighlights tripHighlight={trip.tripHighlight} activities={trip.activities} inclusions={trip.inclusions}/>
            <DetailedItenary itinerary={trip.itinerary}/>
            <FAQPackage faqs={trip.faqs} />
            <WhyLuxury/>

            <div className='bg-primary/10 w-full my-16 gap-4 flex flex-col items-center justify-center py-12'>
                <h1 className={` text-5xl tracking-wide ${antic.className}`}>Customize Your Trip</h1>
                <p className='w-4/5 my-4'>Discover the freedom to design your dream luxury experience. Choose your destinations, hand-pick activities, and set the pace of your journey, all while staying in premier accommodations. Our custom travel packages allow you to create a unique itinerary that reflects your personal tastes and interests. Whether it&apos; an exclusive cultural experience, a breathtaking helicopter tour, or a relaxing retreat, we’re here to bring your vision to life with seamless planning and expert guidance. Enjoy a journey that is crafted uniquely for you, ensuring every moment is unforgettable.</p>
                <Button className='rounded-sm bg-primary px-12 text-white'>
                    <Link href='/contact' className='text-white'>Get Started</Link>
                </Button>
            </div>  
        </div>
    )
}

export default SinglePackage
