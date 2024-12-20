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
    <div>
      {/* Banner Section */}
      <div className="mt-6">
        <Image
          src={shopimg}
          alt="shop"
          height={316}
          width={1440}
          className="w-full h-auto"
        />
      </div>

      {/* Filter Bar */}
      <div className="h-auto w-full bg-gray-200 pt-6 pb-6 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-wrap items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <span>
              <HiAdjustmentsHorizontal className="text-lg" />
            </span>
            <span className="text-sm">Filter</span>
            <span>
              <BsFillGridFill className="text-lg" />
            </span>
            <span>
              <MdOutlineViewDay className="text-lg" />
            </span>
            <span>
              <PiLineVerticalThin className="text-lg" />
            </span>
            <span className="text-sm">Showing 1-16 of 32 results</span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <span className="text-sm">Show</span>
            <span className="text-sm">Sort by</span>
          </div>
        </div>
      </div>

      {/* Product Images */}
      <div className="flex flex-col items-center gap-8 px-4 sm:px-8 lg:px-16">
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
