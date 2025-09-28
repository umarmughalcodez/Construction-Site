"use client";
import React, { useState } from "react";
import Image from "next/image";
import img from "@/public/img11.png";
import msg from "@/public/chat.svg";
import phone from "@/public/telephone.svg";
import map from "@/public/Map.png";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import toast, { Toaster } from "react-hot-toast";

interface formState {
  f_name: string;
  l_name: string;
  phone: string;
  email: string;
  subject: string;
  postcode: string;
  message: string;
}

const ContactPage = () => {
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
        toast.success("Message Sent Successfully!");
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
    <div>
      <Toaster />

      {/* Hero Section */}
      <div className="relative w-full h-[150px] sm:h-[150px] md:h-[200px] lg:h-[200px] mb-20">
        <Image
          src={img}
          alt="Header"
          className="object-cover"
          fill
          loading="lazy"
        />

        {/* Overlay Text: Hidden on small screens */}
        <p className="md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700 font-semibold text-3xl sm:text-4xl md:text-5xl text-center">
          Contact Us
        </p>
      </div>

      {/* Contact Form Section */}
      <div
        id="appointment"
        className="w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl p-4 sm:p-6 md:p-8 bg-white shadow-md rounded-md mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:space-x-3 py-2">
            <Input
              type="text"
              name="f_name"
              value={form.f_name}
              onChange={handleChange}
              placeholder="First Name *"
              required
              className="rounded-none mb-2 sm:mb-0"
              maxLength={50}
            />
            <Input
              type="text"
              name="l_name"
              value={form.l_name}
              onChange={handleChange}
              placeholder="Last Name *"
              required
              className="rounded-none"
              maxLength={50}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-3 py-2">
            <Input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-mail *"
              required
              className="rounded-none mb-2 sm:mb-0"
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
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-3 py-2">
            <Input
              type="text"
              name="postcode"
              value={form.postcode}
              onChange={handleChange}
              placeholder="Postcode *"
              required
              className="rounded-none mb-2 sm:mb-0"
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
          </div>

          <Textarea
            name="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Message *"
            required
            className="rounded-none resize-none mt-2"
          />

          <div className="mt-4">
            <Button
              type="submit"
              effect={"expandIcon"}
              iconPlacement="right"
              icon={FaArrowRight}
              className="bg-[#D2153D] hover:bg-[#B21435] text-white px-4 py-2"
            >
              Submit Message
            </Button>
          </div>
        </form>

        {/* Map & Contact Info */}
        <div className="relative w-full max-w-6xl flex flex-col items-center mb-12">
          <Image
            src={map}
            alt="Address Image"
            className="object-cover w-full h-80 rounded-md shadow-md"
            loading="lazy"
          />

          <div className="w-full mt-5 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
            <div className="bg-white w-full md:w-1/2 p-4 border-l-4 border-[#D2153D] shadow-md rounded-md">
              <p className="text-black/50 text-sm">COMPANY ADDRESS</p>
              <p className="text-[#00215B] text-lg sm:text-2xl font-semibold">
                Themeforest, HQ 24 Fifth St., Los Angeles, USA
              </p>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-1/2">
              <div className="flex items-center space-x-3 bg-white p-3 shadow-md rounded-md">
                <div className="bg-[#00215B] w-10 h-10 flex items-center justify-center rounded">
                  <Image src={msg} alt="Email" width={30} height={30} />
                </div>
                <div>
                  <p className="text-xs">EMAILS</p>
                  <p className="text-lg text-[#00215B]">tinkrbuild@gmail.com</p>
                  <p className="text-lg text-[#00215B]">tinkrbuild@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
