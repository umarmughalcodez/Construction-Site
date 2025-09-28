"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Project } from "@/types/Project";

export default function ResponsiveProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [preview, setPreview] = useState<Project | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ✅ Show only first 3 projects
  const topProjects = projects.slice(0, 3);

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
        {/* Header */}
        <div className="mb-8 text-center ">
          <h2 className="text-4xl font-bold text-[#00215B]">Our Projects</h2>
          <p className="mt-3 text-lg text-gray-500">
            A curated selection of our work
          </p>
        </div>

        {/* Grid of 3 projects */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topProjects.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl overflow-hidden shadow-md shadow-gray-300 bg-white cursor-pointer hover:shadow-lg transition"
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
            </article>
          ))}
        </div>

        {/* View All button */}
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-block px-4 py-2 rounded-lg bg-[#00215B] text-white hover:bg-[#00235B] transition"
          >
            View All Projects
          </Link>
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
              {/* Image section */}
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

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold">{preview.title}</h3>
                <p className="mt-2 text-gray-700">{preview.description}</p>
                <p className="mt-2 text-sm text-gray-500">
                  Client: {preview.clientName} | Category: {preview.category}
                </p>

                <div className="mt-4 flex gap-3">
                  <Link
                    href="/contact"
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Contact
                  </Link>
                  <Link
                    href={`/projects/${preview.id}`}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Explore Project
                  </Link>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setPreview(null)}
                className="absolute top-3 right-3 text-white bg-[#00215B] py-1 rounded-full px-1 hover:bg-[#00215B]"
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
