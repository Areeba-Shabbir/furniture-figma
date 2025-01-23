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
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cart: CartItem[]) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
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

    if (!isValid) {
      alert('Please fill in all required fields.');
      return;
    }

    // Show confirmation notification
    if (window.confirm('Are you sure you want to place your order?')) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        localStorage.removeItem('cart');
        // Ensure the correct path for order-confirmation
        router.push('/order-confirmation');
      }, 2000);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-8">
      {/* Banner Section */}
      <div className="relative w-full h-[300px]">
        <Image src={shopImg} alt="Checkout" layout="fill" objectFit="cover" className="rounded-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Checkout</h1>
          <p className="text-white mt-2">Home / Checkout</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-12 mt-12">
        {/* Billing Details */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-8">Billing Details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                value={shippingInfo.firstName}
                onChange={handleFormChange}
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
              <input
                type="text"
                name="lastName"
                value={shippingInfo.lastName}
                onChange={handleFormChange}
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                value={shippingInfo.email}
                onChange={handleFormChange}
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
              <input
                type="tel"
                name="phone"
                value={shippingInfo.phone}
                onChange={handleFormChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="streetAddress"
                value={shippingInfo.streetAddress}
                onChange={handleFormChange}
                placeholder="Street Address"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
              <input
                type="text"
                name="city"
                value={shippingInfo.city}
                onChange={handleFormChange}
                placeholder="City"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="zipCode"
                value={shippingInfo.zipCode}
                onChange={handleFormChange}
                placeholder="Zip Code"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
              <select
                name="country"
                value={shippingInfo.country}
                onChange={handleFormChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              >
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                {/* Add other countries as needed */}
              </select>
            </div>
            <textarea
              name="additionalInfo"
              value={shippingInfo.additionalInfo}
              onChange={handleFormChange}
              placeholder="Additional Information"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </form>
        </div>

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
                <span>{item.name}</span>
                <span>Rs. {item.price}</span>
              </div>
            ))}
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-4">
              <span>Total</span>
              <span>Rs. {totalPrice}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
