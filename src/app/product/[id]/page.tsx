"use client"; // Add this line at the top of your file

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Define types
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
  image: string;
  reviews: Review[];
}

interface Params {
  id: string;
}

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

export default function ProductPage({ params }: { params: Promise<Params> }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [newReview, setNewReview] = useState<string>("");
  const [newRating, setNewRating] = useState<number>(1);
  const router = useRouter();

  // Wait for params to be unwrapped before accessing
  const [paramsValue, setParamsValue] = useState<Params | null>(null);

  useEffect(() => {
    const unwrapParams = async () => {
      const unwrappedParams = await params;
      setParamsValue(unwrappedParams);
    };

    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (!paramsValue) return;

    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProduct(paramsValue.id);
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

    loadProduct();
  }, [paramsValue]);

  const addToCart = () => {
    if (!product || !selectedColor || !selectedSize) return;

    const productWithSelection = {
      ...product,
      selectedColor,
      selectedSize,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    localStorage.setItem("cart", JSON.stringify([...existingCart, productWithSelection]));
    alert(`${product.name} added to cart!`);
    router.push("/cart");
  };

  const addToWishlist = () => {
    if (!product || !selectedColor || !selectedSize) return;

    const productWithSelection = {
      ...product,
      selectedColor,
      selectedSize,
    };

    const existingWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    localStorage.setItem("wishlist", JSON.stringify([...existingWishlist, productWithSelection]));
    alert(`${product.name} added to wishlist!`);
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
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex justify-center items-center">
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
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">$ {product.price}</p>
        <p className="text-base md:text-lg text-gray-800 mt-4">{product.description}</p>

        {/* Color Selection */}
        <div className="mt-6">
          <label className="block text-base md:text-lg font-medium">Color:</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded w-full md:w-80"
          >
            <option value="">Select Color</option>
            <option value="Brown">Brown</option>
            <option value="Black">Black</option>
            <option value="Beige">Beige</option>
          </select>
        </div>

        {/* Size Selection */}
        <div className="mt-6">
          <label className="block text-base md:text-lg font-medium">Size:</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded w-full md:w-80"
          >
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={addToCart}
            className="py-2 px-4 bg-green-500 text-white rounded-lg w-full sm:w-auto"
          >
            Add to Cart
          </button>
          <button
            onClick={addToWishlist}
            className="py-2 px-4 bg-yellow-500 text-white rounded-lg w-full sm:w-auto"
          >
            Add to Wishlist
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="lg:col-span-2 mt-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Customer Reviews</h2>
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
          <h3 className="text-lg md:text-xl font-semibold">Leave a Review</h3>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            rows={4}
            placeholder="Write your review..."
            className="w-full p-2 border border-gray-300 rounded mt-4"
          />
          <div className="mt-4">
            <label className="block text-base md:text-lg font-medium">Rating:</label>
            <select
              value={newRating}
              onChange={(e) => setNewRating(Number(e.target.value))}
              className="mt-2 p-2 border border-gray-300 rounded w-full md:w-80"
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>

          <button
            onClick={submitReview}
            className="py-2 px-4 bg-blue-500 text-white rounded-lg mt-6"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}
