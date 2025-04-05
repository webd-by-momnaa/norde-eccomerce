import React, { useEffect } from 'react';
import SubNavMen from './SubNavMen';
import { BiCart, BiSearch, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const MenNav = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 10) {
          navbar.classList.add("shadow-lg"); // Add shadow
        } else {
          navbar.classList.remove("shadow-lg"); // Remove shadow
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navbar" className="navbar">
      <div className='flex justify-between border-b border-gray-200 py-3 px-[4rem]'>
        <div className=" font-thin pt-1 tracking-tight text-[13px]">
          <Link className='hover:bg-gray-100 p-3 rounded ' to='/women'>Women</Link>
          <Link className='hover:bg-gray-100 p-3 rounded underline underline-offset-24 decoration-2 ' to='/men'>Men</Link>
          <Link className='hover:bg-gray-100 p-3 rounded' to='/everworld-stories'>Everworld Stories</Link>
        </div>
        <div className="uppercase logo font-bold text-2xl tracking-widest">Nordé</div>
        <div className="flex space-x-8 cursor-pointer pt-2">
          <BiSearch className='text-lg'/>
          <BiUser className='text-lg'/>
          <BiCart className='text-lg'/>
        </div>
      </div>
      <SubNavMen/>
    </div>
  );
};

export default MenNav;
