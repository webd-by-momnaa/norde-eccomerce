import React from 'react'
import Marquee from 'react-fast-marquee'
import { PiRecycleThin } from "react-icons/pi";
const StoriesThree = () => {
  return (
    <div className="">
     <Marquee speed={50} pauseOnHover={true} gradient={true} gradientWidth={100} className='text-6xl pb-3 '>
     <PiRecycleThin size={70} className='px-3' />
     Keep It Clean 
     <PiRecycleThin size={70} className='px-3'/>
      Keep It Cool
      <PiRecycleThin size={70} className='px-3'/>
      Do right by people
    </Marquee>
    </div>
  )
}

export default StoriesThree
