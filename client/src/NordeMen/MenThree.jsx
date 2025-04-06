import React from 'react'
import ModelFive from "../assets/ModelFive.jpg"
import ModelSix from "../assets/ModelSix.jpg"
import { FaArrowRight } from 'react-icons/fa'
const MenThree = () => {
  return (
    <div className='lg:flex'>
      <div className="">
        <img src={ModelFive} alt="Denim-Norde" className="w-570  object-cover object-bottom h-180" />
        <div className="-mt-11 ml-5">
        <p className='text-xs text-start pb-2 tracking-wider'>JUST DROPPED</p>
            <div className="flex space-x-4 text-xs hover:font-semibold relative ">
             <FaArrowRight className=''/>
             <p className='tracking-wide'>SHOP NEW ARRIVALS</p>
             </div>
             </div>
      </div>
      <div className="">
        <img src={ModelSix} alt="Shoes-Norde" className=" h-180 w-450  object-cover object-center " />
        <div className="-mt-11 ml-5">
        <p className='text-xs text-start pb-2 tracking-wider'>BEST-SELLERS</p>
            <div className="flex space-x-4 text-xs hover:font-semibold relative ">
             <FaArrowRight className=''/>
             <p className='tracking-wide'>SHOP NOW </p>
             </div>
             </div>
      </div>
    </div>
  )
}

export default MenThree
