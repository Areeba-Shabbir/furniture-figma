









// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";

// interface CartItem {
//   _id: string;
//   name: string;
//   price: number;
//   selectedColor: string;
//   selectedSize: string;
//   quantity: number; // Added quantity to manage item count
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   // Load cart items from localStorage on initial render
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       setCartItems(JSON.parse(savedCart));
//     }
//   }, []);

//   const addToCart = (item: CartItem) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((cartItem) => cartItem._id === item._id);
//       let updatedCart: CartItem[];
//       if (existingItem) {
//         // Update quantity if item already exists
//         updatedCart = prevItems.map((cartItem) =>
//           cartItem._id === item._id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       } else {
//         updatedCart = [...prevItems, { ...item, quantity: 1 }];
//       }

//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCartItems((prevItems) => {
//       const updatedCart = prevItems.filter((item) => item._id !== id);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.setItem("cart", JSON.stringify([]));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };



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
  clearCart: () => void;
}

// Create the CartContext with default value of undefined
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
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem._id === item._id);
      let updatedCart: CartItem[];

      if (existingItem) {
        // If item already in cart, update quantity
        updatedCart = prevItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If item not in cart, add it with quantity 1
        updatedCart = [...prevItems, { ...item, quantity: 1 }];
      }

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item._id !== id);
      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([])); // Empty cart in localStorage
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
