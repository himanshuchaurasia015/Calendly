import React from 'react'
import Box from './Box'

const boxes=[{src:"zoom.png",
title:"Zoom", para:"Connect from anywhere and eliminate administrative work"},
{src:"salesforce.png",
title:"Salesforce", para:"Connect from anywhere and eliminate administrative work"},
{src:"paypal.png",
title:"Paypal", para:"Connect from anywhere and eliminate administrative work"},
{src:"stripe.png",
title:"Stripe", para:"Connect from anywhere and eliminate administrative work"},
{src:"googlemt.png",
title:"Google Meet", para:"Connect from anywhere and eliminate administrative work"},
{src:"mt.png",
title:"Teams", para:"Connect from anywhere and eliminate administrative work"},
{src:"c.png",
title:"C", para:"Connect from anywhere and eliminate administrative work"},
{src:"spotify.png",
title:"Spotify", para:"Connect from anywhere and eliminate administrative work"},
{src:"figma.png",
title:"Figma", para:"Connect from anywhere and eliminate administrative work"},
{src:"nodejs.png",
title:"Nodejs", para:"Connect from anywhere and eliminate administrative work"},
{src:"honda.png",
title:"Honda", para:"Connect from anywhere and eliminate administrative work"},
{src:"maruti.png",
title:"Maruti", para:"Connect from anywhere and eliminate administrative work"},
{src:"microsoft.png",
title:"Microsoft", para:"Connect from anywhere and eliminate administrative work"},
{src:"windows.png",
title:"Windows", para:"Connect from anywhere and eliminate administrative work"},
{src:"hp.png",
title:"HP", para:"Connect from anywhere and eliminate administrative work"},
{src:"dell.png",
title:"Dell", para:"Connect from anywhere and eliminate administrative work"}]

const Category = () => {
  return (
    <div className='px-6 py-10 md:px-16 '>
      <p  className='text-xl md:text-2xl font-bold'>Categories</p>
      <div className=' pt-6 flex flex-row gap-8 md:gap-16' >
        <div className=' lg:min-w-72  justify-self-start'>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md' >All</p>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md'>Popular</p>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md'>Extensions & Apps</p>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md'>Calenders</p>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md'>Sales & CRM</p>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md'>Video Conferencing</p>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md'>Marketing</p>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md'>Recruiting & ATS</p>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md'>Payments</p>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md'>Analytics</p>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md'>API & Connectors</p>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md'>Email Messaging</p>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md'>Embedded Calendars</p>
            <p className='p-4 hover:text-white  hover:bg-blue-700 rounded-md'>Other Integrations</p>
        </div>
      
      <div >
        <p className='mb-3'>Viewing: {boxes.length} Popular</p>
        <div className='grid lg:grid-cols-3 gap-5 lg:gap-12 lg:justify-self-end'>  { boxes.map((box)=>{
          return(<>
          <Box src={box.src} title={box.title} para={box.para} />
          </>)

        })

        }</div>
      
        
      </div>
</div>

    </div>
  )
}

export default Category
