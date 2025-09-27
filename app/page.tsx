import AboutUs from "@/components/Pages/Hero/AboutUs";
import Hero from "@/components/Pages/Hero/Hero";
import ProjectsPage from "@/components/Pages/Hero/Projects";
import React from "react";
import Testimonials from "./testimonials/page";

const App = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ProjectsPage />
      <Testimonials limit={3} />
    </div>
  );
};

export default App;
