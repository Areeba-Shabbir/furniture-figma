"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { JSX } from "react";

export default function ProductPage(): JSX.Element {
  // State to keep track of the main image and selected size
  const [mainImage, setMainImage] = useState<string>("/asgaard-sofa.png");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isClient, setIsClient] = useState<boolean>(false);

  // Array of thumbnail image paths
  const thumbnails = [
    "/thumbnail1.png",
    "/thumbnail2.png",
    "/thumbnail3.png",
    "/thumbnail4.png",
  ];

  // Sizes options
  const sizes = ["S", "M", "L", "XL"];

  // Function to handle thumbnail click and set the main image
  const handleThumbnailClick = (thumbnail: string) => {
    setMainImage(thumbnail);
  };

  // Function to handle size selection
  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  // Function to handle adding item to the cart
  const addToCart = () => {
    if (isClient) {
      const newItem = {
        id: 1,
        name: "Asgaard Sofa",
        price: 250000,
        image: mainImage, // Use the main image selected
        quantity: 1,
      };

      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      localStorage.setItem("cart", JSON.stringify([...existingCart, newItem]));
      alert("Item added to cart!");
    }
  };

  // Ensures localStorage is accessed only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        Home &gt; Shop &gt; Asgaard Sofa
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Product Images (Thumbnails) */}
        <div className="flex flex-col gap-4 flex-none w-24">
          {thumbnails.map((thumbnail, index) => (
            <div
              key={index}
              className="w-20 h-20 bg-gray-200 rounded cursor-pointer relative"
              onClick={() => handleThumbnailClick(thumbnail)} // Handle click
            >
              <Image
                src={thumbnail} // Use the correct path for each thumbnail
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="rounded object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right: Main Image */}
        <div className="flex-1 bg-white-200 relative w-full h-auto">
          <Image
            src={mainImage} // Use state for the main image
            alt="Asgaard Sofa"
            width={1200}  // Set width according to the max desired width
            height={800}  // Set a relative height
            className="object-cover w-full h-auto" // Ensures the image is responsive
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-2">Asgaard Sofa</h1>
          <p className="text-lg font-bold text-gray-800">Rs. 250,000.00</p>

          <div className="text-sm text-yellow-500 flex items-center gap-1 my-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>&#9733;</span>
            ))}
            <span className="text-gray-500">5 Customer Reviews</span>
          </div>

          <p className="text-gray-600 mb-4">
            Setting the bar as one of the loudest speakers in its class...
          </p>

          {/* Size Options */}
          <div className="mb-4">
            <h4 className="font-semibold">Size:</h4>
            <div className="flex gap-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded hover:bg-gray-100 ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                  onClick={() => handleSizeClick(size)} // Handle size click
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Color:</h4>
            <div className="flex gap-2 mt-2">
              {["black", "blue", "yellow", "green"].map((color) => (
                <div
                  key={color}
                  className={`w-6 h-6 rounded-full border cursor-pointer bg-${color}`}
                ></div>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-4 items-center">
            <input
              type="number"
              defaultValue={1}
              className="w-16 border rounded px-2 py-1"
            />
            <button
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
              onClick={addToCart} // Trigger addToCart function
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Single Image Section */}
      <div className="mt-12">
        <div className="relative w-full h-auto mb-4">
          <Image
            src="/description.png" // Replace with your actual image path
            alt="Product Image"
            width={1200}  // Adjust to max width for large screens
            height={800} // Adjust height accordingly
            className="object-cover w-full h-auto" // Ensures the image is responsive
          />
        </div>
      </div>

      {/* Related Products - Only 1 Image */}
      <div className="mt-12">
        <div className="relative w-full h-auto mb-4"> 
          <Image
            src="/related.png" // Replace with your image path
            alt="Related Product"
            width={1200}  // Adjust width for large screens
            height={800}  // Adjust height
            className="object-cover w-full h-auto" // Ensures the image is responsive
          />
        </div>
      </div>
    </div>
  );
}
