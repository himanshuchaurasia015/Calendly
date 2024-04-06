import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

const [view, setView]= useState("hidden")
    
    
    return (
        <div className=''>
        <div className=" overflow-hidden relative py-5 lg:flex lg:flex-row lg:justify-around ">
  {/* <a href="#home" className="active  py-[14px] px-[16px] text-[17px] block">Logo</a> */}
  <img className="w-56" src="https://marketing-assets.calendly.com/media/logo.svg" alt=""/>
  {/* <!-- Navigation links (hidden by default) --> */}
  <div className={`${view}  lg:flex lg:flex-row lg:gap-x-24`}>
   <div className='ms-10 lg:ms-0 lg:flex lg:flex-row '>
    <a className="border-b-2 lg:border-b-0 me-10 my-4 lg:me-0 lg:my-0 py-[14px] px-[16px] text-[17px] block " href="/">Individuals</a>
			
			<a className="border-b-2 lg:border-b-0 me-10 my-4 lg:me-0 lg:my-0 py-[14px] px-[16px] text-[17px] block" href="/">Teams</a>
			
			<a className="border-b-2 lg:border-b-0 me-10 my-4 lg:me-0 lg:my-0 py-[14px] px-[16px] text-[17px] block" href="/">Enterprise</a>
			
			<a className="border-b-2 lg:border-b-0 me-10 my-4 lg:me-0 lg:my-0 py-[14px] px-[16px] text-[17px] block" href="/">Pricing</a>
			<a className="border-b-2 lg:border-b-0 me-10 my-4 lg:me-0 lg:my-0 py-[14px] px-[16px] text-[17px] block" href="/">Product</a>
			<a className="border-b-2 lg:border-b-0 me-10 my-4 lg:me-0 lg:my-0 py-[14px] px-[16px] text-[17px] block" href="/">Resources</a>
			<a className="border-b-2 lg:border-b-0 me-10 my-4 lg:me-0 lg:my-0 py-[14px] px-[16px] text-[17px] block" href="/">Contact</a>
      </div>
      <div className={`${view} lg:flex`}>
  <a className="py-[14px] px-[16px] text-[17px] block text-center" href="/">Log In</a>
		<a className="py-[14px] px-[16px] text-[17px] block text-white bg-blue-700 text-center rounded-full hover:bg-blue-800" href="/">Get started</a>
        </div>
  </div>
  
  {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
  
  <button href="/" className="  py-[14px] px-[16px] text-[17px] block absolute right-0 top-0 mt-5 lg:hidden">
    <FaBars className="fa fa-bars text-4xl"  onClick={()=>{view==="hidden"? setView("visible") : setView("hidden");}}></FaBars>
  </button>
</div>
</div>
       
    );
};

export default Navbar;










