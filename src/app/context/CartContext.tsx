"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Define the CartItem interface
interface CartItem {
  _id: string;
  name: string;
  price: number;
  selectedColor: string;
  selectedSize: string;
  quantity: number; // Added quantity to manage item count
}

// Define the CartContextType interface
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

// Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// CartProvider component to manage cart state
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart items from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart: CartItem[] = JSON.parse(savedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Error parsing saved cart from localStorage", error);
      }
    }
  }, []);

  // Add item to cart, updating quantity if item already exists
  const addToCart = (item: CartItem) => {
    if (item.quantity <= 0) return; // Prevent adding invalid quantities

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem._id === item._id);
      let updatedCart: CartItem[];

      if (existingItem) {
        // Update quantity if item already exists
        updatedCart = prevItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add new item with quantity 1
        updatedCart = [...prevItems, { ...item, quantity: 1 }];
      }

      return updatedCart;
    });
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  // Update the quantity of a specific item
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) return; // Prevent invalid quantities
    setCartItems((prevItems) =>
      prevItems.map((item) => (item._id === id ? { ...item, quantity } : item))
    );
  };

  // Clear the cart
  const clearCart = () => setCartItems([]);

  // Sync cart items with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
