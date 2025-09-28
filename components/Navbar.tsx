"use client";
import React, { useState } from "react";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillYoutube, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import logo from "@/public/Logo.png";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "HOME", href: "/" },
    { label: "PROJECTS", href: "/projects" },
    { label: "SERVICES", href: "/services" },
    { label: "ABOUT", href: "/about" },
    { label: "TESTIMONIALS", href: "/testimonials" },
    { label: "CONTACT", href: "/contact" },
  ];

  const topLinks = [
    { label: "ADMIN", href: "/admin" },
    { label: "SUPPORT", href: "/contact" },
    { label: "SERVICES", href: "/services" },
    { label: "PROJECTS", href: "/projects" },
    { label: "GET A QUOTE", href: "/about/#appointment" },
  ];

  return (
    <nav className="w-full border-b-2 border-gray-300">
      {/* Top bar - hidden on small screens */}
      <div className="hidden md:flex justify-between w-[90%] mx-auto py-2 text-sm text-gray-500 items-center">
        <div className="space-x-4">
          {topLinks.map((link) => (
            <Button
              key={link.label}
              effect="hoverUnderline"
              variant="link"
              className="p-0 text-[#00215B]"
              onClick={() => redirect(link.href)}
            >
              {link.label}
            </Button>
          ))}
        </div>
        <div>
          <Button
            effect={"ringHover"}
            className="rounded-md bg-[#D2153D] hover:bg-[#00215B]"
          >
            Book Appointment
          </Button>
        </div>
      </div>

      <div className="w-[100%] h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-3 mb-[-8]" />

      {/* Main Navbar */}
      <div className="flex justify-between items-center w-[90%] mx-auto py-4 md:py-6 ">
        <Image
          src={logo}
          alt="Logo Image"
          width={200}
          height={10}
          onClick={() => redirect("/")}
          className="cursor-pointer"
        />

        {/* Desktop links */}
        <div className="hidden md:flex space-x-4 text-[#00215B] text-sm">
          {links.map((link) => (
            <Button
              key={link.label}
              effect="hoverUnderline"
              variant="link"
              className="p-0 text-[#00215B]"
              onClick={() => redirect(link.href)}
            >
              {link.label}
            </Button>
          ))}
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <AiOutlineClose className="text-2xl text-[#00215B]" />
            ) : (
              <AiOutlineMenu className="text-2xl text-[#00215B]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-white border-t-2 border-gray-300 py-2 flex flex-col items-center space-y-2">
          {/* ✅ Show ADMIN on mobile */}
          <Button
            effect="hoverUnderline"
            variant="link"
            className="p-0 text-[#00215B] "
            onClick={() => {
              setMenuOpen(false);
              redirect("/admin");
            }}
          >
            ADMIN
          </Button>

          {links.map((link) => (
            <Button
              key={link.label}
              effect="hoverUnderline"
              variant="link"
              className="p-0 text-[#00215B]"
              onClick={() => {
                setMenuOpen(false);
                redirect(link.href);
              }}
            >
              {link.label}
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
