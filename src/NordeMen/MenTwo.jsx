import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import SweaterTwo from "../assets/SweaterTwo.png"
import PantThree from "../assets/PantThree.png"
import teesFour from "../assets/TeesFour.png"
import denimFour from "../assets/DenimFour.png"
const MenTwo = () => {
  return (
    <div>
      <p className='text-xs tracking-wide uppercase text-start my-5 pl-3'>Shop by Category</p>
      <div className="bg-[#F8F6F4]">
      <div className="flex justify-between  w-300 h-100 py-12">
        <div className="">
        <img src={SweaterTwo} alt="sweater" className='w-60'/>
                </div>
                <div className="">
        <img src={PantThree} alt="" className='w-50'/>
         
                </div>
                <div className="">
        <img src={teesFour} alt="" className='w-66 pt-4'/> 
                </div>
                <div className="">
        <img src={denimFour} alt="" className='w-60 -mt-6'/>
         
                </div>
      </div>
      </div>
      <div className="flex space-x-70 p-5">
      <div className="flex space-x-4 text-xs hover:font-semibold relative ">
                <FaArrowRight className=''/>
                <p className='tracking-wide'>SWEATERS </p>
                </div>
                <div className="flex space-x-4 text-xs hover:font-semibold relative ">
                <FaArrowRight className='font-light'/>
                <p className='tracking-wide'>PANTS </p>
                </div>
                <div className="flex space-x-4 text-xs hover:font-semibold relative ">
                <FaArrowRight className='font-light'/>
                <p className='tracking-wide'>TEES </p>
                </div>
                <div className="flex space-x-4 text-xs hover:font-semibold relative ">
                <FaArrowRight className='font-light'/>
                <p className='tracking-wide'>DENIM </p>
                </div>
      </div>
    </div>
  )
}

export default MenTwo
