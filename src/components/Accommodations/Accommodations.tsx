"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import { Pagination, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { antic } from "@/utility/font";
import { useQuery } from "@tanstack/react-query";
import { getAccoms } from "@/services/accom";
import Loader from "@/shared/Loader";
import Link from "next/link";
import { FiChevronDown, FiMapPin } from "react-icons/fi";

export interface Accommodation {
  _id: string;
  accommodationPics: string[];
  accommodationTitle: string;
  slug: string;
  accommodationLocation: string;
  accommodationRating: number;
  accommodationDescription: string;
  accommodationFeatures: string[];
  accommodationAmenities: string[];
  rooms: Room[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  country:string
}

export interface Room {
  roomTitle: string;
  roomPhotos: string[];
  roomStandard: string;
  roomDescription: string;
  roomFacilities: string[];
}

const ITEMS_PER_PAGE = 9;

type CountryFilter = "all" | "Nepal" | "Bhutan" | "Tibet"

const Accommodations: React.FC = () => {
  const [filterCountry, setFilterCountry] = useState<CountryFilter>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const firstRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterCountry]);

  const { data: accomData, isLoading } = useQuery({
    queryKey: ["accommodations", currentPage],
    queryFn: () => getAccoms(currentPage, ITEMS_PER_PAGE, ""),
  });

  const filteredHotels = useMemo(() => {
    return accomData?.data?.accommodations?.filter((hotel: Accommodation) => {
      return filterCountry === "all" || 
          hotel.country.includes(filterCountry);
    });
  }, [accomData, filterCountry]);

  const totalFilteredItems = filteredHotels?.length || 0;
  const totalFilteredPages = Math.ceil(totalFilteredItems / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    firstRef?.current?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  };
  
  const isFiltering = filterCountry !== "all";
  const totalPages = isFiltering 
    ? totalFilteredPages 
    : accomData?.data?.pagination?.totalPages || 1;

  const paginatedHotels = useMemo(() => {
    if (isFiltering) {
      return filteredHotels?.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      );
    }
    return filteredHotels;
  }, [filteredHotels, currentPage, isFiltering]);

  return (
    <div className="min-h-screen">
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg"
          alt="Luxury Hotels in Nepal"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div ref={firstRef} className="w-full items-center px-8 h-full flex flex-col justify-center absolute inset-0">
          <h1
            className={`${antic.className} lg:text-6xl text-4xl font-bold mb-6 text-white leading-tight text-center`}
          >
            Luxury <span className="text-primary">Accommodations</span> in Nepal
          </h1>
          <p className="lg:text-xl text-lg text-white/90 font-light text-center max-w-2xl">
            Experience unparalleled luxury in the heart of the Himalayas
          </p>
        </div>
      </div>

      <div className="py-8 w-full lg:px-20 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className={`${antic.className} text-primary text-3xl font-bold`}>Featured Luxury Accommodations</h2>
          
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
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-8">
        {isLoading && <Loader />}
        {paginatedHotels?.length === 0 && (
          <div className="flex justify-center items-center py-16">
            <p className="text-lg text-gray-500">No accommodations found for the selected filter.</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedHotels?.map((hotel: Accommodation) => (
            <motion.div
              key={hotel._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-sm overflow-hidden relative shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64">
                <Image
                  src={hotel.accommodationPics[0]}
                  alt={hotel.accommodationTitle}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-semibold">{hotel.accommodationRating}</span>
                  </div>
                </div>
              </div>
              <div className="px-4 pt-2 pb-4 flex flex-col h-1/2">
                <h3 className={`${antic.className} text-primary text-xl font-semibold mb-2`}>{hotel.accommodationTitle}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span className="text-sm">{hotel.accommodationLocation}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                  {hotel.accommodationDescription?.slice(0, 100)}
                </p>
                <div className="flex items-center justify-end mt-auto">
                  <Link href={`/accommodations/${hotel.slug}`}>
                    <Button size='sm' className="px-4 bg-primary text-xs text-white rounded-md hover:opacity-90 transition-opacity">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mb-16">
          <Pagination
            total={totalPages}
            page={currentPage}
            initialPage={1}
            onChange={handlePageChange}
            showControls
            className="overflow-visible"
            color="primary"
          />
        </div>
      )}
    </div>
  );
};

export default Accommodations