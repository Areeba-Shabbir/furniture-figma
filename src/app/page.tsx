
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
      
      <div className="bg-[#fbebb5]">
        <HeroSection />
      </div>
      <Section />
      <TopPicks />
      <Banner />
      <Blogs />
      <Banner2 />
     
    </div>
  );
};

export default Home;