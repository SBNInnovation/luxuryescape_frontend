import { antic } from '@/utility/font'
import React from 'react'
import AccommodationCard from './AccommodationCard';

const Accommodation = () => {
    const luxuryAccommodations = [
    {
        name: "Dwarika's Hotel",
        image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHdhcmlrYSUyMGhvdGVsfGVufDB8fDB8fHww",
        location: "Kathmandu, Nepal",
        description: "A heritage hotel blending Nepalese art, culture, and luxury. Renowned for its exquisite architecture and world-class service."
    },
    {
        name: "The Pavilions Himalayas",
        image: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGF2aWxpb25zJTIwaGltYWxheWFucyUyMGhvdGVsfGVufDB8fDB8fHww",
        location: "Pokhara, Nepal",
        description: "A luxury eco-resort set amidst lush landscapes with panoramic views of the Himalayas. A perfect retreat for nature lovers."
    },
    {
        name: "Kasara Jungle Resort",
        image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FzYXJhJTIwanVuZ2xlJTIwcmVzb3J0fGVufDB8fDB8fHww",
        location: "Chitwan National Park, Nepal",
        description: "A luxury resort with a focus on sustainability and comfort, offering authentic jungle experiences and personalized services."
    },
    {
        name: "Tiger Tops Tharu Lodge",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
        location: "Chitwan National Park, Nepal",
        description: "An eco-luxury lodge offering a serene escape with jungle safaris, traditional Tharu hospitality, and a peaceful environment."
    },
    {
        name: "Hyatt Regency Kathmandu",
        image: "https://images.unsplash.com/photo-1439130490301-25e322d88054?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fHww",
        location: "Kathmandu, Nepal",
        description: "A five-star luxury hotel with stunning views of the Boudhanath Stupa, offering premium facilities and services for all travelers."
    },
    {
        name: "Meghauli Serai, A Taj Safari",
        image: "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
        location: "Chitwan National Park, Nepal",
        description: "A luxury safari lodge managed by the Taj Group, offering unrivaled comfort and spectacular views of the Rapti River and Chitwan jungle."
    },
    {
        name: "Barahi Jungle Lodge",
        image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww",
        location: "Chitwan National Park, Nepal",
        description: "Nestled on the banks of the Rapti River, this lodge offers an exclusive wildlife experience with luxurious accommodations."
    }
];

    return (
        <div className='w-full -mb-8'>
            <h1 className={`${antic.className} text-primary text-5xl mb-8`}>Luxury Accommodations</h1>
            <p className='text-justify'>
                Tibet offers a unique blend of luxury, serenity, and cultural immersion, making it an unparalleled destination for discerning travelers. Experience the finest accommodations, from five-star resorts in Lhasa with breathtaking views of the Potala Palace to secluded boutique lodges nestled in the Himalayan highlands. Indulge in world-class hospitality with personalized services, spa retreats inspired by Tibetan wellness traditions, and private suites overlooking stunning landscapes. Whether you prefer a tranquil stay near sacred monasteries, a luxury retreat with panoramic mountain vistas, or an exclusive eco-lodge near Tibet’s pristine lakes, our handpicked accommodations ensure an opulent and unforgettable journey through the Roof of the World.
            </p>
            <div className='w-full flex gap-12 items-center justify-center flex-wrap mt-12'>
                {luxuryAccommodations.map((item,index) => (
                    <AccommodationCard key={index} name={item.name} image={item.image} location={item.location} description={item.description}/>
                ))}
            </div>
        </div>
    )
}

export default Accommodation
