import React from 'react'
import {  BiUpArrow } from 'react-icons/bi'
import { IoArrowForward } from "react-icons/io5";
import { Link } from 'react-router-dom'
const NordeFooter = () => {
  return (
    <div className="bg-[#F5F4F4] footer tracking-tight h-110 py-13 z-300000">
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='relative -top-5 '>
  Back to Top
<BiUpArrow className='relative -top-5 left-22'/>
</button>
    <div className='grid grid-cols-5 divide-x-3 divide-none text-left px-35 mb-9'>
      <div className="flex flex-col gap-3  ">
        <h1 className='text-[16px] text-[#262626]'>Account</h1>
        <Link className='text-[#737373] text-[14px]'>Log In</Link>
        <Link className='text-[#737373] text-[14px]'>Sign Up</Link>
        <Link className='text-[#737373] text-[14px]'>Redeem a Gift Card</Link>
      </div>
      <div className="flex flex-col gap-3 ">
      <h1 className='text-[16px] text-[#262626]'>Company</h1>
        <Link className='text-[#737373] text-[14px]'>About</Link>
        <Link className='text-[#737373] text-[14px]'>Enviromental Initiatives</Link>
        <Link className='text-[#737373] text-[14px]'>Factories</Link>
        <Link className='text-[#737373] text-[14px]'>DEI</Link>
        <Link className='text-[#737373] text-[14px]'>Careers</Link>
        <Link className='text-[#737373] text-[14px]'>International</Link>
        <Link className='text-[#737373] text-[14px]'>Accessibility</Link>
      </div>
      <div className="flex flex-col gap-3  ">
        <h1 className='text-[16px] text-[#262626]'>Get Help</h1>
        <Link className='text-[#737373] text-[14px]'>Help Center</Link>
        <Link className='text-[#737373] text-[14px]'>Live Chat</Link>
        <Link className='text-[#737373] text-[14px]'>Return Policy</Link>
        <Link className='text-[#737373] text-[14px]'>Shipping Info</Link>
        <Link className='text-[#737373] text-[14px]'>Bulk Orders</Link>
      </div>
      <div className="flex flex-col gap-3 text-xs">
        <h1 className='text-[16px] text-[#262626]'>Connect</h1>
        <Link className='text-[#737373] text-[14px]'>Facebook</Link>
        <Link className='text-[#737373] text-[14px]'>Instagram</Link>
        <Link className='text-[#737373] text-[14px]'>Twitter</Link>
        <Link className='text-[#737373] text-[14px]'>Affiliates</Link>
        <Link className='text-[#737373] text-[14px]'>Our Stores</Link>
      </div>
      <div className="flex flex-col gap-y-3 ">
      <p className='text-[24px] w-80'>Sign up to receive 15% off your first order.</p>
      <div className="">
      <input type="email" autoComplete='on' className=' outline outline-gray-300 w-80 h-12 focus:outline focus:outline-black focus:bg-white' placeholder='Email Address'/>
      {/* <svg className='relative -top-12 left-62 border border-gray-400 p-3'></svg>
       */}
       <IoArrowForward className='relative -top-12 left-68 border border-gray-300 bg-gray-200 text-5xl p-3  text-gray-500'/>
      </div>
      <h2 className='text-[#737373] text-xs w-80'>By providing your email, you agree to receive marketing emails and accept our <Link className='underline'>Privacy Policy</Link> and <Link className='underline'>Terms</Link>.</h2>
      </div>
    </div>
    <div className="text-xs space-x-7 text-[#737373] mb-4">
        <Link className="">Privacy Policy</Link>
        <Link className="">Terms of Service</Link>
        <Link className="capitalize">Do not sell or share my personal information</Link>
        <Link className="capitalize">CA supply chain transparency</Link>
        <Link className="capitalize">vendor code of conduct</Link>
        <Link className="capitalize">sitemap pages</Link>
        <Link className="capitalize">sitemap products</Link>
    </div>
    <div className="text-[#737373] lg:text-xs">
        &copy; 2025 All Rights Reserved
    </div>
    </div>
  )
}

export default NordeFooter
