<<<<<<< HEAD
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import shopImg from '@/app/public/shopimg.png';

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Checkout() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'Pakistan',
    streetAddress: '',
    city: '',
    zipCode: '',
    additionalInfo: '',
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    console.log(storedCart); // Check the cart data
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cart: CartItem[]) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(name, value); // Debugging form changes
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'streetAddress',
      'city',
      'zipCode',
    ];

    const isValid = requiredFields.every(
      (field) => shippingInfo[field as keyof typeof shippingInfo]?.trim() !== ''
    );

    console.log(isValid); // Check if validation is correct

    if (!isValid) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Your order has been placed successfully!');
      localStorage.removeItem('cart');
      router.push('/order-confirmation');
    }, 2000);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-8">
      {/* Banner Section */}
      <div className="relative w-full h-[300px]">
        <Image src={shopImg} alt="Checkout" layout="fill" objectFit="cover" className="rounded-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Checkout</h1>
=======
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
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
          <p className="text-white mt-2">Home / Checkout</p>
        </div>
      </div>

<<<<<<< HEAD
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-12 mt-12">
        {/* Billing Details */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-8">Billing Details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={shippingInfo.firstName}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-gray-400"
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={shippingInfo.lastName}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-gray-400"
=======
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
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
                />
              </div>
            </div>
            <div>
<<<<<<< HEAD
              <label className="block text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={shippingInfo.email}
                onChange={handleFormChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone *</label>
              <input
                type="text"
                name="phone"
                value={shippingInfo.phone}
                onChange={handleFormChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Country</label>
              <select
                name="country"
                value={shippingInfo.country}
                onChange={handleFormChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-gray-400"
              >
                <option value="Pakistan">Pakistan</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Street Address *</label>
              <input
                type="text"
                name="streetAddress"
                value={shippingInfo.streetAddress}
                onChange={handleFormChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">City *</label>
                <input
                  type="text"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-gray-400"
                />
              </div>
              <div>
                <label className="block text-gray-700">ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={shippingInfo.zipCode}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-gray-400"
=======
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
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Additional Information</label>
              <textarea
<<<<<<< HEAD
                name="additionalInfo"
                value={shippingInfo.additionalInfo}
                onChange={handleFormChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-gray-400"
                placeholder="Notes about your order"
=======
                className="w-full border rounded-lg p-2"
                placeholder="Notes about your order"
                aria-label="Additional Information"
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
              ></textarea>
            </div>
          </form>
        </div>

<<<<<<< HEAD
        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-8">Your Order</h2>
          <div className="border border-gray-300 rounded-lg p-6 space-y-4">
            <div className="flex justify-between border-b pb-4">
              <span className="font-medium text-gray-600">Product</span>
              <span className="font-medium text-gray-600">Total</span>
            </div>
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between">
                <span>{item.name} </span>
                <span>Rs. {item.price }</span>
=======
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
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
              </div>
            ))}
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-4">
              <span>Total</span>
<<<<<<< HEAD
              <span>Rs. {totalPrice}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order'}
=======
              <span>Rs. {calculateTotal().toLocaleString()}</span>
            </div>
            <button
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 mt-6"
              aria-label="Place Order"
            >
              Place Order
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
