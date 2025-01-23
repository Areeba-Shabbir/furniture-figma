'use client';

import React from 'react';
import { FaCheckCircle, FaShippingFast } from 'react-icons/fa';

const OrderConfirmation = () => {
  return (
    <div className="container mx-auto px-8 py-12">
      <div className="text-center mb-12">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Order Confirmed!</h2>
        <p className="text-lg text-gray-600">
          Thank you for your purchase! Your order has been successfully placed.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 flex items-center mb-6">
          <FaShippingFast className="text-blue-500 mr-3" />
          Order Details
        </h3>
        <div className="space-y-5">
          <p className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-700 font-medium">Order Number:</span>
            <span className="text-gray-900 font-semibold">#123456</span>
          </p>
          <p className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-700 font-medium">Shipping Address:</span>
            <span className="text-gray-900 font-semibold text-right">
              123 Street, City, Country
            </span>
          </p>
          <p className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Estimated Delivery:</span>
            <span className="text-gray-900 font-semibold">3-5 Business Days</span>
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button
          className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          onClick={() => window.location.href = "/"}
        >
          <FaCheckCircle className="mr-2" />
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
