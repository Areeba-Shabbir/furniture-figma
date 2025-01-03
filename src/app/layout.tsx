"use client"; // Add this line at the top of the file

import React, { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import CartSidebar from "@/app/component/CartSidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState<boolean>(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  // Fetch cart items on component mount
  useEffect(() => {
    setIsClient(true);
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (Array.isArray(storedCart)) {
      setCartItems(storedCart);
    }
  }, []);

  // Calculate the subtotal for cart items
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Remove an item from the cart and update localStorage
  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (!isClient) {
    return null; // Prevent SSR issues
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header toggleCart={toggleCart} />
        <CartSidebar
          isOpen={isCartOpen}
          toggleCart={toggleCart}
          cartItems={cartItems}
          removeItem={removeItem}
          calculateSubtotal={calculateSubtotal}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
