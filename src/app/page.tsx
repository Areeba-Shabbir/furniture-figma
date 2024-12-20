

import HeroSection from "@/app/component/Herosection";
import React from "react";
import Section from "@/app/component/section";
import TopPicks from "@/app/component/topPicks";
import Banner from "@/app/component/Banner";
import Blogs from "@/app/component/Blog";
import Banner2 from "@/app/component/Banner2";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#fbebb5]">
        <HeroSection />
      </div>

      {/* Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <Section />
      </div>

      {/* Top Picks */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <TopPicks />
      </div>

      {/* Banner */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <Banner />
      </div>

      {/* Blogs */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <Blogs />
      </div>

      {/* Second Banner */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <Banner2 />
      </div>
    </div>
  );
};

export default Home;
