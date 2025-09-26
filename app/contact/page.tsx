"use client";
import React, { useState } from "react";
import img from "@/public/Rectangle 1 (3).png";
import Image from "next/image";
import msg from "@/public/chat.svg";
import phone from "@/public/telephone.svg";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import toast, { Toaster } from "react-hot-toast";
import map from "@/public/Map.png";

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
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div>
      <Toaster />
      <div className="relative w-full mb-20">
        <Image
          src={img}
          alt="Header"
          className="object-cover"
          // priority
          loading="lazy"
        />
        <p className="absolute top-1/2 left-50 text-white font-semibold text-4xl">
          Contact Us
        </p>
        <div className="bg-white py-6 px-12 absolute bottom-[-60px] right-50 shadow-black/40 shadow-xl">
          <p className="text-[#00215B] text-sm mb-3">CALL US TODAY</p>
          <p className="text-[#00215B] text-2xl font-semibold mt-3]">
            +1 123 456 789
          </p>
        </div>
      </div>
      <div
        id="appointment"
        className="w-full flex flex-col items-center justify-center"
      >
        <form
          onSubmit={handleSubmit}
          className="outline-black w-[70%] p-2 my-10"
        >
          <div className="flex space-x-3 py-3">
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
          </div>
          <div className="flex space-x-3 py-3">
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
          </div>
          <div className="flex space-x-3 py-3">
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
          </div>
          <Textarea
            name="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Message *"
            required
            className="rounded-none resize-none scroll"
          />
          <br />
          <Button
            type="submit"
            effect={"expandIcon"}
            iconPlacement="right"
            icon={FaArrowRight}
            className="bg-[#D2153D] hover:bg-[#D2153D] px-3 py-1 cursor-pointer text-white "
          >
            Submit Message
          </Button>
        </form>
        <div className="relative w-[70%]">
          <Image
            src={map}
            alt="Address Image"
            className="object-cover"
            loading="lazy"
          />
          <div className="w-full mt-5 flex space-x-2 items-center justify-center mb-6">
            <div className="bg-white w-1/2 p-2 border-l-6 border-[#D2153D] shadow-black/40 shadow-lg max-w-sm">
              <p className="ext-black/50">COMPANY ADDRESS</p>
              <p className="text-[#00215B] text-2xl">
                Themeforest, Envato HQ 24 Fifth st., Los Angleles, USA
              </p>
            </div>

            <div className="flex space-x-5">
              <div className="flex items-center space-y-2 space-x-3 bg-white p-3">
                <div className="bg-[#D2153D] w-10 h-10 p-2">
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
              <div className="flex items-center space-y-2 space-x-3 bg-white p-3">
                <div className="bg-[#00215B] w-10 h-10 p-2">
                  <Image
                    src={msg}
                    alt="Phone"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
