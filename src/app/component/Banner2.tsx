import React from 'react'

const Banner2 = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className='bg-custom-pattern w-full h-auto sm:h-[400px] bg-no-repeat flex justify-center flex-col gap-4 items-center py-8 px-4'>
        {/* Heading */}
        <h1 className='text-3xl sm:text-5xl font-bold text-center'>
          Our Instagram
        </h1>
        {/* Description */}
        <p className='text-center text-gray-600'>
          Follow our store on Instagram
        </p>
        {/* Button */}
        <button className='h-12 w-full sm:w-[200px] rounded-3xl bg-[#F9F7F8] border-2 text-center mx-auto'>
          Follow Us
        </button>
      </div>
    </div>
  )
}

export default Banner2
