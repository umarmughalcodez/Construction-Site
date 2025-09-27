"use client";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="w-full h-auto grid place-items-center space-y-6 border-gray-400 border-b-2">
      <div className="w-[70%] flex justify-between  py-2 border-gray-300 border-b-2">
        <div className="space-x-4 text-sm font-light text-gray-500">
          <Button
            effect={"hoverUnderline"}
            variant={"link"}
            className="p-0 text-[#00215B]"
            onClick={() => redirect("/admin")}
          >
            ADMIN
          </Button>
          <Button
            effect={"hoverUnderline"}
            variant={"link"}
            className="p-0 text-[#00215B]"
            onClick={() => redirect("/contact")}
          >
            SUPPORT
          </Button>{" "}
          <Button
            effect={"hoverUnderline"}
            variant={"link"}
            className="p-0 text-[#00215B]"
            onClick={() => redirect("/services")}
          >
            SERVICES
          </Button>
          <Button
            effect={"hoverUnderline"}
            variant={"link"}
            className="p-0 text-[#00215B]"
            onClick={() => redirect("/projects")}
          >
            PROJECTS
          </Button>
          <Button
            effect={"hoverUnderline"}
            variant={"link"}
            className="p-0 text-[#00215B]"
            onClick={() => redirect("/about/#appointment")}
          >
            GET A QUOTE
          </Button>
        </div>
        <div className="flex space-x-3 items-center">
          <FaTwitter className="text-[#00215B]" />
          <FaFacebookF className="text-[#00215B]" />
          <TiSocialLinkedin className="text-[#00215B] text-xl" />
          <AiFillYoutube className="text-[#00215B] text-xl" />
        </div>
      </div>

      <div className="w-[70%] flex justify-between items-center mb-5">
        <span className="text-3xl cursor-pointer" onClick={() => redirect("/")}>
          Logo
        </span>
        <div className="space-x-4 text-[#00215B] text-sm">
          <Button
            effect={"hoverUnderline"}
            variant={"link"}
            className="p-0 text-[#00215B]"
            onClick={() => redirect("/")}
          >
            Home
          </Button>
          <Button
            effect={"hoverUnderline"}
            variant={"link"}
            className="p-0 text-[#00215B]"
            onClick={() => redirect("/projects")}
          >
            Projects
          </Button>{" "}
          <Button
            effect={"hoverUnderline"}
            variant={"link"}
            className="p-0 text-[#00215B]"
            onClick={() => redirect("/services")}
          >
            Services
          </Button>{" "}
          <Button
            effect={"hoverUnderline"}
            variant={"link"}
            className="p-0 text-[#00215B]"
            onClick={() => redirect("/about")}
          >
            About
          </Button>
          <Button
            effect={"hoverUnderline"}
            variant={"link"}
            className="p-0 text-[#00215B]"
            onClick={() => redirect("/testimonials")}
          >
            Testimonials
          </Button>
          <Button
            effect={"hoverUnderline"}
            variant={"link"}
            className="p-0 text-[#00215B]"
            onClick={() => redirect("/contact")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
