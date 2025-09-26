"use client";
import { Project } from "@/types/Project";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProjectsPage = () => {
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);
  const fetchProjects = async () => {
    const res = await fetch("/api/projects");

    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="w-full">
      <p className="text-2xl font-semibold text-center pt-5">
        Our Special Projects
      </p>
      <ul className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-20">
        {projects.slice(0, 9).map((p) => (
          <li key={p.id}>
            <div
              className="aspect-square relative cursor-pointer group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => router.push(`/projects/${p.id}`)}
            >
              <Image
                src={p.imageUrl[0]}
                alt="Project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-4 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <p className="line-clamp-1">{p.title}</p>
                <button className="mt-2 px-3 py-1 bg-[#D2153D] text-white text-sm rounded-lg">
                  View Details →
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
