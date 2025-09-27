import AboutUs from "@/components/Pages/Hero/AboutUs";
import Hero from "@/components/Pages/Hero/Hero";
import ProjectsPage from "@/components/Pages/Hero/Projects";
import React from "react";
import Testimonials from "./testimonials/page";
import { ProjectGallery } from "@/components/ProjectGallery";
import { FloatingCTA } from "@/components/FloatingCTA";

const App = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ProjectsPage />
      <Testimonials limit={3} showBtn={true} />
      <ProjectGallery />
      <FloatingCTA />
    </div>
  );
};

export default App;
