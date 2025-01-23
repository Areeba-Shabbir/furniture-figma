// 'use client';

// import React, { useState, useEffect } from 'react';
// import { FaTrashAlt } from 'react-icons/fa';
// import Link from 'next/link';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image'; // Assuming you have this utility
// import shopimg from "@/app/public/shopimg.png"

// interface CartItem {
//   id: string;
//   name: string;
//   price: number; // Ensure price is a number
//   quantity: number;
//   image: any; // Image object (Sanity asset or URL)
// }

// const Cart = () => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // Load cart from localStorage
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCart(storedCart);
//   }, []);

//   // Save updated cart to localStorage
//   const saveCartToLocalStorage = (updatedCart: CartItem[]) => {
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   // Remove an item from the cart
//   const removeItem = (id: string) => {
//     const updatedCart = cart.filter(item => item.id !== id);
//     saveCartToLocalStorage(updatedCart);
//     setCart(updatedCart);
//   };

//   // Update item quantity
//   const updateQuantity = (id: string, quantity: number) => {
//     if (quantity <= 0) return;
//     const updatedCart = cart.map(item =>
//       item.id === id ? { ...item, quantity } : item
//     );
//     saveCartToLocalStorage(updatedCart);
//     setCart(updatedCart);
//   };

//   // Calculate total amount
//   const totalAmount = cart.reduce((total, item) => total + (Number(item.price) ), 0); // Ensure price is treated as a number

//   return (
//     <div className="container mx-auto p-8">
//         {/* Banner Section */}
//         <div className="relative">
//         <Image
//           src={shopimg}
//           alt="Shop Banner"
//           height={400}
//           width={1440}
//           className="w-full h-auto"
//         /> 
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
//           <h1 className="text-black text-3xl sm:text-4xl font-semibold">Cart</h1>
//           <p className="text-black mt-2">Home / Cart</p>
//         </div>
//       </div>

//       <h2 className="text-2xl font-semibold mb-7">Your Shopping Cart</h2>
      
//       {cart.length === 0 ? (
//         <p className="text-lg text-gray-500">Your cart is empty!</p>
//       ) : (
//         <div>
//           {/* Cart items */}
//           <div className="space-y-6">
//             {cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4"
//               >
//                 <div className="flex items-center space-x-4">
//                   <div className="relative w-20 h-20">
//                     {item.image && (
//                       <Image
//                         src={urlFor(item.image).url() || '/fallback-image.png'} // Ensure valid URL
//                         alt={item.name}
//                         layout="fill"
//                         objectFit="cover"
//                         className="rounded-md"
//                       />
//                     )}
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="font-medium text-lg">{item.name}</span>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-end space-y-2">
//                   <span className="text-xl font-semibold">
//                     ${(Number(item.price) ).toFixed(2)} {/* Ensure price is treated as a number */}
//                   </span>
//                   <button
//                     className="text-red-600 hover:text-red-800"
//                     onClick={() => removeItem(item.id)}
//                   >
//                     <FaTrashAlt size={20} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Total and Checkout */}
//           <div className="mt-8 flex justify-between items-center">
//             <div className="text-xl font-semibold">
//               <span>Total: </span>
//               <span>${totalAmount.toFixed(2)}</span> {/* Ensure total is correctly calculated */}
//             </div>
//             <Link href="/checkout">
//               <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
//                 Proceed to Checkout
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;












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
  image: any;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage
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

  // Update item quantity
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) return;
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    saveCartToLocalStorage(updatedCart);
    setCart(updatedCart);
  };

   // Calculate total amount
   const totalAmount = cart.reduce((total, item) => total + (Number(item.price) ), 0); // Ensure price is treated as a number

  return (
    <div className="container mx-auto p-8">
         {/* Banner Section */}
         <div className="relative">
        <Image
          src={shopimg}
          alt="Shop Banner"
          height={400}
          width={1440}
          className="w-full h-auto"
        /> 
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-black text-3xl sm:text-4xl font-semibold">Cart</h1>
          <p className="text-black mt-2">Home / Cart</p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-6">Your Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty!</p>
      ) : (
        <div>
          {/* Cart items */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20">
                    {item.image && (
                     <Image
                     src={urlFor(item.image).url() || '/fallback-image.png'} // Ensure valid URL
                     alt={item.name}
                     layout="fill"
                     objectFit="cover"
                     className="rounded-md"
                   />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-lg">{item.name}</span>
                    <div className="flex items-center space-x-3 mt-1">
                      
                     
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-2">
                  <span className="text-xl font-semibold">
                    ${Number (item.price ).toFixed(2)}
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
          <div className="mt-8 flex justify-between items-center">
            <div className="text-xl font-semibold">
              <span>Total: </span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
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

