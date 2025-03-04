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
import { FiFilter, FiChevronDown,FiClock } from 'react-icons/fi';
import TrekCard from './TrekCard';
import { getTreks } from '@/services/trek';
import WhyLuxury from '../Destionation/SinglePackage/WhyLuxury';
import NoDataFound from '@/shared/NoData/NoData';

// Define Trek interface
interface Trek {
  id: number;
  title: string;
  location: string;
  duration: number;
  rating: number;
  price: number;
  difficulty: string;
  image: string;
  description: string;
}

// Type for difficulty filter
type DifficultyFilter = "all" | "easy" | "moderate" | "challenging" | "difficult";

// Type for duration filter
type DurationFilter = "all" | "1-7" | "8-14" | "15";

// Manually added luxury treks data
const luxuryTreksData: Trek[] = [
  {
    id: 1,
    title: "Everest Base Camp Luxury Trek",
    location: "Everest Region, Nepal",
    duration: 14,
    rating: 4.9,
    price: 3800,
    difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2940&auto=format&fit=crop",
    description: "Experience the majestic Everest Base Camp trek with premium accommodations and gourmet meals along the way."
  },
  {
    id: 2,
    title: "Annapurna Luxury Circuit",
    location: "Annapurna Region, Nepal",
    duration: 18,
    rating: 4.8,
    price: 4200,
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2940&auto=format&fit=crop",
    description: "Trek the complete Annapurna Circuit with luxury lodges, personal porters, and exclusive cultural experiences."
  },
  {
    id: 3,
    title: "Manaslu Private Expedition",
    location: "Manaslu Region, Nepal",
    duration: 16,
    rating: 4.7,
    price: 5500,
    difficulty: "Difficult",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop",
    description: "An exclusive and private trek through the stunning Manaslu Circuit with premium services and helicopter transfers."
  },
  {
    id: 4,
    title: "Upper Mustang Royal Trek",
    location: "Mustang Region, Nepal",
    duration: 12,
    rating: 5.0,
    price: 6800,
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop",
    description: "Explore the mystical former Kingdom of Mustang with luxury camping and exclusive access to ancient monasteries."
  },
  {
    id: 5,
    title: "Langtang Valley Wellness Trek",
    location: "Langtang Region, Nepal",
    duration: 10,
    rating: 4.6,
    price: 3200,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop",
    description: "Combine trekking with daily yoga and meditation sessions in the serene Langtang Valley with premium accommodations."
  },
];

const LuxuryTreks: React.FC = () => {
    const {data: apiTreksData, isLoading} = useQuery({
        queryKey: ["treks"],
        queryFn: () => getTreks(1, 9, ""),
    });

    // State for filtering
    const [filterDifficulty, setFilterDifficulty] = useState<DifficultyFilter>("all");
    const [filterDuration, setFilterDuration] = useState<DurationFilter>("all");

    const filteredTreks = luxuryTreksData.filter(trek => {
        if (filterDifficulty !== "all" && trek.difficulty.toLowerCase() !== filterDifficulty.toLowerCase()) {
            return false;
        }
        
        if (filterDuration !== "all") {
            const [min, max] = filterDuration.split("-").map(Number);
            if (max) {
                return trek.duration >= min && trek.duration <= max;
            } else {
                return trek.duration >= parseInt(filterDuration);
            }
        }
        
        return true;
    });

    return (
        <main className="w-full">
            {/* Hero Section */}
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
                                <DropdownItem key="challenging">Challenging</DropdownItem>
                                <DropdownItem key="difficult">Difficult</DropdownItem>
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
                    </div>
                </div>
            </div>

            {/* Trek Cards Grid */}
            <div className="pb-4 lg:px-20 px-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTreks.map(trek => (
                        <TrekCard key={trek.id} trek={trek} />
                    ))}
                </div>

                {filteredTreks.length === 0 && (
                    <NoDataFound title='No Treks Found'/>
                )}
            </div>
            <div className='lg:px-20 px-4'>
                <WhyLuxury/>
            </div>
        </main>
    );
};

export default LuxuryTreks;