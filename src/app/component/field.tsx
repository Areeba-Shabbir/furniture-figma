import React from 'react'

function Field() {
  return (
    <div>
      <div className='bg-[#FAFAFA] py-16'>
        <div className='flex flex-wrap justify-between mx-auto max-w-full px-4 sm:px-6 md:px-8'>
          {/* Free Delivery Section */}
          <div className='text-left mb-6 sm:mb-0 w-full sm:w-1/2 lg:w-auto sm:mr-6 lg:mr-12'>
            <h3 className='font-semibold text-2xl text-center sm:text-left'>Free Delivery</h3>
            <p className='text-gray-600 text-sm text-center sm:text-left'>
              For all orders over $50, consectetur adipiscing elit.
            </p>
            <p className='text-gray-600 text-sm text-center sm:text-left'>
              adipiscing elit.
            </p>
          </div>

          {/* 90 Days Return Section */}
          <div className='text-left mb-6 sm:mb-0 w-full sm:w-1/2 lg:w-auto sm:mr-6 lg:mr-12'>
            <h3 className='font-semibold text-2xl text-center sm:text-left'>90 Days Return</h3>
            <p className='text-gray-600 text-sm text-center sm:text-left'>
              If goods have problems, consectetur
            </p>
            <p className='text-gray-600 text-sm text-center sm:text-left'>
              adipiscing elit.
            </p>
          </div>

          {/* Secure Payment Section */}
          <div className='text-left mb-6 sm:mb-0 w-full sm:w-1/2 lg:w-auto'>
            <h3 className='font-semibold text-2xl text-center sm:text-left'>Secure Payment</h3>
            <p className='text-gray-600 text-sm text-center sm:text-left'>
              100% secure payment, consectetur
            </p>
            <p className='text-gray-600 text-sm text-center sm:text-left'>
              adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Field;
