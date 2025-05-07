import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

export const generateStars = (numOfStars:number):any => {
  const stars:any[]= [];
  for (let i = 0; i < Math.floor(numOfStars); i++) {
    stars.push(<FaStar key={i}/>);
  }
  if (numOfStars % 1 !== 0) {
    stars.push(<FaStarHalfAlt key="half" />);
  }
  return stars;
};