import React from "react";
import Image from "next/image";
import blog1 from "@/app/public/blog1.png";
import blog2 from "@/app/public/blog2.png";
import blog3 from "@/app/public/blog3.png";
import blog4 from "@/app/public/blog4.png";

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Title and Subtitle */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our Blogs</h2>
      <p className="text-gray-500 text-center mb-6">
        Find a bright idea to suit your taste with our great selection
      </p>

      {/* Blog Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Blog 1 */}
        <div>
          <Image src={blog1} alt="Blog Image 1" width={500} height={300} className="w-full h-auto" />
        </div>

        {/* Blog 2 */}
        <div>
          <Image src={blog2} alt="Blog Image 2" width={500} height={300} className="w-full h-auto" />
        </div>

        {/* Blog 3 */}
        <div>
          <Image src={blog3} alt="Blog Image 3" width={500} height={300} className="w-full h-auto" />
        </div>

        {/* Blog 4 */}
        <div>
          <Image src={blog4} alt="Blog Image 4" width={500} height={300} className="w-full h-auto" />
        </div>
      </div>

      {/* View All Post Link */}
      <div className="text-center mt-12">
        <a
          href="/blogs"
          className="text-black mb-4 text-xl mt-4 cursor-pointer underline hover:text-gray-600"
        >
          View All Posts
        </a>
      </div>
    </div>
  );
}
