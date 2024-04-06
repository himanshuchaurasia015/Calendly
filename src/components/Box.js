import React from 'react'

const Box = (props) => {
  return (
    <div className="shadow-xl size-fit border-2 hover:border-blue-700 rounded-lg px-10 py-6 lg:py-10 lg:max-w-72 lg:min-h-72">
      <img className='h-12  ' src={props.src} alt="" />

<p className='font-semibold lg:text-xl py-4'>{props.title}</p>
<div className=' md:block '>
     <div>
      <p className='text-gray-600 text-[15px]'>{props.para}</p>
      </div> 
      <div>
        <p className='hover:text-black text-blue-700 font-bold mt-10'>Learn more ></p>
      </div>
      </div>
    </div>
  )
}

export default Box



