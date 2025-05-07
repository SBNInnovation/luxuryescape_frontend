"use client"
import { getTourTypes } from '@/services/tours'
import Loader from '@/shared/Loader'
import SharedTitle from '@/shared/SharedTitle'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface Exp{
    tourType:string
    thumbnail:string
    _id:string
}

const TripTypes = () => {

    const {data:experienceTypeData,isLoading}=useQuery({
        queryKey:["experienceType"],
        queryFn:()=>getTourTypes()
    })

    if(isLoading)return <Loader/>

    return (
        <div className='w-full pb-8'>
            <div className='lg:px-16 px-4'>
                <SharedTitle title='Unforgettable Trips' subtitle='Dont miss out'/>
            </div>
            <div className='flex flex-col gap-4 w-full lg:mt-12 mt-4 lg:px-16 px-4'>
                <section className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 flex-col gap-4 w-full relative'>
                    {experienceTypeData?.allTourTypes?.map((item:Exp, index:number) => (
                        <div 
                            className={`flex-1 cursor-pointer group overflow-hidden h-[300px] relative`} 
                            key={index}
                        >
                            <Image 
                                src={item.thumbnail} 
                                alt={item.tourType} 
                                height={1000} 
                                width={1000} 
                                className='object-cover group-hover:scale-[1.1] transition duration-300 h-full w-full rounded-sm'
                            />
                            <div className='z-[10] flex gap-4 justify-between items-center absolute bottom-0 w-full px-4 py-4 bg-black/60 text-white'>
                                <div className='flex flex-col'>       
                                    <h1>{item.tourType}</h1>
                                </div>
                                <Link href={`/search?q=${item?.tourType}`}>
                                    <FaArrowRight size={22} className='text-primary group-hover:-rotate-45 transition duration-300'/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default TripTypes