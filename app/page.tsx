import AboutUs from "@/components/Pages/Hero/AboutUs";
import Hero from "@/components/Pages/Hero/Hero";
import ProjectsPage from "@/components/Pages/Hero/Projects";
import React from "react";
import Testimonials from "./testimonials/page";
import CurvedLoop from "@/components/CurvedLoop";

const App = () => {
  return (
    <div>
      <Hero />
      <CurvedLoop
        marqueeText="Strong Foundations ★ 24/7 Support ★ Modern Designs ★ Quality Builds ★ Safe & Secure ★ Expert Team ★ Durable Materials ★ Trusted Partner ★ Smart Renovation ★ Future Ready ★"
        speed={4}
        className="fill-[#D2153D]" // your brand red color
      />

      <AboutUs />
      <Testimonials limit={3} />
      <ProjectsPage />
    </div>
  );
};

export default App;
