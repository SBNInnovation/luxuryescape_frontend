import { Rowdies } from 'next/font/google';
import Link from 'next/link';

export const rowdies = Rowdies({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const TravelPermit = () => {
  return (
    <div>
      <div className="lg:px-24 px-4">
        <h2
          className="text-3xl font-bold mb- mt-8
        "
        >
          Travel Permit in Nepal
        </h2>
        <p className="text-justify my-8">
          Over the recent years, Nepal has laid down a good foundation for
          itself as a heaven for travelers, drawing in individuals from
          everywhere around the globe to investigate its brilliant territory.
          This does not shock anyone thinking that Nepal has various grand
          slopes and mountains, alongside the great Terai. Sufficiently genuine,
          the nation offers probably the most astounding journeying regions on
          the planet.
        </p>
        <p className="text-justify my-8">
          The perpetual blue skies, serene lakes, and radiant mountains of Nepal
          will leave you awestruck. Warm and cordial countenances grinning back
          at you will cause you to feel like you have gotten back after a long
          exile. The delightful spread of stars gleaming in the night sky will
          entrance your children more than the illuminated screens that their
          eyes are generally consistently stuck to. Nepal will stir the
          nature-darling in you and uncover its many shades, leaving you
          stunned. It will drive you to get away from your day-to-day
          interruptions and hop into the arms of nature. will ensure you land on
          your feet by assisting you with picking when to make the enormous
          stride. Each season in Nepal has something else to offer. Here, we
          have for you all the data that you might expect to pick the best
          opportunity to travel. Recorded for you are additionally the safety
          measures that you should take previously and keeping in mind that you
          are on your outing.
        </p>
        <p className="my-4">
          1. <span className="font-bold">February - December:</span> - cold wind
          with the temperature around 3 to 19C{' '}
        </p>
        <p className="my-4">
          2. <span className="font-bold">March - May:</span> - warm with the
          temperature around 8 to 28C{' '}
        </p>
        <p className="my-4">
          3. <span className="font-bold">June - September:</span> - Sunny and
          hot days with the temperature around 19 to 27C{' '}
        </p>
        <p className="my-4">
          4. <span className="font-bold">October - November :</span> - Slightly
          Cooler with the temperature around 18 to 22C{' '}
        </p>
        <p className={` my-8 text-3xl ${rowdies.className}`}>
          Trekking Permit in Nepal
        </p>
        <p className="my-8 text-justify">
          Travelers in Nepal are permitted to travel as FIT (Free Individual
          Trekker) or in a gathering of different sizes. Nonetheless, there are
          sure traveling locales known as &apos;Limited Areas&apos; that are
          exceptionally directed by the Government of Nepal and thus FITs are
          totally prohibited. Journeying here is permitted exclusively after
          procuring license from the Department of Immigration.
        </p>
        <p className="font-bold my-8 text-xl">
          For the further information kindly visit the Nepal Government Official
          site which is given below:{' '}
        </p>
        <Link
          href={'https://www.immigration.gov.np/page/trekking-permit'}
          target="_blank"
          className="text-primary underline underline-offset-2"
        >
          https://www.immigration.gov.np/page/trekking-permit
        </Link>
      </div>
    </div>
  );
};

export default TravelPermit;
