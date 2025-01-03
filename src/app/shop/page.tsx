import Image from "next/image";
import shopimg from "@/app/public/shopimg.png";
import shopimage from "@/app/public/shopimage.png";
import shopimgtwo from "@/app/public/shopimgtwo.png";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineViewDay } from "react-icons/md";
import { PiLineVerticalThin } from "react-icons/pi";

export default function Shop() {
  return (
    <div className="flex flex-col">
      {/* Banner Section with Text Overlay */}
      <div className="relative mt-6">
        <Image
          src={shopimg}
          alt="shop"
          height={316}
          width={1440}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold">
            Shop With Us
          </h1>
          <p className="text-black text-sm sm:text-base lg:text-lg mt-2">
            Home / Shop
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="h-auto w-full bg-gray-200 pt-6 pb-6 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <HiAdjustmentsHorizontal className="text-base sm:text-lg" />
            <span className="text-sm sm:text-base">Filter</span>
            <BsFillGridFill className="text-base sm:text-lg" />
            <MdOutlineViewDay className="text-base sm:text-lg" />
            <PiLineVerticalThin className="text-base sm:text-lg" />
            <span className="text-sm sm:text-base">
              Showing 1-16 of 32 results
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
            <span className="text-sm sm:text-base">Show</span>
            <span className="text-sm sm:text-base">Sort by</span>
          </div>
        </div>
      </div>

      {/* Product Images */}
      <div className="flex flex-col items-center gap-8 px-4 sm:px-8 lg:px-16 mt-8">
        <Image
          src={shopimage}
          alt="image"
          width={1430}
          height={300}
          className="w-full h-auto"
        />
        <Image
          src={shopimgtwo}
          alt="image"
          width={1430}
          height={300}
          className="w-full h-auto mt-10"
        />
      </div>
    </div>
  );
}
