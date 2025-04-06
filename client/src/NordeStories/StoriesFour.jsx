import React from 'react'
import carbon from "../assets/carbon.jpg"
import enviroment from "../assets/Enviroment.jpg"
import factory from "../assets/factory.jpg"
const StoriesFour = () => {
  return (
    <div>
       <div className='mx-20 text-start latest'>
            <h1 className='text-5xl text-[#030303] mt-47 tracking-wide pb-8 max-sm:mt-22 max-sm:text-4xl '>Our Progress</h1>
            <div className="grid grid-cols-3 lg:grid-cols-3 max-sm:grid-cols-1 gap-7 gap-y-3">
              <div className="space-y-4">
             <img src={carbon} alt="" className="" /> 
              <p className='text-3xl'>Carbon Commitment</p>
              </div>
              <div className="space-y-4">
             <img src={enviroment} alt="" className="" /> 
              <p className='text-3xl'>Enviromental Initiatives</p>
              </div>
              <div className="space-y-4">
             <img src={factory} alt="" className="" /> 
              <p className='text-3xl'>Better Factories</p>
              </div>
           </div>
          </div>
    </div>
  )
}

export default StoriesFour
