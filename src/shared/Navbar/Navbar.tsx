"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import React from 'react'
import {IoSearch} from "react-icons/io5"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {FaFacebookF, FaInstagram} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
import {IoMdArrowDropdown} from "react-icons/io"

const Navbar = () => {
    const nav=[
        {
            title:"Home",
            link:"/"
        },
        { 
            title: "Destinations", 
            isDropdown: true,
            items: [
                { title: "Nepal", href: "/destinations/nepal" },
                { title: "Bhutan", href: "/destinations/bhutan" },
                { title: "Tibet", href: "/destinations/tibet" },
                { title: "multidestinations", href: "/destinations/multidestinations" }
            ]
        },
        {
            title:"Trip Types",
            link:"/trip-types"
        },
        {
            title:"Luxury Treks",
            link:"/luxury-treks"
        },
        {
            title:"Accommodations",
            link:"/accommodations"
        },
        {
            title:"Tailor Made",
            link:"/tailor-made"
        },
        { 
            title: "Others", 
            isDropdown: true,
            items: [
                { title: "About", href: "/about" },
                { title: "Contact", href: "/contact" },
                { title: "Blogs", href: "/blogs" },
            ]
        },
    ]
    const pathname=usePathname()
    const isActive=(path:string)=>pathname===path
    return (
        <>
        <div className='shadow-sm top-0  flex flex-col items-center justify-between px-16 py-2 bg-primary/5 w-full z-[9999]'>
            <div className='w-full flex justify-between items-center font-medium uppercase text-sm tracking-wide'> 
                <section className='flex gap-4'>
                    <Button isIconOnly className='h-10 w-10 border border-gray-200 hover:border-primary bg-white text-primary hpver:border-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                        <FaFacebookF size={20}/>
                    </Button>
                    <Button isIconOnly className='h-10 w-10 border border-gray-200 hover:border-primary bg-white text-primary hpver:border-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                        <FaInstagram size={20}/>
                    </Button>
                    <Button isIconOnly className='h-10 w-10 border border-gray-200 hover:border-primary bg-white text-primary hpver:border-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                        <FaXTwitter size={20}/>
                    </Button>
                </section>    
                <section className='size-20 rounded-full bg-primary'>

                </section>
                <div className='flex gap-8 items-center'>
                    <Button className='bg-transparent' isIconOnly><IoSearch size={28} className='text-[#E8B86D]'/></Button>
                    <Link href={"/tailor-made"}>
                        <Button className='bg-primary rounded-sm px-8 text-white' size='sm'>Customize trip</Button>
                    </Link>
                </div>
                
            </div>
            
            
        </div>
        <section className='w-full flex items-center justify-center pt-4 pb-4 bg-primary/20'>
                <div className='flex gap-8'>
                    {nav.map(item => (
                        item.isDropdown ? (
                        <Dropdown key={item.title} className='bg-primary/90 text-white rounded-sm' placement='bottom-start'>
                            <DropdownTrigger>
                                <div className="group font-normal text-sm text-gray-600 uppercase relative cursor-pointer tracking-wider flex items-center gap-2">
                                    <p>{item.title}</p>
                                    <IoMdArrowDropdown size={18} />
                                    <span
                                    className="absolute -bottom-0 left-0 h-[2px] bg-primary transition-all w-0 group-hover:w-4/5"
                                    ></span>
                                </div>
                            </DropdownTrigger>
                            <DropdownMenu aria-label={`${item.title} Menu`} variant='light'>
                            {item.items.map((subItem, subIndex) => (
                                <DropdownItem key={subIndex}>
                                <Link href={subItem.href}>
                                    {subItem.title}
                                </Link>
                                </DropdownItem>
                            ))}
                            </DropdownMenu>
                        </Dropdown>
                        ) : (
                        <Link key={item.title} href={item.link!}>
                            <div className='group relative'>
                            <p className='font-normal text-sm text-gray-600 uppercase tracking-wider'>{item.title}</p>
                            <span
                                className={` ${isActive(item.link!) ? "w-full" : "w-0"} bottom-[-4px] group-hover:w-full absolute bg-primary h-[2px] rounded-full transition-all duration-400`}
                            ></span>
                            </div>
                        </Link>
                        )
                    ))}
                    </div>

                </section>
        </>
    )
}

export default Navbar
