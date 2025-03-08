import SharedTitle from '@/shared/SharedTitle'
import { antic } from '@/utility/font'
import { Button, Link } from '@nextui-org/react'
import React from 'react'
import { FaClock, FaHandsHelping, FaMapMarkerAlt, FaMoneyBillWave, FaPlane } from 'react-icons/fa'

const BookTrip = () => {
    return (
        <div className='w-full flex my-16 px-16 gap-12'>
            <div className='sticky top-4 px-4 py-4 w-1/2 h-fit'>
                <SharedTitle title='Planning a trip ? ' subtitle='let us help'/>
                <p className='text-sm text-justify mt-4'>Planning a luxury trip is simple! Start by selecting your dream destination, decide on your ideal trip duration, and estimate your budget. Then, let us step in to craft the perfect itinerary, ensuring every detail is tailored for an exceptional travel experience.</p>
                <Link href='/tailor-made'><Button className='px-12 mt-6 bg-primary text-white rounded-sm'>Plan trip</Button></Link>
            </div>
            <div className='w-1/2 p-4'>
                <ol className="relative border-l border-primary ">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center size-12 bg-primary rounded-full -left-6 ring-8 ring-white ">
                    <FaMapMarkerAlt className="text-white" size={22} />
                    </span>
                    <h3 className={`text-2xl tracking-wide font-semibold text-primary mb-1 ml-4 ${antic.className}`}>Select Destination</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 ml-4">
                    Explore our curated luxury destinations across Nepal, Bhutan, and Tibet, each offering unique experiences, from serene retreats to adventure-filled getaways. Choose the destination that resonates with your travel dreams.
                    </p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center size-12 bg-primary rounded-full -left-6 ring-8 ring-white ">
                    <FaClock className="text-white" size={22} />
                    </span>
                    <h3 className={`text-2xl tracking-wide font-semibold text-primary mb-1 ml-4 ${antic.className}`}>Decide Trip Duration</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 ml-4">
                    Consider how much time you’d like to immerse yourself in each location. Whether it’s a weekend escape or a multi-week adventure, our team will ensure every moment is memorable.
                    </p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center size-12 bg-primary rounded-full -left-6 ring-8 ring-white ">
                    <FaMoneyBillWave className="text-white" size={22} />
                    </span>
                    <h3 className={`text-2xl tracking-wide font-semibold text-primary mb-1 ml-4 ${antic.className}`}>Estimate Budget</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 ml-4">
                    Set a budget that aligns with your desired level of comfort and exclusivity. From private tours to five-star accommodations, we’ll tailor the experience to fit your expectations.
                    </p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center size-12 bg-primary rounded-full -left-6 ring-8 ring-white ">
                    <FaHandsHelping className="text-white" size={22} />
                    </span>
                    <h3 className={`text-2xl tracking-wide font-semibold text-primary mb-1 ml-4 ${antic.className}`}>Let Us Help</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 ml-4">
                    Once you’ve outlined your preferences, our specialists will create a bespoke itinerary designed to meet your unique travel style, offering personalized services and exceptional experiences.
                    </p>
                </li>
                <li className="ml-6">
                    <span className="absolute flex items-center justify-center size-12 bg-primary rounded-full -left-6 ring-8 ring-white ">
                    <FaPlane className="text-white" size={22} />
                    </span>
                    <h3 className={`text-2xl tracking-wide font-semibold text-primary mb-1 ml-4 ${antic.className}`}>Plan the Action</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 ml-4">
                    With everything set, all that’s left is for you to prepare for your journey. Pack your essentials and get ready for an extraordinary luxury adventure curated just for you!
                    </p>
                </li>
                </ol>
            </div>
        </div>
    )
}

export default BookTrip
