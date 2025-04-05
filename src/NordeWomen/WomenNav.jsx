import React, { useEffect, useState } from 'react';
import SubNav from './SubNav';
import { BiCart, BiSearch, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { Select } from 'antd';

const WomenNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 10) {
          navbar.classList.add("shadow-lg");
        } else {
          navbar.classList.remove("shadow-lg");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navbar" className="navbar">
      <div className='flex justify-between border-b border-gray-200 py-1 px-[4rem]'>
        {/* Desktop Links */}
        <div className="font-thin pb-1 tracking-tight text-[13px] lg:flex hidden">
          <Link className='hover:bg-gray-100 p-3 rounded underline underline-offset-23 decoration-2' to='/women'>Women</Link>
          <Link className='hover:bg-gray-100 p-3 rounded' to='/men'>Men</Link>
          <Link className='hover:bg-gray-100 p-3 rounded' to='/everworld-stories'>Everworld Stories</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-12 left-0 bg-[#FFFFFF] shadow-lg h-[530px] w-[300px] flex flex-col gap-7 lg:hidden text-start py-4 px-4 ">
            <label htmlFor="">Women</label>
          <Select defaultValue={"catogries"}>
  <Select.Option value="catogries" >Browse Categories</Select.Option>
  <Select.Option value="new-arrivals">New Arrivals</Select.Option>
  <Select.Option value="cult-favorites">Cult Favorites</Select.Option>
  <Select.Option value="clothing">Clothing</Select.Option>
  <Select.Option value="pants">Pants</Select.Option>
  <Select.Option value="denim">Denim</Select.Option>
  <Select.Option value="tees">Tees</Select.Option>
  <Select.Option value="tops">Tops</Select.Option>
  <Select.Option value="sweaters">Sweaters</Select.Option>
  <Select.Option value="outerwear">Outerwear</Select.Option>
  <Select.Option value="shoes-accessories">Shoes & Accessories</Select.Option>
  <Select.Option value="sale" className='text-red-600'>Sale</Select.Option>
</Select>
<label className=''>Men</label>
          <Select defaultValue={"catogries"}>
  <Select.Option value="catogries" >Browse Categories</Select.Option>
  <Select.Option value="new-arrivals">New Arrivals</Select.Option>
  <Select.Option value="best-sellers">Best Sellers</Select.Option>
  <Select.Option value="clothing">Clothing</Select.Option>
  <Select.Option value="pants">Pants</Select.Option>
  <Select.Option value="denim">Denim</Select.Option>
  <Select.Option value="shirts">Shirts</Select.Option>
  <Select.Option value="sweaters">Sweaters</Select.Option>
  <Select.Option value="bags-accessories">Bags & Accessories</Select.Option>
  <Select.Option value="sale" className='text-red-600'>Sale</Select.Option>
</Select>
<Link className="">Everworld Stories</Link>
<span className="w-full  border-b border-gray-300"></span>
<div className="text-sm flex flex-col gap-5 tracking-wide text-[#262633] ">
<Link className="hover:text-[black]">Log In</Link>
<Link className="hover:text-[black]">Sign Up</Link>
<Link className="hover:text-[black]">Redeem Gift Card</Link>
<Link className="hover:text-[black]">Help Center</Link>
</div>
<Link className=""> Pakistan (PKR)</Link>

          </div>
        )}

        {/* Logo */}
        <div className="uppercase font-bold text-2xl tracking-widest mt-2 logo text-[#262626]">Nordé</div>

        {/* Icons */}
        <div className="flex space-x-8 cursor-pointer pt-2">
          <BiSearch className='text-lg'/>
          <BiUser className='text-lg hidden lg:flex'/>
          <BiCart className='text-lg'/>
        </div>
      </div>
      <SubNav />
    </div>
  );
};

export default WomenNav;
