import React from 'react'
import sustainability from "../assets/sustainability.jpg"
import { FaArrowRight } from 'react-icons/fa'
const MenFive = () => {
  return (
    <div>
        <img src={sustainability} alt="sustainability" className="object-cover object-bottom  h-200 w-500" />
        <div className="absolute max-sm:top-1100 left-9 max-sm:px-1 top-840">
        <h1 className='text-[12px] text-stone-50 pb-2 max-sm:text-2xl max-sm:font-bold'>WE'RE ON A MISSION TO CLEAN UP THE INDUSTRY</h1>
        <div className="flex space-x-4 text-xs hover:font-semibold">
                     <FaArrowRight className='text-stone-50'/>
                     <h1 className='tracking-wide text-stone-50 cursor-pointer'>LEARN MORE </h1>
                     </div>
                     </div>
    </div>
  )
}

export default MenFive
