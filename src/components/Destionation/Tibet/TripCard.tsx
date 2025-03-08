import { antic } from '@/utility/font'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Tour } from '@/types/types'

const TripCard: React.FC<Tour> = ({ tourName,tourOverview,thumbnail,idealTime,cost,slug  }) => {
    const slicedDesc = tourOverview?.slice(0, 200)
    return (
        <div className="w-full h-[250px] flex shadow-lg relative group overflow-hidden cursor-pointer custom-trip-card">
            <div className="h-full w-1/3 overflow-hidden relative">
                <Image
                    src={thumbnail}
                    alt="Nepal"
                    height={1000}
                    width={1000}
                    className="object-cover h-full w-full rounded-sm transform transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="flex flex-col gap-2 px-8 py-8 w-2/3">
                <h1 className={`${antic.className} text-primary text-3xl`}>{tourName}</h1>
                <p className="my-2 text-sm">{slicedDesc}</p>
                <p className={`${antic.className} text-xl text-primary`}>
                    ${cost} <span className="text-sm">/ per person</span>
                </p>
                <Link href={`/destinations/tibet/${slug}`}>
                    <Button className="bg-primary rounded-sm mt-4 text-white px-8" size="sm">
                        View Details
                    </Button>
                </Link>
            </div>

            <p className="absolute top-0 right-0 py-2 rounded-bl-md px-6 bg-primary text-white text-sm">
                {idealTime.join(', ')}
            </p>
        </div>
    )
}

export default TripCard
