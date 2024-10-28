"use client"
import SharedTitle from '@/shared/SharedTitle'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { antic } from '@/utility/font'
import { mainSlideVariants, thumbnailVariants, imageVariants, textVariants, badgeVariants, buttonVariants, containerVariants, loadingVariants } from "../../../utility/animation";
import { AnimatePresence,motion } from 'framer-motion';
import { CiLocationOn } from 'react-icons/ci'


const TopSellingSlider = () => {

    const topselling=[
    {
        "image": "https://images.unsplash.com/photo-1509883488717-779cd2d85976?q=80&w=2397&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Everest Base Camp Heli Tour & Luxury Retreat",
        "description": "Experience a breathtaking helicopter ride to Everest Base Camp, followed by a luxurious stay at a premier Himalayan resort.",
        "country": "Nepal"
    },
    {
        "image": "https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Chitwan National Park Luxury Safari",
        "description": "Indulge in private wildlife safaris, glamping experiences, and cultural immersion in the enchanting jungles of Chitwan.",
        "country": "Nepal"
    },
    {
        "image": "https://images.unsplash.com/photo-1729176990188-b11bdb3d902a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Bhutan Royal Retreat & Cultural Immersion",
        "description": "Explore Bhutan&apos;s heritage sites with a private trek to the iconic Tiger&apos;s Nest Monastery and luxury accommodations.",
        "country": "Bhutan"
    },
    {
        "image": "https://images.unsplash.com/photo-1691735214703-310c6594c6a8?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Tibet Spiritual Journey & Luxury Stay",
        "description": "Immerse yourself in Tibetan culture with visits to ancient monasteries and a stay in a luxury hotel in Lhasa.",
        "country": "Tibet"
    },
    {
        "image": "https://images.unsplash.com/photo-1531719555052-632b0348c404?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Annapurna Luxury Trek & Spa Retreat",
        "description": "Experience a guided luxury trek in the Annapurna region, complemented by spa treatments in a lavish mountain lodge.",
        "country": "Nepal"
    },
    {
        "image": "https://images.unsplash.com/photo-1516961876766-0793f061c426?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Bhutanese Festival Experience",
        "description": "Join an exclusive tour during a vibrant local festival, complete with luxury accommodations and guided cultural experiences.",
        "country": "Bhutan"
    },
    {
        "image": "https://images.unsplash.com/photo-1560389959-e4e81f5dca86?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Tibet Monastery Tour & Luxury Journey",
        "description": "Visit sacred monasteries with a private guide, enjoying luxury stays in traditional yet opulent accommodations.",
        "country": "Tibet"
    },
    {
        "image": "https://images.unsplash.com/photo-1529316275402-0462fcc4abd6?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Dhulikhel Luxury Mountain Retreat",
        "description": "Unwind in a stunning mountain resort with panoramic views, offering wellness treatments and gourmet dining experiences.",
        "country": "Nepal"
    }
]
        const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                handleNext();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [activeIndex, isPaused]);

    const handleNext = () => {
        if (isAnimating) return;
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % topselling.length);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + topselling.length) % topselling.length);
    };

    const handleThumbnailClick = (index:number) => {
        if (isAnimating) return;
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    const getUpcomingSlides = () => {
        const upcoming = [];
        for (let i = 1; i <=topselling.length ; i++) {
            const index = (activeIndex + i) % topselling.length;
            upcoming.push({ ...topselling[index], index });
        }
        return upcoming;
    };

    return (
        <div className='my-16 px-16 w-full relative'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>
            <SharedTitle title='Explore our top selling packages' subtitle='Top selling' classname='items-start' />
            
            <div className='relative h-[600px] overflow-hidden mb-32'>
                <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
                    <motion.div
                        key={activeIndex}
                        custom={direction}
                        variants={mainSlideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onAnimationStart={() => setIsAnimating(true)}
                        className='absolute inset-0 my-12 w-full flex items-start gap-8'
                    >
                        <motion.div 
                            className='relative w-3/5 h-full'
                            layoutId={`image-container-${activeIndex}`}
                            variants={imageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Image 
                                src={topselling[activeIndex].image} 
                                alt={topselling[activeIndex].title} 
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
                        
                        <div className='w-2/5 flex flex-col justify-center px-8'>
                            <motion.h1 
                                className={`text-3xl font-bold mb-4 ${antic.className} text-primary`}
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                {topselling[activeIndex].title}
                            </motion.h1>

                            <motion.p 
                                className={`text-sm text-gray-600 mb-6 `}
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.3, delay: 0.3 }}
                            >
                                {topselling[activeIndex].description}
                            </motion.p>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                className='flex gap-2'
                            >
                                <CiLocationOn size={24} className='text-black'/>
                                <p className='font-semibold'>{topselling[activeIndex].country}</p>
                            </motion.div>

                            <Button className='rounded-sm px-12 bg-primary text-white mt-12 w-fit'>View Package</Button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            <motion.div 
                className='absolute -bottom-16 left-[50%]  flex items-center gap-4 overflow-x-hidden overflow-hidden  p-0'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {getUpcomingSlides().map((item, index) => (
                    <motion.div 
                        key={item.title}
                        variants={thumbnailVariants}
                        custom={{ index, isActive: item.index === activeIndex }} // Pass the custom values
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
                                src={item.image} 
                                alt={item.title} 
                                width={250}
                                height={300}
                                className={`object-cover rounded-lg transition-all duration-300 ${
                                    item.index === activeIndex ? 'ring-2 ring-primary' : ''
                                }`}
                                style={{
                                    height: item.index === activeIndex ? '240px' : '240px',
                                    width: item.index === activeIndex ? '250px' : '250px'
                                }}
                            />
                            <motion.div 
                                className='absolute inset-0 bg-black/20 rounded-lg'
                                initial={false}
                                animate={{ opacity: item.index === activeIndex ? 0 : 0.2 }}
                            />
                            <motion.div 
                                className={`absolute left-0 bottom-0 p-3 rounded-b-lg text-sm text-white ${antic.className} bg-black/30 w-full`}
                                initial={false}
                                animate={{ 
                                    height: item.index === activeIndex ? '0' : 'auto',
                                    opacity: item.index === activeIndex ? 0 : 1
                                }}
                            >
                                <h1 className='line-clamp-2'>{item.title}</h1>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            <div className='absolute flex gap-8 items-center left-[25%] ml-4 -bottom-8'>
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