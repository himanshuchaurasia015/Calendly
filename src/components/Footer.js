import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";


const Footer = () => {
    return (<div>
        <div className='p-16 lg:flex flex-row gap-x-20  '>
            <div className='max-w-72'>
<div className='text-4xl md:text-6xl font-bold'>
    <p className='text-slate-800'>Easy</p>
    <p className='text-blue-700'>ahead</p>
</div>
<div className=' text-gray-700 text-base my-5'>
    <p className="hover:underline">We take work out of connecting with others so you can accomplish more</p>
</div>
<div className='my-8'>
<select name="lang" id="lang" className='border-y-2 border-x-2 pe-48 py-1 rounded-md'>
  <option value="English">English</option>
  <option value="Hindi">Hindi</option>
</select>
</div>
<div className='flex max-w-24 max-h-10'>
    <img className='h-7' src="appstore.png" alt=""/>
    <img className='h-9' src="google play.png" alt=""/>
</div>
<div>
    <div className="flex flex-row gap-5 my-10 lg:mt-10 ">
        <FaTwitter className="h-6  w-fit"/>
    < FaFacebookF className="h-6  w-fit" />
    <FaInstagram className="h-6  w-fit " />
    <FaLinkedinIn className="h-6  w-fit "/>
    <FiYoutube className="h-6  w-fit " />
    </div>
</div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-5 w-full'>
        <div>
           <p  className="text-xl md:text-2xl font-bold">About</p>
           <div className=" grid gap-y-3 my-3 text-gray-700 ">
            <p className="hover:underline">About Calendly</p>
            <p className="hover:underline">Contract Sales</p>
            <p className="hover:underline">Newsroom</p>
            <p className="hover:underline">Careers</p>
            <p className="hover:underline">Security</p>
            </div> 
        </div>
        <div>
           <p className="text-xl md:text-2xl font-bold">Solutions</p>
           <div className=' grid gap-y-3 my-3 text-gray-700 text-base'>
            <p className="hover:underline">Customer Success</p>
            <p className="hover:underline">Sales</p>
            <p className="hover:underline">Recruiting</p>
            <p className="hover:underline">Information Technology</p>
            <p className="hover:underline">Marketing</p>
            </div> 
        </div>
        <div>
           <p className="text-xl md:text-2xl font-bold">Popular Features</p>
           <div className=" grid gap-y-3 my-3 text-gray-700 text-base">
            <p className="hover:underline">Embed Calendly</p>
            <p className="hover:underline">Embedded Availability</p>
            <p className="hover:underline">Sending Notifications</p>
            <p className="hover:underline">Using Calendly Mobile</p>
            </div> 
        </div> <div>
           <p className="text-xl md:text-2xl font-bold">Support</p>
           <div className=" grid gap-y-3 my-3 text-gray-700 text-base">
            <p className="hover:underline">Help Center</p>
            <p className="hover:underline">Video Tutorials</p>
            <p className="hover:underline">Cookie Settings</p>
          
            </div> 
        </div> <div>
           <p className="text-xl md:text-2xl font-bold">Add-Ons</p>
           <div className=" grid gap-y-3 my-3 text-gray-700 text-base">
            <p className="hover:underline">Download for Chrome</p>
            <p className="hover:underline">Download for Firefox</p>
           
            </div> 
        </div> <div>
           <p className="text-xl md:text-2xl font-bold">Developers</p>
           <div className=" grid gap-y-3 my-3 text-gray-700 text-base">
            <p className="hover:underline">Developer Tools</p>
            
            </div> 
        </div>
            </div>
            
        </div>
        <div className='flex flex-row justify-between mx-16 mb-16 text-gray-700 text-base'>
                <div><p className="hover:underline">Copyright Calendly 2022</p></div>
                <div><p className="hover:underline">Privacy / Terms and Conditions</p></div>
            </div>
        </div>
      );
};

export default Footer;
