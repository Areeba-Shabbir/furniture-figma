import Image from "next/image";
import React from "react";
import homeImg from "@/app/public/homeImg.png";

const HeroSection = () => {
  return (
    <div className="bg-yellow-100 flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-[50px] h-auto md:h-[600px] px-4 md:px-0">
      {/* Text Content */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl">Rocket Single</h1>
        <h2 className="text-2xl md:text-3xl mb-4">Seater</h2>
        <span className="text-lg md:text-xl mt-4 inline-block hover:border-b-2 border-black cursor-pointer">
          Shop Now
        </span>
      </div>

      {/* Image with priority */}
      <div>
        <Image
          src={homeImg}
          alt="Home Image"
          height={600}
          width={600}
          className="w-full max-w-[300px] md:max-w-[600px] h-auto"
          priority // Ensures the image is preloaded for performance
        />
      </div>
    </div>
  );
};

export default HeroSection;
