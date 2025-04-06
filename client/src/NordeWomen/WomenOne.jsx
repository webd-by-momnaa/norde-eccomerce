import React from 'react'
import modelOne from "../assets/modelOne.png"
import modelTwo from "../assets/modelTwo.png"
import { FaArrowRight } from 'react-icons/fa'
const WomenOne = () => {
  return (
    <div className='lg:flex lg:justify-between bg-[#F3F3F3] h-122'>
      <div className="">
      <img src={modelOne} alt="Nordé Model" className=' object-cover object-center max-sm:hidden w-107 relative left-50 max-md:-top-39  min-md:-top-39'/>
      </div>
      <div className="">
        <p className='pt-40 tracking-wide text-xl relative left-28  w-60 z-1'>THE SPRING EDIT <b>001</b></p>
        <div className="flex space-x-4 pt-59 text-xs hover:font-semibold relative left-28 z-1">
        <FaArrowRight className='font-light'/>
        <p className='tracking-wide '>SHOP THE COLLECTION </p>
        </div>
      </div>
      <div className="">
      <img src={modelTwo} alt="Nordé Model" className='max-sm:relative max-sm:-top-110 object-cover object-center relative w-100 h-full  max-sm:w-200  max-sm:h-122'/>
      </div>
    
    </div>
  )
}

export default WomenOne
