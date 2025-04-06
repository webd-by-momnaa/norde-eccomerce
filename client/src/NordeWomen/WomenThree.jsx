import React from 'react'
import DenimTwo from "../assets/DenimTwo.jpg"
import ShoesOne from "../assets/ShoesOne.jpg"
import { FaArrowRight } from 'react-icons/fa'
const WomenThree = () => {
  return (
    <div className='lg:flex'>
      <div className="">
        <img src={DenimTwo} alt="Denim-Norde" className="w-570 object-cover object-bottom h-200" />
        <div className="-mt-11 ml-5">
        <p className='text-xs text-start pb-2 tracking-wider'>DENIM DONE DIFFERENTLY</p>
            <div className="flex space-x-4 text-xs hover:font-semibold relative ">
             <FaArrowRight className=''/>
             <p className='tracking-wide'>SHOP NOW </p>
             </div>
             </div>
      </div>
      <div className="">
        <img src={ShoesOne} alt="Shoes-Norde" className=" h-200 w-450  object-cover object-center " />
        <div className="-mt-11 ml-5">
        <p className='text-xs text-start pb-2 tracking-wider'>STEP UP YOUR SHOES</p>
            <div className="flex space-x-4 text-xs hover:font-semibold relative ">
             <FaArrowRight className=''/>
             <p className='tracking-wide'>SHOP NOW </p>
             </div>
             </div>
      </div>
    </div>
  )
}

export default WomenThree
