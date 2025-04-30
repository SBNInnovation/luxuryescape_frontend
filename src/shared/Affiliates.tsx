import Link from 'next/link'
import React from 'react'
import Loader from './Loader'
import { useQuery } from '@tanstack/react-query'
import { getAffiliates } from '@/services/affiliates'
import { antic } from '@/utility/font'
import Image from 'next/image'

const Affiliates = () => {
    const {data:affiliates,isLoading:isAffiliatesLoading}=useQuery({
        queryKey:["affiliates"],
        queryFn:()=>getAffiliates()
    })
  return (
    <div>
      {isAffiliatesLoading && <Loader/>}
            <p className={`text-primary text-3xl max-sm:text-2xl mt-12 ${antic.className}`}>Our Affiliates</p>
            <div className='grid grid-cols-8 max-md:grid-cols-6 max-sm:grid-cols-5 gap-4 mt-8'>    
                {affiliates?.data?.data?.map((item: {affiliatedAccommodation: string, link: string, thumbnail: string}) => (
                        item?.link ? (
                            <Link href={item.link} key={item.affiliatedAccommodation} target='_blank'>
                                <div className="flex flex-col gap-4 border border-gray-300 rounded-xl items-center justify-center hover:border-primary duration-150 p-2">
                                    <div className="w-full h-20 max-md:h-16 max-sm:h-12">
                                        <Image
                                            src={item?.thumbnail}
                                            alt={item.affiliatedAccommodation}
                                            width={1000}
                                            height={1000}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    </div>
                                </div>
                            </Link>
                        ) : null
                    ))}
            </div>
    </div>
  )
}

export default Affiliates
