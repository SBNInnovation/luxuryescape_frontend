"use client";
import { antic } from "@/utility/font";
import { BreadcrumbItem, Breadcrumbs, Button, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import OverView from "./OverView";
import HighLight from "./HighLight";
import TripsInNepal from "./TripsInNepal";
import Accommodation from "./Accommodation";
import Link from "next/link";

const Nepal = () => {
    const overviewRef = useRef<HTMLDivElement | null>(null);
    const highlightsRef = useRef<HTMLDivElement | null>(null);
    const whyNepalRef = useRef<HTMLDivElement | null>(null);
    const featuredTripsRef = useRef<HTMLDivElement | null>(null);

    const [activeTab, setActiveTab] = useState("overview");

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.4,
        };

        const sections = [
            { ref: overviewRef, key: "overview" },
            { ref: highlightsRef, key: "highlights" },
            { ref: whyNepalRef, key: "whyNepal" },
            { ref: featuredTripsRef, key: "featuredTrips" },
        ];

        const observers: IntersectionObserver[] = [];

        sections.forEach(({ ref, key }) => {
            if (ref.current) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveTab(key);
                        }
                    });
                }, observerOptions);

                observer.observe(ref.current);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <div className="w-full lg:px-16 px-4 mb-8 lg:py-12 py-4">
            <Breadcrumbs className="mb-8">
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem>Destinations</BreadcrumbItem>
                <BreadcrumbItem>Nepal</BreadcrumbItem>
            </Breadcrumbs>
            <div className="lg:h-[700px] h-[400px] w-full relative">
                <Image
                    src={
                        "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt="Nepal"
                    height={1000}
                    width={1000}
                    className="object-cover h-full w-full rounded-md"
                />
                <div className="bg-black/30 inset-0 absolute rounded-md"></div>
                <div className="absolute lg:left-24 left-4 top-1/3 text-white flex flex-col lg:gap-8 gap-4">
                    <div className="lg:text-2xl text-xl font-light">Enjoy Luxury Tours and Packages in</div>
                    <span className={`${antic.className} text-primary lg:text-8xl text-4xl tracking-wider`}>
                        Nepal
                    </span>
                </div>
            </div>
            <section className="relative w-full mt-4">
                <div className="lg:flex hidden w-full flex-col items-center justify-center sticky top-0 bg-[#FDFBF7] z-10">
                    <Tabs
                        aria-label="Options"
                        color="primary"
                        variant="underlined"
                        selectedKey={activeTab}
                        classNames={{
                            tabList: "gap-6 w-full relative rounded-none py-2",
                            cursor: "w-full bg-primary h-[2px]",
                            tab: "max-w-fit px-2 h-12",
                            tabContent: "group-data-[selected=true]:text-primary text-lg font-medium tracking-wide",
                        }}
                        onSelectionChange={(tabKey) => {
                            switch (tabKey) {
                                case "overview":
                                    scrollToSection(overviewRef);
                                    break;
                                case "highlights":
                                    scrollToSection(highlightsRef);
                                    break;
                                case "whyNepal":
                                    scrollToSection(whyNepalRef);
                                    break;
                                case "featuredTrips":
                                    scrollToSection(featuredTripsRef);
                                    break;
                                default:
                                    break;
                            }
                        }}
                    >
                        <Tab key="overview" title="Overview" />
                        <Tab key="highlights" title="Highlights" />
                        <Tab key="whyNepal" title="Trips in Nepal" />
                        <Tab key="featuredTrips" title="Luxury Accommodations" />
                    </Tabs>
                </div>
                <div ref={overviewRef} className="w-full lg:py-16 py-4">
                    <OverView />
                </div>
                <div ref={highlightsRef} className="w-full lg:py-16 py-4">
                    <HighLight />
                </div>
                <div ref={whyNepalRef} className="w-full lg:py-16 py-4">
                    <TripsInNepal />
                </div>
                <div ref={featuredTripsRef} className="w-full lg:py-16 py-4">
                    <Accommodation />
                </div>
            </section>
            <div className="w-full mt-8">
                    <h1 className={`${antic.className} text-primary lg:text-5xl text-3xl lg:mb-8 mb-4`}>Other Destinations</h1>
                    <div className="flex lg:flex-row flex-col w-full">
                        <Link href={`/destinations/tibet`} className="lg:w-1/2 w-full">
                            <section className="w-full lg:h-[500px] h-[250px] relative group overflow-hidden">
                                <div className="w-full h-full transition-transform duration-500 group-hover:scale-110">
                                    <Image
                                        src={
                                            "https://images.unsplash.com/photo-1503641926155-5c17619b79d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        }
                                        alt="Tibet"
                                        height={1000}
                                        width={1000}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                                    <h3 className="text-white text-4xl font-semibold">Tibet</h3>
                                    <Button
                                        variant="bordered"
                                        className="text-white rounded-sm px-12 mt-4 border-white hover:bg-primary hover:text-white transition-colors"
                                    >
                                        View Trips
                                    </Button>
                                </div>
                            </section>
                        </Link>
                        <Link href={`/destinations/bhutan`} className="lg:w-1/2 w-full">
                            <section className="w-full lg:h-[500px] h-[250px] relative group overflow-hidden">
                                <div className="w-full h-full transition-transform duration-500 group-hover:scale-110">
                                    <Image
                                        src={
                                            "https://images.unsplash.com/photo-1729174518995-8c4546b3dd53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJodXRhbnxlbnwwfHwwfHx8MA%3D%3D"
                                        }
                                        alt="Tibet"
                                        height={1000}
                                        width={1000}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                                    <h3 className="text-white text-4xl font-semibold">Bhutan</h3>
                                    <Button
                                        variant="bordered"
                                        className="text-white rounded-sm px-12 mt-4 border-white hover:bg-primary hover:text-white transition-colors"
                                    >
                                        View Trips
                                    </Button>
                                </div>
                            </section>
                        </Link>
                    </div>
            </div>
            <div className='bg-primary/10 w-full mt-16 gap-4 flex flex-col items-center justify-center py-12'>
                <h1 className={` lg:text-5xl text-3xl tracking-wide ${antic.className}`}>Make Your Own</h1>
                <p className='w-4/5 text-justify lg:text-base text-sm my-4'>Discover the freedom to design your dream luxury experience. Choose your destinations, hand-pick activities, and set the pace of your journey, all while staying in premier accommodations. Our custom travel packages allow you to create a unique itinerary that reflects your personal tastes and interests. Whether it&apos; an exclusive cultural experience, a breathtaking helicopter tour, or a relaxing retreat, we're here to bring your vision to life with seamless planning and expert guidance. Enjoy a journey that is crafted uniquely for you, ensuring every moment is unforgettable.</p>
                <Button className='rounded-sm bg-primary px-12 text-white'>
                    <Link href='/tailor-made' className='text-white'>Get Started</Link>
                </Button>
            </div> 
        </div>
    );
};

export default Nepal;
