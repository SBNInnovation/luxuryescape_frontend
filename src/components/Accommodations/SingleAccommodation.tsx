'use client';
import { getAccomBySlug } from '@/services/accom';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCross, FaEye, FaMapMarkerAlt, FaStar, FaGem } from 'react-icons/fa';
import { Room } from './Accommodations';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Loader from '@/shared/Loader';
import Lightbox, {
  SlideImage,
  useController,
} from 'yet-another-react-lightbox';
import NextJsImage from './NextJsImage';
import { Button } from '@nextui-org/react';
import { antic } from '@/utility/font';
import Link from 'next/link';
import Affiliates from '@/shared/Affiliates';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface props {
  id: string;
}
const SingleAccommodation: React.FC<props> = ({ id }) => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<
    string | null
  >(null);
  const [open, setOpen] = useState(false);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number | null>(
    null
  );
  const [index, setIndex] = useState(0);

  const router = useRouter();

  const { data: hotel, isLoading } = useQuery({
    queryKey: ['singleAccommodation', id],
    queryFn: () => getAccomBySlug(id),
  });

  const openLightbox = (roomIndex: number, imageIndex: number) => {
    setSelectedRoomIndex(roomIndex);
    setIndex(imageIndex);
    setOpen(true);
  };

  const closeLightbox = () => {
    setOpen(false);
    setSelectedRoomIndex(null);
    setIndex(0);
  };

  const isPremium =
    hotel?.data?.isPremium || hotel?.data?.accommodationRating === 6;

  const getRatingDisplay = (rating: number) => {
    if (rating === 6) {
      return 'Premium 5 Star Standard';
    }
    if (rating === 5) {
      return '5 Star Standard';
    }
    return `${rating} Star Standard`;
  };

  if (isLoading) return <Loader />;

  return (
    <div className="py-12 lg:space-y-12 space-y-6 lg:px-32 px-4">
      {/* Main Image and Gallery */}
      <Button
        onClick={() => router.back()}
        isIconOnly
        size="md"
        className="bg-primary text-white mb-0"
      >
        <ChevronLeft size={20} />
      </Button>
      <div className="space-y-4">
        {/* Main Selected Image */}
        <div className="relative lg:h-[600px] h-[300px] rounded-lg overflow-hidden">
          <Image
            src={selectedGalleryImage || hotel?.data?.accommodationPics[0]}
            alt={hotel?.data?.accommodationTitle}
            fill
            className="object-cover"
            sizes="100vw"
          />

          {/* Premium Badge on Main Image */}
          {isPremium && (
            <div className="absolute top-6 left-6 premium-badge px-4 py-2 rounded-full">
              <div className="flex items-center gap-2">
                <FaGem className="w-4 h-4 text-white drop-shadow-sm" />
                <span className="text-sm font-bold text-white drop-shadow-sm">
                  Premium Accommodation
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-8 max-md:grid-cols-6 max-sm:grid-cols-4 gap-2">
          {hotel?.data?.accommodationPics.map((img: string, idx: number) => (
            <div
              key={idx}
              className={`relative lg:h-20 h-20 cursor-pointer rounded-lg overflow-hidden ring-2 ring-offset-2 transition-all ${
                selectedGalleryImage === img
                  ? isPremium
                    ? 'ring-yellow-400'
                    : 'ring-primary'
                  : 'ring-transparent hover:ring-primary'
              }`}
              onClick={() => setSelectedGalleryImage(img)}
            >
              <Image
                src={img}
                alt={`${hotel?.data?.accommodationTitle} gallery ${idx + 1}`}
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div>
            <h2
              className={`text-2xl sm:text-3xl font-medium mb-2 ${antic.className} ${
                isPremium ? 'premium-title' : 'text-primary'
              }`}
            >
              {hotel?.data?.accommodationTitle}
            </h2>
            <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
              <FaMapMarkerAlt className="w-4 h-4" />
              <span>{hotel?.data?.accommodationLocation}</span>
            </div>
          </div>

          {hotel?.data?.accommodationRating < 7 ? (
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                isPremium ? 'premium-rating-badge' : 'bg-primary/10'
              }`}
            >
              {isPremium && <FaGem className="w-4 h-4 text-white" />}
              <FaStar
                className={`w-4 h-4 ${isPremium ? 'text-primary' : 'text-primary'}`}
              />
              <span
                className={`font-semibold text-sm sm:text-base ${
                  isPremium ? 'text-primary' : 'text-primary'
                }`}
              >
                {getRatingDisplay(hotel?.data?.accommodationRating)}
              </span>
            </div>
          ) : hotel?.data?.accommodationRating === 7 ? (
            <div className="bg-primary px-4 py-2 rounded-full">
              <div className="flex items-center gap-1">
                <span className="text-base font-semibold flex tems-xs gap-1 text-white">
                  Boutique
                </span>
              </div>
            </div>
          ) : hotel?.data?.accommodationRating === 8 ? (
            <div className="bg-primary px-3 py-1 rounded-full">
              <div className="flex items-center gap-1">
                <span className="text-base font-semibold flex tems-xs gap-1 text-white">
                  Premium Boutique
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Overview Section */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold">About</h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          {hotel?.data?.accommodationDescription}
        </p>
      </div>

      {/* Features & Amenities */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold">Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6">
          {hotel?.data?.accommodationFeatures.map(
            (feature: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isPremium ? 'bg-yellow-500' : 'bg-primary'
                  }`}
                />
                <span className="text-gray-600 text-sm sm:text-base">
                  {feature}
                </span>
              </div>
            )
          )}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold">Amenities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6">
          {hotel?.data?.accommodationAmenities.map(
            (feature: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isPremium ? 'bg-yellow-500' : 'bg-primary'
                  }`}
                />
                <span className="text-gray-600 text-sm sm:text-base">
                  {feature}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Room Types */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold">Room Categories</h3>
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6">
          {hotel?.data?.rooms.map((room: Room, roomIndex: number) => (
            <div
              key={roomIndex}
              className={`border rounded-lg p-4 transition-colors ${
                isPremium
                  ? 'border-yellow-200 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/25'
                  : 'hover:border-primary'
              }`}
            >
              <div className="flex flex-col gap-4">
                <div
                  className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(roomIndex, 0)}
                >
                  <Image
                    src={room.roomPhotos[0]}
                    alt={room.roomTitle}
                    fill
                    className="object-cover"
                  />
                  <Button
                    onPress={() => openLightbox(roomIndex, 0)}
                    size="sm"
                    variant="shadow"
                    className={`text-xs absolute top-4 right-4 rounded-sm text-white flex items-center justify-center size-16 ${
                      isPremium
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-lg shadow-yellow-500/25'
                        : 'bg-primary'
                    }`}
                  >
                    View
                  </Button>
                </div>
                {selectedRoomIndex === roomIndex && (
                  <Lightbox
                    open={open}
                    close={closeLightbox}
                    slides={
                      room.roomPhotos.map((image) => ({
                        src: image,
                        width: 1000,
                        height: 1000,
                      })) as SlideImage[]
                    }
                    render={{ slide: NextJsImage }}
                    plugins={[Counter]}
                    counter={{
                      container: {
                        style: {
                          top: '0px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          color: 'white',
                          fontSize: '16px',
                          fontWeight: 500,
                          zIndex: 20,
                        },
                      },
                    }}
                    index={index}
                  />
                )}
                <div className="flex-1">
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isPremium ? 'text-yellow-700' : ''
                    }`}
                  >
                    {room.roomTitle}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {room.roomDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    {room.roomFacilities.map((feature: string, idx: number) => (
                      <span key={idx} className="flex items-center gap-1">
                        <span
                          className={`w-1 h-1 rounded-full ${
                            isPremium ? 'bg-yellow-400' : 'bg-gray-400'
                          }`}
                        ></span>
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

      <Affiliates />
    </div>
  );
};

export default SingleAccommodation;
