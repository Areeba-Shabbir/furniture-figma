// // src/components/Header.tsx
// import React from 'react';
// import Link from 'next/link';
// import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

// interface HeaderProps {
//   toggleCart: () => void; // Function to toggle the cart sidebar (if any)
// }

// const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
//   return (
//     <header className="bg-white p-5 shadow-md transition-all duration-300 ease-in-out">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//         {/* Center Section - Links */}
//         <nav className="flex space-x-8">
//           <Link href="/" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
//             Home
//           </Link>
//           <Link href="/shop" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
//             Shop
//           </Link>
//           <Link href="/about-us" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
//             About
//           </Link>
//           <Link href="/contact-us" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
//             Contact
//           </Link>
//         </nav>

//         {/* Right Section - Icons */}
//         <div className="flex space-x-7">
//           <Link href="/profile" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
//             <FaUser size={20} />
//           </Link>
//           <Link href="/search" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
//             <FaSearch size={20} />
//           </Link>
//           <Link href="/wishlist" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
//             <FaHeart size={20} />
//           </Link>
//           {/* Cart Icon - Links to the Cart Page */}
//           <Link href="/cart" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
//             <FaShoppingCart size={20} />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;















"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="bg-white p-5 shadow-md transition-all duration-300 ease-in-out">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <nav className="flex space-x-8">
          <Link href="/" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/shop" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
            Shop
          </Link>
          <Link href="/about-us" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
            About
          </Link>
          <Link href="/contact-us" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-5">
          <Link href="/profile" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
            <FaUser size={20} />
          </Link>
          <div className="relative">
            <FaSearch
              size={20}
              className="cursor-pointer text-black hover:text-gray-600 transition-all duration-300 ease-in-out"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            {isSearchOpen && (
              <form
                onSubmit={handleSearch}
                className="absolute top-6 right-0 bg-white border border-gray-300 p-2 rounded shadow-lg z-50"
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-300 rounded p-1 focus:outline-none focus:border-gray-600"
                />
                <button
                  type="submit"
                  className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Go
                </button>
              </form>
            )}
          </div>
          <Link href="/wishlist" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
            <FaHeart size={20} />
          </Link>
          <Link href="/cart" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
            <FaShoppingCart size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
