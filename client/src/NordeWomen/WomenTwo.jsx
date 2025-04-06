import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import sweaterOne from "../assets/SweaterOne.png"
import pantsOne from "../assets/PantsOne.png"
import teesOne from "../assets/TeesOne.png"
import denimOne from "../assets/denimOne.png"
const WomenTwo = () => {
  return (
    <div className="">
<p className='text-xs tracking-wide uppercase text-start my-5 pl-3'>Shop by Category</p>
    <div className='max-sm:overflow-scroll hidden-scrollbar bg-[#F8F6F4]'>
      <div className="bg-[#F8F6F4]">
      <div className="flex justify-between w-300 h-100 py-12 ">
        <div className="">
        <img src={sweaterOne} alt="sweater" className='w-60'/>
                </div>
                <div className="">
        <img src={pantsOne} alt="" className='w-50'/>
         
                </div>
                <div className="">
        <img src={teesOne} alt="" className='w-46 pt-4'/> 
                </div>
                <div className="">
        <img src={denimOne} alt="" className='w-50'/>
         
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
    </div>
  )
}

export default WomenTwo
