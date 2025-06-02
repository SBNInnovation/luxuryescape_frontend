'use client';

import React, { useState } from 'react';
import { LuxuryPackage } from './types';
import { antic } from '@/utility/font';
import SharedTitle, { monsterrat } from '@/shared/SharedTitle';
import Image from 'next/image';
import { Button, Divider } from '@nextui-org/react';
import Link from 'next/link';
import { generateStars } from '@/utility/generateStars';

const DetailedItenary: React.FC<LuxuryPackage> = ({ itinerary }) => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  if (!itinerary || itinerary.length === 0) {
    return null;
  }

  const toggleDescription = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="w-full my-16">
      <h1
        className={`text-3xl ${antic.className} font-semibold text-primary my-8`}
      >
        Trip Itinerary
      </h1>
      <p className="mb-12 text-gray-700 text-justify">
        Embark on a thoughtfully curated journey through Nepal's most iconic
        landscapes and cultural treasures with this luxury itinerary. Each day
        has been designed to balance adventure, relaxation, and immersion in
        Nepal&apos;s rich heritage...
      </p>
      <div className="w-full flex flex-col gap-12">
        {itinerary.map((item, index) => {
          const isExpanded = expanded[index];
          const isLong = item?.description?.length! > 700;
          const visibleDescription =
            isExpanded || !isLong
              ? item?.description
              : item?.description?.slice(0, 700) + '...';

          return (
            <div
              className="flex gap-6 flex-col bg-white rounded-sm px-8 border border-gray-200 py-8"
              key={index}
            >
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-1/2">
                  <div className="bg-gray-100 p-4 rounded-sm">
                    <div className={`${monsterrat.className} flex flex-col`}>
                      <h1 className="lg:text-lg text-sm tracking-wider text-primary mb-2 uppercase font-semibold">
                        {item?.days || `Day ${index + 1}`}
                      </h1>
                      <h1 className={`lg:text-2xl text-lg ${antic.className}`}>
                        {item?.title || `Day ${index + 1}`}
                      </h1>
                    </div>
                  </div>
                  <p className="text-justify mt-4">
                    {visibleDescription}{' '}
                    {isLong && (
                      <button
                        onClick={() => toggleDescription(index)}
                        className="text-primary font-semibold ml-1"
                      >
                        {isExpanded ? 'See less' : 'See more'}
                      </button>
                    )}
                  </p>
                </div>
                <div className="w-full lg:w-1/2 lg:h-[400px] h-[250px]">
                  <Image
                    src={item?.image || '/placeholder-image.jpg'}
                    alt={item?.title || `Day ${index + 1}`}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-sm shadow-md"
                  />
                </div>
              </div>

              {index !== itinerary.length - 1 && <Divider />}

              {index !== itinerary.length - 1 && (
                <h1
                  className={`${antic.className} text-4xl max-sm:text-2xl my-2 text-primary`}
                >
                  Envisaged Hotels / Resorts
                </h1>
              )}

              {item?.hotels && index !== itinerary.length - 1 && (
                <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 gap-6">
                  {item?.hotels.map((hotel: any, hotelIndex: number) => (
                    <section key={hotelIndex}>
                      <Link href={`/accommodations/${hotel.slug}`}>
                        <div className="flex flex-col gap-4 cursor-pointer mt-8 relative">
                          {(hotel?.isPremium ||
                            hotel.accommodationRating === 6) && (
                            <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full">
                              <div className="flex items-center gap-1">
                                <span className="text-xs font-semibold flex tems-xs gap-1 text-primary">
                                  Premium
                                </span>
                              </div>
                            </div>
                          )}
                          <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full">
                            <div className="flex items-center gap-1">
                              <span className="text-xs font-semibold flex tems-xs gap-1 text-primary">
                                {generateStars(hotel.accommodationRating)}
                              </span>
                            </div>
                          </div>
                          <div className="h-[180px]">
                            <Image
                              src={
                                hotel?.accommodationPics[0] ||
                                '/placeholder-image.jpg'
                              }
                              alt={hotel?.accommodationTitle || 'Hotel'}
                              width={1000}
                              height={1000}
                              className="w-full h-full object-cover rounded-sm shadow-md"
                            />
                          </div>
                          <p className="font-semibold text-lg">
                            {hotel?.accommodationTitle}
                          </p>
                          <Button
                            variant="light"
                            className="text-primary underline underline-offset-2 rounded-sm"
                          >
                            View Details
                          </Button>
                        </div>
                      </Link>
                    </section>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailedItenary;
