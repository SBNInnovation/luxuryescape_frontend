"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { antic } from '@/utility/font';
import { 
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
    Pagination
} from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { FiChevronDown, FiMapPin } from 'react-icons/fi';
import WhyLuxury from '../Destionation/SinglePackage/WhyLuxury';
import NoDataFound from '@/shared/NoData/NoData';
import { Trek } from '@/types/types';
import Loader from '@/shared/Loader';
import TourCard, { Tour } from './TourCard';
import { getTours } from '@/services/tours';


type CountryFilter = "all"| "Nepal" | "Bhutan" |"Tibet"|"Multidestinations"

const itemsPerPage=9

const Tours: React.FC = () => {
    const [page,setPage]=useState (1)
    const firstRef=useRef<HTMLDivElement>(null)
    const {data: apiTreksData, isLoading} = useQuery({
        queryKey: ["treks",page,itemsPerPage],
        queryFn: () => getTours(page, itemsPerPage, ""),
    });

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        firstRef?.current?.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})
    };

    const [filterCountry, setFilterCountry] = useState<CountryFilter>("all");

    const filteredTreks = apiTreksData?.data?.tours?.filter((trek:Trek) => {
        if (filterCountry !== "all" && trek.country !== filterCountry) {
            return false;
        }
        
        return true;
    });

    return (
        <main className="w-full">
            <div className="relative h-[500px] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1513614835783-51537729c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Tours in Nepal"
                    className="w-full h-full object-cover"
                    width={1920}
                    height={1080}
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div ref={firstRef} className="w-full items-center px-8 h-full flex flex-col justify-center absolute inset-0">
                    <h1
                        className={`${antic.className} text-6xl font-bold mb-6 text-white leading-tight text-center`}
                    >
                        Tailored Luxury <span className="text-primary">Tours</span> in Nepal
                    </h1>
                    <p className="text-xl text-white/90 font-light text-center max-w-2xl">
                        Experience unparalleled curated tours in the heart of the Himalayas
                    </p>
                </div>
            </div>
            {isLoading && <Loader/>}
            <div className="py-8 w-full lg:px-20 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h2 className={`${antic.className} text-primary text-3xl font-bold`}>Featured Luxury Tours</h2>
                    
                    <div className="flex flex-wrap gap-4">
                        
                        <Dropdown>
                            <DropdownTrigger>
                                <Button 
                                    variant="flat" 
                                    endContent={<FiChevronDown />}
                                    startContent={<FiMapPin />}
                                >
                                    {filterCountry === "all" ? "All Countries" : filterCountry}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu 
                                aria-label="Country options"
                                onAction={(key) => setFilterCountry(key as CountryFilter)}
                                selectedKeys={[filterCountry]}
                                selectionMode="single"
                            >
                                <DropdownItem key="all">All Countries</DropdownItem>
                                <DropdownItem key="Nepal">Nepal</DropdownItem>
                                <DropdownItem key="Bhutan">Bhutan</DropdownItem>
                                <DropdownItem key="Tibet">Tibet</DropdownItem>
                                <DropdownItem key="Multidestinations">Multiple Destinations</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>

            <div className="pb-4 lg:px-20 px-4 w-full">
                {filteredTreks?.length === 0 && (
                    <NoDataFound title='No Treks Found'/>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredTreks?.map((tour:Tour) => (
                        <TourCard key={tour._id} {...tour} />
                    ))}
                </div>
            </div>
            <div className="pb-4 lg:px-20 px-4 w-full flex justify-center my-8">
                {filteredTreks && filteredTreks.length > 0 && apiTreksData?.data?.pagination?.totalPages > 1 && (
                    <Pagination 
                        total={apiTreksData?.data?.pagination?.totalPages} 
                        color='primary' 
                        page={page} 
                        initialPage={1} 
                        onChange={handlePageChange}
                    />
                )}
            </div>
            <div className='lg:px-20 px-4'>
                <WhyLuxury/>
            </div>
        </main>
    );
};

export default Tours;