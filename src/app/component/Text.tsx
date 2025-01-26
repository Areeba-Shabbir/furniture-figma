import React from 'react';

const Text = () => {
  return (
    <div>
      <div className="bg-[#faf4f4] flex justify-center flex-wrap items-center py-10 sm:py-16 gap-6 md:gap-12">
        {/* Free Delivery Section */}
        <div className="w-full sm:w-[300px] md:w-[250px] lg:w-[270px] text-center sm:text-left">
          <h1 className="font-bold text-2xl md:text-3xl mb-4">Free Delivery</h1>
          <p className="text-gray-500 text-sm md:text-base">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>
        
        {/* 90 Days Return Section */}
        <div className="w-full sm:w-[300px] md:w-[250px] lg:w-[270px] text-center sm:text-left">
          <h1 className="font-bold text-2xl md:text-3xl mb-4">90 Days Return</h1>
          <p className="text-gray-500 text-sm md:text-base">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>

        {/* Secure Payment Section */}
        <div className="w-full sm:w-[300px] md:w-[250px] lg:w-[270px] text-center sm:text-left">
          <h1 className="font-bold text-2xl md:text-3xl mb-4">Secure Payment</h1>
          <p className="text-gray-500 text-sm md:text-base">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Text;
