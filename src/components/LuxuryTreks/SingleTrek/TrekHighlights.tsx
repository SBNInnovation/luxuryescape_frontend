'use client';
import { antic } from '@/utility/font';
import React from 'react';
import { LuxuryPackage } from './types';
import { FaChevronLeft, FaChevronRight, FaRegDotCircle } from 'react-icons/fa';
import { Button, Divider } from '@nextui-org/react';
import Slider, { CustomArrowProps } from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CiLocationOn } from 'react-icons/ci';

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

const TrekHighlights: React.FC<LuxuryPackage> = ({
  activities,
  inclusions,
  exclusions,
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    pauseOnHover: true,
    centerPadding: '60px',
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-12">
      {activities && (
        <>
          <h1
            className={`text-3xl ${antic.className} font-semibold text-primary my-8 `}
          >
            Trip Highlights
          </h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
            {activities?.map((item) => {
              return (
                <div
                  key={item.activity}
                  className="flex gap-4 items-center w-full px-4 py-4  text-black"
                >
                  <div className="size-5">
                    <CiLocationOn size={20} className="text-primary" />
                  </div>
                  <h1>{item.activity}</h1>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Only render the inclusions section if there are inclusions */}
      {inclusions && inclusions.length > 0 && (
        <div className="mt-16 w-full">
          <h1
            className={`text-3xl ${antic.className} font-semibold text-primary my-8 `}
          >
            Trek inclusions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mt-12">
            {inclusions.map((item, index) => (
              <div key={index} className="w-full">
                <div className="flex items-center gap-4">
                  <FaRegDotCircle className="text-primary" size={14} />
                  <h2 className="font-medium ">{item}</h2>
                </div>
                <Divider className="my-2" />
              </div>
            ))}
          </div>
        </div>
      )}
      {exclusions && exclusions.length > 0 && (
        <div className="mt-16 w-full">
          <h1
            className={`text-3xl ${antic.className} font-semibold text-primary my-8 `}
          >
            Trek exclusions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mt-12">
            {exclusions.map((item, index) => (
              <div key={index} className="w-full">
                <div className="flex items-center gap-4">
                  <FaRegDotCircle className="text-primary" size={14} />
                  <h2 className="font-medium ">{item}</h2>
                </div>
                <Divider className="my-2" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrekHighlights;
