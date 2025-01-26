// "use client"; // Ensures the file is treated as a client component

// import React, { useState, useEffect } from "react";
// import { Geist, Geist_Mono } from "next/font/google";
// import Header from "@/app/component/header";
// import Footer from "@/app/component/footer";
// import "./globals.css";

// // Load Google Fonts with variables
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   // Toggle cart visibility
//   const toggleCart = () => setIsCartOpen((prev) => !prev);

//   // Fetch cart items from localStorage when the component mounts
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     if (Array.isArray(storedCart)) {
//       setCartItems(storedCart);
//     }
//   }, []);

//   // Handle body scroll based on cart open/close state
//   useEffect(() => {
//     document.body.style.overflow = isCartOpen ? "hidden" : "auto";

//     return () => {
//       document.body.style.overflow = "auto"; // Reset on unmount
//     };
//   }, [isCartOpen]);

//   // Remove item from cart and update localStorage
//   const removeItem = (id: number) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <div className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main>{children}</main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }
import React from "react";
import { CartProvider } from "@/app/context/CartContext"; // Adjust path if necessary
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import "./globals.css"; // Assuming you have global styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap your app with CartProvider to provide the cart context */}
        <CartProvider>
          <Header /> {/* Add Header */}
          <main>{children}</main> {/* Render main content */}
          <Footer /> {/* Add Footer */}
        </CartProvider>
      </body>
    </html>
  );
}
