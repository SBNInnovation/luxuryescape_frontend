'use client';
import { antic } from '@/utility/font';
import { Button, Link } from '@nextui-org/react';
import React from 'react';
import MainSlider from './MainSlider';
import DestinationandOverview from './DestinationandOverview';
import TripHighlights from './TrekHighlights';
import DetailedItenary from './DetailedItenary';
import FAQPackage from './FAQPackage';
import QuoteModal from './QuoteModal';
import { useQuery } from '@tanstack/react-query';
import { getTourBySlug } from '@/services/tours';
import Loader from '@/shared/Loader';
import { saveBookingDetails } from '@/utility/BookingStorageHandler';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

interface Props {
  id: string;
}

const SinglePackage: React.FC<Props> = ({ id }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const { data: singleTour, isLoading } = useQuery({
    queryKey: ['singleTour', id],
    queryFn: () => getTourBySlug(id),
  });

  const activitiesWithImages =
    singleTour?.data?.specificTour?.tourHighlights?.map(
      (activity: any, index: number) => ({
        activity: activity,
      })
    );

  const itineraryWithImages =
    singleTour?.data?.specificTour?.tourItinerary?.map(
      (item: any, index: number) => ({
        days: `Day ${item.day}`,
        title: item.title,
        description: item.description,
        image: singleTour.data.specificTour?.itineraryDayPhoto[index] || '',
        hotels: item.accommodation,
      })
    );

  const trip = {
    title: singleTour?.data?.specificTour?.tourName,
    totalDays: singleTour?.data?.specificTour?.duration,
    ideal_date: singleTour?.data?.specificTour?.idealTime?.join(', '),
    price: singleTour?.data?.specificTour?.cost,
    description: singleTour?.data?.specificTour?.tourOverview,
    activities: activitiesWithImages,
    inclusions: singleTour?.data?.specificTour?.tourInclusion,
    exclusions: singleTour?.data?.specificTour?.tourExclusion,
    itinerary: itineraryWithImages,
    faqs: singleTour?.data?.specificTour?.faq,
  };

  const handleBookNow = () => {
    // Create booking details object including all pricing details
    const bookingDetails = {
      adventureId: singleTour?.data?.specificTour?._id,
      adventureName: trip.title,
      adventureSlug: singleTour?.data?.specificTour?.slug,
      adventureType: 'Tour' as const,
      price: trip.price,
      quantity: 1,
      // Include pricing details from API response
      singleSupplementaryPremiumFiveStar:
        singleTour?.data?.bookingDetails?.singleSupplementaryPremiumFiveStar ||
        0,
      singleSupplementaryFourStar:
        singleTour?.data?.bookingDetails?.singleSupplementaryFourStar || 0,
      singleSupplementaryFiveStar:
        singleTour?.data?.bookingDetails?.singleSupplementaryFiveStar || 0,
      solo: singleTour?.data?.bookingDetails?.solo || 0,
      soloPremiumFiveStar:
        singleTour?.data?.bookingDetails?.soloPremiumFiveStar || 0,
      soloFourStar: singleTour?.data?.bookingDetails?.soloFourStar || 0,
      soloFiveStar: singleTour?.data?.bookingDetails?.soloFiveStar || 0,
      standardPremiumFiveStar:
        singleTour?.data?.bookingDetails?.standardPremiumFiveStar || 0,
      standardFourStar: singleTour?.data?.bookingDetails?.standardFourStar || 0,
      standardFiveStar: singleTour?.data?.bookingDetails?.standardFiveStar || 0,
    };

    saveBookingDetails(bookingDetails);

    router.push('/checkout');
  };

  if (isLoading) return <Loader />;

  return (
    <div className="lg:px-20 px-4 lg:my-16 my-4">
      {/* Header Section */}
      <div className="flex flex-col gap-6">
        <Button
          onClick={() => router.back()}
          isIconOnly
          size="md"
          className="bg-primary text-white mb-0"
        >
          <ChevronLeft size={20} />
        </Button>
        <h1
          className={`text-primary lg:text-5xl text-3xl tracking-wide ${antic.className}`}
        >
          {trip.title}
        </h1>
        <section className="flex lg:flex-row flex-col items-center justify-between">
          <div className="flex gap-20 items-center ">
            <main className="">
              <h1
                className={` font-semibold tracking-wide lg:text-base text-sm`}
              >
                Trip Duration
              </h1>
              <p>
                {trip.totalDays} days / {Number(trip?.totalDays) - 1} nights
              </p>
            </main>
            <main className="">
              <h1
                className={` font-semibold tracking-wide lg:text-base text-sm`}
              >
                Best Seasons
              </h1>
              <p>{trip.ideal_date}</p>
            </main>
            {trip?.price && (
              <main className="">
                <h1
                  className={` font-semibold tracking-wide lg:text-base text-sm`}
                >
                  Starting from
                </h1>
                <p>
                  ${trip.price} <span className="text-gray-500">/ person</span>
                </p>
              </main>
            )}
          </div>
          <div className="flex flex-col gap-2 lg:mt-0 mt-8">
            <Button
              onPress={() => setIsOpen(true)}
              variant="bordered"
              className="border border-primary rounded-sm px-8 py-0 text-primary"
            >
              Get Customized Quote
            </Button>
            <Button
              onPress={handleBookNow}
              className="bg-primary rounded-sm px-8 py-0 text-white"
            >
              Book with us
            </Button>
          </div>
        </section>
      </div>
      <QuoteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        Title={trip.title}
        type={singleTour?.data?.specificTour?.type}
        tourId={singleTour?.data?.specificTour?._id}
      />
      <MainSlider
        gallery={singleTour?.data?.specificTour?.gallery}
        thumbnail={singleTour?.data?.specificTour?.thumbnail}
      />
      <DestinationandOverview description={trip.description} />
      <TripHighlights
        activities={trip.activities}
        inclusions={trip.inclusions}
        exclusions={trip.exclusions}
      />
      <DetailedItenary itinerary={trip.itinerary} />
      {singleTour?.data?.specificTrek?.routeMap && (
        <div className="w-full flex flex-col gap-8 items-center justify-start">
          <h1
            className={`text-primary lg:text-3xl text-xl tracking-wide ${antic.className}`}
          >
            Route Map
          </h1>
          <div className="w-full h-[700px]">
            <Image
              src={singleTour?.data?.specificTrek?.routeMap}
              alt="image"
              height={1000}
              width={1000}
              className="object-contain w-full h-full rounded-2xl"
            />
          </div>
        </div>
      )}

      <FAQPackage faqs={trip.faqs} />

      <div className="bg-primary/10 w-full my-16 gap-4 flex flex-col items-center justify-center py-12">
        <h1
          className={` lg:text-5xl text-3xl tracking-wide ${antic.className}`}
        >
          Make Your Own
        </h1>
        <p className="w-4/5 text-justify lg:text-base text-sm my-4">
          Discover the freedom to design your dream luxury experience. Choose
          your destinations, hand-pick activities, and set the pace of your
          journey, all while staying in premier accommodations. Our custom
          travel packages allow you to create a unique itinerary that reflects
          your personal tastes and interests. Whether it' an exclusive cultural
          experience, a breathtaking helicopter tour, or a relaxing retreat,
          we're here to bring your vision to life with seamless planning and
          expert guidance. Enjoy a journey that is crafted uniquely for you,
          ensuring every moment is unforgettable.
        </p>
        <Button className="rounded-sm bg-primary px-12 text-white">
          <Link href="/tailor-made" className="text-white">
            Get Started
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SinglePackage;
