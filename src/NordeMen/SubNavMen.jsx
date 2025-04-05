import React from 'react'
import { Link } from 'react-router-dom'
const SubNavMen = () => {
  return (
    <div>
      <div className="flex justify-center space-x-7  font-light border-b border-gray-200 p-6 subNav tracking-tight text-[13px]">
        <Link>New Arrivals</Link>
        <Link>Best Sellers</Link>
        <Link>Clothing</Link>
        <Link>Pants</Link>
        <Link>Shirts</Link>
        <Link>Denim</Link>
        <Link>Sweaters</Link>
        <Link>Bags & Accessories</Link>
        <Link className='text-red-600'>Sale</Link>
      </div>
    </div>
  )
}

export default SubNavMen
