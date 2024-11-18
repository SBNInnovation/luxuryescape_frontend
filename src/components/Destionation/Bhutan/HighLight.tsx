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
            "Private guided visits to iconic monasteries like Tiger's Nest",
            "Stays at world-class luxury resorts with stunning valley views",
            "Immersive cultural experiences with traditional Bhutanese ceremonies",
            "Exclusive wellness retreats featuring hot stone baths and spa therapies",
            "Scenic hikes through pristine landscapes and ancient trails",
            "Personalized culinary experiences with gourmet Bhutanese cuisine"
        ]

    const images = [
        "https://images.unsplash.com/photo-1544811096-89a14f806d55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJodXRhbnxlbnwwfDF8MHx8fDI%3D",
        "https://images.unsplash.com/photo-1713464107752-80b023d392c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJodXRhbnxlbnwwfDF8MHx8fDI%3D",
        "https://images.unsplash.com/photo-1566020591233-b0fb79a268c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJodXRhbnxlbnwwfDF8MHx8fDI%3D",
        "https://images.unsplash.com/photo-1585940043926-92f50991d354?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJodXRhbnxlbnwwfDF8MHx8fDI%3D",
        "https://images.unsplash.com/photo-1578556886705-5913afc1d13f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                                className={`px-4 w-[90%] h-[280px]`}
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