import { antic } from '@/utility/font'
import React from 'react'
import Image from 'next/image'

const OverView = () => {
    return (
        <div className='w-full'>
            <h1 className={`${antic.className} text-primary text-5xl mb-8`}>Overview</h1>
            <div className='flex gap-8 text-justify w-full'>
                <p className='w-2/5'>Discover the enchanting beauty of Bhutan, the "Land of the Thunder Dragon," with our exclusive luxury tours. Immerse yourself in this Himalayan kingdom's serene landscapes, from lush valleys and towering peaks to ancient monasteries perched on cliffs. Bhutan offers a harmonious blend of rich cultural heritage and breathtaking natural wonders. Enjoy stays in world-class resorts, savor gourmet Bhutanese cuisine, and explore iconic landmarks like Tiger&apos;s Nest Monastery and Punakha Dzong. With personalized experiences such as private guided tours, wellness retreats, and traditional cultural performances, our luxury trips ensure an unmatched journey through the heart of Bhutan's timeless charm.
                    </p>
                <div className='w-3/5 flex gap-2'>
                    <div className='h-[400px] w-1/3'>
                        <Image src={"https://images.unsplash.com/photo-1729174518995-8c4546b3dd53?q=80&w=2840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Bhutan' height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                    </div>
                    <div className='h-[400px] w-1/3'>
                        <Image src={"https://images.unsplash.com/photo-1635134873780-4ffac86376e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ymh1dGFufGVufDB8MXwwfHx8Mg%3D%3D"} alt='Bhutan' height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                    </div>
                    <div className='h-[400px] w-1/3'>
                        <Image src={"https://images.unsplash.com/photo-1544811096-89a14f806d55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJodXRhbnxlbnwwfDF8MHx8fDI%3D"} alt='Bhutan' height={1000} width={1000} className='object-cover h-full w-full rounded-sm'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverView
