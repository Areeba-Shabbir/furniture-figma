import Image from 'next/image'
import React from 'react'
import image8 from "@/app/public/image8.png"

const Banner = () => {
  return (
    <div className='flex justify-center items-center gap-[50px] h-[600px] bg-[#fff9e5]'>
         <div>
      <Image src={image8} alt="img" height={700} width={700}/>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl'>New Arrivals</h1>
      <h2 className='text-4xl mb-4'>Asgaard Sofa</h2>
     
      <button className='h-12 w-[200px] border-2 border-black'>Buy Now</button>
    </div>
   
  </div>
  )
}

export default Banner