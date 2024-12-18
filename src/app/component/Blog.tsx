
import React from "react";
import Image from "next/image";
import blog1 from "@/app/public/blog1.png"
import blog2 from "@/app/public/blog2.png"
import blog3 from "@/app/public/blog3.png"
import blog4 from "@/app/public/blog4.png"


export default function Blog(){
return(
// Blogs component

  <div className="max-w-4xl mx-auto px-4 py-16">
    <h2 className="text-2xl font-bold text-center mb-4">Our Blogs</h2>
    <p className="text-gray-500 text-center mb-6">
      Find a bright idea to suit your taste with our great selection
    </p>
   
    <div className="flex gap-9">
    <Image
  src={blog1}
  alt="Blog Image 1"
  width={500}
  height={300}
/>

<Image
  src={blog2}
  alt="Blog Image 1"
  width={500}
  height={300}
/>

<Image
  src={blog3}
  alt="Blog Image 1"
  width={500}
  height={300}
/>
<Image
  src={blog4}
  alt="Blog Image 1"
  width={500}
  height={300}
/>
    </div>



    <div className="text-center mt-12">
      <a
        href="/blogs"
        className="text-black mb-4 text-xl mt-4 cursor-pointer underline"
      >
        View All Post
      </a>
    </div>
  </div>


)};