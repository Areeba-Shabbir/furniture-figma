import React from 'react';
import Link from 'next/link';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

interface HeaderProps {
  toggleCart: () => void; // Function to toggle the cart sidebar
}

const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
  return (
    <header className="bg-white p-5 shadow-md transition-all duration-300 ease-in-out">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Center Section - Links */}
        <nav className="flex space-x-8">
          <Link href="/" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">Home</Link>
          <Link href="/shop" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">Shop</Link>
          <Link href="/about-us" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">About</Link>
          <Link href="/contact-us" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">Contact</Link>
        </nav>

        {/* Right Section - Icons */}
        <div className="flex space-x-7">
          <Link href="/profile" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
            <FaUser size={20} />
          </Link>
          <Link href="/search" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
            <FaSearch size={20} />
          </Link>
          <Link href="/wishlist" className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out">
            <FaHeart size={20} />
          </Link>
          {/* Cart Icon - Toggles the Cart Sidebar */}
          <button
            onClick={toggleCart}
            className="text-black hover:text-gray-600 transition-all duration-300 ease-in-out"
          >
            <FaShoppingCart size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
