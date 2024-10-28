import { antic } from '@/utility/font'
import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import TopSellingSlider from './TopSelling/TopSelling'

const MainHome = () => {
    return (
        <>
            <div className='relative w-full h-auto flex items-center justify-center'>
                <Image src={"https://www.remotelands.com/travelogues/app/uploads/2017/11/Pool-Mountains-Bures.jpg"} alt='Home' width={1000} height={1000} className='w-screen h-[800px] object-cover'/>
                <div className='absolute inset-0 bg-black/40'></div>
                <div className='absolute flex top-[25%] justify-center flex-col z-[100] items-center'>
                    <h1 className={`${antic.className} text-6xl font-bold text-white }`}>Welcome to </h1>
                    <h1 className={`${antic.className} text-7xl font-bold text-primary }`}>Luxury Escapes Nepal</h1>
                    <p className={`${antic.className} my-12 text-zinc-200`}>Experience the unmatched luxury of the Himalayas with bespoke journeys through Nepal, Bhutan, and Tibet.</p>
                    <Input classNames={{input:"placeholder:text-gray-400 !text-white",inputWrapper: "!text-white",base:"border-b-[.5px] border-white"}} variant='underlined' type="email" size='lg' placeholder="Search your Tour... eg: Safari tour, Heli tour etc." className='rounded-sm my-8' radius='sm' startContent={<CiSearch size={32} className='text-white mr-2'/>} endContent={<><Button className='bg-primary rounded-sm px-8 py-0 text-white' size='sm'>Search</Button></>} />
                </div>
            </div> 
            <TopSellingSlider/>
        </>
    )
}

export default MainHome
