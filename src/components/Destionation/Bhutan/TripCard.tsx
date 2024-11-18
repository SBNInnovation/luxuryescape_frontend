import { antic } from '@/utility/font'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface TripCardProps {
    title: string
    description: string
    image: string
    best_time: string
}

const TripCard: React.FC<TripCardProps> = ({ title, description, image, best_time }) => {
    const slicedDesc = description.slice(0, 200)
    return (
        <div className="w-full flex shadow-lg relative group overflow-hidden cursor-pointer custom-trip-card">
            <div className="h-[250px] w-1/3 overflow-hidden relative">
                <Image
                    src={image}
                    alt="Nepal"
                    height={1000}
                    width={1000}
                    className="object-cover h-full w-full rounded-sm transform transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="flex flex-col gap-2 px-8 pt-10 w-2/3">
                <h1 className={`${antic.className} text-primary text-3xl`}>{title}</h1>
                <p className="my-2 text-sm">{slicedDesc}</p>
                <p className={`${antic.className} text-xl text-primary`}>
                    $1200 <span className="text-sm">/ per person</span>
                </p>
                <Link href="/destinations/nepal/2">
                    <Button className="bg-primary rounded-sm mt-4 text-white px-8" size="sm">
                        View Details
                    </Button>
                </Link>
            </div>

            <p className="absolute top-0 right-0 py-2 rounded-bl-md px-6 bg-primary text-white text-sm">
                {best_time}
            </p>
        </div>
    )
}

export default TripCard
