"use client";

import React from "react";
import { Button } from "../../ui/button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";

// Images
import image from "@/public/Imagesvideo-cover.png";
import img from "@/public/img.png";
import bg from "@/public/bg.png";
import bg1 from "@/public/bg (1).png";
import bg2 from "@/public/bg (2).png";

const About2 = () => {
  return (
    <>
      <div className="w-[100%] h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-10" />
      {/* Top Section */}
      <section className="w-full h-auto text-[#00215B] grid place-items-center px-4 md:px-8">
        <div className="py-14 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <motion.div
            className="w-full md:w-1/2 flex-col flex space-y-4 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              With our knowledge, We guarantee Success!
            </motion.h2>
            <motion.p
              className="max-w-md text-sm sm:text-base"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              We are a reliable construction company delivering quality, safe,
              and innovative building solutions.
            </motion.p>
            <motion.p
              className="max-w-md text-sm sm:text-base"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              With years of experience in residential, commercial, and
              industrial projects, we provide solutions that stand the test of
              time. Our skilled professionals deliver projects on schedule and
              within budget.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <Button
                variant={"default"}
                icon={FaArrowRight}
                iconPlacement="right"
                effect={"expandIcon"}
                className="bg-[#D2153D] hover:bg-[#b21033] text-white cursor-pointer"
                onClick={() => redirect("/projects")}
              >
                Explore Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full md:w-1/2 grid place-items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={image}
              alt="About us Image"
              width={400}
              height={400}
              className="w-full max-w-sm md:max-w-md object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="w-full flex flex-col lg:flex-row text-white mb-10">
        {/* Left big image */}
        <motion.div
          className="w-full lg:w-1/2 h-[40vh] md:h-[50vh] relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={img}
            alt="Construction site"
            fill
            className="object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Right three images */}
        <motion.div
          className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {/* Card 1 */}
          <motion.div
            className="relative h-[40vh] md:h-[50vh] overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={bg}
              alt="Research and Analysis"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
              <p className="text-lg md:text-xl font-semibold mb-2">
                Research & Analysis
              </p>
              <p className="text-sm md:text-base">
                We study every detail, gather insights, and analyze data to
                create informed strategies that lead to the best results.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative h-[40vh] md:h-[50vh] overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={bg2}
              alt="Industry Development"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
              <p className="text-lg md:text-xl font-semibold mb-2">
                Industry Development
              </p>
              <p className="text-sm md:text-base">
                We drive growth by adopting modern practices, innovative
                solutions, and sustainable approaches that strengthen the
                industry.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative h-[40vh] md:h-[50vh] overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={bg1}
              alt="Production Launch"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
              <p className="text-lg md:text-xl font-semibold mb-2">
                Production Launch
              </p>
              <p className="text-sm md:text-base">
                We turn ideas into reality by delivering projects with
                precision, quality, and on-time execution.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default About2;
