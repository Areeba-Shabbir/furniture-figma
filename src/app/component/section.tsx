import Image from 'next/image'
import React from 'react'
import image1 from "@/app/public/image1.png"
import image2 from "@/app/public/image2.png"

const Section = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-pink-100 px-4 py-8 gap-4">
      {/* First Card */}
      <div className="w-full sm:w-[300px] lg:w-[400px] max-w-md m-2 p-4">
        <Image
          src={image1}
          alt="Side Table 1"
          width={500}
          height={500}
          className="w-full h-auto"
        />
        <h3 className="mt-[-30px] mb-4 text-2xl sm:text-3xl font-medium text-gray-800 text-center sm:text-left">
          Side Table
        </h3>
        <span className="pt-6 py-2 border-b-2 border-black text-lg sm:text-xl font-medium text-gray-800 cursor-pointer inline-block">
          View More
        </span>
      </div>

      {/* Second Card */}
      <div className="w-full sm:w-[300px] lg:w-[400px] max-w-md m-2 p-4">
        <Image
          src={image2}
          alt="Side Table 2"
          width={500}
          height={500}
          className="w-full h-auto"
        />
        <h3 className="mt-[-30px] mb-4 text-2xl sm:text-3xl font-medium text-gray-800 text-center sm:text-left">
          Side Table
        </h3>
        <span className="pt-6 py-2 border-b-2 border-black text-lg sm:text-xl font-medium text-gray-800 cursor-pointer inline-block">
          View More
        </span>
      </div>
    </div>
  )
}

export default Section
