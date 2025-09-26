"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import vector1 from "@/public/Vector 4.svg";
import vector2 from "@/public/Vector 5.svg";
import vector3 from "@/public/Group 36.svg";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
} from "@/lib/animations";

interface formState {
  f_name: string;
  l_name: string;
  phone: string;
  email: string;
  subject: string;
  postcode: string;
  message: string;
}

const QuoteSection = () => {
  const [form, setForm] = useState<formState>({
    f_name: "",
    l_name: "",
    phone: "",
    message: "",
    postcode: "",
    email: "",
    subject: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendQuote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Quote Sent Successfully!");
        setForm({
          f_name: "",
          l_name: "",
          email: "",
          phone: "",
          postcode: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <motion.div
      className="w-full h-full flex p-5 space-x-10 mb-14"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Toaster />

      {/* Left: Form */}
      <motion.div
        variants={fadeLeft}
        className="w-1/2 flex flex-col p-5 items-end"
      >
        <div id="appointment">
          <p className="text-[#D2153D]">APPOINTMENT</p>
          <p className="text-3xl p-1">Request a Quote</p>
          <form onSubmit={handleSubmit} className="outline-black max-w-2xs">
            <motion.div variants={fadeUp} className="flex space-x-3 py-3">
              <Input
                type="text"
                name="f_name"
                value={form.f_name}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className="rounded-none"
                maxLength={50}
              />
              <Input
                type="text"
                name="l_name"
                value={form.l_name}
                onChange={handleChange}
                placeholder="Last Name *"
                className="rounded-none"
                required
                maxLength={50}
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex space-x-3 py-3">
              <Input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="E-mail *"
                required
                className="rounded-none"
                maxLength={100}
              />
              <Input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone *"
                required
                className="rounded-none"
                maxLength={50}
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex space-x-3 py-3">
              <Input
                type="text"
                name="postcode"
                value={form.postcode}
                onChange={handleChange}
                placeholder="Postcode *"
                required
                className="rounded-none"
                maxLength={20}
              />
              <Input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Service *"
                required
                className="rounded-none"
                maxLength={1200}
                minLength={20}
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Textarea
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Message *"
                required
                className="rounded-none resize-none scroll"
              />
            </motion.div>

            <br />
            <motion.div variants={fadeUp}>
              <Button
                type="submit"
                effect={"expandIcon"}
                iconPlacement="right"
                icon={FaArrowRight}
                className="bg-[#D2153D] hover:bg-[#D2153D] px-3 py-1 cursor-pointer text-white"
              >
                Appointment
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>

      {/* Right: Features */}
      <motion.div
        variants={fadeRight}
        className="w-1/2 flex flex-col space-y-4 justify-center items-start"
      >
        <motion.div
          variants={staggerContainer}
          className="grid place-items-center gap-y-8 p-4"
        >
          {[vector1, vector2, vector3].map((icon, idx) => (
            <motion.span
              key={idx}
              variants={fadeUp}
              className="flex space-x-4 max-space-sm"
            >
              <Image
                src={icon}
                alt="Vector"
                width={50}
                height={50}
                loading="lazy"
              />
              <div>
                <p>High Quality Build</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default QuoteSection;
