"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, ModalContent, ModalBody, Button } from '@nextui-org/react';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { Accommodation, Room } from './Accommodations';

interface HotelModalProps {
  hotel: Accommodation | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const HotelModal: React.FC<HotelModalProps> = ({ hotel, isOpen, onOpenChange }) => {
    const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

    if (!hotel) return null;

        return (
            <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            size="5xl"
            className='min-h-[90vh] py-2'
            scrollBehavior="inside"
            >
            <ModalContent>
                <ModalBody className="p-0">
                <div className="p-6 space-y-8">
                    {/* Main Image and Gallery */}
                    <div className="space-y-4">
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                        <Image
                        src={selectedGalleryImage || hotel.accommodationPics[0]}
                        alt={hotel.accommodationTitle}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <div 
                        className="relative h-24 cursor-pointer rounded-lg overflow-hidden ring-2 ring-offset-2 ring-transparent hover:ring-primary transition-all"
                        onClick={() => setSelectedGalleryImage(hotel.accommodationPics[0])}
                        >
                        <Image
                            src={hotel.accommodationPics[0]}
                            alt={hotel.accommodationTitle}
                            fill
                            className="object-cover"
                            sizes="25vw"
                        />
                        </div>
                        {hotel.accommodationPics.map((img:string, idx:number) => (
                        <div 
                            key={idx} 
                            className="relative h-24 cursor-pointer rounded-lg overflow-hidden ring-2 ring-offset-2 ring-transparent hover:ring-primary transition-all"
                            onClick={() => setSelectedGalleryImage(img)}
                        >
                            <Image
                            src={img}
                            alt={`${hotel.accommodationTitle} gallery ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="25vw"
                            />
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Hotel Header */}
                    <div className="border-b pb-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                        <h2 className="text-3xl font-bold mb-2">{hotel.accommodationTitle}</h2>
                        <div className="flex items-center gap-2 text-gray-600">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            <span>{hotel.accommodationLocation}</span>
                        </div>
                        </div>
                        <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                        <FaStar className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">{hotel.accommodationRating}/5</span>
                        </div>
                    </div>
                    </div>

                    {/* Overview Section */}
                    <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">About</h3>
                    <p className="text-gray-600 leading-relaxed">
                        {hotel.accommodationDescription}
                    </p>
                    </div>

                    {/* Features & Amenities */}
                    <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Features & Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-6">
                        {hotel.accommodationFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-gray-600">{feature}</span>
                        </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {hotel.accommodationAmenities.map((amenity, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
                        >
                            <span className="text-gray-700">{amenity}</span>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Room Types */}
                    <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Available Rooms</h3>
                    <div className="space-y-4">
                        {hotel.rooms.map((room:Room,index:number) => (
                        <div key={index} className="border rounded-lg p-4 hover:border-primary transition-colors">
                            <div className="flex gap-4">
                            <div className="relative w-40 h-32 rounded-lg overflow-hidden">
                                <Image
                                src={room.roomPhotos[0]}
                                alt={room.roomTitle}
                                fill
                                className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-2">{room.roomTitle}</h4>
                                <p className="text-gray-600 text-sm mb-3">{room.roomDescription}</p>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                    <span className="flex items-center gap-1">
                                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                        {room.roomStandard}
                                    </span>
                                    {room.roomFacilities.map((feature:string, idx:number) => (
                                    <span key={idx} className="flex items-center gap-1">
                                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                        {feature}
                                    </span>
                                    ))}
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Policies */}
                    <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Hotel Policies</h3>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-lg mb-4">Check-in & Check-out</h4>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                            <span className="text-gray-600">Check-in Time</span>
                            <span className="font-medium">{hotel.policies.checkIn}</span>
                            </div>
                            <div className="flex justify-between items-center">
                            <span className="text-gray-600">Check-out Time</span>
                            <span className="font-medium">{hotel.policies.checkOut}</span>
                            </div>
                        </div>
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-lg mb-4">Cancellation</h4>
                        <p className="text-gray-600">{hotel.policies.cancellation}</p>
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-lg mb-4">Children Policy</h4>
                        <p className="text-gray-600">{hotel.policies.children}</p>
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-lg mb-4">Pet Policy</h4>
                        <p className="text-gray-600">{hotel.policies.pets}</p>
                        </div>
                    </div> */}
                    </div>
                </div>
                </ModalBody>
            </ModalContent>
            </Modal>
        );
};

export default HotelModal;