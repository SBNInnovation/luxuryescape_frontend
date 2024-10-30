"use client"
import SharedTitle from '@/shared/SharedTitle'
import { Button } from '@nextui-org/react'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { CustomArrowProps } from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Card from './Card';

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
)

const CustomNextArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute -right-8 top-1/2 text-white -translate-y-1/2 z-10 bg-primary hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronRight/>
    </Button>
)

const MajesticPlaces = () => {
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
                breakpoint: 1680,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
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
        <div className='relative w-full my-16 h-full'>
            <section className='h-[400px] relative flex w-full bg-primary/20' > </section>
            <section className='absolute h-[700px] flex z-[100] top-8 px-16 w-full'>
                <div className='w-2/5 h-fit  py-4 px-8 rounded-md z-[100]'>
                    <SharedTitle title='Most loved majestic places' subtitle='do not miss'/>
                    <p className='my-8 text-sm text-justify '>Explore the most loved destinations and majestic places across the Himalayas, where luxury meets awe-inspiring landscapes and rich cultural heritage. From the serene temples and vibrant cityscapes of Nepal to the mystic monasteries and lush valleys of Bhutan, and the timeless spiritual landscapes of Tibet.</p>
                    <Button className='rounded-sm bg-primary px-12 text-white'>See More Packages</Button>
                </div>
                <div className='w-3/5 pt-16 h-fit'>
                    <Slider {...settings}>
                        {topselling.map(item=>{
                            return(
                                <div key={item?.title} className='px-4 py-2'>
                                    <Card {...item}/>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </section>
        </div>
        </>
    )
}

export default MajesticPlaces
