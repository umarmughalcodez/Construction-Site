"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Project } from "@/types/Project";

export default function ResponsiveProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [preview, setPreview] = useState<Project | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [filter, setFilter] = useState<"All" | string>("All");

  // Fetch projects from API
  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const nextImage = () => {
    if (!preview) return;
    setCurrentImage((prev) => (prev + 1) % preview.imageUrl.length);
  };

  const prevImage = () => {
    if (!preview) return;
    setCurrentImage(
      (prev) => (prev - 1 + preview.imageUrl.length) % preview.imageUrl.length
    );
  };

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header + Filters */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Our Projects</h2>
            <p className="mt-1 text-sm text-gray-500">
              A curated selection of our work
            </p>
          </div>

          {/* Category filter */}
          <div className="hidden sm:flex gap-2">
            {["All", "Residential", "Commercial", "Renovation"].map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  filter === c
                    ? "bg-primary-600 text-white"
                    : "bg-white/60 text-slate-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* UNIVERSAL AUTO-SCROLL CAROUSEL (mobile + desktop) */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6 py-4"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 25, // Adjust speed
              ease: "linear",
            }}
          >
            {[...filteredProjects, ...filteredProjects].map((p, i) => (
              <motion.article
                key={p.id + "-" + i}
                className="
                  relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md shadow-gray-500 
                  min-w-[80%] sm:min-w-[300px] sm:max-w-sm
                "
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setPreview(p);
                  setCurrentImage(0);
                }}
              >
                <Image
                  src={p.imageUrl[0]}
                  alt={p.title}
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.category}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* PREVIEW MODAL */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full h-96 bg-gray-200">
                <Image
                  src={preview.imageUrl[currentImage]}
                  alt={preview.title}
                  fill
                  className="object-cover"
                />
                {preview.imageUrl.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                    >
                      ◀
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                    >
                      ▶
                    </button>
                  </>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">{preview.title}</h3>
                <p className="mt-2 text-gray-700">{preview.description}</p>
                <p className="mt-2 text-sm text-gray-500">
                  Client: {preview.clientName} | Category: {preview.category}
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="#contact"
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                  >
                    Contact
                  </a>
                  <a
                    href={`/projects/${preview.id}`}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Explore Project
                  </a>
                </div>
              </div>

              <button
                onClick={() => setPreview(null)}
                className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
