"use client";
import { Service } from "@/types/Service";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

const ServicesDiscover = () => {
  const [latestServices, setLatestServices] = useState<Service[]>([]);

  const fetchLatestServices = async () => {
    try {
      const res = await fetch("/api/services");
      const data = await res.json();
      setLatestServices(data);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  useEffect(() => {
    fetchLatestServices();
  }, []);

  return (
    <div className="mt-5 py-6">
      <p className="font-semibold mb-5 text-3xl">Other Services</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center relative">
        {latestServices.map((s, i) => (
          <li
            key={i}
            className="bg-white w-full h-48 rounded flex flex-col items-start justify-center space-y-3 p-4 border-t-6 border-[#D2153D] shadow-black/40 shadow-lg"
          >
            <p className="text-sm text-gray-500">Explore Service</p>
            <p className="break-words w-full text-xl font-semibold">
              {s.title.length > 35 ? s.title.slice(0, 25) : s.title}...
            </p>
            <Button
              effect={"hoverUnderline"}
              variant={"link"}
              className="flex items-center gap-2 text-[#D2153D] mt-2 p-0"
              onClick={() => redirect(`/services/${s.id}`)}
            >
              Read <FaArrowRight />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesDiscover;
