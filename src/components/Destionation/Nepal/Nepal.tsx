"use client"
import { antic } from '@/utility/font'
import { BreadcrumbItem, Breadcrumbs, Tab, Tabs } from '@nextui-org/react'
import Image from 'next/image'
import React, { useRef } from 'react'
import OverView from './OverView'

const Nepal = () => {
    // Create refs for each section
    const overviewRef = useRef(null)
    const highlightsRef = useRef(null)
    const whyNepalRef = useRef(null)
    const featuredTripsRef = useRef(null)
    const whereToStayRef = useRef(null)
    const tripInspirationRef = useRef(null)

    const scrollToSection = (ref:any) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='w-full px-16 mb-8 py-12'>
            <Breadcrumbs className='mb-8'>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Destinations</BreadcrumbItem>
                <BreadcrumbItem>Nepal</BreadcrumbItem>
            </Breadcrumbs>
            <div className='h-[700px] w-full relative'>
                <Image src={"https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Nepal' height={1000} width={1000} className='object-cover h-full w-full rounded-md'/>
                <div className='bg-black/30 inset-0 absolute rounded-md'></div>
                <div className='absolute left-24 top-1/3 text-white flex flex-col gap-8'>
                    <div className='text-2xl font-light'>Enjoy Luxury Tours and Packages in</div>
                    <span className={`${antic.className} text-primary text-8xl tracking-wider`}>Nepal</span> 
                </div>
            </div>
            <section className='relative w-full mt-4'>
                <div className="flex w-full flex-col items-center justify-center sticky top-0 bg-[#FDFBF7] z-10">
                    <Tabs 
                        aria-label="Options" 
                        color="primary" 
                        variant="underlined"
                        classNames={{
                            tabList: "gap-6 w-full relative rounded-none p-0",
                            cursor: "w-full bg-primary h-[2px]",
                            tab: "max-w-fit px-2 h-12",
                            tabContent: "group-data-[selected=true]:text-primary text-lg font-medium tracking-wide"
                        }}
                        onSelectionChange={(tabKey) => {
                            switch(tabKey) {
                                case 'overview':
                                    scrollToSection(overviewRef)
                                    break
                                case 'highlights':
                                    scrollToSection(highlightsRef)
                                    break
                                case 'whyNepal':
                                    scrollToSection(whyNepalRef)
                                    break
                                case 'featuredTrips':
                                    scrollToSection(featuredTripsRef)
                                    break
                                case 'whereToStay':
                                    scrollToSection(whereToStayRef)
                                    break
                                case 'tripInspiration':
                                    scrollToSection(tripInspirationRef)
                                    break
                                default:
                                    break
                            }
                        }}
                    >
                        <Tab key="overview" title="Overview" />
                        <Tab key="highlights" title="Highlights" />
                        <Tab key="whyNepal" title="Why Nepal" />
                        <Tab key="featuredTrips" title="Featured Trips" />
                        <Tab key="whereToStay" title="Where to Stay" />
                        <Tab key="tripInspiration" title="Trip Inspiration" />
                    </Tabs>
                </div> 
                <div ref={overviewRef} className='w-full py-16'>
                    <OverView/>
                </div>
                <div ref={highlightsRef} className='w-full py-16'>
                    <h2 className='text-3xl font-semibold mb-4'>Highlights</h2>
                    <p>Content for the Highlights section...</p>
                </div>
                <div ref={whyNepalRef} className='w-full py-16'>
                    <h2 className='text-3xl font-semibold mb-4'>Why Nepal</h2>
                    <p>Content for the Why Nepal section...</p>
                </div>
                <div ref={featuredTripsRef} className='w-full py-16'>
                    <h2 className='text-3xl font-semibold mb-4'>Featured Trips</h2>
                    <p>Content for the Featured Trips section...</p>
                </div>
                <div ref={whereToStayRef} className='w-full py-16'>
                    <h2 className='text-3xl font-semibold mb-4'>Where to Stay</h2>
                    <p>Content for the Where to Stay section...</p>
                </div>
                <div ref={tripInspirationRef} className='w-full py-16'>
                    <h2 className='text-3xl font-semibold mb-4'>Trip Inspiration</h2>
                    <p>Content for the Trip Inspiration section...</p>
                </div>
            </section>
        </div>
    )
}

export default Nepal
