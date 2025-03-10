"use client"
import { userSearch } from '@/services/search'
import Loader from '@/shared/Loader'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NoDataFound from '@/shared/NoData/NoData'
import { antic } from '@/utility/font'
import { Button } from '@nextui-org/react'

const Search = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const query = searchParams.get("q") || "";
    const [filter, setFilter] = useState("all");
    
    const {data: searchData, isLoading} = useQuery({
        queryKey: ["searchData", query],
        queryFn: () => userSearch(query),
        enabled: !!query
    });

    // @ts-nocheck
    const filteredResults = searchData?.data?.filter((item:any) => {
        if (filter === "all") return true;
        return item.type === filter.toLowerCase();
    }) || [];

    // @ts-nocheck
    const handleFilterChange = (newFilter:any) => {
        setFilter(newFilter);
    };

    // Get count of each type
    const getCounts = () => {
        if (!searchData?.data) return { all: 0, trek: 0, tour: 0, accommodation: 0 };
        
        const counts = {
            all: searchData.data.length,
            // @ts-nocheck
            trek: searchData.data.filter((item:any) => item.type === 'trek').length,
            // @ts-nocheck
            tour: searchData.data.filter((item:any) => item.type === 'tour').length,
            // @ts-nocheck
            accommodation: searchData.data.filter((item:any) => item.type === 'accommodation').length
        };
        
        return counts;
    };
    
    const counts = getCounts();

    if (isLoading) return <Loader />;

    return (
        <div className="container mx-auto lg:px-16 px-4 py-8">
            <h1 className={`lg:text-3xl text-xl font-medium text-primary mb-4 ${antic.className}`}>Search Results for: "{query}"</h1>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
                <FilterButton 
                    label="All" 
                    count={counts.all}
                    active={filter === "all"} 
                    onClick={() => handleFilterChange("all")} 
                />
                <FilterButton 
                    label="Treks" 
                    count={counts.trek}
                    active={filter === "trek"} 
                    onClick={() => handleFilterChange("trek")} 
                />
                <FilterButton 
                    label="Tours" 
                    count={counts.tour}
                    active={filter === "tour"} 
                    onClick={() => handleFilterChange("tour")} 
                />
                <FilterButton 
                    label="Accommodations" 
                    count={counts.accommodation}
                    active={filter === "accommodation"} 
                    onClick={() => handleFilterChange("accommodation")} 
                />
            </div>
            
            {/* Results count */}
            <p className="text-gray-600 mb-6">
                Showing {filteredResults.length} of {searchData?.data?.length || 0} results
            </p>

            {/* Results grid */}
            {filteredResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                    {/* @ts-nocheck */}
                    {filteredResults.map((item:any) => (
                        <ResultCard key={item._id} item={item} />
                    ))}
                </div>
            ) : (
                <NoDataFound title={"No search results found."}/>
            )}
        </div>
    );
};

// @ts-nocheck
const FilterButton = ({ label, count, active, onClick }:{label:any;count:any,active:any;onClick:any}) => {
    return (
        <Button
            onPress={onClick}
            className={`px-4 text-sm py-1 rounded-full transition-colors ${
                active 
                ? "bg-primary text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
        >
            {label} ({count})
        </Button>
    );
};

// @ts-nocheck
const ResultCard = ({ item }:{item:any}) => {
    const getCardContent = () => {
        switch (item.type) {
            case 'trek':
                return {
                    title: item.trekName,
                    subtitle: `${item.difficultyLevel} Trek`,
                    link: `/luxury-treks/${item.slug}`,
                    price: item.cost ? `$${item.cost}` : null
                };
            case 'tour':
                return {
                    title: item.tourName,
                    subtitle: 'Tour Package',
                    link: `/tours/${item.slug}`,
                    price: item.cost ? `$${item.cost}` : null
                };
            case 'accommodation':
                return {
                    title: item.accommodationTitle,
                    subtitle: item.accommodationLocation,
                    link: `/accommodations/${item.slug}`,
                };
            default:
                return {
                    title: 'Unknown Item',
                    subtitle: '',
                    link: '#'
                };
        }
    };

const content = getCardContent();

    return (
        <Link href={content.link}>
            <div className="border relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Thumbnail Image */}
                {item.thumbnail && (
                <div className="relative h-56 w-full">
                    <Image 
                    src={item.thumbnail} 
                    alt={content.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    />
                    {/* Type Badge - Moved inside the image container for better positioning */}
                    <div 
                    className="inline-block absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded-full capitalize" 
                    style={{ backgroundColor: item.type === 'trek' ? '#4CAF50' : item.type === 'tour' ? '#2196F3' : '#FF9800' }}
                    >
                    {item.type}
                    </div>
                </div>
                )}
                
                <div className="p-4">
                <h3 className="text-lg font-semibold truncate">{content.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{content.subtitle}</p>
                
                {/* Fixed layout for bottom section */}
                <div className="flex items-center justify-between mt-4">
                    {/* Price on the left */}
                    <div>
                    {content.price && (
                        <span className="font-bold text-blue-600">{content.price}</span>
                    )}
                    </div>
                    
                    {/* Button on the right */}
                    <Button 
                    className="text-primary text-sm" 
                    variant="light"
                    size="sm"
                    >
                    View Details
                    </Button>
                </div>
                </div>
            </div>
        </Link>
    );
};

export default Search;