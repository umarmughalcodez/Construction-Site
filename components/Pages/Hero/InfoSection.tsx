"use client";
import Image from "next/image";
import React from "react";
import mapImg from "@/public/map1.png";
import phone from "@/public/telephone.svg";
import msg from "@/public/chat.svg";
import bottom_img from "@/public/img11.png";
import { motion } from "framer-motion";
import { fadeUp, fadeRight } from "@/lib/animations";

const InfoSection = () => {
  return (
    <div className="h-full w-full">
      <div className="relative w-full h-[400px] bg-red-600 mb-50 overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src={mapImg}
            alt="Map Image"
            fill
            className="object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Address Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white py-5 px-3 absolute md:bottom-[-50px] bottom-[50px] shadow-black/40 shadow-lg left-5 max-w-xs md:left-20 rounded-2xl"
        >
          <p className="text-[#00215B]">COMPANY ADDRESS</p>
          <p className="text-[#00215B] text-2xl font-semibold max-w-xs">
            Theme Forest, Los Santos, USA
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white absolute md:bottom-[-50px] bottom-[-100px] text-black/80 right-5 md:right-50 p-5 rounded-xl shadow-black/70 shadow-xl"
        >
          <div className="flex space-x-5">
            {/* Phones */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex flex-col space-y-2">
                <div className="bg-[#D2153D] w-8 h-8 p-2 flex items-center justify-center rounded-md">
                  <Image
                    src={phone}
                    alt="Phone"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-xs">COMPANY PHONES</p>
                  <p className="text-xl text-[#00215B]">+1 234 5678 098</p>
                  <p className="text-xl text-[#00215B]">+1 234 5678 098</p>
                </div>
              </div>
            </motion.div>

            {/* Emails */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex flex-col space-y-2">
                <div className="bg-[#00215B] w-8 h-8 p-2 flex items-center justify-center rounded-md">
                  <Image
                    src={msg}
                    alt="Email"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-xs">EMAILS</p>
                  <p className="text-xl text-[#00215B]">test@gmail.com</p>
                  <p className="text-xl text-[#00215B]">test@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Image */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full mb-20"
      >
        <Image
          src={bottom_img}
          alt="Bottom Image"
          className="object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default InfoSection;
