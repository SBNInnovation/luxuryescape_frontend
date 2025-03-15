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
        className="absolute lg:-left-8 left-4 top-1/2 text-white -translate-y-1/2 z-10 bg-primary hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronLeft />
    </Button>
);

const CustomNextArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute lg:-right-8 right-4 top-1/2 text-white -translate-y-1/2 z-10 bg-primary hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronRight />
    </Button>
);

const HighlightCarousel: React.FC = () => {

    const highlights = [
        "Private helicopter tours over the Himalayas",
        "Five-star accommodations with breathtaking views",
        "Personalized, guided cultural experiences",
        "Scenic private boat rides and lake excursions",
        "Exclusive wildlife safaris and nature encounters",
        "Luxurious mountain retreats and wellness experiences"
    ];

    const images = [
        "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1672343961201-2ef9a7b037f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1606710607626-350820daa247?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1731046386361-21eca2d4af2a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1631874345455-3eb0c52c6eca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1676542448059-50af97a0703e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <div className='w-full lg:h-[80vh] h-full'>
            <h1 className={`${antic.className} text-primary lg:text-5xl text-3xl lg:mb-8 mb-4`}>Highlights</h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-4'>
                {highlights.map((highlight, index) => (
                    <div key={index} className='flex gap-2 lg:text-xl text-sm font-medium items-center'>
                        <AiFillFire className='text-primary'/>
                        <h1>{highlight}</h1>
                    </div> 
                ))}
            </div>
            <div className="w-full lg:pt-8 pt-4">
                <Slider {...settings}>
                    {images.map((item, index) => (
                    <div className='py-16 mx-4 relative'>
                            <div
                                className={`px-4 w-[90%] lg:h-[300px] h-[200px]`}
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