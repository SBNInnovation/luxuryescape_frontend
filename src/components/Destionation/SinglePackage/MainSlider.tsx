"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'

interface ImagesProps {
    gallery?: string[];
    thumbnail?: string;
}

const MainSlider: React.FC<ImagesProps> = ({ gallery = [], thumbnail }) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    
    // Combine gallery and thumbnail into a single array of images
    const images = React.useMemo(() => {
        const allImages = [...gallery];
        
        // Add thumbnail to the beginning if it exists and is not already in the gallery
        if (thumbnail && !allImages.includes(thumbnail)) {
            allImages.unshift(thumbnail);
        }
        
        return allImages;
    }, [gallery, thumbnail]);

    useEffect(() => {
        // Only start the interval if there are multiple images
        if (images.length <= 1) return;
        
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000); 

        return () => clearInterval(intervalId);
    }, [images.length]);

    if (images.length === 0) {
        return (
            <div className='relative my-12 h-[600px] w-full bg-gray-200 flex items-center justify-center'>
                <p className="text-gray-500">No images available</p>
            </div>
        );
    }

    return (
        <div className='relative my-12 h-[600px] w-full'>
            {images.map((img, index) => (
                <Image 
                    key={index}
                    src={img} 
                    alt={`Tour Image ${index + 1}`}
                    fill
                    sizes="100vw"
                    priority={index === 0}
                    className={`object-cover transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                />
            ))}
        </div>
    )
}

export default MainSlider