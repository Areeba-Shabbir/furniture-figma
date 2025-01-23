// import React from 'react';

<<<<<<< HEAD
// interface CartSidebarProps {
//   isOpen: boolean; // Whether the sidebar is open or not
//   closeCart: () => void; // Function to close the sidebar
// }

// const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, closeCart }) => {
//   if (!isOpen) return null; // Don't render anything if the sidebar is closed

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//       <div className="bg-white p-6 w-[300px] h-full">
//         <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
//         {/* Add cart items here */}
//         <button onClick={closeCart} className="absolute top-4 right-4 text-black text-xl">
//           ×
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartSidebar;
=======
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  toggleCart: () => void;
  cartItems: CartItem[];
  removeItem: (id: number) => void;
  calculateSubtotal: () => number;
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
              <div className="flex flex-col">
                <h4>{item.name}</h4>
                <p>Rs. {item.price}</p>
                <p>Size: {item.selectedSize}</p>
                <p>Color: {item.selectedColor}</p>
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
        <div className="flex justify-center gap-2 mt-4">
          <Link href="/cart">
            <button className="text-black bg-gray-200 border-2 py-1 px-5 focus:outline-none hover:bg-gray-300 rounded text-sm">
              View Cart
            </button>
          </Link>
          <Link href="/checkout">
            <button className="text-black bg-gray-200 border-2 py-1 px-5 focus:outline-none hover:bg-gray-300 rounded text-sm">
              CheckOut
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
