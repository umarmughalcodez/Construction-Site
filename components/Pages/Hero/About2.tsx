"use client";

import React from "react";
import { Button } from "../../ui/button";
import { FaArrowRight } from "react-icons/fa";
import image from "@/public/Imagesvideo-cover.png";
import Image from "next/image";
import img from "@/public/img.png";
import bg from "@/public/bg.png";
import bg1 from "@/public/bg (1).png";
import bg2 from "@/public/bg (2).png";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";

const About2 = () => {
  return (
    <>
      {/* Top Section */}
      <div className="w-full h-auto text-[#00215B] grid place-items-center">
        <div className="p-14 w-[70%] flex items-center justify-center">
          {/* Left Text */}
          <motion.div
            className="w-[40%] p-2 flex-col flex space-y-4 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.span
              className="text-3xl font-semibold mb-4 max-w-xs"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              With our knowledge, We guarantee Success!
            </motion.span>
            <motion.span
              className="max-w-sm"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              We are a reliable construction company delivering quality, safe,
              and innovative building solutions
            </motion.span>
            <motion.span
              className="max-w-sm"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              We are a trusted construction company dedicated to building with
              quality, safety, and innovation. With years of experience in
              residential, commercial, and industrial projects, we provide
              solutions that stand the test of time. Our team of skilled
              professionals works closely with clients to deliver projects on
              schedule and within budget
            </motion.span>
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
                className="bg-[#D2153D] hover:bg-[#D2153D] text-white cursor-pointer"
                onClick={() => redirect("/projects")}
              >
                Explore Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-[30%] grid place-items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={image}
              alt="About us Image"
              width={300}
              height={300}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex text-white mb-10">
        {/* Left big image */}
        <motion.div
          className="w-1/2 h-[50vh] relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={img}
            alt="Image"
            fill
            className="object-cover"
            // priority
            loading="lazy"
          />
        </motion.div>

        {/* Right three images */}
        <motion.div
          className="w-1/2 grid grid-cols-3"
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
            className="relative h-[50vh] overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={bg}
              alt="BG"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute top-1 right-1 px-3 py-12">
              <p className="max-w-sm mb-1 text-2xl font-semibold">
                Research & Analysis
              </p>
              <p>
                We study every detail, gather insights, and analyze data to
                create informed strategies that lead to the best results.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative h-[50vh] overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={bg2}
              alt="BG1"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute top-1 right-1 px-3 py-12">
              <p className="max-w-sm mb-1 text-2xl font-semibold">
                Industry Development
              </p>
              <p>
                We drive growth by adopting modern practices, innovative
                solutions, and sustainable approaches that strengthen the
                industry.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative h-[50vh] overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={bg1}
              alt="BG2"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute top-1 right-1 px-3 py-12">
              <p className="max-w-sm mb-1 text-2xl font-semibold">
                Production Launch
              </p>
              <p>
                We turn ideas into reality by delivering projects with
                precision, quality, and on-time execution.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About2;
