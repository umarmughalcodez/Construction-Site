"use client";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const RoofingServices = ({
  image,
  heading,
  text,
}: {
  image: string;
  heading: string;
  text: string[];
}) => {
  return (
    <motion.div
      className="border-gray-300 border px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 rounded-2xl flex flex-col sm:flex-row items-start relative bg-white shadow-sm hover:shadow-md transition"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Left Icon */}
      <div className="mr-0 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0">
        <motion.div
          className="bg-[#00215B] rounded-xl w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] grid place-items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <Image
            src={image}
            alt="Icon"
            width={35}
            height={35}
            loading="lazy"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </motion.div>
      </div>

      {/* Right Content */}
      <div>
        <motion.p
          className="text-[#D2153D] mb-4 text-lg sm:text-xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {heading}
        </motion.p>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="text-sm sm:text-base"
        >
          {text.map((t) => (
            <motion.li
              key={t}
              className="list-none flex items-center mb-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <FaCheck className="text-green-600 flex-shrink-0" />
              <span className="ml-2">{t}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default RoofingServices;
