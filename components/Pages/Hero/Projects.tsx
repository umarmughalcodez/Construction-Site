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

        {/* DESKTOP / LAPTOP GRID */}
        <div className="hidden sm:grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl bg-white shadow cursor-pointer"
              onClick={() => {
                setPreview(p);
                setCurrentImage(0);
              }}
            >
              <Image
                src={p.imageUrl[0]}
                alt={p.title}
                width={500}
                height={300}
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.description}</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/30 px-3 py-1 text-xs">
                  <span className="font-medium">{p.category}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* MOBILE PROJECT GALLERY */}
        <div className="sm:hidden flex gap-4 overflow-x-auto py-4">
          {filteredProjects.map((p) => (
            <motion.div
              key={p.id}
              layout
              className="min-w-[250px] relative overflow-hidden rounded-2xl shadow cursor-pointer flex-shrink-0"
              onClick={() => {
                setPreview(p);
                setCurrentImage(0);
              }}
            >
              <Image
                src={p.imageUrl[0]}
                alt={p.title}
                width={250}
                height={200}
                className="object-cover h-48 w-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-0 left-0 p-3 text-white text-sm font-semibold">
                {p.title}
              </div>
            </motion.div>
          ))}
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
