"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';

const MainSlider = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const images=[
        "https://images.unsplash.com/photo-1538280103171-f4281606408f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1716503191918-b811f0f9cdb1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1610997686651-98492fd08108?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1567098279143-e90b699c6d7f?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000); 

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className='relative my-12 h-[600px] w-full'>
                {images.map((img, index) => (
                            <Image 
                                key={img}
                                src={img} 
                                alt={`Bhutan ${index + 1}`} 
                                layout="fill"
                                objectFit="cover"
                                className={`absolute transition-opacity duration-1000 ease-in-out ${
                                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                            />
                        ))}
            </div>
    )
}

export default MainSlider
