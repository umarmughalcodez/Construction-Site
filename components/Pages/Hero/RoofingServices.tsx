// /components/Pages/Hero/RoofingServices.tsx
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
  image: string; // Change to string for image URL
  heading: string;
  text: string[];
}) => {
  return (
    <motion.div
      className="border-gray-400 border-2 px-12 py-8 rounded-2xl flex items-start relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="mr-6 p-4">
        <motion.div
          className="bg-[#00215B] rounded-xl w-[70px] h-[70px] grid place-items-center mb-5"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <Image src={image} alt="Icon" width={40} height={40} loading="lazy" />
        </motion.div>

        <motion.p
          className="text-[#D2153D] mb-6 text-xl"
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
              <FaCheck className="text-green-600" /> &ensp; {t}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default RoofingServices;
