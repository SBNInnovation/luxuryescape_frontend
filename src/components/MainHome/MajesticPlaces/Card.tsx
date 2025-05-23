import { antic } from '@/utility/font';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Cardprops {
  tourName: string;
  tourOverview: string;
  thumbnail: string;
  slug: string;
  country: string;
}
const Card: React.FC<Cardprops> = ({
  tourOverview,
  thumbnail,
  slug,
  tourName,
  country,
}) => {
  return (
    <div className="w-full flex flex-col bg-white shadow-md relative">
      <div className="h-[350px] w-full">
        <Image
          src={thumbnail}
          alt={tourName}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col p-4 gap-2 relative">
        <h1 className={`text-xl text-black ${antic.className}`}>{tourName}</h1>
        <p className="text-sm line-clamp-2 text-black/65">
          {tourOverview?.slice(0, 100)}
        </p>
        <Link href={`/destinations/${country.toLocaleLowerCase()}/${slug}`}>
          <p className="text-sm cursor-pointer mt-4 flex self-end underline underline-offset-2 text-primary">
            View Package
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
