import Image from "next/image";
import Link from "next/link";
import shopimg from "@/app/public/shopimg.png";

// Product Data
const products = [
  { id: 1, name: "Single Wooden Sofa", price: "25,000.00", image: "/shop1.png" },
  { id: 2, name: "Classic Dining Chairs", price: "23,000.00", image: "/shop2.png" },
  { id: 3, name: "Modern Dining Table", price: "31,000.00", image: "/shop3.png" },
  { id: 4, name: "Pine Wooden Desk", price: "14,000.00", image: "/shop4.png" },
  { id: 5, name: "Rectangular Coffee Table", price: "9,000.00", image: "/shop5.png" },
  { id: 6, name: "Circular Wooden Table", price: "12,000.00", image: "/shop6.png" },
  { id: 7, name: "Wooden Storage Unit", price: "20,000.00", image: "/shop7.png" },
  { id: 8, name: "Modern Dining Set", price: "26,000.00", image: "/shop8.png" },
  { id: 9, name: "Minimalist Armchairs", price: "18,000.00", image: "/shop9.png" },
  { id: 10, name: "Classic Wooden Cabinet", price: "22,000.00", image: "/shop10.png" },
  { id: 11, name: "Outdoor Lounge Chairs", price: "19,500.00", image: "/shop11.png" },
  { id: 12, name: "Luxury Sofa Set", price: "75,000.00", image: "/shop12.png" },
  { id: 13, name: "Double Seater Wooden Sofa", price: "30,000.00", image: "/shop13.png" },
  { id: 14, name: "Rectangular Dining Table", price: "40,000.00", image: "/shop14.png" },
  { id: 15, name: "Compact Coffee Table", price: "8,000.00", image: "/shop15.png" },
  { id: 16, name: "Designer Wooden Chairs", price: "28,000.00", image: "/shop16.png" },
];

export default function Shop() {
  return (
    <div className="flex flex-col">
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
          <h1 className="text-black text-3xl sm:text-4xl font-semibold">Shop</h1>
          <p className="text-black mt-2">Home / Shop</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-16 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded p-4 flex flex-col items-center"
          >
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-auto object-contain"
              />
              <h2 className="text-lg font-medium mt-4 text-center">
                {product.name}
              </h2>
              <p className="text-gray-700 mt-2">Rs. {product.price}</p>
              <button className="text-blue-500 underline mt-4">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
