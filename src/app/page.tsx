// page.tsx
export const metadata = {
  title: "Home | Furniture Store",  // Adjust the title as needed
  description: "Explore the latest furniture picks, top trends, and more.",
};

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
      <HeroSection />

      {/* Section */}
      <Section />

      {/* Top Picks */}
      <TopPicks />

      {/* Banner */}
      <Banner/>

      {/* Blogs */}
      <Blogs />

      {/* Second Banner */}
      <Banner2 />
    </div>
  );
};

export default Home;
