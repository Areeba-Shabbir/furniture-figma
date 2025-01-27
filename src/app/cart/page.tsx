'use client';

import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image'; // Assuming you have this utility
import shopimg from "@/app/public/shopimg.png";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage after component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  // Save updated cart to localStorage
  const saveCartToLocalStorage = (updatedCart: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove an item from the cart
  const removeItem = (id: string) => {
    const updatedCart = cart.filter(item => item.id !== id);
    saveCartToLocalStorage(updatedCart);
    setCart(updatedCart);
  };

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price, 0); // Ensure price is treated as a number

  if (cart === undefined) return null; // Prevent rendering before cart is initialized

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      {/* Banner Section */}
      <div className="relative">
        <Image
          src={shopimg}
          alt="Shop Banner"
          height={400}
          width={1440}
          className="w-full h-[250px] sm:h-[400px] object-cover"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">Cart</h1>
          <p className="text-white mt-2 text-sm sm:text-base">Home / Cart</p>
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mb-6">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-500 text-center">Your cart is empty!</p>
      ) : (
        <div>
          {/* Cart items */}
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={item.id || index} // Fallback to index if id is missing or not unique
                className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-4 space-y-4 sm:space-y-0"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url() || '/fallback-image.png'}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                        loading="eager"
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-base sm:text-lg">{item.name}</span>
                    <div className="flex items-center space-x-3 mt-1">
                      {/* Add quantity controls if needed */}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-2">
                  <span className="text-lg sm:text-xl font-semibold">
                    ${Number(item.price).toFixed(2)} {/* Display total for this item */}
                  </span>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total and Checkout */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-lg sm:text-xl font-semibold">
              <span>Total: </span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 w-full sm:w-auto text-center">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
