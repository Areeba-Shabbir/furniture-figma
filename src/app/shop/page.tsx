import Image from "next/image"
import shopimg from "@/app/public/shopimg.png"
import shopimage from "@/app/public/shopimage.png"
import shopimgtwo from "@/app/public/shopimgtwo.png"
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineViewDay } from "react-icons/md";
import { PiLineVerticalThin } from "react-icons/pi";


export default function Shop (){
    return(
       <div>
       
         <div className=" mt-600">
            <Image src={shopimg} alt="shop" height={316} width={1440}/>

        </div>
       
        <div className="h-[100px] w-[1440px] m-[2px] mt-[20px] bg-gray-200 pt-9"> 
  <div className="flex">
    <span className="pl-20 pr-5"><HiAdjustmentsHorizontal /></span>
    <span>Filter</span>
    <span className="pl-5 pr-5"><BsFillGridFill /></span>
    <span className="pl-5 pr-5"><MdOutlineViewDay /></span>
    <span className="pl-5 pr-5"><PiLineVerticalThin /></span>
    <span>Showing 1-16 of 32 results</span>
   
    <span className="ml-auto pr-40">Show</span>
   

    <span className=" pr-40">short by</span>
  </div>
</div>

<Image src={shopimage} alt="image" width={1430}/>

<Image className="mt-40" src={shopimgtwo} alt="image" width={1430}/>


        </div>




















  

    )
}