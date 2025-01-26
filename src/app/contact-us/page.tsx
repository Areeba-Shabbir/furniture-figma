import Image from "next/image";
import shopimg from "@/app/public/shopimg.png";
import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
import shopimgtwo from "@/app/public/shopimgtwo.png";

export default function Contact() {
  return (
    <div>
      {/* Banner Image with Text Overlay */}
      <div className="relative">
        <Image
          src={shopimg}
          alt="image"
          width={1430}
          height={300}
          className="w-full h-40 sm:h-60 lg:h-80 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
            Contact Us
          </h1>
          <p className="text-white text-sm sm:text-base mt-2">Home / Contact</p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="m-4 py-8 text-center">
        <h1 className="font-bold text-black text-lg sm:text-2xl lg:text-3xl leading-relaxed py-4">
          Get In Touch With Us
        </h1>
        <p className="text-gray-400 mx-4 sm:mx-16 lg:mx-64 text-sm sm:text-base">
          For more information about our product & services, please feel free
          to drop us an email. Our staff will always be there to help you out.
          Do not hesitate!
        </p>
      </div>

      {/* Contact and Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-16">
        {/* Contact Information */}
        <div>
          <div className="mb-8">
            <h1 className="flex font-bold text-black items-center gap-3 text-base sm:text-lg">
              <FaLocationDot /> Address
            </h1>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>
          <div className="mb-8">
            <h1 className="flex font-bold text-black items-center gap-3 text-base sm:text-lg">
              <FaPhone /> Phone
            </h1>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789
            </p>
          </div>
          <div>
            <h1 className="flex font-bold text-black items-center gap-3 text-base sm:text-lg">
              <FaClock /> Working Time
            </h1>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              Monday-Friday: 9:00 - 22:00 <br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div>
          <form>
            {/* Your Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full h-12 mt-1 px-3 border border-gray-300 rounded-md text-sm sm:text-base"
                placeholder="Abc"
              />
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full h-12 mt-1 px-3 border border-gray-300 rounded-md text-sm sm:text-base"
                placeholder="Abc@def.com"
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full h-12 mt-1 px-3 border border-gray-300 rounded-md text-sm sm:text-base"
                placeholder="This is optional"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full h-24 mt-1 px-3 border border-gray-300 rounded-md text-sm sm:text-base"
                placeholder="Hi! I'd like to ask about..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-2 mt-4 bg-black text-white rounded-md hover:bg-gray-800 text-sm sm:text-base"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Image with Text Overlay */}
      <div className="relative mt-16">
        <Image
          className="w-full h-40 sm:h-60 lg:h-80 object-cover"
          src={shopimgtwo}
          alt="image"
          width={1430}
          height={300}
        />
      </div>
    </div>
  );
}
