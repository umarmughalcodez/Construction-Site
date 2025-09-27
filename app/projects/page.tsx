"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "@/public/pexels-enginakyurt-1463917.jpg";
import { Project } from "@/types/Project";
import { useRouter } from "next/navigation";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const router = useRouter();

  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="w-full h-full">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] sm:h-[200px] md:h-[300px] lg:h-[300px]">
        <Image src={img} alt="About" className="object-cover" fill />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Portfolio Archive
          </h1>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mt-24 flex justify-center px-4 sm:px-8 md:px-12 mb-24">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
          {projects.map((p) => (
            <li
              key={p.id}
              className="list-none border rounded-xl shadow-lg shadow-gray-600 "
            >
              <div
                className="relative cursor-pointer group overflow-hidden rounded-md"
                onClick={() => router.push(`/projects/${p.id}`)}
              >
                {/* Project Image */}
                <div className="aspect-square relative">
                  <Image
                    src={p.imageUrl[0]}
                    alt={p.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-md"
                    fill
                    loading="lazy"
                  />
                  {/* Hover overlay for large screens */}
                  <div className="hidden sm:block absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                  <div className="hidden sm:block absolute bottom-0 left-0 w-full p-4 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300 rounded-md">
                    {p.title.length > 20
                      ? `${p.title.slice(0, 20)}...`
                      : p.title}
                  </div>
                </div>

                {/* Always visible title & category on mobile */}
                <div className="sm:hidden mt-2 text-left  mx-3 py-3">
                  <p className="text-[#00215B] font-semibold">
                    {p.title.length > 25
                      ? `${p.title.slice(0, 25)}...`
                      : p.title}
                  </p>
                  {p.category && (
                    <p className="text-gray-500 text-sm mt-1">{p.category}</p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
