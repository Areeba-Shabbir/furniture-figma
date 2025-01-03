import Image from 'next/image';
import { FaHandshake, FaIndustry, FaRegLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading Section */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">About Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          We are passionate about creating timeless, high-quality furniture that enhances the comfort and style of your home.
          With years of experience, our team crafts beautiful pieces that are both functional and elegant.
        </p>

        {/* Mission Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
          <div className="max-w-xs mx-auto text-center">
            <FaHandshake size={48} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver exceptional furniture solutions that combine functionality, sustainability, and design to make your space truly feel like home.
            </p>
          </div>
          <div className="max-w-xs mx-auto text-center">
            <FaIndustry size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Craftsmanship</h3>
            <p className="text-gray-600">
              We focus on the finest craftsmanship, from design to production, ensuring every piece is durable, comfortable, and made to last.
            </p>
          </div>
          <div className="max-w-xs mx-auto text-center">
            <FaRegLightbulb size={48} className="text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovative Designs</h3>
            <p className="text-gray-600">
              Our designers stay ahead of trends to bring fresh and innovative ideas to your furniture, creating pieces that stand out in your home.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="/johnDoe.jpg"
              alt="Team Member"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <Image
              src="/janeSmith.jpg"
              alt="Team Member"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Lead Designer</p>
          </div>
          <div className="text-center">
            <Image
              src="/markJohnson.jpg"
              alt="Team Member"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Mark Johnson</h3>
            <p className="text-gray-600">Production Manager</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            We would love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to say hello, feel free to reach out.
          </p>
          <a
            href="mailto:info@furniturewebsite.com"
            className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-all duration-300"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
