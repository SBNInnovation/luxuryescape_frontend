import React, { useState } from 'react';
import { LuxuryPackage } from './types';
import { antic } from '@/utility/font';
import SharedTitle, { monsterrat } from '@/shared/SharedTitle';
import Image from 'next/image';

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
        Trek Itinerary
      </h1>
      <p className="mb-12 text-gray-700 text-justify">
        Embark on a thoughtfully curated journey through Nepal's most iconic
        landscapes...
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailedItenary;
