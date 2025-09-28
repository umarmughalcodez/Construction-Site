"use client";
import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/Logo.png";

const Footer = () => {
  const router = useRouter();

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col md:flex-row text-white mt-6"
    >
      {/* Left Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#D2153D] w-full md:w-1/3 flex flex-col items-center justify-center p-6"
      >
        <Image
          src={logo}
          alt="Logo Image"
          width={200}
          height={10}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <div className="flex flex-col items-center mb-5 mt-5">
          <span className="font-light text-md">HAVE ANY QUERIES?</span>
          <span
            className="text-xl font-bold cursor-pointer"
            onClick={() => router.push("mailto:tinkrbuild@gmail.com")}
          >
            tinkrbuild@gmail.com
          </span>
        </div>
        <div className="flex space-x-3">
          {[FaTwitter, FaFacebookF, TiSocialLinkedin, AiFillYoutube].map(
            (Icon, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white p-2 rounded-full grid place-items-center cursor-pointer"
              >
                <Icon className="text-blue-600" />
              </motion.span>
            )
          )}
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#00215B] w-full md:w-2/3 flex flex-col py-6 px-4 md:px-12"
      >
        <div className="flex flex-col md:flex-row justify-between mb-3">
          <motion.div variants={staggerChildren}>
            <span className="text-2xl font-semibold mb-3 block">
              Quick Links
            </span>
            <motion.div className="flex flex-col space-y-1">
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
          className="text-center text-sm md:text-base"
        >
          &copy; 2025 All rights reserved. Built by{" "}
          <Button
            effect={"hoverUnderline"}
            variant={"link"}
            className="text-red-500 p-0 font-semibold"
            onClick={() => window.open("https://umarweb.com/", "_blank")}
          >
            UmarWeb
          </Button>
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
