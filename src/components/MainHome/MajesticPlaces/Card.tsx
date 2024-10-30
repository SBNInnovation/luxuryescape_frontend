import { antic } from '@/utility/font'
import Image from 'next/image'
import React from 'react'

interface Cardprops{
    title:string
    description:string
    image:string
}
const Card:React.FC<Cardprops> = ({title,description,image}) => {
    return (
        <div className='w-full flex flex-col bg-white shadow-md relative'>
            <div className='h-[350px] w-full'>
                <Image src={image} alt={title} height={1000} width={1000} className='w-full h-full object-cover'/>
            </div>
            <div className='flex flex-col p-4 gap-2 relative'>
                <h1 className={`text-xl text-primary ${antic.className}`}>{title}</h1>
                <p className='text-xs'>{description}</p>
                <p className='text-sm cursor-pointer mt-4 flex self-end underline underline-offset-2 text-primary'>View Package</p>
            </div>
        </div>
    )
}

export default Card
