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
            <div className='grid grid-cols-4 max-sm:grid-cols-2 gap-4 mt-8'>    
                {affiliates?.data?.data?.map((item: {affiliatedAccommodation: string, link: string, thumbnail: string}) => (
                        item?.link ? (
                            <Link href={item.link} key={item.affiliatedAccommodation} target='_blank'>
                                <div className="flex flex-col gap-4 border border-gray-300 rounded-xl hover:border-primary duration-150">
                                    <div className="w-full h-52 p-2">
                                        <Image
                                            src={item?.thumbnail}
                                            alt={item.affiliatedAccommodation}
                                            width={1000}
                                            height={1000}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    </div>
                                    <p className={`${antic.className} text-primary text-center mb-4 font-medium text-2xl max-sm:text-lg`}>{item.affiliatedAccommodation}</p>
                                </div>
                            </Link>
                        ) : null
                    ))}
            </div>
    </div>
  )
}

export default Affiliates
