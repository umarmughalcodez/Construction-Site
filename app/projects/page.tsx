"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "@/public/Rectangle 1.png";
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
      <div className="relative w-full">
        <Image
          src={img}
          alt="About"
          className="object-cover"
          // priority
          loading="lazy"
        />
        <p className="absolute top-1/2 left-50 text-white font-semibold text-4xl">
          Portfolio Archive
        </p>
        <div className="bg-white py-6 px-12 absolute bottom-[-60px] right-50 shadow-black/40 shadow-xl">
          <p className="text-[#00215B] text-sm mb-3">CALL US TODAY</p>
          <p className="text-[#00215B] text-2xl font-semibold mt-3]">
            +1 123 456 789
          </p>
        </div>
      </div>
      <div className="mt-24 flex items-center justify-center mb-24">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-46 py-12 w-full">
          {projects.map((p) => (
            <li key={p.id} className="list-none">
              <div
                className="aspect-square relative cursor-pointer group"
                onClick={() => {
                  router.push(`/projects/${p.id}`);
                }}
              >
                <Image
                  src={p.imageUrl[0]}
                  alt={p.title}
                  className="object-cover "
                  fill
                  // priority
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-150 " />
                <div className="absolute bottom-0 left-0 w-full p-4 text-white text-lg font-semibold duration-500 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 delay-75 max-w-xs">
                  {p.title.length > 15 ? p.title.slice(0, 15) : p.title}...
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
