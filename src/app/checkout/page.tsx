import Image from "next/image";
import shopimg from "@/app/public/shopimg.png";

export default function Checkout() {
  // Mocked order data (Replace this with actual cart data from state or API)
  const mockOrder = [
    { id: 1, name: "Single Wooden Sofa", quantity: 1, price: 25000 },
    { id: 2, name: "Classic Dining Chair", quantity: 2, price: 46000 },
  ];

  const calculateTotal = () =>
    mockOrder.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
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
          <h1 className="text-white text-3xl sm:text-4xl font-semibold">Checkout</h1>
          <p className="text-white mt-2">Home / Checkout</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 mt-12">
        {/* Billing Details Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2"
                  placeholder="First Name"
                  aria-label="First Name"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2"
                  placeholder="Last Name"
                  aria-label="Last Name"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full border rounded-lg p-2"
                placeholder="you@example.com"
                aria-label="Email Address"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="+92 300 0000000"
                aria-label="Phone Number"
              />
            </div>
            <div>
              <label className="block text-gray-700">Country/Region</label>
              <select className="w-full border rounded-lg p-2" aria-label="Country/Region">
                <option>Pakistan</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Street Address</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="Street Address"
                aria-label="Street Address"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2"
                  placeholder="City"
                  aria-label="City"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2"
                  placeholder="ZIP Code"
                  aria-label="ZIP Code"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Additional Information</label>
              <textarea
                className="w-full border rounded-lg p-2"
                placeholder="Notes about your order"
                aria-label="Additional Information"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Your Order</h2>
          <div className="border rounded-lg p-6 space-y-4">
            <div className="flex justify-between border-b pb-4">
              <span className="font-medium text-gray-700">Product</span>
              <span className="font-medium text-gray-700">Total</span>
            </div>
            {mockOrder.map((item) => (
              <div className="flex justify-between" key={item.id}>
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>Rs. {item.price.toLocaleString()}</span>
              </div>
            ))}
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-4">
              <span>Total</span>
              <span>Rs. {calculateTotal().toLocaleString()}</span>
            </div>
            <button
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 mt-6"
              aria-label="Place Order"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
