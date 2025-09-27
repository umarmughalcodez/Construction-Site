"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Project = {
  id: number;
  title: string;
  category: "Residential" | "Commercial" | "Renovation";
  image: string;
  excerpt: string;
};

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Riverside Residence",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=60",
    excerpt: "A modern family home focused on daylight and efficient layout.",
  },
  {
    id: 2,
    title: "Downtown Office Fitout",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1533743983669-94fa6ae5f1a6?w=1200&q=60",
    excerpt: "Flexible workspaces with sustainable finishes.",
  },
  {
    id: 3,
    title: "Historic Facade Renovation",
    category: "Renovation",
    image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1200&q=60",
    excerpt: "Careful restoration of a classic building envelope.",
  },
  {
    id: 4,
    title: "Suburban Extension",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=60",
    excerpt: "Seamless extension that blends with the original structure.",
  },
  {
    id: 5,
    title: "Retail Space Revamp",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1549399540-0b4b9ff923d9?w=1200&q=60",
    excerpt: "High-impact retail interior with clear sightlines.",
  },
  {
    id: 6,
    title: "Kitchen Renovation",
    category: "Renovation",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=60",
    excerpt: "Contemporary kitchen with premium finishes.",
  },
];

export function ProjectGallery() {
  const [filter, setFilter] = useState<"All" | Project["category"]>("All");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const projects = sampleProjects.filter((p) =>
    filter === "All" ? true : p.category === filter
  );

  return (
    <section id="projects" className="py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Selected Projects</h2>
            <p className="mt-1 text-sm text-gray-500">
              A curated selection of our recent work.
            </p>
          </div>

          <div className="flex gap-2">
            {(["All", "Residential", "Commercial", "Renovation"] as const).map(
              (c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c as any)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    filter === c
                      ? "bg-primary-600 text-white"
                      : "bg-white/60 text-slate-700"
                  }`}
                >
                  {c}
                </button>
              )
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl bg-white shadow"
            >
              <button
                onClick={() => setLightbox(p)}
                className="group block w-full text-left"
                aria-label={`Open ${p.title}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.excerpt}</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/30 px-3 py-1 text-xs">
                    <span className="font-medium">{p.category}</span>
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>

        {/* Lightbox modal */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="relative">
                  <img
                    src={lightbox.image}
                    alt={lightbox.title}
                    className="h-96 w-full object-cover"
                  />

                  <button
                    onClick={() => setLightbox(null)}
                    className="absolute right-3 top-3 rounded-md bg-white/80 px-3 py-1 text-sm font-semibold"
                  >
                    Close
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{lightbox.title}</h3>
                  <p className="mt-2 text-gray-600">{lightbox.excerpt}</p>

                  <div className="mt-4 flex gap-2">
                    <button className="rounded-md bg-primary-600 px-4 py-2 text-white">
                      View Project
                    </button>
                    <button className="rounded-md border px-4 py-2">
                      Contact Us
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
