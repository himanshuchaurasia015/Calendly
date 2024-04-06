import React from 'react'
import { CiSearch } from "react-icons/ci";
// import { fas, far, fal } from '@awesome.me/kit-534160bb53/icons'
const Integrate = () => {
  return (
    <div className=" bg-sky-50 px-16 pt-10 pb-16 flex justify-around">
        <div>
      <p className=''><span className="text-blue-700">Home</span> / <span className="text-blue-700">Product</span> / <span className='text-slate-400'>Integrations</span></p>
      <p className='mt-10  text-slate-600'>APPS & INTEGRATIONS</p>
      <div className="font-bold text-4xl lg:text-6xl mt-10">
      <p>Integrate Calendly,</p>
      <p>boost productivity</p>
      </div>
      <p className='my-10  text-slate-500'>Smart scheduling automation will change the way you - and your tools - work.
        
      </p>
      <div className=" flex gap-3 hover:border-blue-600 shadow-md rounded-full border-2 bg-white p-5"><CiSearch className='self-center text-xl text-blue-600 hover:text-blue-800' /><input  type="search" className=' outline-none w-full' placeholder='Search for an integration'></input></div>

      </div>
    <div className='hidden  md:flex md:flex-col md:rounded-[100%]  p-8 bg-blue-50 w-[30rem] h-[30rem] md:justify-center  from-blue-200  border-spacing-2 md:gap-10'>
      <div className='flex flex-row gap-10 justify-center'>
        <img className='w-[60px]' src='mt.png' alt=''></img>
      <img className='w-[60px]' src='googlemt.png' alt=''></img>
      </div>
      <div className='flex flex-row justify-around'>
      <img className='w-[60px] ' src='zoom.png' alt=''></img>
      <img className='w-[60px]' src='c.png' alt=''></img>
      <img className='w-[60px]' src='salesforce.png' alt=''></img>
      </div>
      <div className='flex flex-row  justify-center gap-10'>
        <img className='w-[60px]' src='paypal.png' alt=''></img>
      <img className='w-[60px]' src='stripe.png' alt=''></img>
      </div>
    </div>
    </div>
  )
}

export default Integrate;
