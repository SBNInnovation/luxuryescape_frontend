import React from 'react';
import { FaStar } from 'react-icons/fa';

export const generateStars = (numOfStars: number): JSX.Element[] => {
  const stars: JSX.Element[] = [];

  // Clamp the stars to a maximum of 5
  const fullStars = Math.min(Math.floor(numOfStars), 5);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} />);
  }

  return stars;
};
