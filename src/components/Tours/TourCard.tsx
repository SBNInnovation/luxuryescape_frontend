import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, CardBody, CardFooter, Chip } from '@nextui-org/react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { Trek } from '@/types/types';
import { antic } from '@/utility/font';

export interface Tour {
  _id: string;
  slug: string;
  tourName: string;
  tourOverview: string;
  cost: number;
  thumbnail: string;
  country: string;
}

const TourCard: React.FC<Tour> = ({
  slug,
  tourName,
  tourOverview,
  country,
  cost,
  thumbnail,
}) => {
  return (
    <Card className="w-full rounded-sm">
      <div className="relative">
        <Image
          alt={tourName}
          className="w-full object-cover h-64"
          src={thumbnail}
          width={400}
          height={300}
        />
        <div className="absolute top-3 left-3">
          <div className="bg-primary text-white rounded-sm px-5 py-1 text-xs">
            {country}
          </div>
        </div>
      </div>

      <CardBody className="pb-4">
        <h3 className={`text-xl  mb-2 ${antic.className} text-black`}>
          {tourName}
        </h3>
        <span className="text-gray-600 text-sm">
          {tourOverview.slice(0, 100)}...
        </span>
      </CardBody>

      <CardFooter className="flex items-center justify-between">
        <div className="flex flex-col gap-1 w-fit">
          <p className="text-xs">Starting from</p>
          <p className="font-semibold text-primary text-lg">
            ${cost} <span className="text-xs text-gray-400">/ per person</span>
          </p>
        </div>
        <Link
          href={`/destinations/${country.toLocaleLowerCase()}/${slug}`}
          className="flex justify-end"
        >
          <Button
            size="sm"
            className=" px-4 bg-primary text-xs text-white rounded-md hover:opacity-90 transition-opacity"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
