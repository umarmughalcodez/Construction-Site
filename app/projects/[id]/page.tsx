"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import img from "@/public/Rectangle 1 (2).png";
import { useParams } from "next/navigation";
import { type Project } from "@/types/Project";

const Project = () => {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);

  const fetchProject = useCallback(async () => {
    const res = await fetch(`/api/projects/${params.id}`);
    const data = await res.json();
    setProject(data.project);
  }, [params.id]);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  return (
    <div>
      {/* Hero Image */}
      <div className="relative w-full h-[250px] sm:h-[250px] md:h-[300px] lg:h-[300px] mb-10">
        <Image src={img} alt="About" className="object-cover" fill />

        {/* Text overlay only on medium+ screens */}
        <p className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl sm:text-4xl md:text-5xl text-center">
          Single Project
        </p>
      </div>

      {/* Project Details */}
      <div className="flex justify-center items-center min-h-screen py-12 w-full px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-6xl w-full">
          {/* LEFT SIDE */}
          <div>
            {/* Main Image */}
            {project?.imageUrl[0] && (
              <img
                src={project.imageUrl[0]}
                alt={project.title}
                className="w-full shadow-md mb-6"
              />
            )}

            {/* Description */}
            <p className="text-gray-700 mb-6">{project?.description}</p>

            {/* 2x2 Image Grid */}
            <div className="grid grid-cols-2 gap-2">
              {project?.imageUrl.slice(0, 5).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Project ${project.title} - ${idx + 1}`}
                  className="w-full h-40 object-cover shadow"
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">
              {project?.title}
            </h1>

            <div className="text-gray-600 space-y-2">
              <p className="text-3xl my-4">Project Info</p>
              <p>
                <span className="font-semibold">Client:</span>{" "}
                {project?.clientName}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {project?.category}
              </p>
              {project?.dateCompleted && (
                <div>
                  <span className="font-semibold">Completed on:</span>{" "}
                  {new Date(project.dateCompleted).toLocaleDateString("en-GB")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
