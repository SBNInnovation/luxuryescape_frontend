import React from 'react'
import { LuxuryPackage } from './types'
import { antic } from '@/utility/font'
import SharedTitle from '@/shared/SharedTitle'
import Image from 'next/image'
import { Button, Divider } from '@nextui-org/react'

const DetailedItenary: React.FC<LuxuryPackage> = ({itinerary}) => {
    return (
        <div className='w-full my-16'>
            <h1 className={`text-3xl ${antic.className} font-semibold text-primary my-8 `}>Trip Itinerary</h1>
            <p className='mb-12 text-gray-700 text-justify'>Embark on a thoughtfully curated journey through Nepal's most iconic landscapes and cultural treasures with this luxury itinerary. Each day has been designed to balance adventure, relaxation, and immersion in Nepal&apos;s rich heritage. However, we understand that every traveler&apos;s dream is unique. This itinerary serves as an inspiration, and we invite you to personalize every detail—from the pace of the journey to the experiences in each destination. Whether you wish to linger longer at a serene lakeside, add an exclusive activity, or customize accommodations, our team is dedicated to crafting a bespoke adventure that reflects your ideal luxury getaway.</p>
            <div className='w-full flex flex-col gap-12'>
                {itinerary?.map((item,index) => (
                    <>
                    <div className='flex gap-6 flex-col bg-white rounded-sm px-8 border border-gray-200 py-8' key={index}>
                        <div className='flex gap-12'>
                                <div className='w-1/2'>
                                <div className='bg-gray-100 p-4 rounded-sm'>
                                    <SharedTitle title={item?.title} subtitle={item?.days!}/>
                                </div>
                                    <p className='text-justify mt-4'>{item?.description}</p>
                                </div>
                                <div className='w-1/2 h-[400px]'>
                                    <Image src={item?.image!} alt={item?.title!} width={1000} height={1000} className='w-full h-full object-cover rounded-sm shadow-md'/>
                                </div>
                        </div>
                        <Divider className=''/>
                        <section className=''>
                            <h1 className={`${antic.className} text-4xl my-2  text-primary`}>Your Possible Stay</h1>
                            <div className='flex flex-col gap-4 cursor-pointer w-[300px] mt-8'>
                                <div className='h-[180px] w-[300px]'>
                                    <Image src={item?.hotel?.image!} alt={item?.hotel?.name!} width={1000} height={1000} className='w-full h-full object-cover rounded-sm shadow-md'/>
                                </div>
                                <p className='font-semibold text-lg'>{item?.hotel?.name}</p>
                                <Button variant='light' className="text-primary underline underline-offset-2 rounded-sm">
                                    View Details
                                </Button>
                            </div>
                        </section>
                    </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default DetailedItenary
