<<<<<<< HEAD
// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// interface Product {
//   category: string;
//   _id: string;
//   price: number;
//   description: string;
//   stockLevel: number;
//   discountPercentage: number;
//   isFeaturedProduct: number;
//   name: string;
//   image: any;  // Updated to reflect the image object
// }

// interface Params {
//   id: string;
// }

// // Fetch product from Sanity
// async function fetchProduct(id: string): Promise<Product | null> {
//   const query = `*[_type == "product" && _id == "${id}"]{
//     category,
//     _id,
//     price,
//     description,
//     stockLevel,
//     discountPercentage,
//     isFeaturedProduct,
//     name,
//     "image": image
//   }`;
//   const product = await client.fetch(query);
//   return product[0] || null;
// }

// export default function ProductPage({ params }: { params: Params }) {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedColor, setSelectedColor] = useState<string>("");
//   const [selectedSize, setSelectedSize] = useState<string>("");
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const loadProduct = async () => {
//       try {
//         const fetchedProduct = await fetchProduct(params.id);
//         if (!fetchedProduct) {
//           console.error("Product not found in Sanity.");
//         }
//         setProduct(fetchedProduct);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (params.id) {
//       loadProduct();
//     }
//   }, [params.id]);

//   const addToCart = () => {
//     if (!product || !selectedColor || !selectedSize) return; // Prevent adding incomplete product to cart

//     const productWithSelection = {
//       ...product,
//       selectedColor,
//       selectedSize,
//     };

//     const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     localStorage.setItem("cart", JSON.stringify([...existingCart, productWithSelection]));
//     alert(`${product.name} added to cart!`);
//     router.push("/cart"); // Navigate to the cart page
//   };

//   const addToWishlist = () => {
//     if (!product || !selectedColor || !selectedSize) return; // Prevent adding incomplete product to wishlist

//     const productWithSelection = {
//       ...product,
//       selectedColor,
//       selectedSize,
//     };

//     const existingWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
//     localStorage.setItem("wishlist", JSON.stringify([...existingWishlist, productWithSelection]));
//     alert(`${product.name} added to wishlist!`);
//     router.push("/wishlist"); // Navigate to the wishlist page
//   };

//   if (isLoading) {
//     return <div className="text-center py-8">Loading...</div>;
//   }

//   if (!product) {
//     return <div className="text-center py-8">Product not found.</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
//       <div className="flex justify-center items-center">
//         {product.image ? (
//           <Image
//             src={urlFor(product.image).url() || "/fallback-image.png"}
//             alt={product.name}
//             width={500}
//             height={500}
//             className="w-full h-auto object-contain"
//           />
//         ) : (
//           <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-600">
//             No Image Available
//           </div>
//         )}
//       </div>
//       <div className="flex flex-col justify-start">
//         <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
//         <p className="text-xl text-gray-600 mt-4">$ {product.price}</p>
//         <p className="text-lg text-gray-800 mt-4">{product.description}</p>

//         {/* Color Selection */}
//         <div className="mt-6">
//           <label className="block text-lg font-medium">Color:</label>
//           <select
//             value={selectedColor}
//             onChange={(e) => setSelectedColor(e.target.value)}
//             className="mt-2 p-2 border border-gray-300 rounded w-full sm:w-80"
//           >
//             <option value="">Select Color</option>
//             <option value="Brown">Brown</option>
//             <option value="Black">Black</option>
//             <option value="Beige">Beige</option>
//           </select>
//         </div>

//         {/* Size Selection */}
//         <div className="mt-6">
//           <label className="block text-lg font-medium">Size:</label>
//           <select
//             value={selectedSize}
//             onChange={(e) => setSelectedSize(e.target.value)}
//             className="mt-2 p-2 border border-gray-300 rounded w-full sm:w-80"
//           >
//             <option value="">Select Size</option>
//             <option value="Small">Small</option>
//             <option value="Medium">Medium</option>
//             <option value="Large">Large</option>
//           </select>
//         </div>

//         <div className="mt-6 flex space-x-4">
//           <button
//             onClick={addToCart}
//             className="py-2 px-4 bg-green-500 text-white rounded-lg w-full sm:w-auto"
//           >
//             Add to Cart
//           </button>
//           <button
//             onClick={addToWishlist}
//             className="py-2 px-4 bg-yellow-500 text-white rounded-lg w-full sm:w-auto"
//           >
//             Add to Wishlist
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }














"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Review {
  user: string;
  comment: string;
  rating: number;
}

interface Product {
  category: string;
  _id: string;
  price: number;
  description: string;
  stockLevel: number;
  discountPercentage: number;
  isFeaturedProduct: number;
  name: string;
  image: any;  // Updated to reflect the image object
  reviews: Review[];
=======
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Single Wooden Sofa",
    price: "25,000.00",
    image: "/shop1.png",
    description: "A comfortable wooden sofa perfect for your living room.",
    colors: ["Brown", "Black", "Beige"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: 2,
    name: "Classic Dining Chairs",
    price: "23,000.00",
    image: "/shop2.png",
    description: "Stylish dining chairs with a classic design.",
    colors: ["White", "Gray", "Black"],
    sizes: ["Small", "Medium"],
  },
  {
    id: 3,
    name: "Modern Dining Table",
    price: "31,000.00",
    image: "/shop3.png",
    description: "A modern dining table that complements any dining room decor.",
    colors: ["Wooden", "White", "Black"],
    sizes: ["Small", "Large"],
  },
  {
    id: 4,
    name: "Pine Wooden Desk",
    price: "14,000.00",
    image: "/shop4.png",
    description: "A durable pine wood desk for your workspace.",
    colors: ["Light Brown", "Dark Brown"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: 5,
    name: "Rectangular Coffee Table",
    price: "9,000.00",
    image: "/shop5.png",
    description: "A sleek coffee table that fits perfectly in any modern living room.",
    colors: ["Black", "Wooden", "White"],
    sizes: ["Small", "Medium"],
  },
  {
    id: 6,
    name: "Circular Wooden Table",
    price: "12,000.00",
    image: "/shop6.png",
    description: "A round wooden table that adds warmth to your home.",
    colors: ["Wooden", "Brown", "Beige"],
    sizes: ["Small", "Medium"],
  },
  {
    id: 7,
    name: "Wooden Storage Unit",
    price: "20,000.00",
    image: "/shop7.png",
    description: "A versatile wooden storage unit for organizing your space.",
    colors: ["Brown", "Black", "Gray"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: 8,
    name: "Modern Dining Set",
    price: "26,000.00",
    image: "/shop8.png",
    description: "A modern dining set for a sophisticated dining experience.",
    colors: ["White", "Wooden", "Black"],
    sizes: ["Small", "Large"],
  },
  {
    id: 9,
    name: "Minimalist Armchairs",
    price: "18,000.00",
    image: "/shop9.png",
    description: "Minimalist armchairs that blend with any decor.",
    colors: ["Black", "Gray", "Beige"],
    sizes: ["Small", "Medium"],
  },
  {
    id: 10,
    name: "Classic Wooden Cabinet",
    price: "22,000.00",
    image: "/shop10.png",
    description: "A classic wooden cabinet that offers both style and storage.",
    colors: ["Wooden", "Black"],
    sizes: ["Medium", "Large"],
  },
  {
    id: 11,
    name: "Outdoor Lounge Chairs",
    price: "19,500.00",
    image: "/shop11.png",
    description: "Comfortable outdoor lounge chairs for relaxing in your garden.",
    colors: ["Gray", "Beige", "Green"],
    sizes: ["Medium", "Large"],
  },
  {
    id: 12,
    name: "Luxury Sofa Set",
    price: "75,000.00",
    image: "/shop12.png",
    description: "A luxurious sofa set that enhances your living space.",
    colors: ["Gray", "Beige", "Brown"],
    sizes: ["Large", "Extra Large"],
  },
  {
    id: 13,
    name: "Double Seater Wooden Sofa",
    price: "30,000.00",
    image: "/shop13.png",
    description: "A cozy double-seater wooden sofa for any living room.",
    colors: ["Wooden", "Brown", "Beige"],
    sizes: ["Medium", "Large"],
  },
  {
    id: 14,
    name: "Rectangular Dining Table",
    price: "40,000.00",
    image: "/shop14.png",
    description: "A large rectangular dining table that accommodates more guests.",
    colors: ["Wooden", "White", "Gray"],
    sizes: ["Large"],
  },
  {
    id: 15,
    name: "Compact Coffee Table",
    price: "8,000.00",
    image: "/shop15.png",
    description: "A small, compact coffee table for tight spaces.",
    colors: ["Wooden", "White", "Black"],
    sizes: ["Small"],
  },
  {
    id: 16,
    name: "Designer Wooden Chairs",
    price: "28,000.00",
    image: "/shop16.png",
    description: "Stylish designer wooden chairs for a chic dining setup.",
    colors: ["Brown", "Black", "Gray"],
    sizes: ["Small", "Medium"],
  },
];

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  colors: string[];
  sizes: string[];
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
}

interface Params {
  id: string;
}

<<<<<<< HEAD
// Fetch product from Sanity
async function fetchProduct(id: string): Promise<Product | null> {
  const query = `*[_type == "product" && _id == "${id}"]{
    category,
    _id,
    price,
    description,
    stockLevel,
    discountPercentage,
    isFeaturedProduct,
    name,
    "image": image,
    reviews
  }`;
  const product = await client.fetch(query);
  return product[0] || null;
}

=======
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
export default function ProductPage({ params }: { params: Params }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
  const [newReview, setNewReview] = useState<string>("");
  const [newRating, setNewRating] = useState<number>(1);
  const router = useRouter();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProduct(params.id);
        if (!fetchedProduct) {
          console.error("Product not found in Sanity.");
        }
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      loadProduct();
    }
  }, [params.id]);

  const addToCart = () => {
    if (!product || !selectedColor || !selectedSize) return;
=======
  const router = useRouter();

  useEffect(() => {
    const foundProduct = products.find(
      (item) => item.id === Number(params.id) // Type conversion
    );
    setProduct(foundProduct || null);
    setIsLoading(false);
  }, [params.id]);

  const addToCart = () => {
    if (!product || !selectedColor || !selectedSize) return; // Prevent adding incomplete product to cart
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814

    const productWithSelection = {
      ...product,
      selectedColor,
      selectedSize,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    localStorage.setItem("cart", JSON.stringify([...existingCart, productWithSelection]));
    alert(`${product.name} added to cart!`);
<<<<<<< HEAD
    router.push("/cart");
  };

  const addToWishlist = () => {
    if (!product || !selectedColor || !selectedSize) return;
=======
    router.push("/checkout");
  };

  const addToWishlist = () => {
    if (!product || !selectedColor || !selectedSize) return; // Prevent adding incomplete product to wishlist
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814

    const productWithSelection = {
      ...product,
      selectedColor,
      selectedSize,
    };

    const existingWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    localStorage.setItem("wishlist", JSON.stringify([...existingWishlist, productWithSelection]));
    alert(`${product.name} added to wishlist!`);
<<<<<<< HEAD
    router.push("/wishlist");
  };

  const submitReview = () => {
    if (!newReview.trim()) return;

    const newReviewData = {
      user: "Anonymous", 
      comment: newReview,
      rating: newRating,
    };

    const updatedProduct = {
      ...product!,
      reviews: [...(product?.reviews || []), newReviewData],
    };

    setProduct(updatedProduct);
    setNewReview("");
    setNewRating(1);

    alert("Review submitted!");
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-8">Product not found.</div>;
=======
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex justify-center items-center">
<<<<<<< HEAD
        {product.image ? (
          <Image
            src={urlFor(product.image).url() || "/fallback-image.png"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-600">
            No Image Available
          </div>
        )}
      </div>

      <div className="flex flex-col justify-start">
        <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
        <p className="text-xl text-gray-600 mt-4">$ {product.price}</p>
=======
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex flex-col justify-start">
        <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
        <p className="text-xl text-gray-600 mt-4">Rs. {product.price}</p>
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
        <p className="text-lg text-gray-800 mt-4">{product.description}</p>

        {/* Color Selection */}
        <div className="mt-6">
          <label className="block text-lg font-medium">Color:</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
<<<<<<< HEAD
            className="mt-2 p-2 border border-gray-300 rounded w-full sm:w-80"
          >
            <option value="">Select Color</option>
            <option value="Brown">Brown</option>
            <option value="Black">Black</option>
            <option value="Beige">Beige</option>
=======
            className="mt-2 p-2 border border-gray-300 rounded"
          >
            <option value="">Select Color</option>
            {product.colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
          </select>
        </div>

        {/* Size Selection */}
        <div className="mt-6">
          <label className="block text-lg font-medium">Size:</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
<<<<<<< HEAD
            className="mt-2 p-2 border border-gray-300 rounded w-full sm:w-80"
          >
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={addToCart}
            className="py-2 px-4 bg-green-500 text-white rounded-lg w-full sm:w-auto"
=======
            className="mt-2 p-2 border border-gray-300 rounded"
          >
            <option value="">Select Size</option>
            {product.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <button
            onClick={addToCart}
            className="bg-blue-500 text-white px-6 py-2 rounded w-full sm:w-48"
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
          >
            Add to Cart
          </button>
          <button
            onClick={addToWishlist}
<<<<<<< HEAD
            className="py-2 px-4 bg-yellow-500 text-white rounded-lg w-full sm:w-auto"
=======
            className="bg-yellow-500 text-white px-6 py-2 rounded w-full sm:w-48"
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
          >
            Add to Wishlist
          </button>
        </div>
      </div>
<<<<<<< HEAD

      {/* Review Section Below Image */}
      <div className="mt-8 col-span-2">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {product.reviews?.map((review, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{review.user}</span>
                <span className="text-yellow-500">
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </span>
              </div>
              <p className="mt-2">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold">Leave a Review</h3>
          <div className="mt-4">
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              rows={4}
              placeholder="Write your review..."
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mt-4">
            <label className="block text-lg font-medium">Rating:</label>
            <select
              value={newRating}
              onChange={(e) => setNewRating(Number(e.target.value))}
              className="mt-2 p-2 border border-gray-300 rounded w-full sm:w-80"
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>

          <div className="mt-6">
            <button
              onClick={submitReview}
              className="py-2 px-4 bg-blue-500 text-white rounded-lg"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
=======
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
    </div>
  );
}
