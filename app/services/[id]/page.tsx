"use client";
import { Service } from "@/types/Service";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import img from "@/public/Rectangle 1 (1).png";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import ServicesDiscover from "@/components/Pages/ServicesDiscover";

const ServicesDynamic = () => {
  const [service, setService] = useState<Service | null>(null);

  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    fetchService();
  }, []);

  const fetchService = async () => {
    try {
      const res = await fetch(`/api/services/${id}`);
      if (res.ok) {
        const data = await res.json();
        setService(data);
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

      {/* HERO IMAGE */}
      <div className="relative w-full mb-20">
        <Image
          src={img}
          alt="Services"
          className="object-cover w-full h-64 md:h-96"
          // priority
          loading="lazy"
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-2xl md:text-4xl text-center">
          Single Service
        </p>
      </div>

      <div className="px-8 sm:px-6 md:px-12 lg:px-36 xl:px-40 py-10">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 place-items-center">
          {service?.imageUrl.map((img, idx) => (
            <div className="relative w-full h-48 sm:h-56 md:h-64" key={idx}>
              <Image
                src={img}
                alt="Image"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row md:space-x-6 gap-6">
          <div className="md:w-2/3 w-full p-4 md:p-6">
            <p className="font-semibold text-2xl md:text-3xl break-words">
              {service?.title}
            </p>
            <p className="mt-4 md:mt-6 break-words text-sm md:text-base leading-relaxed">
              {service?.description}
            </p>
          </div>

          <div className="bg-[#D2153D] md:w-1/3 w-full p-6 text-white flex flex-col justify-between h-auto md:h-96 ">
            <div>
              <p className="font-semibold text-lg md:text-xl mb-3">
                Get an Appointment with our Expert
              </p>
              <p className="mb-6 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                hic. Dolore dolorum nihil cum optio earum esse tempora vero.
              </p>
            </div>

            <Button
              className="bg-white hover:bg-[#D2153D] transition-all delay-75 hover:text-white text-[#D2153D] self-start"
              onClick={() => router.push("/contact")}
            >
              Appointment <FaArrowRight />
            </Button>
          </div>
        </div>
        <ServicesDiscover />
      </div>
    </div>
  );
};

export default ServicesDynamic;
