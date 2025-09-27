"use client";
import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Footer = () => {
  const router = useRouter();

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerLinks = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full text-white h-auto flex bottom-0"
    >
      {/* Left Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#D2153D] w-[30%] grid place-items-center"
      >
        <div className="grid place-items-center w-[80%] py-4">
          <span
            className="text-2xl m-4 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Logo
          </span>
          <div className="flex-col flex mt-5 mb-5">
            <span className="font-light text-xs">CALL US TODAY</span>
            <span className="text-xl font-bold">+1 234 567 098</span>
          </div>
          <div className="flex space-x-2">
            {[FaTwitter, FaFacebookF, TiSocialLinkedin, AiFillYoutube].map(
              (Icon, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white p-2 rounded-full grid place-items-center"
                >
                  <Icon className="text-blue-600" />
                </motion.span>
              )
            )}
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#00215B] w-[70%] flex-col py-4"
      >
        <div className="flex justify-center pt-4 space-x-8 pb-4">
          <motion.div
            variants={staggerLinks}
            initial="hidden"
            whileInView="visible"
          >
            <span className="text-xl">Quick Links</span>
            <motion.div
              className="flex-col flex space-y-1 text-sm py-5"
              variants={staggerLinks}
            >
              {[
                { label: "Our Services", path: "/services" },
                { label: "Our Projects", path: "/projects" },
                { label: "Contact Us", path: "/contact" },
                { label: "About Us", path: "/about" },
                { label: "Book an Appointment", path: "/about/#appointment" },
              ].map((link, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Button
                    effect="hoverUnderline"
                    variant="link"
                    className="p-0 text-white"
                    onClick={() => router.push(link.path)}
                  >
                    {link.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          All rights reserved Copyright 2025
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
