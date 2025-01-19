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
}

interface Params {
  id: string;
}

export default function ProductPage({ params }: { params: Params }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
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

    const productWithSelection = {
      ...product,
      selectedColor,
      selectedSize,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    localStorage.setItem("cart", JSON.stringify([...existingCart, productWithSelection]));
    alert(`${product.name} added to cart!`);
    router.push("/checkout");
  };

  const addToWishlist = () => {
    if (!product || !selectedColor || !selectedSize) return; // Prevent adding incomplete product to wishlist

    const productWithSelection = {
      ...product,
      selectedColor,
      selectedSize,
    };

    const existingWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    localStorage.setItem("wishlist", JSON.stringify([...existingWishlist, productWithSelection]));
    alert(`${product.name} added to wishlist!`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex justify-center items-center">
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
        <p className="text-lg text-gray-800 mt-4">{product.description}</p>

        {/* Color Selection */}
        <div className="mt-6">
          <label className="block text-lg font-medium">Color:</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded"
          >
            <option value="">Select Color</option>
            {product.colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        {/* Size Selection */}
        <div className="mt-6">
          <label className="block text-lg font-medium">Size:</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
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
          >
            Add to Cart
          </button>
          <button
            onClick={addToWishlist}
            className="bg-yellow-500 text-white px-6 py-2 rounded w-full sm:w-48"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
