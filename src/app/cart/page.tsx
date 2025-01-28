'use client';

import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image'; // Ensure this is correctly configured in your project.

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
    if (typeof window !== 'undefined') {
      const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(storedCart);
    }
  }, []);

  // Save updated cart to localStorage
  const saveCartToLocalStorage = (updatedCart: CartItem[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  // Remove an item from the cart
  const removeItem = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    saveCartToLocalStorage(updatedCart);
    setCart(updatedCart);
  };

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!cart) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-500">Loading your cart...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-500 text-center">Your cart is empty!</p>
      ) : (
        <div>
          {/* Cart items */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id} // Fixed the missing key issue
                className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-4 space-y-4 sm:space-y-0"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.image ? urlFor(item.image).url() : '/fallback-image.png'}
                      alt={item.name || 'Product'}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-md"
                      loading="eager"
                      sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 20vw"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-base sm:text-lg">{item.name}</span>
                    <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-2">
                  <span className="text-lg sm:text-xl font-semibold">
                    Rs. {(item.price * item.quantity).toFixed(2)}
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
              <span>Rs. {totalAmount.toFixed(2)}</span>
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
