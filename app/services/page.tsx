"use client";
import { Button } from "@/components/ui/button";
import { Service } from "@/types/Service";
import Image from "next/image";
import img from "@/public/pexels-rquiros-2219024.jpg";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const router = useRouter();

  const fetchServices = async () => {
    try {
      const res = await fetch("/api/services");
      if (res.ok) {
        const data = await res.json();
        setServices(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      {/* Hero Image */}
      <div className="relative w-full h-[200px] sm:h-[200px] md:h-[250px] lg:h-[250px] mb-12">
        <Image src={img} alt="Services" className="object-cover" fill />

        {/* Text overlay: only on medium+ screens */}
        <p className="md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl sm:text-4xl md:text-5xl text-center">
          Services Archive
        </p>
      </div>

      {/* Services List */}
      <div className="min-h-screen py-20 px-4 sm:px-8 md:px-12">
        <Toaster />

        {services.length === 0 ? (
          <p className="text-center text-gray-500">
            No services available yet.
          </p>
        ) : (
          <div className="flex flex-col max-w-6xl mx-auto">
            {services.map((s, idx) => (
              <div
                key={s.id}
                className="grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden shadow-lg rounded-md"
              >
                {/* IMAGE */}
                <div
                  className={`${
                    idx % 2 === 0 ? "order-1" : "order-2"
                  } w-full h-64 sm:h-80 md:h-auto`}
                >
                  {s.imageUrl && s.imageUrl[0] && (
                    <img
                      src={s.imageUrl[0]}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* CONTENT */}
                <div
                  className={`flex flex-col justify-center items-start p-6 sm:p-8 bg-[#D2153D] text-white ${
                    idx % 2 === 0 ? "order-2" : "order-1"
                  }`}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 break-words">
                    {s.title.slice(0, 30)}...
                  </h2>
                  <p className="mb-6 break-words text-sm sm:text-base">
                    {s.description.slice(0, 150)}...
                  </p>
                  <Button
                    variant={"default"}
                    effect={"expandIcon"}
                    icon={FaArrowRight}
                    iconPlacement="right"
                    onClick={() => router.push(`/services/${s.id}`)}
                    className="bg-none outline-white outline-1 hover:bg-white bg-[#D2153D] text-white hover:text-[#D2153D] transition-all delay-75 w-44"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
