import Image from "next/image";
import Link from "next/link"; // Import Link
import React from "react";
import image8 from "@/app/public/image8.png";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 h-auto lg:h-[600px] bg-yellow-100 p-4">
      {/* Image */}
      <div className="w-full max-w-[400px] lg:max-w-[600px]">
        <Image
          src={image8}
          alt="New Arrivals"
          className="max-w-full h-auto"
          height={700}
          width={700}
        />
      </div>

      {/* Text and Button Section */}
      <div className="flex flex-col justify-center items-center text-center lg:text-left w-full lg:w-auto">
        <h1 className="text-2xl md:text-3xl font-semibold">New Arrivals</h1>
        <h2 className="text-xl md:text-3xl mb-4 text-gray-700">Style your space today!</h2>
        <Link href="/shop">
          <button className="h-10 md:h-12 w-[150px] md:w-[200px] border-2 border-black text-lg md:text-xl font-medium hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
