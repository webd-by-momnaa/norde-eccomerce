import React from 'react'
import  womenOne from "../assets/womenOne.jpg"
import  TeesThree from "../assets/TeesThree.jpg"
import { FaArrowRight } from 'react-icons/fa'
const WomenFour = () => {
  return (
    <div className='lg:flex'>
      <div className="">
        <img src={womenOne} alt="Denim-Norde" className="w-570 object-cover object-top h-200" />
        <div className="-mt-15 ml-5">
        <p className='text-xs text-start pb-2 tracking-wider'>REIMAGINE YOUR WARDROBE</p>
            <div className="flex space-x-4 text-xs hover:font-semibold  ">
             <FaArrowRight className=''/>
             <p className='tracking-wide'>SEE THE STORY </p>
             </div>
             </div>
      </div>
      <div className="">
        <img src={TeesThree} alt="Shoes-Norde" className=" h-200 w-450  object-cover object-center " />
        <div className="-mt-15 ml-5">
        <p className='text-xs text-start pb-2 tracking-wider'>THE SHIRT SHOWDOWN</p>
            <div className="flex space-x-4 text-xs hover:font-semibold relative ">
             <FaArrowRight className=''/>
             <p className='tracking-wide'>SEE THE STORY</p>
             </div>
             </div>
      </div>
    </div>
  )
}

export default WomenFour
