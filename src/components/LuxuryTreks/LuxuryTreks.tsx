"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { antic } from '@/utility/font';
import { 
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { FiFilter, FiChevronDown, FiClock, FiMapPin } from 'react-icons/fi';
import TrekCard from './TrekCard';
import { getTreks } from '@/services/trek';
import WhyLuxury from '../Destionation/SinglePackage/WhyLuxury';
import NoDataFound from '@/shared/NoData/NoData';
import { Trek } from '@/types/types';
import Loader from '@/shared/Loader';


type DifficultyFilter = "all" | "easy" | "moderate" | "hard";

type DurationFilter = "all" | "1-7" | "8-14" | "15";

type CountryFilter = "all"| "Nepal" | "Bhutan" |"Tibet"|"Multidestinations"

const LuxuryTreks: React.FC = () => {
    const {data: apiTreksData, isLoading} = useQuery({
        queryKey: ["treks"],
        queryFn: () => getTreks(1, 9, ""),
    });

    const [filterDifficulty, setFilterDifficulty] = useState<DifficultyFilter>("all");
    const [filterDuration, setFilterDuration] = useState<DurationFilter>("all");
    const [filterCountry, setFilterCountry] = useState<CountryFilter>("all");

    const filteredTreks = apiTreksData?.data?.treks?.filter((trek:Trek) => {
        if (filterDifficulty !== "all" && trek.difficultyLevel.toLowerCase() !== filterDifficulty.toLowerCase()) {
            return false;
        }
        
        if (filterDuration !== "all") {
            const [min, max] = filterDuration.split("-").map(Number);
            if (max) {
                return Number(trek.duration) >= min && Number(trek.duration) <= max;
            } else {
                return Number(trek.duration) >= parseInt(filterDuration);
            }
        }
        
        if (filterCountry !== "all" && trek.country !== filterCountry) {
            return false;
        }
        
        return true;
    });

    return (
        <main className="w-full">
            <div className="relative h-[500px] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1672343961201-2ef9a7b037f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Luxury Treks in Nepal"
                    className="w-full h-full object-cover"
                    width={1920}
                    height={1080}
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="w-full items-center px-8 h-full flex flex-col justify-center absolute inset-0">
                    <h1
                        className={`${antic.className} text-6xl font-bold mb-6 text-white leading-tight text-center`}
                    >
                        Luxury <span className="text-primary">Treks</span> in Nepal
                    </h1>
                    <p className="text-xl text-white/90 font-light text-center max-w-2xl">
                        Experience unparalleled thrilling adventures in the heart of the Himalayas
                    </p>
                </div>
            </div>
            {isLoading && <Loader/>}
            <div className="py-8 w-full lg:px-20 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h2 className={`${antic.className} text-primary text-3xl font-bold`}>Featured Luxury Treks</h2>
                    
                    <div className="flex flex-wrap gap-4">
                        
                        <Dropdown>
                            <DropdownTrigger>
                                <Button 
                                    variant="flat" 
                                    endContent={<FiChevronDown />}
                                    startContent={<FiFilter />}
                                >
                                    {filterDifficulty === "all" ? "All Difficulties" : 
                                    `${filterDifficulty.charAt(0).toUpperCase()}${filterDifficulty.slice(1)}`}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu 
                                aria-label="Difficulty options"
                                onAction={(key) => setFilterDifficulty(key as DifficultyFilter)}
                                selectedKeys={[filterDifficulty]}
                                selectionMode="single"
                            >
                                <DropdownItem key="all">All Difficulties</DropdownItem>
                                <DropdownItem key="easy">Easy</DropdownItem>
                                <DropdownItem key="moderate">Moderate</DropdownItem>
                                <DropdownItem key="hard">Hard</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        
                        <Dropdown>
                            <DropdownTrigger>
                                <Button 
                                    variant="flat" 
                                    endContent={<FiChevronDown />}
                                    startContent={<FiClock />}
                                >
                                    {filterDuration === "all" ? "All Durations" : 
                                    filterDuration === "1-7" ? "1-7 Days" : 
                                    filterDuration === "8-14" ? "8-14 Days" : "15+ Days"}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu 
                                aria-label="Duration options"
                                onAction={(key) => setFilterDuration(key as DurationFilter)}
                                selectedKeys={[filterDuration]}
                                selectionMode="single"
                            >
                                <DropdownItem key="all">All Durations</DropdownItem>
                                <DropdownItem key="1-7">1-7 Days</DropdownItem>
                                <DropdownItem key="8-14">8-14 Days</DropdownItem>
                                <DropdownItem key="15">15+ Days</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTreks?.map((trek:Trek) => (
                        <TrekCard key={trek._id} {...trek} />
                    ))}
                </div>

                
            </div>
            <div className='lg:px-20 px-4'>
                <WhyLuxury/>
            </div>
        </main>
    );
};

export default LuxuryTreks;