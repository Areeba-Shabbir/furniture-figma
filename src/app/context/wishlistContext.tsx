// Add the "use client" directive at the top of the file
"use client";

import { createContext, useContext, useState } from "react";

// Define the structure of the Wishlist item
interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

// Define the context type
interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
}

// Create the Wishlist context with default empty values
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Provider component for Wishlist
export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to access Wishlist context
export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
