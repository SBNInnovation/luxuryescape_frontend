'use client';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Pagination,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { antic } from '@/utility/font';
import { useQuery } from '@tanstack/react-query';
import { getAccoms } from '@/services/accom';
import Loader from '@/shared/Loader';
import Link from 'next/link';
import { FiChevronDown, FiMapPin } from 'react-icons/fi';
import Affiliates from '@/shared/Affiliates';
import { generateStars } from '../../utility/generateStars';
import DestinationAffiliates from '../ExploreNepal/DestinationAffiliates';

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
  isPremium: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  country: string;
  destination: {
    _id: string;
    title: string;
    slug: string;
    description: string;
    thumbnail: string;
  };
}

export interface Room {
  roomTitle: string;
  roomPhotos: string[];
  roomStandard: string;
  roomDescription: string;
  roomFacilities: string[];
}

const ITEMS_PER_PAGE = 9;

type CountryFilter = 'all' | 'Nepal' | 'Bhutan' | 'Tibet';
type StarRatingFilter = 'all' | '4' | '5' | '6' | '7' | '8';
type LocationFilter = 'all' | string;

const Accommodations: React.FC = () => {
  const [filterCountry, setFilterCountry] = useState<CountryFilter>('all');
  const [filterStarRating, setFilterStarRating] =
    useState<StarRatingFilter>('all');
  const [filterLocation, setFilterLocation] = useState<LocationFilter>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const firstRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterCountry, filterStarRating, filterLocation]);

  // Reset location filter when country changes
  useEffect(() => {
    setFilterLocation('all');
  }, [filterCountry]);

  // Fetch ALL accommodations data instead of paginated data
  const { data: accomData, isLoading } = useQuery({
    queryKey: ['accommodations'],
    queryFn: () => getAccoms(1, 1000, ''), // Fetch a large number to get all accommodations
  });

  // Get unique destinations for the selected country
  const availableDestinations = useMemo(() => {
    if (!accomData?.data?.formattedData || filterCountry === 'all') return [];

    const destinations = accomData.data.formattedData
      .filter((hotel: Accommodation) => hotel.country === filterCountry)
      .map((hotel: Accommodation) => hotel.destination?.title)
      .filter((title: string) => title) // Filter out any undefined/null titles
      .filter(
        (title: string, index: number, self: string[]) =>
          self.indexOf(title) === index // Remove duplicates
      )
      .sort(); // Sort alphabetically

    return destinations;
  }, [accomData, filterCountry]);

  const filteredHotels = useMemo(() => {
    if (!accomData?.data?.formattedData) return [];

    return accomData.data.formattedData.filter((hotel: Accommodation) => {
      const matchesCountry =
        filterCountry === 'all' || hotel.country.includes(filterCountry);

      const matchesLocation =
        filterLocation === 'all' || hotel.destination?.title === filterLocation;

      // Updated rating filter logic
      let matchesStarRating = true;
      if (filterStarRating !== 'all') {
        const filterRating = parseInt(filterStarRating);
        if (filterRating === 6) {
          // Premium 5 Star - check for rating 6 OR isPremium flag
          matchesStarRating =
            hotel.accommodationRating === 6 || hotel.isPremium;
        } else if (filterRating === 7) {
          // Boutique - check for rating 7
          matchesStarRating = hotel.accommodationRating === 7;
        } else if (filterRating === 8) {
          // Premium Boutique - check for rating 8
          matchesStarRating = hotel.accommodationRating === 8;
        } else {
          // Regular 4 or 5 star ratings
          matchesStarRating = hotel.accommodationRating === filterRating;
        }
      }

      return matchesCountry && matchesLocation && matchesStarRating;
    });
  }, [accomData, filterCountry, filterLocation, filterStarRating]);

  // Paginate the filtered results
  const paginatedHotels = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredHotels.slice(startIndex, endIndex);
  }, [filteredHotels, currentPage]);

  const totalFilteredItems = filteredHotels.length;
  const totalPages = Math.ceil(totalFilteredItems / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    firstRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  const handleCountryChange = (country: CountryFilter) => {
    setFilterCountry(country);
    setFilterLocation('all'); // Reset location when country changes
  };

  // Function to get filter button text
  const getFilterButtonText = (rating: StarRatingFilter) => {
    switch (rating) {
      case 'all':
        return 'All Star Standard';
      case '6':
        return 'Premium 5 Star';
      case '7':
        return 'Boutique';
      case '8':
        return 'Premium Boutique';
      default:
        return `${rating} Star Standard`;
    }
  };

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
        <div
          ref={firstRef}
          className="w-full items-center px-8 h-full flex flex-col justify-center absolute inset-0"
        >
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
          <h2 className={`${antic.className} text-primary text-3xl font-bold`}>
            Featured Luxury Accommodations
          </h2>

          <div className="flex flex-wrap gap-4">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="flat"
                  endContent={<FiChevronDown />}
                  startContent={<FiMapPin />}
                >
                  {filterCountry === 'all' ? 'All Countries' : filterCountry}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Country options"
                onAction={(key) => handleCountryChange(key as CountryFilter)}
                selectedKeys={[filterCountry]}
                selectionMode="single"
              >
                <DropdownItem key="all">All Countries</DropdownItem>
                <DropdownItem key="Nepal">Nepal</DropdownItem>
                <DropdownItem key="Bhutan">Bhutan</DropdownItem>
                <DropdownItem key="Tibet">Tibet</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Location Filter Dropdown - Only show when a specific country is selected */}
            {filterCountry !== 'all' && availableDestinations.length > 0 && (
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="flat"
                    endContent={<FiChevronDown />}
                    startContent={<FaMapMarkerAlt />}
                  >
                    {filterLocation === 'all'
                      ? 'All Locations'
                      : filterLocation}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Location options"
                  onAction={(key) => setFilterLocation(key as LocationFilter)}
                  selectedKeys={[filterLocation]}
                  selectionMode="single"
                >
                  <DropdownItem key="all">All Locations</DropdownItem>
                  {availableDestinations.map((destination: string) => (
                    <DropdownItem key={destination}>{destination}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            )}
            {/* Star Rating Filter Dropdown */}
            <Dropdown>
              <DropdownTrigger>
                <Button variant="flat" endContent={<FiChevronDown />}>
                  {getFilterButtonText(filterStarRating)}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Star rating options"
                onAction={(key) => setFilterStarRating(key as StarRatingFilter)}
                selectedKeys={[filterStarRating.toString()]}
                selectionMode="single"
              >
                <DropdownItem key="all">All Star Ratings</DropdownItem>
                <DropdownItem key="8">
                  <div className="flex items-center gap-1">
                    <span>Premium Boutique</span>
                  </div>
                </DropdownItem>
                <DropdownItem key="7">
                  <div className="flex items-center gap-1">
                    <span>Boutique</span>
                  </div>
                </DropdownItem>
                <DropdownItem key="6">
                  <div className="flex items-center gap-1">
                    <span>Premium 5 Star</span>
                  </div>
                </DropdownItem>
                <DropdownItem key="5">
                  <div className="flex items-center gap-1">
                    <span>5 Star Standard</span>
                  </div>
                </DropdownItem>
                <DropdownItem key="4">
                  <div className="flex items-center gap-1">
                    <span>4 Star Standard</span>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Country Filter Dropdown */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-8">
        {isLoading && <Loader />}
        {!isLoading && filteredHotels.length === 0 && (
          <div className="flex justify-center items-center py-16">
            <p className="text-lg text-gray-500">
              No accommodations found for the selected filters.
            </p>
          </div>
        )}
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
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
                {hotel.accommodationRating < 7 && (
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold flex tems-xs gap-1 text-primary">
                        {generateStars(hotel.accommodationRating)}
                      </span>
                    </div>
                  </div>
                )}

                {(hotel?.isPremium || hotel.accommodationRating === 6) && (
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold flex tems-xs gap-1 text-primary">
                        Premium
                      </span>
                    </div>
                  </div>
                )}
                {hotel.accommodationRating === 7 ? (
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold flex tems-xs gap-1 text-primary">
                        Boutique
                      </span>
                    </div>
                  </div>
                ) : hotel.accommodationRating === 8 ? (
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold flex tems-xs gap-1 text-primary">
                        Premium Boutique
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="px-4 pt-2 pb-4 flex flex-col h-1/2">
                <h3
                  className={`${antic.className} text-black text-2xl font-semibold mb-2`}
                >
                  {hotel.accommodationTitle}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span className="text-sm">{hotel.accommodationLocation}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                  {hotel.accommodationDescription?.slice(0, 100)}
                </p>
                <div className="flex items-center justify-end mt-auto">
                  <Link href={`/accommodations/${hotel.slug}`}>
                    <Button
                      size="sm"
                      className="px-4 bg-primary text-xs text-white rounded-md hover:opacity-90 transition-opacity"
                    >
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
      <div className="container mx-auto px-4 pb-8 w-full">
        {filterLocation === 'all' ? (
          <Affiliates />
        ) : (
          <DestinationAffiliates destination={filterLocation} />
        )}
      </div>
    </div>
  );
};

export default Accommodations;
