'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/image"; // Ensure the utility for images is imported

// Ensure the image URL is a string.
interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string; // Changed to string to ensure valid URL
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    try {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlist(storedWishlist);
    } catch (error) {
      console.error("Error loading wishlist from localStorage:", error);
      setWishlist([]); // Handle error and reset wishlist to empty
    }
  }, []);

  const removeItem = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  if (wishlist.length === 0) {
    return (
        
      <div className="text-center py-8">
        <p className="text-lg text-gray-600">Your wishlist is empty.</p>
        <Link href="/">
          <button className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
          >
            <div className="relative w-20 h-20">
              {/* Check if item.image exists and load the image */}
              {item.image && (
                <Image
                  src={urlFor(item.image).url() || '/fallback-image.png'} // Use urlFor to get the image URL
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              )}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-600">Rs. {item.price}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}