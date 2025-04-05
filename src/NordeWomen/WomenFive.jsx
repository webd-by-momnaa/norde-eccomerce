import React from 'react'
import sustainability from "../assets/sustainability.jpg"
import { FaArrowRight } from 'react-icons/fa'
const WomenFive = () => {
  return (
    <div>
        <img src={sustainability} alt="sustainability" className="object-cover object-bottom  h-190 w-500" />
        <div className="absolute top-0 top-840 left-9">
        <h1 className='text-[12px] text-stone-50 pb-2'>WE'RE ON A MISSION TO CLEAN UP THE INDUSTRY</h1>
        <div className="flex space-x-4 text-xs hover:font-semibold">
                     <FaArrowRight className='text-stone-50'/>
                     <h1 className='tracking-wide text-stone-50 cursor-pointer'>LEARN MORE </h1>
                     </div>
                     </div>
    </div>
  )
}

export default WomenFive
