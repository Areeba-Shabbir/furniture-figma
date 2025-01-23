// // context/CartContext.tsx

// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface CartItem {
//   productId: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image: any;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (productId: string) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// interface CartProviderProps {
//   children: ReactNode;
// }

// export const CartProvider = ({ children }: CartProviderProps) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => {
//       const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.productId === item.productId);
//       if (existingItemIndex > -1) {
//         const updatedCart = [...prevCart];
//         updatedCart[existingItemIndex].quantity += 1;
//         return updatedCart;
//       }
//       return [...prevCart, item];
//     });
//   };

//   const removeFromCart = (productId: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the CartContext
// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };











"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  selectedColor: string;
  selectedSize: string;
  quantity: number; // Added quantity to manage item count
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart items from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (item: CartItem) => {
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
        updatedCart = [...prevItems, { ...item, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item._id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
