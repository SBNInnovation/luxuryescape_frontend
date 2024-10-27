"use client"
import { Button } from '@nextui-org/react'
import React from 'react'
import {CiSearch} from "react-icons/ci"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const nav=[
        {
            title:"Home",
            link:"/"
        },
        {
            title:"Destinations",
            link:"/destinations"
        },
        {
            title:"Trip Types",
            link:"/trip-types"
        },
        {
            title:"Tailor Made",
            link:"/tailor-made"
        },
        {
            title:"About",
            link:"/about"
        },
        {
            title:"Contact",
            link:"/contact"
        }
    ]
    const pathname=usePathname()
    const isActive=(path:string)=>pathname===path
    return (
        <div className='shadow-sm top-0  flex items-center justify-between px-16 py-2 fixed bg-white w-screen z-[9999]'>
            <div className='flex gap-20 items-center font-medium uppercase text-sm tracking-wide'>      
                <section className='size-16 rounded-full bg-primary'>

                </section>
                <section className='flex gap-8'>
                    {nav.map(item=>{
                        return(
                            <Link key={item.title} href={item.link}>
                                <div className='group relative'>
                                    <p>{item.title}</p>
                                    <span className={` ${isActive(item.link) ?"w-full":"w-0"} bottom-[-4px] group-hover:w-full absolute bg-primary h-[2px] rounded-full transition-all duration-400`}></span>
                                </div>
                            </Link>
                            
                        )
                    })}
                </section>
            </div>
            <div className='flex gap-8 items-center'>
                <Button className='bg-transparent' isIconOnly><CiSearch size={28} className='text-[#E8B86D]'/></Button>
                <Button className='bg-primary rounded-sm px-8 text-white' size='sm'>Get a quote</Button>
            </div>
        </div>
    )
}

export default Navbar
