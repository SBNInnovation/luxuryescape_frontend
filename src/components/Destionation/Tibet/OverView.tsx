import { antic } from '@/utility/font'
import React from 'react'
import Image from 'next/image'

const OverView = () => {
    return (
        <div className='w-full'>
            <h1 className={`${antic.className} text-primary lg:text-5xl text-3xl lg:mb-8 mb-4`}>Overview</h1>
            <div className='flex lg:flex-row flex-col gap-8 text-justify w-full'>
                <p className='lg:w-2/5 lg:text-base text-sm w-full'>
                    Experience Tibet like never before with our exclusive luxury tours, designed for travelers seeking the ultimate in comfort, adventure, and cultural immersion. From the sacred Potala Palace in Lhasa to the serene shores of Yamdrok Lake and the breathtaking landscapes of Mount Everest’s northern face, each destination is carefully curated to offer you the finest experiences in the region. Enjoy private guided tours, deluxe accommodations with panoramic Himalayan views, and exclusive activities like a luxury train journey on the Qinghai-Tibet Railway or spiritual retreats in ancient monasteries. With personalized service and meticulous attention to detail, your luxury vacation in Tibet will be filled with unforgettable moments and unparalleled comfort, showcasing the beauty, spirituality, and serenity of this mystical land.
                </p>
                <div className='lg:w-3/5 w-full flex gap-2'>
                    <div className='h-[400px] lg:w-1/3 w-full'>
                        <Image src={"https://images.unsplash.com/photo-1503641926155-5c17619b79d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGliZXR8ZW58MHx8MHx8fDI%3D"} alt='Nepal' height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                    </div>
                    <div className='h-[400px] w-1/3 lg:flex hidden'>
                        <Image src={"https://images.unsplash.com/photo-1617469165786-8007eda3caa7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGliZXR8ZW58MHx8MHx8fDI%3D"} alt='Nepal' height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                    </div>
                    <div className='h-[400px] w-1/3 lg:flex hidden'>
                        <Image src={"https://images.unsplash.com/photo-1622050274686-995efd44ac54?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGliZXR8ZW58MHx8MHx8fDI%3D"} alt='Nepal' height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverView
