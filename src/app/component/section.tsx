


import Image from 'next/image'
import React from 'react'
import image1 from "@/app/public/image1.png"
import image2 from "@/app/public/image2.png"

const Section = () => {
  return (
    <div className='flex justify-center items-center bg-pink-100'>
       <div className="max-w-md m-2 p-4 ">
      
      
        <Image 
          src={image1} 
          alt='id' 
          width={500} 
          height={500} 
          className=" "
        />
    
      
      <h3 className="mt-[-50px] mb-4 text-3xl font-medium  text-gray-800">
        Side Table
      </h3>
      <span className="pt-6 py-2 border-b-2 border-black text-xl font-medium  text-gray-800">
       View More
      </span>
     
    </div>
      
       <div className="max-w-md m-2 p-4    ">
      
        
        <Image 
          src={image2} 
          alt='id' 
          width={500} 
          height={500} 
          className=""
        />
    
      
      <h3 className="mt-[-50px] mb-4 text-3xl font-medium  text-gray-800">
        Side Table
      </h3>
      <span className="pt-6 py-2 border-b-2 border-black text-xl font-medium  text-gray-800">
       View More
      </span>
     
    </div>
      

    
    </div>
  )
}

export default Section