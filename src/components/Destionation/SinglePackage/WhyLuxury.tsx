import SharedTitle from '@/shared/SharedTitle'
import { antic } from '@/utility/font'
import Image from 'next/image'
import React from 'react'

const WhyLuxury = () => {
    return (
        <div className='relative w-full mt-20'>
            <h1 className={`text-3xl ${antic.className} font-semibold text-primary my-8 `}>Why book with us ?</h1>
            <section className=' flex items-center justify-center w-full'>
                <div className='w-1/3 flex flex-col'>
                    <div className='h-[250px] w-full'>
                        <Image src={"/ab1.webp"} alt='About' width={1000} height={1000} className='object-contain h-full w-full'/>
                    </div>
                    <div className='w-full px-8 py-4'>
                        <h1 className={`${antic.className} text-primary text-2xl `}>Personalised design</h1>
                        <p className='my-4 text-sm text-justify'>We&apos;ll plan your trip around your specific interests, tastes and preferences, providing helpful tips and honest advice based on first-hand knowledge of the destination.</p>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col'>
                    <div className='h-[250px] w-full'>
                        <Image src={"/ab2.webp"} alt='About' width={1000} height={1000} className='object-contain h-full w-full'/>
                    </div>
                    <div className='w-full px-8 py-4'>
                        <h1 className={`${antic.className} text-primary text-2xl `}>Authentic experiences</h1>
                        <p className='my-4 text-sm text-justify'>Our expert guides and brilliant travel concierges are hand-picked to provide a genuine experience, bringing your destination to life with care and passion.</p>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col'>
                    <div className='h-[250px] w-full'>
                        <Image src={"/ab3.webp"} alt='About' width={1000} height={1000} className='object-contain h-full w-full'/>
                    </div>
                    <div className='w-full px-8 py-4'>
                        <h1 className={`${antic.className} text-primary text-2xl `}>Responsible travel</h1>
                        <p className='my-4 text-sm text-justify'>Our luxury trips are designed with responsible travel principles that prioritise travel experiences that are both good for you and good for the planet..</p>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default WhyLuxury