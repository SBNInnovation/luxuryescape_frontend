import Link from 'next/link';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAffiliates } from '@/services/affiliates';
import { antic } from '@/utility/font';
import Image from 'next/image';
import { Loader } from 'lucide-react';

interface DestinationAffiliatesProps {
  destination: string;
}
const DestinationAffiliates: React.FC<DestinationAffiliatesProps> = (
  destination
) => {
  const { data: affiliates, isLoading: isAffiliatesLoading } = useQuery({
    queryKey: ['affiliates'],
    queryFn: () => getAffiliates(),
  });

  const lowerCaseDestination = destination?.destination?.toLowerCase();

  const filteredAffiliates = affiliates?.data?.data?.filter(
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any) => item?.destination?.toLowerCase() === lowerCaseDestination
  );

  if (filteredAffiliates?.length === 0) return null;
  return (
    <div className="px-32 max-sm:px-4">
      {isAffiliatesLoading && <Loader />}
      <p
        className={`text-primary text-3xl max-sm:text-2xl mt-12 ${antic.className}`}
      >
        Recommended Hotels/Resorts
      </p>
      <div className="grid grid-cols-10 max-md:grid-cols-6 max-sm:grid-cols-5 gap-4 mt-8 ">
        {filteredAffiliates?.map(
          (item: {
            affiliatedAccommodation: string;
            link: string;
            thumbnail: string;
          }) =>
            item?.link ? (
              <Link
                href={item.link}
                key={item.affiliatedAccommodation}
                target="_blank"
              >
                <div className="flex flex-col gap-4 border border-gray-300 rounded-xl items-center justify-center hover:border-primary duration-150 p-2">
                  <div className="w-full h-20 max-md:h-16 max-sm:h-12">
                    <Image
                      src={item?.thumbnail}
                      alt={item.affiliatedAccommodation}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </div>
              </Link>
            ) : null
        )}
      </div>
    </div>
  );
};

export default DestinationAffiliates;
