"use client";
import Image from "next/image";
import React from "react";
import img from "@/public/Rectangle 1333.png";
import img11 from "@/public/Group 52.png";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import img22 from "@/public/Rectangle 29.png";
import QuoteSection from "@/components/Pages/QuoteSection";

const AboutPage = () => {
  const scrollToAppointment = () => {
    const section = document.getElementById("appointment");
    if (section) {
      const yOffset = -80; // adjust based on header height
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-full">
      <div className="relative w-full">
        <Image
          src={img}
          alt="About"
          className="object-cover"
          // priority
          loading="lazy"
        />
        <p className="absolute top-1/2 left-50 text-white font-semibold text-4xl">
          About Us
        </p>
        <div className="bg-white py-6 px-12 absolute bottom-[-60px] right-50 shadow-black/40 shadow-xl">
          <p className="text-[#00215B] text-sm mb-3">CALL US TODAY</p>
          <p className="text-[#00215B] text-2xl font-semibold mt-3]">
            +1 123 456 789
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-24 p-6 space-x-24 mb-10">
        <Image
          src={img11}
          alt="Image"
          width={250}
          height={250}
          loading="lazy"
        />
        <div className="flex-col space-y-5">
          <p className="text-3xl text-[#00215B] max-w-sm ">
            We're providing the best customer service
          </p>
          <div className="bg-gray-100 max-w-sm text-black/80 flex-col flex space-y-4 p-6">
            <span className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              ipsum autem excepturi quos dolorem tenetur nam voluptas
              consectetur nulla quibusdam doloremque dolor totam atque eligendi
              consequuntur nobis. Nulla, obcaecati quam.
            </span>
            <span className="text-[#00215B] text-2xl ">
              John Doe, <span className="font-medium">CEO</span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full relative mb-24">
        <Image
          src={img22}
          alt="Image"
          className="object-cover"
          // priority
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 space-y-4">
          <p className="text-3xl">Get A Quote</p>
          <p className="text-4xl font-semibold mb-6">Build Your Future Today</p>
          <p className="mb-6 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt qui
            accusantium cumque consequatur dolorum consectetur saepe, fuga,
            praesentium dignissimos corporis quas porro velit ducimus excepturi
            itaque odio ea tempora aspernatur.
          </p>
          <Button
            effect={"expandIcon"}
            icon={FaArrowRight}
            iconPlacement="right"
            className="bg-[#D2153D] hover:bg-[#D2153D] text-white rounded-none"
            onClick={scrollToAppointment}
          >
            Appointment
          </Button>
        </div>

        <div className="absolute  bottom-[-50px] w-full flex justify-center space-x-6">
          <div className="flex space-x-5 bg-white p-4 max-w-sm items-center shadow-md ">
            <span className="bg-[#D2153D] flex items-center justify-center w-12 h-12 text-white font-semibold text-3xl p-2">
              01
            </span>
            <div className="text-[#00215B]">
              <p className="font-semibold text-xl">Kind Consultation</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="flex space-x-5 bg-white p-4 max-w-sm items-center shadow-md">
            <span className="bg-[#D2153D] flex items-center justify-center w-12 h-12 text-white font-semibold text-3xl p-2">
              02
            </span>
            <div className="text-[#00215B]">
              <p className="font-semibold text-xl">Expert Planning</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="flex space-x-5 bg-white p-4 max-w-sm items-center shadow-md">
            <span className="bg-[#D2153D] flex items-center justify-center w-12 h-12 text-white font-semibold text-3xl p-2">
              03
            </span>
            <div className="text-[#00215B]">
              <p className="font-semibold text-xl">Smart Execution</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <QuoteSection />
    </div>
  );
};

export default AboutPage;
