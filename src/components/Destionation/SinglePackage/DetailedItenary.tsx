import React from 'react'
import { LuxuryPackage } from './types'
import { antic } from '@/utility/font'

const DetailedItenary: React.FC<LuxuryPackage> = ({itinerary}) => {
    return (
        <div className='w-full my-16'>
            <h1 className={`text-3xl ${antic.className} font-semibold text-primary my-8 `}>Trip Itinerary</h1>
        </div>
    )
}

export default DetailedItenary
