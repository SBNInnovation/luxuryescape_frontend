import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider, { CustomArrowProps } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { antic } from '@/utility/font';
import { AiFillFire } from 'react-icons/ai';

interface CustomArrowComponentProps extends CustomArrowProps {
    onClick?: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute -left-8 top-1/2 text-white -translate-y-1/2 z-10 bg-primary hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronLeft />
    </Button>
);

const CustomNextArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute -right-8 top-1/2 text-white -translate-y-1/2 z-10 bg-primary hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronRight />
    </Button>
);

const HighlightCarousel: React.FC = () => {

    const highlights = [
            "Private helicopter tours over Tibet stunning landscapes",
            "Five-star accommodations with panoramic Himalayan views",
            "Personalized, guided tours of ancient monasteries and palaces",
            "Scenic drives through high-altitude lakes and mountain passes",
            "Exclusive encounters with Tibetan culture and spiritual traditions",
            "Luxurious wellness retreats with meditation and holistic healing experiences"
        ];


    const images = [
        "https://images.unsplash.com/photo-1617380613434-7495e9b45dfb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGliZXR8ZW58MHx8MHx8fDI%3D",
        "https://images.unsplash.com/photo-1599137258505-8871bd07cbbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGliZXR8ZW58MHx8MHx8fDI%3D",
        "https://images.unsplash.com/photo-1607857581971-775fece813c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRpYmV0fGVufDB8fDB8fHwy",
        "https://images.unsplash.com/photo-1580097497883-fa5934bdf99b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRpYmV0fGVufDB8fDB8fHwy",
        "https://images.unsplash.com/photo-1617469165885-0db8294c3232?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRpYmV0fGVufDB8fDB8fHwy",
        "https://images.unsplash.com/photo-1622551083527-cf4d0a0000a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRpYmV0fGVufDB8fDB8fHwy"
    ];

    const settings = {
        className: "center",
    centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        centerPadding: '60px',
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay: true,
        cssEase: 'linear',
        pauseOnHover: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='w-full h-[80vh]'>
            <h1 className={`${antic.className} text-primary text-5xl mb-8`}>Highlights</h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-4'>
                {highlights.map((highlight, index) => (
                    <div key={index} className='flex gap-2 text-xl font-medium items-center'>
                        <AiFillFire className='text-primary'/>
                        <h1>{highlight}</h1>
                    </div> 
                ))}
            </div>
            <div className="w-full pt-8">
                <Slider {...settings}>
                    {images.map((item, index) => (
                    <div className='py-16 mx-4 relative'>
                            <div
                                className={`px-4 w-[90%] h-[300px]`}
                                key={index}
                            >
                                <Image src={item} alt={item} width={1000} height={1000} className='w-full h-full object-cover rounded-sm scale-[.95] transition duration-700' />
                            </div>
                    </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
};

export default HighlightCarousel;