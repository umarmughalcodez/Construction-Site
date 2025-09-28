"use client";

import React from "react";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { redirect, useSearchParams } from "next/navigation";
import Image from "next/image";
import img from "@/public/testimonials img.jpg";

type Props = {
  limit?: number;
};

export const Testimonials = ({ limit }: Props) => {
  const data = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <>
      {/* ✅ Show header image only if showImg is true */}
      {window.location.pathname == "/testimonials" && (
        <div className="relative w-full h-[150px] sm:h-[150px] md:h-[200px] lg:h-[200px] mb-20">
          <Image
            src={img}
            alt="Testimonials Header"
            className="object-cover"
            fill
            priority
          />
          <p
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            text-white font-semibold text-3xl sm:text-4xl md:text-5xl text-center"
          >
            Testimonials
          </p>
        </div>
      )}

      {/* ✅ Testimonials Section */}
      <section className="py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-2 text-gray-600">
              Real experiences from our happy clients.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{item.review}</p>
                <div className="mt-3 flex text-yellow-500">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>
              </div>
            ))}
          </div>

          {/* View All Button (only when limited) */}
          {limit && (
            <div className="mt-10 text-center">
              <Button
                className="bg-[#D2153D] hover:bg-[#B01032] text-white rounded-md hover:scale-105 transition-all delay-75"
                onClick={() => redirect("/testimonials")}
              >
                View All
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Testimonials;