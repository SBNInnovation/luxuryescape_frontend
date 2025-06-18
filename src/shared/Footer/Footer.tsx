'use client';
import { Button } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { antic } from '@/utility/font';
import { getContactData } from '@/services/form';

export const getAffiliates = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL2}/resources/get-affiliates`
    );
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

const Footer = () => {
  const { data: affiliatesData } = useQuery({
    queryKey: ['data-intl'],
    queryFn: () => getAffiliates(),
  });

  const { data: contactData } = useQuery({
    queryKey: ['contact'],
    queryFn: () => getContactData(),
  });

  const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  const nationalData = affiliatesData?.affiliates?.filter(
    (item: any) => item.type === 'national'
  ); // eslint-disable-line @typescript-eslint/no-explicit-any
  const interNationalData = affiliatesData?.affiliates?.filter(
    (item: any) => item.type === 'international'
  ); // eslint-disable-line @typescript-eslint/no-explicit-any

  return (
    <>
      <main className="flex flex-col my-4 mt-12 gap-4 w-full items-center justify-center">
        <div className="flex flex-col gap-8 w-full items-center justify-center">
          <h1
            className={`lg:text-4xl md:text-3xl text-2xl text-primary ${antic.className}`}
          >
            National Affiliates
          </h1>
          <div className="flex items-center flex-wrap justify-center md:justify-evenly gap-6 px-4 md:px-8 lg:px-[12rem] w-full">
            {nationalData?.map((item: { logo: string }, index: number) => {
              return (
                <Image
                  key={index}
                  src={item?.logo}
                  alt="image"
                  height={1000}
                  width={1000}
                  className="object-contain size-20 md:size-24 rounded-md"
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-8 w-full items-center justify-center">
          <h1
            className={`lg:text-4xl md:text-3xl text-2xl text-primary ${antic.className}`}
          >
            International Affiliates
          </h1>
          <div className="flex items-center flex-wrap justify-center md:justify-evenly gap-6 px-4 md:px-8 lg:px-[8rem] w-full">
            {interNationalData?.map((item: { logo: string }, index: number) => {
              return (
                <Image
                  key={index}
                  src={item?.logo}
                  alt="image"
                  height={1000}
                  width={1000}
                  className="object-contain size-20 md:size-24 rounded-md"
                />
              );
            })}
          </div>
        </div>
      </main>
      <footer className="bg-primary/10 rounded-lg text-gray-700  lg:px-16 px-4">
        <div className="w-full mx-auto p-4 md:py-8">
          <div className="flex flex-col gap-8 sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex  items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <div className="h-24 w-24 bg-primary rounded-full flex items-center justify-center"></div>
            </Link>
            <ul className="flex lg:flex-row lg:gap-0 gap-2 flex-col flex-wrap lg:items-center items-start mb-6 lg:text-sm text-lg font-medium  sm:mb-0 ">
              <li>
                <Link href="/" className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/trip-types"
                  className="hover:underline me-4 md:me-6"
                >
                  Trip Types
                </Link>
              </li>
              <li>
                <Link
                  href="/luxury-treks"
                  className="hover:underline me-4 md:me-6"
                >
                  Luxury Treks
                </Link>
              </li>
              <li>
                <Link
                  href="/tailor-made"
                  className="hover:underline me-4 md:me-6"
                >
                  Tailor Made
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline me-4 md:me-6">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
            </ul>
            <section className="hidden md:flex gap-4">
              <Link
                href={contactData?.data?.facebookLink || '#'}
                target="_blank"
              >
                <Button
                  isIconOnly
                  className="h-10 w-10 border border-gray-200 hover:border-primary bg-white text-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white"
                >
                  <FaFacebookF size={20} />
                </Button>
              </Link>
              <Link
                href={contactData?.data?.instagramLink || '#'}
                target="_blank"
              >
                <Button
                  isIconOnly
                  className="h-10 w-10 border border-gray-200 hover:border-primary bg-white text-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white"
                >
                  <FaInstagram size={20} />
                </Button>
              </Link>
              <Link
                href={contactData?.data?.twitterLink || '#'}
                target="_blank"
              >
                <Button
                  isIconOnly
                  className="h-10 w-10 border border-gray-200 bg-white text-primary hover:border-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white"
                >
                  <FaXTwitter size={20} />
                </Button>
              </Link>
            </section>
          </div>
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <div className="flex justify-between w-full items-center">
            <span className="block text-sm  sm:text-center ">
              ©{getDate()}{' '}
              <Link href="/" className="hover:underline">
                Nepal Luxury Escapes™
              </Link>
              . All Rights Reserved.
            </span>

            <span className="block text-sm  sm:text-center ">
              Sister company of{' '}
              <Link
                href="https://www.goingnepal.com/"
                target="_blank"
                className="hover:underline"
              >
                Going Nepal
              </Link>{' '}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
