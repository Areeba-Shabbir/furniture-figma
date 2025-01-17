import Image from 'next/image'
import React from 'react'
import homeImg from "@/app/public/homeImg.png"

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center gap-[50px] h-[600px]'>
      <div className=''>
        <h1 className='text-4xl'>Rocket Single</h1>
        <h2 className='text-3xl mb-4'>seater</h2>
        <span className='text-xl mt-8 hover:border-b-2 border-black'>Shop Now</span>
      </div>
      <div>
        <Image src={homeImg} alt='' height={600} width={600}/>
      </div>
    </div>
  )
}

export default HeroSection