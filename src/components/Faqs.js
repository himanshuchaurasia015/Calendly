import React from 'react'

const Faqs = () => {
  return (
    <div className="grid  justify-items-center py-16 md:py-20 bg-sky-50">
      <p className='text-3xl font-extrabold '>Frequently Asked Questions</p>

      <div className='text-sm grid my-5 '>
        <p>Not seeing what you are looking for?</p>
        <p className='justify-self-center mt-1'>Go to our <span className='text-blue-700'>help center</span></p>
      </div>
      <div className='max-w-lg'>
        <div className='flex shadow-md bg-white py-4 px-3 justify-between gap-5 rounded-md mt-2'>
        <p className='font-semibold'>What are Calendly apps?</p>
        <button className=''>+</button>
      </div>
      <div className='flex shadow-md bg-white py-4 px-3 justify-between gap-5 rounded-md mt-2'>
        <p className='font-semibold'>What are Calendly integrations?</p>
        <button>+</button>
      </div>
      <div className='flex shadow-md bg-white py-4 px-3 justify-between gap-5 rounded-md mt-2'>
        <p className='font-semibold'>How do i install and use integrations?</p>
        <button>+</button>

      </div>
      <div className='flex shadow-md bg-white py-4 px-3 justify-between gap-5 rounded-md mt-2'>
        <p className='font-semibold'>How do i request a new integration?</p>
        <button>+</button>

      </div>
      <div className='flex shadow-md bg-white py-4 px-3 justify-between gap-5 rounded-md mt-2'>
        
         <p className='font-semibold'>Want to build a Calendly integration? Learn about our API?</p>
        
         <button className=''>+</button>

      </div>
      </div>
      
    </div>
  )
}

export default Faqs
