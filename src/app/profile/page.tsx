import Image from "next/image";
import shopimg from "@/app/public/shopimg.png";

const MyAccount = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative mt-6">
        <Image
          src={shopimg}
          alt="shop"
          height={316}
          width={1440}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-black text-4xl md:text-5xl font-bold">My Account</h1>
          <p className="text-black text-base md:text-lg mt-3">Home / My Account</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Log In Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Log In</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="login-username" className="block text-gray-600 mb-2">
                    Username or email address
                  </label>
                  <input
                    type="text"
                    id="login-username"
                    className="w-full border border-gray-300 rounded-md p-3"
                    placeholder="Enter your username or email"
                  />
                </div>
                <div>
                  <label htmlFor="login-password" className="block text-gray-600 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="login-password"
                    className="w-full border border-gray-300 rounded-md p-3"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-gray-600">
                    <input type="checkbox" className="mr-2" /> Remember me
                  </label>
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    Lost your password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition"
                >
                  Log In
                </button>
              </form>
            </div>

            {/* Register Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Register</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="register-email" className="block text-gray-600 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="register-email"
                    className="w-full border border-gray-300 rounded-md p-3"
                    placeholder="Enter your email"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  A link to set a new password will be sent to your email address. Please read our{' '}
                  <a href="#" className="text-blue-500 hover:underline">
                    privacy policy
                  </a>.
                </p>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition"
                >
                  Register
                </button>
              </form>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-gray-100 py-12 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Free Delivery</h3>
                <p className="text-gray-600">For all orders over $50.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">90 Days Return</h3>
                <p className="text-gray-600">If goods have problems.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Secure Payment</h3>
                <p className="text-gray-600">100% secure payment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
