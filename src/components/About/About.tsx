import { antic } from '@/utility/font'
import { Button, Divider } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'
import {GiTempleGate} from 'react-icons/gi'
import {MdHotel} from 'react-icons/md'
import Link from 'next/link'

const About = () => {
  const destinations = [
    { src:"https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: 'Nepal', name: 'Nepal' },
    { src: "https://images.unsplash.com/photo-1709866535864-93035b6208e8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , alt: 'Tibet', name: 'Tibet' },
    { src: "https://images.unsplash.com/photo-1729174518995-8c4546b3dd53?q=80&w=2840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: 'Bhutan', name: 'Bhutan' },
  ];
  return (
    <div className='w-full flex items-center justify-center flex-col'>
        {/* First section - About intro */}
        <div className='flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 my-8 md:my-12 lg:my-16 w-full'>
            <h1 className={`${antic.className} text-2xl md:text-3xl text-primary text-center lg:text-left`}>About Nepal Luxury Escapes</h1>
            <Divider className='my-4 w-full'/>
            <div className='flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-12'>
                <div className='w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]'>
                  <Image src={"https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='About' height={1000} width={1000} className='object-cover h-full w-full rounded-lg'/>
                </div>
                <div className='flex items-center flex-col justify-center w-full lg:w-1/2 mt-6 lg:mt-0'>
                  <p className='text-justify px-0 sm:px-4 lg:px-12 font-light'>
At Nepal Luxury Escapes, we specialize in crafting exceptional journeys that redefine the art of travel. Our mission is to provide discerning travelers with unforgettable experiences in Nepal, Bhutan, and Tibet, combining opulence, adventure, and cultural immersion. From private helicopter tours over the Himalayas to luxury safaris in pristine jungles and serene mountain retreats, every detail of our itineraries is tailored to perfection.  

We pride ourselves on our commitment to quality and personalized service, offering curated stays at the finest accommodations, guided tours with expert local professionals, and exclusive activities that reflect the authentic charm of the Himalayas. Whether you seek thrilling adventures, tranquil getaways, or cultural discoveries, we ensure your journey is seamless, indulgent, and truly one-of-a-kind.  

With a passion for excellence and a dedication to sustainability, Nepal Luxury Escapes invites you to explore the wonders of the Himalayas in unparalleled comfort and style. Let us create your dream luxury escape, where every moment is crafted to inspire, delight, and leave lasting memories.
                  </p>
                </div>
            </div>
        </div>

        {/* Second section - Specialization */}
        <div className='flex flex-col md:flex-row items-start justify-center px-4 sm:px-8 md:px-12 lg:px-24 my-8 md:my-12 lg:my-16 w-full gap-8 lg:gap-12'>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <h1 className={`text-2xl md:text-3xl ${antic.className} text-primary mb-4`}>Crafting Exceptional Luxury Experiences Across the Himalayas</h1>
            <p className='text-justify text-gray-600 text-sm'>
              At Nepal Luxury Escapes, we go beyond standard travel planning to create exceptional journeys tailored to your unique desires. With a focus on luxury, authenticity, and personalized service, we ensure every aspect of your trip reflects the highest standards. Whether you're exploring the cultural wonders of Bhutan, the majestic Himalayas of Nepal, or the serene landscapes of Tibet, our expertise guarantees an unforgettable experience.
            </p>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 flex items-center justify-center flex-col mt-6 md:mt-0'>
            <h1 className={`text-2xl md:text-3xl text-primary self-start mb-4 ${antic.className}`}>Our Specialization</h1>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <AiFillEdit className='text-primary' size={36}/>
                <h1 className='uppercase text-base font-light tracking-wider'>Tailored Itineraries</h1>
              </div>
              <div className='flex flex-col gap-2'>
                <MdHotel className='text-primary' size={36}/>
                <h1 className='uppercase text-base font-light tracking-wider'>Unmatched Luxury & Comfort</h1>
              </div>
              <div className='flex flex-col gap-2'>
                <GiTempleGate className='text-primary' size={36}/>
                <h1 className='uppercase text-base font-light tracking-wider'>Authentic Cultural Immersion</h1>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 h-[300px] mt-6 lg:mt-0 mx-auto md:mx-0'>
              <Image src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5fGVufDB8fDB8fHww" alt='about-page' height={1000} width={1000} className='object-cover h-full w-full rounded-lg'/>
          </div>
        </div>

        {/* Third section - Mission */}
        <div className='flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 my-8 md:my-12 lg:my-16 w-full'>
          <div className='w-full lg:w-4/5 px-0 sm:px-4 md:px-8 lg:px-12 text-center'>
              <h1 className={`text-2xl md:text-3xl ${antic.className} text-primary mb-4`}>Our Mission - Creating Unforgettable Luxury Journeys in the Himalayas</h1>
              <p className='text-center text-gray-600 my-5 md:my-10 tracking-wide font-light text-base md:text-lg'>
                At Nepal Luxury Escapes, our mission is to craft journeys that go beyond travel – we aim to create unforgettable experiences that resonate with your passions and aspirations. By combining luxury, authenticity, and personalization, we ensure every trip is a masterpiece designed exclusively for you.
              </p>
              <p className='text-center text-gray-600 my-5 md:my-10 tracking-wide font-light text-base md:text-lg'>
                We are committed to showcasing the best of Nepal, Bhutan, and Tibet, blending their natural beauty, cultural richness, and unique heritage into every tour. From the soaring peaks of the Himalayas to ancient monasteries and serene valleys, our mission is to connect travelers with the essence of these majestic destinations.
              </p>
              <p className='text-center text-gray-600 my-5 md:my-10 tracking-wide font-light text-base md:text-lg'>
                Our focus is on delivering the highest standards of service, comfort, and exclusivity. Whether it's a private helicopter tour, luxury safari, or a serene mountain retreat, we take pride in offering exceptional experiences that reflect the unique character of the Himalayas.
              </p>
              <p className='text-center text-gray-600 my-5 md:my-10 tracking-wide font-light text-base md:text-lg'>
                Above all, we believe travel should inspire, rejuvenate, and create lasting memories. Our mission is to ensure every traveler leaves with a deeper connection to the destinations, a sense of wonder, and the desire to return to the magical lands of Nepal, Bhutan, and Tibet.
              </p>
          </div>
        </div>

        {/* Fourth section - Destinations */}
        <div className='flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 mt-8 md:mt-12 lg:mt-16 w-full'>
          <h1 className={`${antic.className} text-2xl md:text-3xl text-primary text-center`}>Explore with Nepal Luxury Escapes</h1>
          <div className='flex flex-col md:flex-row items-center justify-center my-8 md:my-12 lg:my-16 w-full gap-6 md:gap-4'>
            {destinations.map((destination, index) => (
              <div key={index} className='w-full md:w-1/3 h-[400px] md:h-[500px] lg:h-[600px] relative group mb-6 md:mb-0'>
                {/* Image with black overlay (appears only on hover) */}
                <div className='relative h-full w-full overflow-hidden'>
                  <Image
                    src={destination.src}
                    alt={destination.alt}
                    height={1000}
                    width={1000}
                    className='object-cover h-full w-full'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-20 md:bg-opacity-0 md:group-hover:bg-opacity-30 transition-opacity'></div>
                </div>

                {/* Vertical Country Name (horizontal on mobile, vertical on desktop) */}
                <div className='absolute top-1/2 left-4 group-hover:rotate-0 -rotate-90 transition-rotate duration-500'>
                  <p className='text-white text-3xl md:text-4xl font-extralight tracking-widest'>
                    {destination.name}
                  </p>
                </div>

                {/* View Destination Button (always visible on mobile, hover on desktop) */}
                <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity'>
                  <Link href={`/destinations/${destination.name.toLowerCase()}`}>
                    <Button variant='light' className='px-6 md:px-12 text-white ' endContent={<FaArrowRight />}>
                      View Destination
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        
    </div>
  )
}

export default About