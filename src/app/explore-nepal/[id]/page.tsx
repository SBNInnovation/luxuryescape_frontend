import SingleExplore from '@/components/ExploreNepal/SingleExplore'
import React from 'react'

const page = ({params}:{params:{id:string}}) => {
  return (
    <div>
      <SingleExplore id={params.id}/>
    </div>
  )
}

export default page
