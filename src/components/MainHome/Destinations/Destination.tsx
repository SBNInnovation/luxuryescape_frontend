import SharedTitle from '@/shared/SharedTitle';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import React from 'react';
import Link from 'next/link';

const Destination = () => {
    return (
        <div className="my-12">
            <SharedTitle 
                classname={`ml-16 my-12`} 
                title="Discover the Finest Luxury Destinations in the Himalayas" 
                subtitle="Our Destinations" 
            />
            <main className="w-full flex h-[800px]">
                {/* Large Image Section */}
                <section className='w-1/2 h-full relative group overflow-hidden'>
                    <div className='w-full h-full transition-transform duration-500 group-hover:scale-110'>
                        <Image 
                            src="https://images.unsplash.com/photo-1676786738622-298c2866d575?q=80&w=2811&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt='Nepal Destination' 
                            height={1000} 
                            width={1000} 
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4'>
                        <h3 className='text-white text-4xl font-semibold'>Nepal</h3>
                        <Link href={"/destinations/nepal"}>
                            <Button 
                                    variant="bordered"
                                    className="text-white rounded-sm px-12 mt-4 border-white hover:bg-primary hover:text-white transition-colors"
                                >
                                    View Trips
                                </Button>
                        </Link>
                    </div>
                </section>

                <section className='grid grid-cols-2 w-1/2 h-full'>
                    {/* Top Left - Tibet */}
                    <section className='w-full h-full relative group overflow-hidden'>
                        <div className='w-full h-full transition-transform duration-500 group-hover:scale-110'>
                            <Image 
                                src="https://images.unsplash.com/photo-1709866535864-93035b6208e8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt='Tibet Destination' 
                                height={1000} 
                                width={1000} 
                                className='h-full w-full object-cover'
                            />
                        </div>
                        <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3'>
                            <h3 className='text-white text-2xl font-semibold'>Tibet</h3>
                            <Link href={"/destinations/tibet"}>
                                <Button 
                                    variant="bordered"
                                    className="text-white rounded-sm px-12 mt-4 border-white hover:bg-primary hover:text-white transition-colors"
                                >
                                    View Trips
                                </Button>
                            </Link>
                        </div>
                    </section>

                    {/* Top Right - Tibet */}
                    <section className='w-full h-full relative group overflow-hidden'>
                        <div className='w-full h-full transition-transform duration-500 group-hover:scale-110'>
                            <Image 
                                src="https://images.unsplash.com/photo-1679578064614-ba0ad375c143?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt='Tibet Destination' 
                                height={1000} 
                                width={1000} 
                                className='h-full w-full object-cover'
                            />
                        </div>
                        <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3'>
                            <h3 className='text-white text-2xl font-semibold'>Tibet</h3>
                            <Link href={"/destinations/tibet"}>
                                <Button 
                                    variant="bordered"
                                    className="text-white rounded-sm px-8 mt-4 border-white hover:bg-primary hover:text-white transition-colors"
                                >
                                    View Trips
                                </Button>
                            </Link>
                        </div>
                    </section>

                    {/* Bottom Left - Bhutan */}
                    <section className='w-full h-full relative group overflow-hidden'>
                        <div className='w-full h-full transition-transform duration-500 group-hover:scale-110'>
                            <Image 
                                src="https://images.unsplash.com/photo-1679572255334-08dd1c8cbdd7?q=80&w=2845&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt='Bhutan Destination' 
                                height={1000} 
                                width={1000} 
                                className='h-full w-full object-cover'
                            />
                        </div>
                        <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3'>
                            <h3 className='text-white text-2xl font-semibold'>Bhutan</h3>
                            <Link href={"/destinations/bhutan"}>
                                <Button 
                                    variant="bordered"
                                    className="text-white rounded-sm px-8 mt-4 border-white hover:bg-primary hover:text-white transition-colors"
                                >
                                    View Trips
                                </Button>
                            </Link>
                        </div>
                    </section>

                    {/* Bottom Right - Bhutan */}
                    <section className='w-full h-full relative group overflow-hidden'>
                        <div className='w-full h-full transition-transform duration-500 group-hover:scale-110'>
                            <Image 
                                src="https://images.unsplash.com/photo-1566020589326-461e244815e8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt='Bhutan Destination' 
                                height={1000} 
                                width={1000} 
                                className='h-full w-full object-cover'
                            />
                        </div>
                        <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3'>
                            <h3 className='text-white text-2xl font-semibold'>Bhutan</h3>
                            <Link href={"/destinations/bhutan"}>
                                <Button 
                                    variant="bordered"
                                    className="text-white rounded-sm px-8 mt-4 border-white hover:bg-primary hover:text-white transition-colors"
                                >
                                    View Trips
                                </Button>
                            </Link>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default Destination;