import AboutUs from "@/components/Pages/Hero/AboutUs";
import Hero from "@/components/Pages/Hero/Hero";
import InfoSection from "@/components/Pages/Hero/InfoSection";
import ProjectsPage from "@/components/Pages/Hero/Projects";
import React from "react";

const App = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ProjectsPage />
      <InfoSection />
    </div>
  );
};

export default App;
