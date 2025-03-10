import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, CardBody, CardFooter, Chip } from '@nextui-org/react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { Trek } from '@/types/types';
import { antic } from '@/utility/font';


const TrekCard: React.FC<Trek> = ({ slug, trekName, location, duration, cost, thumbnail, difficultyLevel}) => {

  const getDifficultyColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'easy':
        return "success";
      case 'moderate':
        return "warning";
      case 'hard':
        return "danger";
      default:
        return;
    }
  };

  return (
    <Card className="w-full">
      <div className="relative">
        <Image
          alt={trekName}
          className="w-full object-cover h-64"
          src={thumbnail}
          width={400}
          height={300}
        />
        <div className="absolute top-3 right-3">
          <Chip color="primary" variant="shadow">
            ${cost.toLocaleString()}
          </Chip>
        </div>
        <div className="absolute text-white top-3 left-3">
          <Chip 
            color={getDifficultyColor(difficultyLevel)} 
            className="text-white"
          >
            {difficultyLevel}
          </Chip>
        </div>
      </div>
      
      <CardBody className="pb-0">
        <h3 className={`text-xl  mb-2 ${antic.className} text-primary`}>{trekName}</h3>
        
        <div className="flex items-center text-default-500 mb-3">
          <FiMapPin className="mr-2" />
          <span>{location}</span>
        </div>
        
        <div className="flex justify-between mb-4">
          <div className="flex items-center text-default-500">
            <FiCalendar className="mr-2" />
            <span>{duration} Days</span>
          </div>
        </div>
      </CardBody>
      
      <CardFooter>
        <Link href={`/luxury-treks/${slug}`} className="w-full flex justify-end">
          <Button className=" px-8 bg-primary text-sm text-white rounded-md hover:opacity-90 transition-opacity">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TrekCard;