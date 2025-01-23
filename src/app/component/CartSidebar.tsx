// import React from 'react';

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
