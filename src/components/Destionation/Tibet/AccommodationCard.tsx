import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { antic } from '@/utility/font'

interface AccommodationCardProps{
    name:string
    image:string
    description:string
    location:string
}
const AccommodationCard:React.FC<AccommodationCardProps> = ({name,image,description,location}) => {
    const slicedDesc=description.slice(0,100)
    return (
        <div className='w-[350px] relative flex flex-col items-center justify-center group  custom-trip-card cursor-pointer'>
            <div className='w-full h-[200px] overflow-hidden'>
                <Image src={image} alt={name} width={1000} height={1000} className='w-full h-full object-cover transition transform duration-500 group-hover:scale-[1.1]'/>
            </div>
            <div className='w-full py-4 flex items-center justify-center flex-col px-4'>
                <p className='text-primary font-semibold text-sm'>{location}</p>
                <h1 className={`${antic.className} mt-2  text-xl `}>{name}</h1>
                <p className='text-sm text-gray-500 text-center my-2'>{slicedDesc}...</p>
                <Button className='rounded-sm w-fit px-8 bg-primary text-sm text-white mt-4' size='sm'>View Details</Button>
            </div>
        </div>
    )
}

export default AccommodationCard
