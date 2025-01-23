// import React from 'react'
// import Card from '../component/common/card'
// import productData from '../../utils/productData'
// import Link from 'next/link'

import Image from "next/image"
import ourblog from "@/app/public/ourblog.png"

export default function Topproduct(){
 return (
  <div className="">
 <div className='flex justify-center flex-col items-center my-20'>
  <div >
  <h1 className="text-2xl text-center text-gray-900" >Top Picks</h1>
    <h2 className='my-4 text-gray-500'>
     Find a bright ideal to suit your taste our great selection of suspension, floors and table lights
   </h2>
 </div>
   <div>
    <Image
    src={ourblog}
    alt="blog"
    />
   </div>
  

   <div className='flex justify-center items-center py-10'>
         <span className=" border-b-2 py-2 text-2xl border-black"> View More </span>
                              </div>
                              
 </div>
 </div>
    )};









