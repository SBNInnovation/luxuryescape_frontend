"use client"
import { getTourTypes } from '@/services/tours'
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

    return (
        <div className='w-full pb-16'>
            <div className='px-16'>
                <SharedTitle title='Unforgettable Trips' subtitle='Dont miss out'/>
            </div>
            <div className='flex flex-col gap-4 w-full mt-28 px-16'>
                <section className='flex gap-4 w-full relative'>
                    {experienceTypeData?.allTourTypes.slice(0,4).map((item:Exp,index:number) => (
                        <div 
                            className={`w-1/4 cursor-pointer group overflow-hidden h-[300px] relative ${index % 2 !== 0 ? "-mt-16" : "mt-0"}`} 
                            key={index}
                        >
                            <Image 
                                src={item.thumbnail} 
                                alt={item.tourType} 
                                height={1000} 
                                width={1000} 
                                className='object-cover group-hover:scale-[1.1] transition duration-300 h-full w-full rounded-sm'
                            />
                            <div className='z-[10] flex justify-between items-center absolute bottom-0 w-full px-4 py-4 bg-black/60 text-white'>
                                <div className='flex flex-col'>       
                                    <h1>{item.tourType}</h1>
                                </div>
                                <FaArrowRight size={22} className='text-primary group-hover:-rotate-45 transition duration-300'/>
                            </div>

                        </div>
                    ))}
                </section>
                <section className='flex gap-4 w-full relative'>
                    {experienceTypeData?.allTourTypes.slice(4).map((item:Exp,index:number) => (
                        <div 
                            className={`w-1/4 h-[300px] cursor-pointer overflow-hidden group relative ${index % 2 == 0 ? "mt-0" : "-mt-16"}`} 
                            key={index}
                        >
                            <Image 
                                src={item.thumbnail} 
                                alt={item.tourType} 
                                height={1000} 
                                width={1000} 
                                className='object-cover group-hover:scale-[1.1] transition duration-300 h-full w-full rounded-sm'
                            />
                            <div className='z-[10] flex  justify-between items-center absolute bottom-0 w-full px-4 py-4 bg-black/60 text-white'>
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
