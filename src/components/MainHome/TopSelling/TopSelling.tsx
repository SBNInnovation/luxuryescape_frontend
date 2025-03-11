"use client"
import SharedTitle from '@/shared/SharedTitle'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { antic } from '@/utility/font'
import { mainSlideVariants, thumbnailVariants, imageVariants, textVariants } from "../../../utility/animation";
import { AnimatePresence, motion } from 'framer-motion';
import { CiLocationOn } from 'react-icons/ci'
import { useQuery } from '@tanstack/react-query'
import { getTours } from '@/services/tours'
import Loader from '@/shared/Loader'
import Link from 'next/link'


const TopSellingSlider = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const {data: toursData, isLoading} = useQuery({
        queryKey: ["tours-home-slider"],
        queryFn: () => getTours(1, 9, ""),
    });
    
    const tours = toursData?.data?.tours || [];

    useEffect(() => {
        if (!isPaused && tours.length > 0) {
            const interval = setInterval(() => {
                handleNext();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [activeIndex, isPaused, tours.length]);

    const handleNext = () => {
        if (isAnimating || tours.length === 0) return;
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % tours.length);
    };

    const handlePrev = () => {
        if (isAnimating || tours.length === 0) return;
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + tours.length) % tours.length);
    };

    const handleThumbnailClick = (index: number) => {
        if (isAnimating) return;
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    const getUpcomingSlides = () => {
        if (tours.length === 0) return [];
        
        const upcoming = [];
        for (let i = 1; i <= tours.length; i++) {
            const index = (activeIndex + i) % tours.length;
            upcoming.push({ ...tours[index], index });
        }
        return upcoming;
    };

    if(isLoading) return <Loader/>
    if(tours.length === 0) return null;

    const currentTour = tours[activeIndex];

    return (
        <div className='my-16 lg:px-16 px-4 w-full relative'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>
            <SharedTitle title='Explore our top selling packages' subtitle='Top selling' classname='items-start' />
            
            {/* Modified slider container with fixed height for mobile */}
            <div className='relative lg:h-[600px] h-[500px] overflow-hidden lg:mt-16 mt-4 lg:mb-32 mb-16'>
                <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
                    <motion.div
                        key={activeIndex}
                        custom={direction}
                        variants={mainSlideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onAnimationStart={() => setIsAnimating(true)}
                        className='absolute inset-0 w-full flex lg:flex-row flex-col items-start gap-4 lg:gap-8'
                    >
                        {/* Image - First on mobile, left on desktop */}
                        <motion.div 
                            className='relative lg:w-3/5 w-full h-[250px] lg:h-[550px]'
                            layoutId={`image-container-${activeIndex}`}
                            variants={imageVariants}
                            custom={direction}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Image 
                                src={currentTour?.thumbnail} 
                                alt={currentTour?.tourName} 
                                fill
                                className='rounded-lg object-cover'
                                priority
                            />
                            <motion.div 
                                className='absolute inset-0 bg-black/10 rounded-lg'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />
                        </motion.div>
                        
                        {/* Text content - Second on mobile, right on desktop */}
                        <div className='lg:w-2/5 w-full flex flex-col justify-center lg:px-8 px-0 mt-4 lg:mt-0'>
                            <motion.h1 
                                className={`lg:text-3xl text-xl font-bold mb-2 ${antic.className} text-primary`}
                                variants={textVariants}
                                custom={direction}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                {currentTour?.tourName}
                            </motion.h1>

                            <motion.p 
                                className={`text-sm text-gray-600 mb-4 text-justify`}
                                variants={textVariants}
                                custom={direction}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.3, delay: 0.3 }}
                            >
                                {currentTour?.tourOverview?.slice(0,200)}
                            </motion.p>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                className='flex gap-2'
                            >
                                <CiLocationOn size={24} className='text-black'/>
                                <p className='font-semibold'>{currentTour?.country}</p>
                            </motion.div>
                            <Link href={`/destinations/${currentTour?.country?.toLowerCase()}/${currentTour?.slug || currentTour?._id}`}>
                                <Button className='rounded-sm px-12 bg-primary text-white mt-4 lg:mt-12 w-fit'>View Package</Button>
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Thumbnail slider - Below content on mobile, positioned at bottom on desktop */}
            <motion.div 
                className='lg:absolute relative lg:-bottom-16 bottom-0 left-0 right-0 lg:left-[50%] lg:flex hidden items-center justify-center lg:justify-start gap-4 overflow-x-auto py-2 px-2 mt-8 lg:mt-0'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none'
                }}
            >
                {getUpcomingSlides().slice(0, 4).map((item, index) => (
                    <motion.div 
                        key={item._id || index}
                        variants={thumbnailVariants}
                        custom={{ index, isActive: item.index === activeIndex }}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        whileTap="tap"
                        className='relative cursor-pointer flex-shrink-0'
                        onClick={() => handleThumbnailClick(item.index)}
                    >
                        <motion.div
                            className='relative'
                            layoutId={`thumbnail-${item.index}`}
                        >
                            <Image 
                                src={item?.thumbnail} 
                                alt={item?.tourName} 
                                width={1000}
                                height={1000}
                                className={`object-cover rounded-md transition-all duration-300`}
                                style={{
                                    height: item.index === activeIndex ? '300px' : '250px',
                                    width: item.index === activeIndex ? '280px' : '230px'
                                }}
                            />
                            <motion.div 
                                className='absolute inset-0 bg-black/20 rounded-lg'
                                initial={false}
                                animate={{ opacity: item.index === activeIndex ? 0 : 0.2 }}
                            />
                            <motion.div 
                                className={`absolute left-0 bottom-0 p-3 rounded-b-lg text-sm text-white ${antic.className} bg-black/70 w-full`}
                                initial={false}
                                animate={{ 
                                    height: item.index === activeIndex ? '0' : 'auto',
                                    opacity: item.index === activeIndex ? 0 : 1
                                }}
                            >
                                <h1 className='line-clamp-2'>{item?.tourName}</h1>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Navigation buttons - Positioned just above thumbnails on mobile, to the left on desktop */}
            <div className='lg:absolute relative flex gap-8 items-center justify-center lg:justify-start w-full lg:w-auto lg:left-[25%] lg:ml-4 lg:-bottom-8 mb-4 lg:mb-0'>
                <Button 
                    isIconOnly 
                    className='hover:bg-primary/70 bg-white text-primary border border-primary font-extralight rounded-full hover:text-white'
                    onClick={handlePrev}
                    disabled={isAnimating}    
                >
                    <FaChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                    isIconOnly 
                    className='hover:bg-primary/70 bg-white text-primary border border-primary font-extralight rounded-full hover:text-white'
                    onClick={handleNext}
                    disabled={isAnimating}
                >
                <FaChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

export default TopSellingSlider;