"use client";
import { Button } from "@/components/ui/button";
import { Service } from "@/types/Service";
import Image from "next/image";
import img from "@/public/Hero-Service-Background.png";
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
      <div className="relative w-full mb-12">
        <Image
          src={img}
          alt="Services"
          className="object-cover"
          // priority
          loading="lazy"
        />
        <p className="absolute top-1/2 left-50 text-white font-semibold text-4xl">
          Services Archive
        </p>
        <div className="bg-white py-6 px-12 absolute bottom-[-60px] right-50 shadow-black/40 shadow-xl">
          <p className="text-[#00215B] text-sm mb-3">CALL US TODAY</p>
          <p className="text-[#00215B] text-2xl font-semibold mt-3]">
            +1 123 456 789
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 py-20 px-12">
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
                className="grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden shadow-lg"
              >
                {/* IMAGE */}
                <div
                  className={`${
                    idx % 2 === 0 ? "order-1" : "order-2"
                  } w-full h-full`}
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
                  className={`flex flex-col justify-center items-start p-8 bg-[#D2153D] text-white  ${
                    idx % 2 === 0 ? "order-2" : "order-1"
                  }`}
                >
                  <h2 className="text-2xl font-bold mb-4 w-full break-words">
                    {s.title.slice(0, 30)}...
                  </h2>
                  <p className="mb-6 w-full break-words">
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
