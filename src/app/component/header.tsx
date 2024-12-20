import Link from "next/link";
import { FaUser, FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
     
        <div className="flex items-center">
         
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6">
          <ul className="flex gap-6">
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
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Link href="/person">
            <FaUser className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" />
          </Link>
          <Link href="/search">
            <FaSearch className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" />
          </Link>
          <Link href="/wishlist">
            <FaRegHeart className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" />
          </Link>
          <Link href="/cart">
            <FaShoppingCart className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-gray-600 text-2xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className="lg:hidden">
        <ul className="flex flex-col items-center gap-4 p-4 bg-gray-50 shadow-lg">
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
      </nav>
    </header>
  );
}
