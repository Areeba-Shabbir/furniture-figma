import Image from "next/image";
import Link from "next/link";
import shopimg from "@/app/public/shopimg.png";
import Blog from "@/app/public/Blog11.png";
import Blog2 from "@/app/public/Blog22.png";
import Blog3 from "@/app/public/Blog33.png";
import { FaSearch } from 'react-icons/fa';


export default function Blogs() {
  return (
    <div>
     
   {/* Banner Section */}
   <div className="relative">
        <Image
          src={shopimg}
          alt="Shop Banner"
          height={400}
          width={1440}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-black text-3xl sm:text-4xl font-semibold">Our Blogs</h1>
          <p className="text-black mt-2">Home / Blogs</p>
        </div>
      </div>


      <div className="flex">
        {/* Blog Links */}
        <div className="mt-20 m-20 mb-0 h-[2200px] w-[620px]">
          
            <Image className="mb-20" src={Blog} alt="blog1" />
         
            <Image className="mb-20" src={Blog2} alt="blog2" />
         
          
            <Image className="mb-20" src={Blog3} alt="blog3" />
          
        </div>

        {/* Search Input */}
<div className="flex flex-col h-auto w-[300px] mt-20 relative">
  {/* Search Bar Container */}
  <div className="relative w-full">
    <input
      id="search"
      type="text"
      className="w-full h-[50px] pl-10 pr-4 border border-gray-500 rounded-[10px] opacity-100"
      placeholder=""
    />
    {/* Search Icon */}
    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
  </div>

  {/* Categories Heading */}
<div className="mt-10">
  <h1 className="font-bold text-black text-2xl px-4 sm:px-20">Categories</h1>
</div>
<div className="flex flex-col gap-6 mt-10 text-gray-400">
  <span className="flex justify-between items-center">
    Crafts <span className="ml-4 sm:ml-60">2</span>
  </span>
  <span className="flex justify-between items-center">
    Design <span className="ml-4 sm:ml-[230px]">8</span>
  </span>
  <span className="flex justify-between items-center">
    Handmade <span className="ml-4 sm:ml-[200px]">7</span>
  </span>
  <span className="flex justify-between items-center">
    Interior <span className="ml-4 sm:ml-[233px]">1</span>
  </span>
  <span className="flex justify-between items-center">
    Wood <span className="ml-4 sm:ml-[242px]">6</span>
  </span>
</div>










</div>

    


      </div>
    

    </div>
  );
}
