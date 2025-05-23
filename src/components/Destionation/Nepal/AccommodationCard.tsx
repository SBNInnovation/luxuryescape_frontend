import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { antic } from '@/utility/font';
import Link from 'next/link';
import { generateStars } from '@/utility/generateStars';

interface AccommodationCardProps {
  name: string;
  image: string;
  description: string;
  location: string;
  slug: string;
  accommodationRating: number;
}
const AccommodationCard: React.FC<AccommodationCardProps> = ({
  name,
  image,
  description,
  location,
  slug,
  accommodationRating,
}) => {
  const slicedDesc = description.slice(0, 100);
  return (
    <Link href={`/accommodations/${slug}`}>
      <div className="w-[350px] relative flex flex-col items-center justify-center group  custom-trip-card cursor-pointer">
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full z-[100]">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold flex tems-xs gap-1 text-primary">
              {generateStars(accommodationRating)}
            </span>
          </div>
        </div>
        {accommodationRating === 6 && (
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full z-[100]">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold flex tems-xs gap-1 text-primary">
                Premium
              </span>
            </div>
          </div>
        )}
        <div className="w-full h-[200px] overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={1000}
            height={1000}
            className="w-full h-full object-cover transition transform duration-500 group-hover:scale-[1.1]"
          />
        </div>
        <div className="w-full py-4 flex items-center justify-center flex-col px-4">
          <p className="text-primary font-semibold text-sm">{location}</p>
          <h1 className={`${antic.className} mt-2  text-xl `}>{name}</h1>
          <p className="text-sm text-gray-500 text-center my-2">
            {slicedDesc}...
          </p>
          <Button
            className="rounded-sm w-fit px-8 bg-primary text-sm text-white mt-4"
            size="sm"
          >
            View Details
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default AccommodationCard;
