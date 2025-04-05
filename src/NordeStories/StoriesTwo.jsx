import React from 'react'
import DenimLatest from "../assets/DenimLatest.jpg"
import PantsSix from "../assets/PantsSix.jpg"
import modelThree from "../assets/modelThree.jpg"
import Spring from "../assets/Spring.jpg"
import ShirtTen from "../assets/ShirtTen.jpg"
import ShirtEleven from "../assets/ShirtEleven.jpg"
import Ideas from "../assets/Ideas.jpg"
import modelTen from "../assets/modelTen.jpg"
import DenimTen from "../assets/DenimTen.jpg"
const StoriesTwo = () => {
  return (
    <div className='mx-20 text-start latest'>
      <h1 className='text-5xl text-[#030303] mt-47 tracking-wide pb-8'>The Latest</h1>
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-7 gap-y-3">
        <div className="space-y-4">
       <img src={DenimLatest} alt="" className="" /> 
        <p className='text-3xl'>The February Cleaner Fashion Edit</p>
        <button className='text-xs border rounded-2xl px-4 py-1 border-gray-400'>Transparency</button>
        </div>
        <div className="space-y-4">
       <img src={PantsSix} alt="" className="" /> 
        <p className='text-3xl'>5 Pants You'll Want in Your Wardrobe</p>
        <button className='text-xs border rounded-2xl px-4 py-1 border-gray-400'>Style</button>
        </div>
        <div className="space-y-4">
       <img src={modelThree} alt="" className="" /> 
        <p className='text-3xl'>Men's Spring Essentials</p>
        <button className='text-xs border rounded-2xl px-4 py-1 border-gray-400'>Product</button>
        </div>
        <div className="space-y-4">
       <img src={Spring} alt="" className="" /> 
        <p className='text-3xl'>Behind The Spring Edit 001</p>
        <button className='text-xs border rounded-2xl px-4 py-1 border-gray-400'>Style</button>
        </div>
        <div className="space-y-4">
       <img src={ShirtTen} alt="" className="" /> 
        <p className='text-3xl'>The Shirt Showdown</p>
        <button className='text-xs border rounded-2xl px-4 py-1 border-gray-400'>Style</button>
        </div>
        <div className="space-y-4">
       <img src={ShirtEleven} alt="" className="" /> 
        <p className='text-3xl'>The Shirts Guide</p>
        <button className='text-xs border rounded-2xl px-4 py-1 border-gray-400'>Style</button>
        </div>
        <div className="space-y-4">
       <img src={Ideas} alt="" className="" /> 
        <p className='text-3xl'>Date Night Dressing Ideas</p>
        <button className='text-xs border rounded-2xl px-4 py-1 border-gray-400'>Style</button>
        </div>
        <div className="space-y-4">
       <img src={modelTen} alt="" className="" /> 
        <p className='text-3xl'>The January Cleaner Fashion Edit</p>
        <button className='text-xs border rounded-2xl px-4 py-1 border-gray-400'>Transparency</button>
        </div>
        <div className="space-y-4">
       <img src={DenimTen} alt="" className="" /> 
        <p className='text-3xl'>Destination Denim</p>
        <button className='text-xs border rounded-2xl px-4 py-1 border-gray-400'>Style</button>
        </div>
     </div>
    </div>
  )
}

export default StoriesTwo
