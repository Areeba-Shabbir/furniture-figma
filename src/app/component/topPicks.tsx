import Image from "next/image";
import ourblog from "@/app/public/ourblog.png";

export default function Topproduct() {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center my-8 sm:my-12 md:my-20">
        {/* Title and Description */}
        <div className="text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            Top Picks
          </h1>
          <h2 className="my-4 text-gray-500 text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[600px] mx-auto">
            Find a bright ideal to suit your taste in our great selection of suspension, floors, and table lights
          </h2>
        </div>

        {/* Image */}
        <div className="w-full max-w-[90%] sm:max-w-[400px] md:max-w-[500px]">
          <Image
            src={ourblog}
            alt="blog"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* View More Button */}
        <div className="flex justify-center items-center py-6 sm:py-8 md:py-10">
          <span className="border-b-2 py-1 sm:py-2 text-base sm:text-lg md:text-xl border-black cursor-pointer hover:text-gray-700">
            View More
          </span>
        </div>
      </div>
    </div>
  );
}
