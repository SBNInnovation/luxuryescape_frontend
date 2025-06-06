import React from 'react';
import { Montserrat } from 'next/font/google';
import { antic } from '@/utility/font';

export const monsterrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
interface props {
  title: string;
  subtitle: string;
  classname?: string;
}
const SharedTitle: React.FC<props> = ({ title, subtitle, classname }) => {
  return (
    <div className={`${monsterrat.className} ${classname} flex flex-col`}>
      <h1 className="lg:text-lg text-sm tracking-wider text-primary mb-2 uppercase font-semibold">
        {subtitle}
      </h1>
      <h1 className={`lg:text-4xl text-2xl ${antic.className}`}>{title}</h1>
    </div>
  );
};

export default SharedTitle;
