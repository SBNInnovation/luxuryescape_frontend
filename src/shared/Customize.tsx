import { antic } from '@/utility/font'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const Customize = () => {
  return (
    <div className='bg-primary/10 w-full mt-16 gap-4 flex flex-col items-center justify-center py-12'>
                <h1 className={` lg:text-5xl text-3xl tracking-wide ${antic.className}`}>Make Your Own</h1>
                <p className='w-4/5 text-justify lg:text-base text-sm my-4'>Discover the freedom to design your dream luxury experience. Choose your destinations, hand-pick activities, and set the pace of your journey, all while staying in premier accommodations. Our custom travel packages allow you to create a unique itinerary that reflects your personal tastes and interests. Whether it&apos; an exclusive cultural experience, a breathtaking helicopter tour, or a relaxing retreat, we're here to bring your vision to life with seamless planning and expert guidance. Enjoy a journey that is crafted uniquely for you, ensuring every moment is unforgettable.</p>
                <Button className='rounded-sm bg-primary px-12 text-white'>
                    <Link href='/tailor-made' className='text-white'>Get Started</Link>
                </Button>
            </div> 
  )
}

export default Customize
