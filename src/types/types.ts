import { ReactNode } from 'react';

export interface Amenity {
  name: string;
  icon: ReactNode;
}

export interface RoomType {
  id: number;
  name: string;
  description: string;
  size: string;
  capacity: number;
  pricePerNight: number;
  bedType: string;
  mainImage: string;
}

export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  pricePerNight: number;
  description: string;
  longDescription: string;
  mainImage: string;
  galleryImages: string[];
  amenities: Amenity[];
  features: string[];
  policies: {
    checkIn: string;
    checkOut: string;
    cancellation: string;
    children: string;
    pets: string;
  };
  roomTypes: RoomType[];
  coordinates: {
    lat: number;
    lng: number;
  };
}