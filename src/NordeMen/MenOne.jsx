import React from 'react'
import modelFour from "../assets/modelFour.jpg"
import modelThree from "../assets/modelThree.jpg"
import { FaArrowRight } from 'react-icons/fa'
const MenOne = () => {
  return (
    <div className='flex   h-122'>
      <div className="">
      <img src={modelFour} alt="Nordé Model" className='object-cover object-top h-120 w-200'/>
      <div className="absolute top-0 left-109 top-35">
        <p className='pt-40 tracking-wide text-xl relative left-28'>THE SPRING EDIT <b>001</b></p>
        <div className="flex space-x-4 pt-59 text-xs font-thin hover:font-semibold relative left-28">
        <FaArrowRight className='font-light'/>
        <p className='tracking-wide'>SHOP THE COLLECTION </p>
        </div>
      </div>
      </div>
      
      <div className="">
      <img src={modelThree} alt="Nordé Model" className='object-cover object-center w-200 h-120' />
      </div>
    
    </div>
  )
}

export default MenOne
