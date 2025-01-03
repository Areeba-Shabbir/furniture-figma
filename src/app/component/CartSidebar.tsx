"use client";

import React from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  toggleCart: () => void;
  cartItems: CartItem[]; // Accept cartItems as a prop
  removeItem: (id: number) => void; // Function to remove an item
  calculateSubtotal: () => number; // Function to calculate subtotal
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  toggleCart,
  cartItems,
  removeItem,
  calculateSubtotal
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={toggleCart} className="text-black text-xl p-4">
        &times;
      </button>
      <h2 className="text-lg font-bold p-4">Shopping Cart</h2>
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 mb-4">
              <Image src={item.image} alt={item.name} width={50} height={50} />
              <div>
                <h4>{item.name}</h4>
                <p>Rs. {item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 font-semibold"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="p-4">
        <hr className="my-2" />
        <div className="flex justify-between font-semibold">
          <span>Subtotal:</span>
          <span>Rs. {calculateSubtotal().toLocaleString()}</span>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-black bg-black-500 border-0 py-2 px-8 focus:outline-none hover:bg-black-600 rounded text-lg">
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
