"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io"
import { HiMenu } from "react-icons/hi"
import { CiSearch } from 'react-icons/ci'
import ExpandableSearch from './ExpandableSearch'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)
    const [searchOpen, setSearchOpen] = React.useState(false)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
            if (window.innerWidth > 768) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const nav = [
        {
            title: "Home",
            link: "/"
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
            title: "Trip Types",
            link: "/trip-types"
        },
        {
            title: "Luxury Treks",
            link: "/luxury-treks"
        },
        {
            title: "Accommodations",
            link: "/accommodations"
        },
        {
            title: "Tailor Made",
            link: "/tailor-made"
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
    const pathname = usePathname()
    const isActive = (path:string) => pathname === path


    return (
        <div className="relative">
            {/* Top bar */}
            <div className='shadow-sm top-0 flex flex-col items-center justify-between px-4 md:px-16 py-2 bg-primary/5 w-full z-[9999]'>
                <div className='w-full flex justify-between items-center font-medium uppercase text-sm tracking-wide'>
                    {/* Social Media Icons - Hidden on mobile */}
                    <section className='hidden md:flex gap-4'>
                        <Button isIconOnly className='h-10 w-10 border border-gray-200 hover:border-primary bg-white text-primary  p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                            <FaFacebookF size={20} />
                        </Button>
                        <Button isIconOnly className='h-10 w-10 border border-gray-200 hover:border-primary bg-white text-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                            <FaInstagram size={20} />
                        </Button>
                        <Button isIconOnly className='h-10 w-10 border border-gray-200 bg-white text-primary hover:border-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                            <FaXTwitter size={20} />
                        </Button>
                    </section>

                    {/* Logo */}
                    <section className='size-16 md:size-20 rounded-full bg-primary'>
                        {/* Your logo here */}
                    </section>

                    {/* Mobile menu button */}
                        <Button 
                            isIconOnly 
                            className='bg-transparent lg:hidden md:hidden flex'
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <IoMdClose size={28} className='text-primary' /> : <HiMenu size={28} className='text-primary' />}
                        </Button>

                    {/* Customize Trip - Visible on desktop */}
                    <div className='hidden md:flex items-center gap-8'>
                            <Button 
                                isIconOnly 
                                className='bg-primary rounded-2xl' 
                                onPress={() => setSearchOpen(!searchOpen)}
                            >
                                <CiSearch size={20} className='text-white' />
                            </Button>
                        <Link href={"/tailor-made"}>
                            <Button className='bg-primary rounded-sm px-8 text-white' size='sm'>Customize trip</Button>
                        </Link>
                    </div>
                    <ExpandableSearch isOpen={searchOpen} onOpenChange={setSearchOpen} />
                </div>
            </div>

            {/* Desktop Navigation */}
            <section className='hidden md:flex w-full items-center justify-center pt-4 pb-4 bg-primary/20'>
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
                                        className={`${isActive(item.link!) ? "w-full" : "w-0"} bottom-[-4px] group-hover:w-full absolute bg-primary h-[2px] rounded-full transition-all duration-400`}
                                    ></span>
                                </div>
                            </Link>
                        )
                    ))}
                </div>
            </section>

            {/* Mobile Sidebar */}
            <div 
                className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white z-[10000] shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} 
                style={{paddingTop: '80px'}} // Ensure space for navbar
            >
                <div className='flex flex-col gap-2 p-6 w-full'>
                    {/* Social Media Icons - Only on mobile sidebar */}
                    <div className='flex gap-4 justify-center mb-6'>
                        <Button isIconOnly className='h-8 w-8 border border-gray-200 hover:border-primary bg-white text-primary  rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                            <FaFacebookF size={16} />
                        </Button>
                        <Button isIconOnly className='h-8 w-8 border border-gray-200 hover:border-primary bg-white text-primary rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                            <FaInstagram size={16} />
                        </Button>
                        <Button isIconOnly className='h-8 w-8 border border-gray-200 hover:border-primary bg-white text-primary  rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                            <FaXTwitter size={16} />
                        </Button>
                    </div>
                    
                    {/* Main menu items */}
                    {nav.map((item, index) => (
                        <div key={index} className='w-full border-b border-gray-100 pb-3'>
                            {item.isDropdown ? (
                                <Dropdown className='bg-primary/90 text-white rounded-sm'>
                                    <DropdownTrigger>
                                        <div className="flex justify-between items-center w-full">
                                            <p className='font-normal text-gray-600 uppercase text-base'>{item.title}</p>
                                            <IoMdArrowDropdown size={18} />
                                        </div>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label={`${item.title} Menu`} variant='light'>
                                        {item.items.map((subItem, subIndex) => (
                                            <DropdownItem key={subIndex} onPress={() => setIsMenuOpen(false)}>
                                                <Link href={subItem.href}>
                                                    {subItem.title}
                                                </Link>
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            ) : (
                                <Link href={item.link!} onClick={() => setIsMenuOpen(false)}>
                                    <p className={`font-normal uppercase text-base ${isActive(item.link!) ? 'text-primary' : 'text-gray-600'}`}>{item.title}</p>
                                </Link>
                            )}
                        </div>
                    ))}
                    
                    {/* Customize Trip Button in Sidebar */}
                    <div className='mt-6'>
                        <Link href={"/tailor-made"} onClick={() => setIsMenuOpen(false)}>
                            <Button className='bg-primary w-full rounded-sm py-6 text-white' size='md'>
                                Customize trip
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Overlay when sidebar is open */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-[9999]" 
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </div>
    )
}

export default Navbar