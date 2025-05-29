'use client';
import { getDestinationBySlug } from '@/services/destinations';
import Loader from '@/shared/Loader';
import { antic } from '@/utility/font';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Image from 'next/image';
import { getAccomsByDestinations } from '@/services/accom';
import { Accommodation } from '../Accommodations/Accommodations';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import Slider, { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CiLocationOn } from 'react-icons/ci';
import { settings } from '../Destionation/SinglePackage/TrekHighlights';
import { generateStars } from '@/utility/generateStars';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface props {
  id: string;
}

const SingleExplore: React.FC<props> = ({ id }) => {
  const { data: singleExplore, isLoading } = useQuery({
    queryKey: ['singleExplore', id],
    queryFn: () => getDestinationBySlug(id),
    enabled: !!id,
  });

  const { data: accomData, isLoading: accomLoading } = useQuery({
    queryKey: ['accommodationDestination', singleExplore?.data?._id],
    queryFn: () => getAccomsByDestinations(singleExplore?.data?._id),
    enabled: !!singleExplore,
  });

  const activities = singleExplore?.data?.destinations;

  const router = useRouter();

  if (isLoading) return <Loader />;
  return (
    <>
      <div className="flex flex-col items-start justify-start lg:px-32 px-4 lg:py-20 py-4 ">
        <Button
          onClick={() => router.back()}
          isIconOnly
          size="md"
          className="bg-primary text-white mb-4"
        >
          <ChevronLeft size={20} />
        </Button>
        <h1 className={`${antic.className} lg:text-5xl text-2xl text-primary`}>
          {singleExplore?.data?.title}
        </h1>
        <div className="w-full lg:h-[600px] h-[300px] lg:py-8 py-4">
          <Image
            src={singleExplore?.data?.thumbnail}
            alt={singleExplore?.data?.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="pb-8">
          {activities && activities.length > 3 ? (
            <div className="w-full my-16 relative">
              <Slider {...settings}>
                {activities.map(
                  (item: { caption: string; image: string }, index: number) => (
                    <div
                      className={`w-full sm:w-1/2 md:w-1/3 cursor-pointer h-[350px] px-4 relative ${
                        index % 2 === 0 ? 'mt-16' : 'mt-0'
                      }`}
                      key={index}
                    >
                      <div className="h-full relative">
                        <Image
                          src={item.image!}
                          alt={item.caption || 'Tour highlight'}
                          height={1000}
                          width={1000}
                          className="w-full h-full object-cover rounded-sm"
                        />
                        <div className="z-[10] flex gap-4 items-center rounded-b-sm absolute bottom-0 w-full px-4 py-4 bg-black/60 text-white">
                          <CiLocationOn size={20} className="text-primary" />
                          <h1>{item.caption}</h1>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </Slider>
            </div>
          ) : (
            <div className="grid w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 relative">
              {activities?.map((item: { caption: string; image: string }) => {
                return (
                  <div
                    key={item.caption}
                    className="w-full h-[240px] rounded-md relative"
                  >
                    <Image
                      src={item.image!}
                      alt="Image"
                      height={1000}
                      width={1000}
                      className="object-cover h-full w-full rounded-md shadow-md"
                    />
                    <div className="z-[10] flex gap-4 items-center rounded-b-sm absolute bottom-0 w-full px-4 py-4 bg-black/60 text-white">
                      <CiLocationOn size={20} className="text-primary" />
                      <h1>{item.caption}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <p className="lg:text-base text-sm text-justify lg:leading-8 leading-7">
          {singleExplore?.data?.description}
        </p>
      </div>
      {accomLoading && <Loader />}
      {accomData?.data?.formattedData?.length > 0 && (
        <div className="lg:px-32 px-4 py-8">
          <h1
            className={`${antic.className} lg:text-4xl text-2xl text-primary`}
          >
            Recommended Accommodations in {singleExplore?.data?.title}
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-8">
            {accomData?.data?.formattedData?.map((hotel: Accommodation) => (
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
                      <span className="text-sm font-semibold flex tems-xs gap-1 text-primary">
                        {generateStars(hotel.accommodationRating)}
                      </span>
                    </div>
                  </div>
                  {(hotel?.isPremium || hotel.accommodationRating === 6) && (
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold flex tems-xs gap-1 text-primary">
                          Premium
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-4 pt-2 pb-4 flex flex-col h-1/2">
                  <h3
                    className={`${antic.className} text-black text-2xl font-semibold mb-2`}
                  >
                    {hotel.accommodationTitle}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span className="text-sm">
                      {hotel.accommodationLocation}
                    </span>
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
      )}
    </>
  );
};

export default SingleExplore;
