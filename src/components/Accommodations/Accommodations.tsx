"use client"
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Button, Input, Select, SelectItem, Pagination } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaSearch } from 'react-icons/fa';
import { antic } from '@/utility/font';
import { Hotel } from '@/types/types';
import HotelModal from './HotelModal';
import hotels from './Hotels';

type LocationType = "all" | "kathmandu" | "pokhara" | "chitwan";

const ITEMS_PER_PAGE = 6;

const Accommodations: React.FC = () => {
  // States for filtering and pagination
  const [selectedLocation, setSelectedLocation] = useState<LocationType>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  // Filter hotels based on location and search query
  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      const matchesLocation = selectedLocation === "all" || hotel.location.toLowerCase() === selectedLocation;
      const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hotel.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesLocation && matchesSearch;
    });
  }, [selectedLocation, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredHotels.length / ITEMS_PER_PAGE);
  const currentHotels = filteredHotels.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleHotelClick = (hotel: Hotel): void => {
    setSelectedHotel(hotel);
    setIsModalOpen(true);
  };

  const formatPrice = (price: number): string => `$${price.toLocaleString()}`;

  return (
    <div className="0">
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
          <h1 className={`${antic.className} text-6xl font-bold mb-6 text-white leading-tight text-center`}>
            Luxury <span className='text-primary'>Accommodations</span> in Nepal
          </h1>
          <p className="text-xl text-white/90 font-light text-center max-w-2xl">
            Experience unparalleled luxury in the heart of the Himalayas
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}

        <div className="container mx-auto px-4 -mt-8 mb-12 relative z-10">
        <div className="bg-white rounded-sm shadow-lg p-6">
            <div className="flex items-center gap-4">
            <div className="flex-1">
                <Input
                placeholder="Search accommodations..."
                startContent={<FaSearch className="text-gray-400" />}
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                }}
                radius='sm'
                classNames={{
                    input: "h-12"
                }}
                />
            </div>
            <div className="w-48">
                <Select
                placeholder="Location"
                selectedKeys={[selectedLocation]}
                radius='sm'
                onChange={(e) => {
                    setSelectedLocation(e.target.value as LocationType);
                    setCurrentPage(1);
                }}
                >
                <SelectItem key="all" value="all">All Locations</SelectItem>
                <SelectItem key="kathmandu" value="kathmandu">Kathmandu</SelectItem>
                <SelectItem key="pokhara" value="pokhara">Pokhara</SelectItem>
                <SelectItem key="chitwan" value="chitwan">Chitwan</SelectItem>
                </Select>
            </div>
            <Button 
                color="primary"
                
                className="px-4 rounded-sm"
                startContent={<FaSearch />}
            >
                Search
            </Button>
            </div>
        </div>
        </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 mb-6">
        <p className="text-gray-600">
          Showing {filteredHotels.length} {filteredHotels.length === 1 ? 'result' : 'results'}
        </p>
      </div>

      {/* Accommodations Grid */}
      <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentHotels.map((hotel) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleHotelClick(hotel)}
              className="bg-white rounded-sm overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={hotel.mainImage}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-semibold">{hotel.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span className="text-sm">{hotel.location}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{hotel.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(hotel.pricePerNight)}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">/ night</span>
                  </div>
                  <Button 
                    className='bg-primary rounded-sm px-4 text-white'
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleHotelClick(hotel);
                    }}
                  >
                    View Details
                  </Button>
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
            onChange={setCurrentPage}
            showControls
            className="overflow-visible"
          />
        </div>
      )}

      {/* Hotel Modal */}
      <HotelModal 
        hotel={selectedHotel}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default Accommodations;