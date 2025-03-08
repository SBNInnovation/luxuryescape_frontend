"use client"
import { userSearch } from '@/services/search'
import Loader from '@/shared/Loader'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NoDataFound from '@/shared/NoData/NoData'

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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Search Results for: "{query}"</h1>
            
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full transition-colors ${
                active 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
        >
            {label} ({count})
        </button>
    );
};

// @ts-nocheck
const ResultCard = ({ item }:{item:any}) => {
    // Generate appropriate heading and details based on item type
    const getCardContent = () => {
        switch (item.type) {
            case 'trek':
                return {
                    title: item.trekName,
                    subtitle: `${item.difficultyLevel} Trek`,
                    link: `/treks/${item.slug}`,
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
                    rating: item.accommodationRating
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
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {item.thumbnail && (
                    <div className="relative h-48 w-full">
                        <img 
                            src={item.thumbnail} 
                            alt={content.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                <div className="p-4">
                    <div className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-white rounded-full capitalize" 
                         style={{ backgroundColor: item.type === 'trek' ? '#4CAF50' : item.type === 'tour' ? '#2196F3' : '#FF9800' }}>
                        {item.type}
                    </div>
                    <h3 className="text-lg font-semibold truncate">{content.title}</h3>
                    <p className="text-gray-600 mb-2">{content.subtitle}</p>
                    
                    <div className="flex justify-between items-center mt-2">
                        {content.price && (
                            <span className="font-bold text-blue-600">{content.price}</span>
                        )}
                        {content.rating && (
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`text-lg ${i < content.rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Search;