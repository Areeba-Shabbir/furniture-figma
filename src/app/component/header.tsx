import Link from "next/link"
import { FaUser, FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";

export default function Header(){
    return(
        <div className="flex bg-white shadow-md">
        <div className="flex justify-between items-center py-4 px-6">
  
  
          {/* Desktop Menu */}
          <ul className="hidden ml-80 px-9 lg:flex gap-6  cursor-pointer">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about-us">About</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
    

    <div className="flex justify-end ml-[500px] items-center space-x-6 p-4">
      {/* Person Icon */}
     <Link href="person">
     <FaUser className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" /></Link>

      {/* Search Icon */}
      <Link href="search"><FaSearch className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" /></Link>
      

      {/* Regular Heart Icon */}
      <Link href="whishlist"><FaRegHeart className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" /></Link>
      
      {/* Shopping Cart Icon */}
      <Link href="cart"> <FaShoppingCart className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" /></Link>
     
    </div>



        </div>
      </div>
    )
};