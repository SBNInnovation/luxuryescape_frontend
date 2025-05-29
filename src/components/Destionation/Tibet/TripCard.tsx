import { antic } from '@/utility/font';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Tour } from '@/types/types';

const TripCard: React.FC<Tour> = ({
  tourName,
  tourOverview,
  thumbnail,
  idealTime,
  cost,
  slug,
}) => {
  const slicedDesc = tourOverview?.slice(0, 200);
  return (
    <div className="w-full lg:h-[250px] h-auto flex lg:flex-row flex-col shadow-lg relative group overflow-hidden cursor-pointer custom-trip-card">
      <div className="lg:h-full h-[250px] lg:w-1/3 w-full overflow-hidden relative">
        <Image
          src={thumbnail}
          alt="Nepal"
          height={1000}
          width={1000}
          className="object-cover h-full w-full rounded-sm transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col gap-2 lg:px-8 px-4 lg:py-8 py-4 lg:w-2/3 w-full">
        <h1 className={`${antic.className} text-black lg:text-2xl text-xl`}>
          {tourName}
        </h1>
        <p className="lg:my-2 my-1 lg:text-sm text-xs text-black/65">
          {slicedDesc}
        </p>
        <div className="flex items-center justify-between gap-4">
          <p className={`${antic.className} text-xl text-black`}>
            <span className="text-sm">Starting from</span> ${cost}{' '}
            <span className="text-sm">/ per person</span>
          </p>
          <Link href={`/destinations/nepal/${slug}`}>
            <Button
              className="bg-primary rounded-sm mt-4 text-white px-8"
              size="sm"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>

      <p className="absolute top-0 right-0 py-2 rounded-bl-md px-6 bg-primary/5 border-primary border-l border-y text-primary text-xs">
        {idealTime.join(', ')}
      </p>
    </div>
  );
};

export default TripCard;
