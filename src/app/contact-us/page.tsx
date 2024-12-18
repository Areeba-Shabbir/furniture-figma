import Image from "next/image"
import shopimg from "@/app/public/shopimg.png"
import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6"
import shopimgtwo from "@/app/public/shopimgtwo.png"




export default function Contact(){
    return(
        <div>
       
            <Image src={shopimg} alt="image" width={1430}/>

            <div className="m-10  py-8">
            <h1 className="text-center font-bold text-black leading-relaxed py-4">
  Get In Touch With Us
</h1>
<p className="text-center text-gray-400 ml-80  mr-80">
For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
</p>
    </div>
    <div className="flex">
  <div className="h-[537px] w-[390px] mt-9 ml-80"> 

    <h1 className="flex font-bold leading-relaxed text-black px-9 gap-6">
    <FaLocationDot/>Address</h1>
    <p className="h-[72px] w-[230px] text-gray-700 px-4">236 5th SE Avenue, New York NY10000, United States</p>

    <h1 className="flex mt-9 font-bold leading-relaxed text-black px-9 gap-6 ">
    <FaPhone/>Phone</h1>
    <p className="h-[72px] w-[230px] text-gray-700 px-4">Mobile: +(84) 546-6789
    Hotline: +(84) 456-6789</p>

    <h1 className="flex mt-9 font-bold leading-relaxed text-black px-9 gap-6">
    <FaClock/>Working Time</h1>
    <p className="h-[72px] w-[230px] text-gray-700 px-4">Monday-Friday: 9:00 - 22:00
    Saturday-Sunday: 9:00 - 21:00</p>

  </div>


  <div>
      {/* Form Container */}
      <form className="w-[530px] h-[121px] mt-8 ml-20 mr-40">
        {/* Your Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full h-[50px] mt-1 px-3 border border-gray-300 rounded-tl-[10px] rounded-tr-[10px] opacity-100"
            placeholder="Abc"
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="w-full h-[50px] mt-1 px-3 border border-gray-300 rounded-tl-[10px] rounded-tr-[10px] opacity-100"
            placeholder="Abc@def.com"
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className="w-full h-[50px] mt-1 px-3 border border-gray-300 rounded-tl-[10px] rounded-tr-[10px] opacity-100"
            placeholder="This is an optional"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            className="w-full h-[80px] mt-1 px-3 border border-gray-300 rounded-b-[10px] opacity-100"
            placeholder="Hi!id like to ask about"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-[237px] h-[48px] mt-4 mx-auto  text-black rounded-[15px] border border-black opacity-100 hover:bg-black hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>

    </div>


    <Image className="mt-20" src={shopimgtwo} alt="image" width={1430}/>

        </div>
    )
}