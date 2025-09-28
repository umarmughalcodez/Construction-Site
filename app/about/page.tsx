"use client";
import Image from "next/image";
import React from "react";
import img from "@/public/pexels-quang-nguyen-vinh-222549-2138126.jpg";
import img11 from "@/public/Group 52.png";
import img22 from "@/public/Rectangle 29.png";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import QuoteSection from "@/components/Pages/QuoteSection";

const AboutPage = () => {
  const scrollToAppointment = () => {
    const section = document.getElementById("appointment");
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const services = [
    {
      number: "01",
      title: "Kind Consultation",
      desc: "Personalized guidance for every project.",
    },
    {
      number: "02",
      title: "Expert Planning",
      desc: "Detailed plans with precision and care.",
    },
    {
      number: "03",
      title: "Smart Execution",
      desc: "Efficient construction with high-quality standards.",
    },
  ];

  return (
    <div className="w-full h-full">
      {/* Hero Section */}
      <div className="relative w-full h-[150px] sm:h-[150px] md:h-[200px] lg:h-[200px]">
        <Image src={img} alt="About" className="object-cover" fill />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
            About Us
          </h1>
        </div>
      </div>

      {/* Team/Company Info Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-24 px-6 lg:px-24 gap-10 lg:gap-24 mb-20">
        <div className="flex-shrink-0">
          <Image src={img11} alt="Team" width={250} height={250} />
        </div>
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00215B]">
            We Build Your Dreams Into Reality
          </h2>
          <div className="bg-gray-100 text-gray-700 p-6 rounded-md shadow-md space-y-3">
            <p>
              At{" "}
              <span className="font-semibold text-[#D2153D]">
                Elite Construction
              </span>
              , we deliver high-quality residential and commercial projects on
              time, ensuring client satisfaction every step of the way. Our team
              combines experience, innovation, and dedication to exceed
              expectations.
            </p>
            <p className="text-[#00215B] text-lg font-semibold">
              Alex Bran, <span className="font-medium">CEO</span>
            </p>
          </div>
        </div>
      </div>

      {/* Get A Quote Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] relative">
          <Image src={img22} alt="Quote" className="object-cover" fill />

          {/* Overlay Text & Button - only visible on md+ screens */}
          <div className="hidden md:flex absolute inset-0 flex-col items-center justify-center text-white text-center px-12 space-y-4">
            <h3 className="text-3xl md:text-4xl font-medium">Get A Quote</h3>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Build Your Future Today
            </h2>
            <p className="max-w-md text-base md:text-lg">
              Our experts provide customized solutions for residential,
              commercial, and renovation projects. Let’s discuss how we can
              bring your vision to life.
            </p>
            <Button
              effect={"expandIcon"}
              icon={FaArrowRight}
              iconPlacement="right"
              className="bg-[#D2153D] hover:bg-[#B21435] text-white rounded-md"
              onClick={scrollToAppointment}
            >
              Appointment
            </Button>
          </div>
        </div>

        {/* Services Boxes */}
        <div className="absolute w-full bottom-[-70px] px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="flex flex-col sm:flex-row flex-1 min-w-[220px] max-w-sm bg-white p-4 items-center sm:items-start shadow-md rounded-md transition-transform hover:scale-105"
            >
              <span className="bg-[#D2153D] flex items-center justify-center w-12 h-12 text-white font-bold text-2xl rounded-full flex-shrink-0 mb-2 sm:mb-0 sm:mr-4">
                {service.number}
              </span>
              <div className="text-[#00215B] text-center sm:text-left">
                <p className="font-semibold text-lg">{service.title}</p>
                <p className="text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <QuoteSection />
      </div>
    </div>
  );
};

export default AboutPage;
