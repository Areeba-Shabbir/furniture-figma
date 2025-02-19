import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font mt-12">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap md:text-left text-center">
            {/* Address Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </h2>
            </div>

            {/* Links Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                Links
              </h2>
              <nav className="list-none space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-800">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-gray-600 hover:text-gray-800">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-800">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                    Contact
                  </Link>
                </li>
              </nav>
            </div>

            {/* Help Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Help
              </h2>
              <nav className="list-none space-y-2">
                <li>
                  <Link
                    href="/payment-options"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-gray-600 hover:text-gray-800">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </nav>
            </div>

            {/* Subscribe Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Subscribe
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start items-center">
                <div className="relative w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
                  <input
                    placeholder="Enter your email address"
                    type="email"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex flex-wrap sm:flex-nowrap justify-between items-center">
            <p className="text-sm text-gray-500 text-center sm:text-left">
              © 2024 Meubel House. All rights reserved
            </p>
            <span className="inline-flex sm:mt-0 mt-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-800"
                aria-label="Facebook"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="ml-3 text-gray-500 hover:text-gray-800"
                aria-label="Twitter"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="ml-3 text-gray-500 hover:text-gray-800"
                aria-label="Instagram"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                  ></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="ml-3 text-gray-500 hover:text-gray-800"
                aria-label="LinkedIn"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
