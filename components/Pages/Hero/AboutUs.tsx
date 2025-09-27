// /components/Pages/Hero/AboutUs.tsx
"use client";

import React from "react";
import RoofingServices from "./RoofingServices";
import hazard from "@/public/Group 53.svg";
import puzzle from "@/public/Group 60.svg";
import recover from "@/public/Group.svg";
import carpentry from "@/public/Group (1).svg";
import services from "@/public/Group (2).svg";
import renovate from "@/public/Group (3).svg";
import About2 from "./About2";

const AboutUs = () => {
  return (
    <>
      <div className="w-[100%] h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      <section className="mt-16 sm:mt-20 lg:mt-26 w-full h-auto flex flex-col items-center px-4 sm:px-8 lg:px-12 py-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00215B]">
            Our Comprehensive Roofing Services
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
            From residential homes to large commercial projects, we deliver
            durable roofing solutions that combine functionality, safety, and
            modern design.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-7xl">
          <RoofingServices
            image={hazard.src}
            heading="New Roof Installation"
            text={[
              "Premium Metal Roofing",
              "Colorbond Solutions",
              "Custom Tile Roofing",
            ]}
          />
          <RoofingServices
            image={puzzle.src}
            heading="Expert Roof Repairs"
            text={[
              "Emergency Leak Repairs",
              "Storm Damage Recovery",
              "Preventive Maintenance",
            ]}
          />
          <RoofingServices
            image={recover.src}
            heading="Complete Restoration"
            text={[
              "Professional Roof Cleaning",
              "Surface Recoating",
              "Ridge Cap Repairs",
            ]}
          />
          <RoofingServices
            image={carpentry.src}
            heading="Carpentry Services"
            text={[
              "Custom Staircases",
              "Timber Framing",
              "Door & Window Installation",
              "Timber Repairs",
            ]}
          />
          <RoofingServices
            image={services.src}
            heading="Renovation Services"
            text={[
              "Full Home Renovations",
              "Kitchen & Bathroom Remodeling",
              "Commercial Fit-outs",
            ]}
          />
          <RoofingServices
            image={renovate.src}
            heading="Renovation Carpentry"
            text={[
              "Interior Woodwork",
              "Exterior Carpentry",
              "Residential Renovations",
              "Commercial Carpentry",
              "Owner Builder Support",
            ]}
          />
        </div>
      </section>

      {/* Additional About Section */}
      <About2 />
    </>
  );
};

export default AboutUs;
