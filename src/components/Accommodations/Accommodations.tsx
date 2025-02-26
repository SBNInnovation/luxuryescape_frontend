"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Select, SelectItem, Pagination, Selection } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { antic } from "@/utility/font";
import HotelModal from "./HotelModal";
import { useQuery } from "@tanstack/react-query";
import { getAccoms } from "@/services/accom";
import Loader from "@/shared/Loader";

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
}

export interface Room {
  roomTitle: string;
  roomPhotos: string[];
  roomStandard: string;
  roomDescription: string;
  roomFacilities: string[];
}

const ITEMS_PER_PAGE = 6;

const Accommodations: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Selection>(new Set(["all"]));
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedHotel, setSelectedHotel] = useState<Accommodation | null>(null);

  const { data: accomData,isLoading } = useQuery({
    queryKey: ["accommodations"],
    queryFn: () => getAccoms(1, ITEMS_PER_PAGE,""),
  });

  console.log(accomData);

  const locations = useMemo<string[]>(() => {
    const allLocations = accomData?.data?.map(
      (hotel: Accommodation) => hotel.accommodationLocation.toLowerCase()
    );
    return ["all", ...(allLocations ? (Array.from(new Set(allLocations)) as string[]) : [])];
  }, [accomData]);

  const filteredHotels = useMemo(() => {
    const selectedLocationValue = Array.from(selectedLocation)[0] as string;
    return accomData?.data?.filter((hotel: Accommodation) => {
      const matchesLocation =
        selectedLocationValue === "all" ||
        hotel.accommodationLocation.toLowerCase() === selectedLocationValue.toLowerCase();
      return matchesLocation;
    });
  }, [accomData, selectedLocation]);

  const totalPages = Math.ceil((filteredHotels?.length || 0) / ITEMS_PER_PAGE);
  const currentHotels = filteredHotels?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleHotelClick = (hotel: Accommodation): void => {
    setSelectedHotel(hotel);
    setIsModalOpen(true);
  };


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
        <div className="w-full items-center px-8 h-full flex flex-col justify-center absolute inset-0">
          <h1
            className={`${antic.className} text-6xl font-bold mb-6 text-white leading-tight text-center`}
          >
            Luxury <span className="text-primary">Accommodations</span> in Nepal
          </h1>
          <p className="text-xl text-white/90 font-light text-center max-w-2xl">
            Experience unparalleled luxury in the heart of the Himalayas
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 -mt-8 mb-12 relative z-10">
        <div className="bg-white rounded-sm shadow-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-48">
              <Select
                  placeholder="Location"
                  selectedKeys={selectedLocation}
                  radius="sm"
                  onSelectionChange={setSelectedLocation}
                  className="w-full"
                >
                  {locations.map((location: string) => (
                    <SelectItem key={location} value={location}>
                      {location.charAt(0).toUpperCase() + location.slice(1)}
                    </SelectItem>
                  ))}
                </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodations Grid */}
      <div className="container mx-auto px-4 mb-8">
        {isLoading && <Loader />}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentHotels?.map((hotel: Accommodation) => (
            <motion.div
              key={hotel._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleHotelClick(hotel)}
              className="bg-white rounded-sm overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
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
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{hotel.accommodationTitle}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span className="text-sm">{hotel.accommodationLocation}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                  {hotel.accommodationDescription}
                </p>
                <div className="flex items-center justify-end">
                  <button
                    className="bg-primary text-white rounded-sm px-4 py-2 text-sm hover:bg-primary/90 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleHotelClick(hotel);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mb-16">
          <Pagination
            total={totalPages}
            page={currentPage}
            onChange={(page) => setCurrentPage(page)}
            showControls
            className="overflow-visible"
          />
        </div>
      )}

      {/* Hotel Modal */}
      <HotelModal hotel={selectedHotel} isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Accommodations;