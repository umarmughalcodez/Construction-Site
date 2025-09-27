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
      if (error instanceof Error) toast.error(error.message);
    }
  };

  return (
    <motion.section
      className="w-full p-6 sm:p-10 lg:p-16 bg-gray-50"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Toaster />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left: Form */}
        <motion.div
          variants={fadeLeft}
          className="w-full lg:w-1/2 bg-white p-6 sm:p-10 shadow-lg rounded-lg"
        >
          <div id="appointment" className="mb-6">
            <p className="text-[#D2153D] font-semibold">APPOINTMENT</p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">
              Request a Quote
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Input
                type="text"
                name="f_name"
                value={form.f_name}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className="flex-1 rounded-md"
              />
              <Input
                type="text"
                name="l_name"
                value={form.l_name}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="flex-1 rounded-md"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="E-mail *"
                required
                className="flex-1 rounded-md"
              />
              <Input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone *"
                required
                className="flex-1 rounded-md"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Input
                type="text"
                name="postcode"
                value={form.postcode}
                onChange={handleChange}
                placeholder="Postcode *"
                required
                className="flex-1 rounded-md"
              />
              <Input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Service *"
                required
                className="flex-1 rounded-md"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Textarea
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Message *"
                required
                className="rounded-md resize-none"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Button
                type="submit"
                effect={"expandIcon"}
                icon={FaArrowRight}
                iconPlacement="right"
                className="bg-[#D2153D] hover:bg-[#B21435] text-white px-4 py-2 rounded-md w-full sm:w-auto"
              >
                Appointment
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Right: Features */}
        <motion.div
          variants={fadeRight}
          className="w-full lg:w-1/2 flex flex-col justify-center space-y-6"
        >
          {[vector1, vector2, vector3].map((icon, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md"
            >
              <Image src={icon} alt="Feature" width={50} height={50} />
              <div>
                <p className="font-semibold text-lg">High Quality Build</p>
                <p className="text-gray-600 text-sm">
                  We ensure every project is completed with precision, safety,
                  and durability.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuoteSection;
