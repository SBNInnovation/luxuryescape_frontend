"use client"
import SharedTitle from '@/shared/SharedTitle'
import { Button } from '@nextui-org/react'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { CustomArrowProps } from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Card from './Card';
import { useQuery } from '@tanstack/react-query';
import { getTours } from '@/services/tours';
import Link from 'next/link';

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
)

const CustomNextArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute lg:-right-8 right-4 top-1/2 text-white -translate-y-1/2 z-10 bg-primary hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronRight/>
    </Button>
)

const MajesticPlaces = () => {

    const {data: toursData} = useQuery({
        queryKey: ["tours-home-second-slider"],
        queryFn: () => getTours(1, 8, ""),
    });

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay:true,
        pauseOnHover: true,
        autoplaySpeed:4000,
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
        <>
        <div className='w-full py-16'>
            <section className='h-[400px] relative w-full bg-primary/20'></section>
            <section className='relative flex lg:flex-row flex-col z-[100] -mt-[350px] lg:px-16 px-4 w-full'>
                <div className='lg:w-2/5 w-full h-fit py-4 px-8 rounded-md z-[100]'>
                    <SharedTitle title='Most loved majestic places' subtitle='do not miss'/>
                    <p className='my-8 text-sm text-justify'>
                        Explore the most loved destinations and majestic places across the Himalayas, 
                        where luxury meets awe-inspiring landscapes and rich cultural heritage. From the 
                        serene temples and vibrant cityscapes of Nepal to the mystic monasteries and 
                        lush valleys of Bhutan, and the timeless spiritual landscapes of Tibet.
                    </p>
                    <Link href={"/tours"}>
                        <Button className='rounded-sm bg-primary px-12 text-white'>
                            See More Packages
                        </Button>
                    </Link>
                </div>
                <div className='lg:w-3/5 w-full lg:pt-16 pt-8 h-fit'>
                {toursData?.data?.tours?.length >2 ?<Slider {...settings}>
                        {toursData?.data?.tours?.map((item:any) => ( //eslint-disable-line @typescript-eslint/no-explicit-any
                            <div key={item?.tourName} className='px-4 py-2'>
                                <Card {...item}/>
                            </div>
                        ))}
                    </Slider>:
                    <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4'>
                        {toursData?.data?.tours?.map((item:any) => ( //eslint-disable-line @typescript-eslint/no-explicit-any
                            <div key={item?.tourName} className='px-4 py-2'>
                                <Card {...item}/>
                            </div>
                        ))}
                        </div>}
                    
                </div>
            </section>
        </div>
        </>
    )
}

export default MajesticPlaces
