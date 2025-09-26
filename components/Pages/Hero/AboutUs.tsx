// /components/Pages/Hero/AboutUs.tsx
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
      <div className="mt-36 w-full h-auto grid place-items-center pt-10 pb-10 p-8">
        <p className="text-2xl font-semibold p-3">
          Our Comprehensive Roofing Services
        </p>
        <p className="max-w-xl text-center mt-5 mb-5">
          From residential projects to commercial developments, we deliver
          excellence in every detail with our complete roofing solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          <RoofingServices
            image={hazard.src} // Pass URL string
            heading="New Roof Installation"
            text={[
              "Premium Metal Roofing",
              "Color bond Solutions",
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
              "Professional Cleaning",
              "Surface Recoating",
              "Ridge Cap Repairs",
            ]}
          />
          <RoofingServices
            image={carpentry.src}
            heading="Carpentry Services"
            text={[
              "Door Installation",
              "Custom Stair Building",
              "Timber Framing",
              "Deck Construction",
              "Alfresco Construction",
              "Timber Repairs",
            ]}
          />
          <RoofingServices
            image={services.src}
            heading="Renovation Services"
            text={[
              "Complete Home Renovations",
              "Kitchen & Bathroom Remodeling",
              "Commercial Renovations",
            ]}
          />
          <RoofingServices
            image={renovate.src}
            heading="Renovation Carpentry"
            text={[
              "Residential Renovations",
              "Commercial Carpentry",
              "Interior Woodwork",
              "Exterior Carpentry",
              "Owner Builder Support",
            ]}
          />
        </div>
      </div>
      <About2 />
    </>
  );
};

export default AboutUs;
