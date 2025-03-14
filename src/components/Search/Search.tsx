// @ts-nocheck
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
import { Button, Pagination } from '@nextui-org/react'

const Search = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const [filter, setFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 9; // Number of items to display per page
    
    const {data: searchData, isLoading} = useQuery({
        queryKey: ["searchData", query],
        queryFn: () => userSearch(query),
        enabled: !!query
    });

    // Filter results based on the selected filter
    const filteredResults = searchData?.data?.filter((item:any) => {
        if (filter === "all") return true;
        return item.type === filter.toLowerCase();
    }) || [];

    // Calculate pagination data
    const totalItems = filteredResults.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
    const currentItems = filteredResults.slice(startIndex, endIndex);

    const handleFilterChange = (newFilter:any) => {
        setFilter(newFilter);
        // Reset to page 1 when changing filters
        setCurrentPage(1);
    };

    const handlePageChange = (page:any) => {
        setCurrentPage(page);
        // Scroll to top when changing pages
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Get count of each type
    const getCounts = () => {
        if (!searchData?.data) return { all: 0, trek: 0, tour: 0, accommodation: 0 };
        
        const counts = {
            all: searchData.data.length,
            trek: searchData.data.filter((item:any) => item.type === 'trek').length,
            tour: searchData.data.filter((item:any) => item.type === 'tour').length,
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
                Showing {startIndex + 1}-{endIndex} of {totalItems} results
                {filter !== "all" && ` for ${filter}`}
                {` - Page ${currentPage} of ${totalPages || 1}`}
            </p>

            {/* Results grid */}
            {currentItems.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                        {currentItems.map((item:any) => (
                            <ResultCard key={item._id} item={item} />
                        ))}
                    </div>
                    
                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-12">
                            <Pagination 
                                total={totalPages}
                                initialPage={1}
                                page={currentPage}
                                onChange={handlePageChange}
                                showControls
                                color="primary"
                                classNames={{
                                    cursor: "bg-primary"
                                }}
                            />
                        </div>
                    )}
                </>
            ) : (
                <NoDataFound title={"No search results found."} />
            )}
        </div>
    );
};

const FilterButton = ({ label, count, active, onClick }:{label:any; count:any; active:any; onClick:any}) => {
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
                    subtitle: item.country,
                    link: `/destinations/${item?.country?.toLowerCase()}/${item.slug}`,
                    price: item.cost ? `$${item.cost}` : null
                };
            case 'accommodation':
                return {
                    title: item.accommodationTitle,
                    subtitle: item.accommodationLocation,
                    thumbnail: item.accommodationPics && item.accommodationPics.length > 0 ? item.accommodationPics[0] : null,
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
                    {/* Type Badge */}
                    <div 
                    className="inline-block absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded-full capitalize" 
                    style={{ backgroundColor: item.type === 'trek' ? '#4CAF50' : item.type === 'tour' ? '#2196F3' : '#FF9800' }}
                    >
                    {item.type}
                    </div>
                </div>
                )}
                {content.thumbnail && (
                <div className="relative h-56 w-full">
                    <Image 
                    src={content.thumbnail} 
                    alt={content.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    />
                    {/* Type Badge */}
                    <div 
                    className="inline-block absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded-full capitalize" 
                    style={{ backgroundColor: item.type === 'trek' ? '#4CAF50' : item.type === 'tour' ? '#2196F3' : '#FF9800' }}
                    >
                    {item.type}
                    </div>
                </div>
                )}
                <div className="px-4 py-2">
                <h3 className={`${antic.className} lg:text-2xl text-lg font-semibold truncate`}>{content.title}</h3>
                <p className="text-gray-600 mb-4 mt-2 text-sm">{content.subtitle}</p>
                
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