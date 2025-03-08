"use client"
import React, { useState } from 'react'
import { LuxuryPackage } from './types'
import { antic } from '@/utility/font'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
const DestinationandOverview: React.FC<LuxuryPackage> = ({description}) => {
    const [expanded,setExpaned]=useState(false)

    const toggleExpanded=()=>{
        setExpaned(!expanded)

    }
    return (
        <>
            <h1 className={`text-3xl ${antic.className} font-semibold text-primary mt-20 mb-8 `}>Trek Overview</h1>
            <p className="text-justify font-light leading-9">
                {expanded ? description : `${description?.slice(0, 800)}...`}
            </p>
            <Button onClick={toggleExpanded} variant='light' className="text-primary underline underline-offset-2 rounded-sm my-4">
                {expanded ? 'Show Less' : 'Read More'}
            </Button>
        </>
    )
}

export default DestinationandOverview
