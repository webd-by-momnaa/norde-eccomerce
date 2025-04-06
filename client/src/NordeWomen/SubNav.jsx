import React from 'react'
import { Link } from 'react-router-dom'
const SubNav = () => {
  return (
    <div>
      <div className="hidden lg:flex justify-center space-x-7  font-light border-b border-gray-200 p-6 subNav tracking-tight text-[13px]">
        <Link>New Arrivals</Link>
        <Link>Cult Favorites</Link>
        <Link>Clothing</Link>
        <Link>Pants</Link>
        <Link>Denim</Link>
        <Link>Tees</Link>
        <Link>Tops</Link>
        <Link>Sweaters</Link>
        <Link>Outerwear</Link>
        <Link>Shoes & Accessories</Link>
        <Link className='text-red-600'>Sale</Link>
      </div>
    </div>
  )
}

export default SubNav
