"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

async function fetchProducts(query: string): Promise<Product[]> {
  const sanityQuery = `*[_type == "product" && name match "${query}*"]{
    _id,
    name,
    price,
    "image": image
  }`;
  return await client.fetch(sanityQuery);
}

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      if (!query.trim()) {
        setProducts([]);
        setIsLoading(false);
        return;
      }

      try {
        const fetchedProducts = await fetchProducts(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [query]);

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (!products.length) {
    return <div className="text-center py-8">No products found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Search Results for {query}</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product._id} className="border p-4 rounded shadow hover:shadow-lg">
            <Link href={`/product/${product._id}`}>
              <div>
              <Image
  src={product.image ? urlFor(product.image).url() : "/fallback-image.png"}
  alt={product.name}
  width={600} // Specify the width (adjust as necessary)
  height={200} // Specify the height (adjust as necessary)
  className="w-full h-40 object-cover"
/>
                <h2 className="text-lg font-bold mt-4">{product.name}</h2>
                <p className="text-gray-600 mt-2">$ {product.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
