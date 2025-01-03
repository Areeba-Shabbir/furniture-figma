import Image from "next/image";
import Link from "next/link"; // Import Link
import React from "react";
import image8 from "@/app/public/image8.png";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-[50px] h-auto lg:h-[600px] bg-yellow-100 p-4">
      <div>
        <Image
          src={image8}
          alt="img"
          className="max-w-full h-auto"
          height={700}
          width={700}
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center lg:text-left">
        <h1 className="text-xl md:text-2xl">New Arrivals</h1>
        <h2 className="text-2xl md:text-4xl mb-4">Asgaard Sofa</h2>
        <Link href="/asgard-sofa">
          <button className="h-10 md:h-12 w-[150px] md:w-[200px] border-2 border-black">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
