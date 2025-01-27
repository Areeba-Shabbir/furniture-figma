"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import shopimg from "@/app/public/shopimg.png";
import Text from "@/app/component/Text";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
const urlFor = (source: string) => builder.image(source);

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
}

const ITEMS_PER_PAGE = 8;

async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    category,
    _id,
    price,
    description,
    stockLevel,
    discountPercentage,
    isFeaturedProduct,
    name,
    "image": image.asset._ref
  }`;
  const products = await client.fetch(query);
  return products;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);
  const [showFeatured, setShowFeatured] = useState<boolean>(false);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const applyFilters = useCallback(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (maxPrice !== Infinity) {
      filtered = filtered.filter((product) => product.price <= maxPrice);
    }

    if (showFeatured) {
      filtered = filtered.filter((product) => product.isFeaturedProduct);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, selectedCategory, maxPrice, showFeatured]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <div className="relative">
        <Image
          src={shopimg}
          alt="Shop Banner"
          height={400}
          width={1440}
          className="w-full h-[250px] sm:h-[400px] object-cover"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-white text-2xl sm:text-4xl font-semibold">Shop</h1>
          <p className="text-white mt-2 text-sm sm:text-base">Home / Shop</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="p-6 bg-gray-100 flex flex-wrap gap-4 items-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded w-full sm:w-auto"
        >
          <option value="All">All Categories</option>
          <option value="Furniture">Furniture</option>
          <option value="Decor">Decor</option>
          <option value="Lighting">Lighting</option>
        </select>

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice === Infinity ? "" : maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value) || Infinity)}
          className="p-2 border rounded w-full sm:w-auto"
        />

        <label className="flex items-center gap-2 w-full sm:w-auto">
          <input
            type="checkbox"
            checked={showFeatured}
            onChange={(e) => setShowFeatured(e.target.checked)}
          />
          Show Featured
        </label>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {paginatedProducts.map((product: Product) => (
          <Link key={product._id} href={`/product/${product._id}`} passHref>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
              {product.image ? (
                <Image
                  src={urlFor(product.image).url() || "/fallback-image.png"}
                  alt={product.name}
                  height={300}
                  width={300}
                  className="h-[250px] w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/fallback-image.png";
                  }}
                />
              ) : (
                <div className="h-[250px] w-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">No Image Available</p>
                </div>
              )}

              <div className="p-4 text-center">
                <p className="text-lg font-medium text-gray-800">{product.name}</p>
                <h3 className="text-xl font-semibold text-gray-900 mt-2">
                  ${product.price}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded ${
            currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white text-gray-700"
          }`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === index + 1 ? "bg-gray-700 text-white" : "bg-white text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded ${
            currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white text-gray-700"
          }`}
        >
          Next
        </button>
      </div>

      {/* Text Section */}
      <div className="justify-center mx-auto mt-8">
        <Text />
      </div>
    </div>
  );
};

export default Shop;
