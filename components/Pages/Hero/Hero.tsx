"use client";

import Image from "next/image";
import im1 from "@/public/pexels-mali-69483.jpg";
import { Button } from "../../ui/button";
import { FaArrowRight } from "react-icons/fa";
import general from "@/public/Shape.svg";
import project from "@/public/ruler.svg";
import refurb from "@/public/measuring-tool.svg";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Hero Background */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen grid place-items-center">
        <Image
          src={im1}
          alt="Construction site"
          fill
          className="object-cover"
          loading="lazy"
        />

        {/* Overlay Content */}
        <motion.div
          className="w-full flex-col flex items-center justify-center text-center px-4 sm:px-6 md:px-12 z-50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h1
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Building Solutions That Last
            </motion.h1>
            <motion.h2
              className="text-white text-xl sm:text-2xl md:text-3xl mb-5 font-medium"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              From Vision to Reality
            </motion.h2>
            <motion.p
              className="text-white max-w-2xl text-sm sm:text-base md:text-lg mb-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              We deliver high-quality construction services with a focus on
              safety, durability, and innovation—helping businesses and
              homeowners bring their projects to life with confidence.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="default"
                effect="expandIcon"
                icon={FaArrowRight}
                iconPlacement="right"
                className="bg-[#D2153D] hover:bg-[#B21435] text-white px-6 py-3 rounded-md"
                onClick={() => redirect("/services")}
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats + Services Section */}
      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 px-6 py-10 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Stats */}
        <motion.div
          className="flex flex-row md:flex-col items-center gap-4 md:gap-0 md:space-y-3"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <motion.div
            className="py-6 px-5 bg-[#00215B] text-white flex-col flex items-center rounded-lg w-[150px] sm:w-[180px]"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl sm:text-4xl font-semibold">147</span>
            <span className="text-sm sm:text-base text-center">
              Completed Projects
            </span>
          </motion.div>
          <motion.div
            className="py-6 px-5 bg-[#D2153D] text-white flex-col flex items-center rounded-lg w-[150px] sm:w-[180px]"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl sm:text-4xl font-semibold">25+</span>
            <span className="text-sm sm:text-base text-center">
              Years of Experience
            </span>
          </motion.div>
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          className="bg-white py-6 px-6 md:px-10 rounded-lg shadow-lg w-full md:w-[400px]"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-[#00215B] text-lg sm:text-xl mb-6 text-center font-semibold">
            We Construct & Manage Quality Infrastructure
          </h3>
          <ul className="space-y-4 text-gray-700">
            <motion.li
              className="flex items-start space-x-3"
              whileHover={{ x: 5 }}
            >
              <Image
                src={general}
                alt="General Contract"
                width={36}
                height={36}
                loading="lazy"
              />
              <p className="text-sm sm:text-base">
                <span className="text-[#00215B] font-medium">
                  General Contract
                </span>{" "}
                <br />
                Full project delivery from initial planning to final handover.
              </p>
            </motion.li>
            <motion.li
              className="flex items-start space-x-3"
              whileHover={{ x: 5 }}
            >
              <Image
                src={project}
                alt="Project Planning"
                width={36}
                height={36}
                loading="lazy"
              />
              <p className="text-sm sm:text-base">
                <span className="text-[#00215B] font-medium">
                  Project Planning
                </span>{" "}
                <br />
                Strategic planning, scheduling, and resource management for
                seamless execution.
              </p>
            </motion.li>
            <motion.li
              className="flex items-start space-x-3"
              whileHover={{ x: 5 }}
            >
              <Image
                src={refurb}
                alt="Refurbishment"
                width={36}
                height={36}
                loading="lazy"
              />
              <p className="text-sm sm:text-base">
                <span className="text-[#00215B] font-medium">
                  Refurbishment
                </span>{" "}
                <br />
                Transforming and upgrading spaces with durable, modern
                solutions.
              </p>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
