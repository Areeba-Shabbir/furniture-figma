"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <header className="bg-white p-4 shadow-md transition-all duration-300 ease-in-out">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-800 hover:text-gray-600 transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-800 hover:text-gray-600 transition-all">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-gray-800 hover:text-gray-600 transition-all">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-gray-800 hover:text-gray-600 transition-all">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          {/* Profile Icon */}
          <Link href="/profile" className="text-gray-800 hover:text-gray-600 transition-all">
            <FaUser size={20} />
          </Link>

          {/* Search Icon and Form */}
          <div className="relative">
            <FaSearch
              size={20}
              className="cursor-pointer text-gray-800 hover:text-gray-600 transition-all"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            {isSearchOpen && (
              <form
                onSubmit={handleSearch}
                className="absolute top-8 right-0 bg-white border border-gray-300 p-2 rounded shadow-lg z-50 w-full sm:w-64"
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-300 rounded p-1 focus:outline-none focus:border-gray-600 w-full"
                />
                <button
                  type="submit"
                  className={`mt-2 w-full px-3 py-1 rounded text-white ${
                    searchQuery.trim()
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  disabled={!searchQuery.trim()}
                >
                  Go
                </button>
              </form>
            )}
          </div>

          {/* Wishlist Icon */}
          <Link href="/wishlist" className="text-gray-800 hover:text-gray-600 transition-all">
            <FaHeart size={20} />
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="text-gray-800 hover:text-gray-600 transition-all">
            <FaShoppingCart size={20} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-800 hover:text-gray-600 transition-all"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="mt-4 space-y-2 md:hidden bg-gray-100 p-4 rounded shadow-md">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="block text-gray-800 hover:text-gray-600 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="block text-gray-800 hover:text-gray-600 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="block text-gray-800 hover:text-gray-600 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="block text-gray-800 hover:text-gray-600 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
