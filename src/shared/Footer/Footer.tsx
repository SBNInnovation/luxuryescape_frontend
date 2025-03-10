import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-primary/10 rounded-lg text-gray-700  lg:px-16 px-4">
            <div className="w-full mx-auto p-4 md:py-8">
                <div className="flex flex-col gap-8 sm:items-center sm:justify-between">
                    <Link href="/" className="flex  items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <div className="h-24 w-24 bg-primary rounded-full flex items-center justify-center"></div>
                    </Link>
                    <ul className="flex lg:flex-row lg:gap-0 gap-2 flex-col flex-wrap lg:items-center items-start mb-6 lg:text-sm text-lg font-medium  sm:mb-0 ">
                        <li>
                        <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
                        </li>
                        <li>
                        <Link href="/trip-types" className="hover:underline me-4 md:me-6">Trip Types</Link>
                        </li>
                        <li>
                        <Link href="/luxury-treks" className="hover:underline me-4 md:me-6">Luxury Treks</Link>
                        </li>
                        <li>
                        <Link href="/tailor-made" className="hover:underline me-4 md:me-6">Tailor Made</Link>
                        </li>
                        <li>
                        <Link href="/contact" className="hover:underline me-4 md:me-6">Contact</Link>
                        </li>
                        <li>
                        <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                        <Link href="blogs" className="hover:underline me-4 md:me-6">Blogs</Link>
                        </li>
                    </ul>
                    <section className='flex gap-4'>
                        <Button isIconOnly className='h-10 w-10 border border-gray-200 hover:border-primary bg-white text-primary hpver:border-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                            <FaFacebookF size={20}/>
                        </Button>
                        <Button isIconOnly className='h-10 w-10 border border-gray-200 hover:border-primary bg-white text-primary hpver:border-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                            <FaInstagram size={20}/>
                        </Button>
                        <Button isIconOnly className='h-10 w-10 border border-gray-200 hover:border-primary bg-white text-primary hpver:border-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                            <FaXTwitter size={20}/>
                        </Button>
                    </section> 
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <div className='flex justify-between items-center'>
                    <span className="block text-sm  sm:text-center ">
                    © 2023 <Link href="/" className="hover:underline">Luxury Escapes Nepal™</Link>. All Rights Reserved.
                    </span>
                    <span className="block text-sm  sm:text-center ">
                    Powered by SBN Innovations Pvt. Ltd.
                    </span>
                </div>
            </div>
        </footer>
    );
    };

export default Footer;
