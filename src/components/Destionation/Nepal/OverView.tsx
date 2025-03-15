import { antic } from '@/utility/font'
import React from 'react'
import Image from 'next/image'

const OverView = () => {
    return (
        <div className='w-full'>
            <h1 className={`${antic.className} text-primary lg:text-5xl text-3xl lg:mb-8 mb-4`}>Overview</h1>
            <div className='flex lg:flex-row flex-col gap-8 text-justify w-full'>
                <p className='lg:w-2/5 lg:text-base text-sm w-full'>Experience Nepal like never before with our exclusive luxury tours, designed for travelers seeking the ultimate in comfort, adventure, and cultural immersion. From the ancient temples and vibrant streets of Kathmandu to the serene lakeside vistas of Pokhara and the untamed wildlife of Chitwan, each destination is carefully curated to offer you the finest experiences in the region. Enjoy private guided tours, deluxe accommodations with stunning Himalayan views, and exclusive activities like helicopter tours to Everest Base Camp or peaceful retreats in the mountains. With personalized service and attention to detail, your luxury vacation in Nepal will be filled with unforgettable moments and unparalleled comfort, showcasing the beauty, culture, and serenity of this remarkable country.</p>
                <div className='lg:w-3/5 w-full flex gap-2'>
                    <div className='h-[400px] lg:w-1/3 w-full'>
                        <Image src={"https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Nepal' height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                    </div>
                    <div className='h-[400px] w-1/3 lg:flex hidden'>
                        <Image src={"https://images.unsplash.com/photo-1512036594830-51cea3a8df78?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Nepal' height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                    </div>
                    <div className='h-[400px] w-1/3 lg:flex hidden'>
                        <Image src={"https://images.unsplash.com/photo-1713429237253-8d786de46f31?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Nepal' height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverView
