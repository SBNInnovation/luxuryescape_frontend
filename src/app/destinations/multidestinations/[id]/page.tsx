import SinglePackage from '@/components/Destionation/SinglePackage/SinglePackage'
import React from 'react'

const page = ({params}:{params:{id:string}}) => {
    return (
        <div>
            <SinglePackage id={params.id}/>
        </div>
    )
}

export default page