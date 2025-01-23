// import React from "react";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   image: any;
// }

// interface ProductCardProps {
//   product: Product;
//   onAddToCart: () => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
//   return (
//     <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
//       {product.image ? (
//         <Image
//           src={urlFor(product.image).url()}
//           alt={product.name}
//           height={300}
//           width={300}
//           className="h-[250px] w-full object-cover"
//         />
//       ) : (
//         <div className="h-[250px] w-full bg-gray-200 flex items-center justify-center">
//           <p className="text-gray-500">No Image</p>
//         </div>
//       )}
//       <div className="p-4 text-center">
//         <p className="text-lg font-medium text-gray-800">{product.name}</p>
//         <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
//         <button
//           className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md"
//           onClick={(e) => {
//             e.stopPropagation();
//             onAddToCart();
//           }}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
