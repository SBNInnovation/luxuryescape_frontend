import { antic } from '@/utility/font';
import React, { useState } from 'react';
import AccommodationCard from './AccommodationCard';
import { useQuery } from '@tanstack/react-query';
import { getAccomsByCountry } from '@/services/accom';
import Loader from '@/shared/Loader';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

const Accommodation = () => {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const { data: accommodationData, isLoading } = useQuery({
    queryKey: ['accommodations-tibet', currentPage],
    queryFn: () => getAccomsByCountry(currentPage, ITEMS_PER_PAGE, 'Tibet'),
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full lg:-mb-8 mb-4 flex flex-col items-center justify-center">
      <h1
        className={`${antic.className} text-primary lg:text-5xl text-3xl lg:mb-8 mb-4 self-start`}
      >
        Luxury Accommodations
      </h1>
      <p className="text-justify lg:text-base text-sm self-start">
        Tibet offers a unique blend of luxury, serenity, and cultural immersion,
        making it an unparalleled destination for discerning travelers.
        Experience the finest accommodations, from five-star resorts in Lhasa
        with breathtaking views of the Potala Palace to secluded boutique lodges
        nestled in the Himalayan highlands. Indulge in world-class hospitality
        with personalized services, spa retreats inspired by Tibetan wellness
        traditions, and private suites overlooking stunning landscapes. Whether
        you prefer a tranquil stay near sacred monasteries, a luxury retreat
        with panoramic mountain vistas, or an exclusive eco-lodge near Tibet’s
        pristine lakes, our handpicked accommodations ensure an opulent and
        unforgettable journey through the Roof of the World.
      </p>
      <div className="w-full flex gap-12 items-center justify-center flex-wrap my-12">
        {accommodationData?.data?.formattedData?.map(
          (
            item: any,
            index: number //eslint disable-line @typescript-eslint/no-explicit-any
          ) => (
            <AccommodationCard
              key={index}
              name={item.accommodationTitle}
              image={item.accommodationPics[0]}
              location={item.accommodationLocation}
              description={item.accommodationDescription}
              slug={item.slug}
            />
          )
        )}
      </div>
      <Link href="/accommodations">
        <Button
          className="rounded-sm px-12 bg-primary text-sm text-white mt-4"
          size="lg"
        >
          Explore All
        </Button>
      </Link>
    </div>
  );
};

export default Accommodation;
