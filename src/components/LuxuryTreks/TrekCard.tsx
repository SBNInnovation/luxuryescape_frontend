import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, CardFooter, Chip, Badge } from '@nextui-org/react';
import { FiCalendar, FiMapPin, FiStar } from 'react-icons/fi';

// Define Trek interface
interface TrekProps {
  id: number;
  title: string;
  location: string;
  duration: number;
  rating: number;
  price: number;
  image: string;
  difficulty: string;
  description?: string;
}

interface TrekCardProps {
  trek: TrekProps;
}

const TrekCard: React.FC<TrekCardProps> = ({ trek }) => {
  const { id, title, location, duration, rating, price, image, difficulty } = trek;

  const getDifficultyColor = (level: string): "success" | "warning" | "danger" | "primary" => {
    switch (level.toLowerCase()) {
      case 'easy':
        return "success";
      case 'moderate':
        return "warning";
      case 'challenging':
        return "primary";
      case 'difficult':
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <Card isHoverable className="w-full">
      <div className="relative">
        <Image
          alt={title}
          className="w-full object-cover h-64"
          src={image}
          width={400}
          height={300}
        />
        <div className="absolute top-3 right-3">
          <Chip color="primary" variant="shadow">
            ${price.toLocaleString()}
          </Chip>
        </div>
        <div className="absolute text-white top-3 left-3">
          <Chip 
            color={getDifficultyColor(difficulty)} 
            className="text-white"
          >
            {difficulty}
          </Chip>
        </div>
      </div>
      
      <CardBody className="pb-0">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <div className="flex items-center text-default-500 mb-3">
          <FiMapPin className="mr-2" />
          <span>{location}</span>
        </div>
        
        <div className="flex justify-between mb-4">
          <div className="flex items-center text-default-500">
            <FiCalendar className="mr-2" />
            <span>{duration} Days</span>
          </div>
          
          <div className="flex items-center text-default-500">
            <FiStar className="text-warning mr-1" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>
      </CardBody>
      
      <CardFooter>
        <Link href={`/treks/${id}`} className="w-full">
          <button className="w-full py-3 px-4 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium">
            View Details
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TrekCard;