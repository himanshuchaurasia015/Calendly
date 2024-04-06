import React from 'react';

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-20 px-4 bg-slate-900  shadow-md">
      <h3 className=" text-white text-3xl lg:text-5xl font-bold text-center ">Easy access for easy bookings</h3>
      <p className="text-white text-center font-thin my-8  text-sm w-1/3">Share your Calendly link right from your browser, so you can schedule meetings without the back-and-forth</p>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white  py-4 px-6 rounded-full mr-4 text-xs">Start for free</button>
        <button className="bg-transparent border border-white hover:bg-blue-500 hover:text-white text-white py-4 px-6 rounded-full text-xs">Talk with Sales</button>
      </div>
    </div>
  );
};

export default CallToAction;

