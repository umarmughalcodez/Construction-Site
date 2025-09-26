"use client";

import { Button } from "@/components/ui/button";
import { Project } from "@/types/Project";
import Image from "next/image";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  CldUploadWidget,
  type CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
import { Input } from "@/components/ui/input";
import AdminNavbar from "@/components/AdminNavbar";
import { redirect } from "next/navigation";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

type ProjectProps = {
  title: string;
  description: string;
  images: string[];
  clientName: string;
  category: string;
  dateCompleted?: Date;
};

export default function ProjectsCRUD() {
  const [project, setProject] = useState<ProjectProps>({
    title: "",
    description: "",
    images: [],
    clientName: "",
    category: "",
    dateCompleted: undefined,
  });

  const [projects, setProjects] = useState<Project[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!editId && project.images.length < 1) {
        toast.error("At least 1 image is required!");
        return;
      }

      const body = {
        ...project,
      };

      if (editId) {
        await fetch(`/api/projects/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        setLoading(false);
      } else {
        await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        setLoading(false);
      }

      // Reset only on success
      setProject({
        title: "",
        description: "",
        images: [],
        clientName: "",
        category: "",
        dateCompleted: undefined,
      });
      setIsOpen(false);
      fetchProjects();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Delete
  const handleDelete = async (id: number) => {
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
    fetchProjects();
  };

  // Open edit modal
  const handleEdit = (p: Project) => {
    setProject({
      title: p.title,
      description: p.description,
      images: p.imageUrl || [], // adapt naming difference
      clientName: p.clientName || "",
      category: p.category || "",
      dateCompleted: p.dateCompleted ? new Date(p.dateCompleted) : undefined,
    });
    setEditId(p.id);

    // setPreviewUrl(service.imageUrl || null);
    setIsOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProject((prev) => ({
      ...prev,
      [name]: name === "dateCompleted" ? new Date(value) : value,
    }));
  };

  return (
    <div>
      <AdminNavbar />
      <div className="p-6 max-w-2xl mx-auto">
        <Toaster />
        <h1 className="text-2xl font-bold mb-4">Projects CRUD</h1>

        {/* Button to open add form */}
        <Button
          onClick={() => {
            setIsOpen(true);
            setEditId(null);
            setProject({
              title: "",
              description: "",
              images: [],
              clientName: "",
              category: "",
              dateCompleted: undefined,
            });
          }}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded mb-4"
        >
          Add Project
        </Button>

        {/* List */}
        <ul className="space-y-8">
          {projects.map((p) => (
            <li
              key={p.id}
              className="flex justify-between items-center border p-3 rounded shadow-gray-700 shadow-lg"
            >
              <div className="flex flex-col items-center justify-center w-full space-y-3">
                <div className="w-64 h-40 relative">
                  {p.imageUrl.length > 0 && (
                    <Image
                      src={p.imageUrl[0]}
                      alt={`${p.title.slice(0, 10)}'s Image`}
                      fill
                      loading="lazy"
                    />
                  )}
                </div>
                <h2 className="font-semibold">
                  {p.title.length >= 30 ? (
                    <>
                      <span>{p.title.slice(0, 30)}</span> &nbsp;
                      <Button
                        effect={"hoverUnderline"}
                        variant={"link"}
                        className="text-blue-300 p-0"
                        onClick={() => redirect(`/project/${p.id}`)}
                      >
                        More...
                      </Button>
                    </>
                  ) : (
                    p.title
                  )}
                </h2>
                <p className="text-gray-600">
                  {p.description.length >= 30 ? (
                    <>
                      <span>{p.description.slice(0, 30)}</span> &nbsp;{" "}
                      <Button
                        effect={"hoverUnderline"}
                        variant={"link"}
                        className="text-blue-300 p-0"
                        onClick={() => redirect(`/project/${p.id}`)}
                      >
                        More...
                      </Button>
                    </>
                  ) : (
                    p.description
                  )}
                </p>
                <div className="space-x-2">
                  <Button
                    effect={"expandIcon"}
                    iconPlacement="right"
                    icon={MdOutlineEdit}
                    onClick={() => handleEdit(p)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-400"
                  >
                    Edit
                  </Button>
                  <Button
                    effect={"expandIcon"}
                    iconPlacement="right"
                    icon={MdDeleteOutline}
                    onClick={() => handleDelete(p.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {isOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-xl mb-4">
                {editId ? "Edit Service" : "Add Service"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  name="title"
                  type="text"
                  placeholder="Title"
                  value={project.title}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={project.description}
                  onChange={(e) =>
                    setProject((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className="w-full border px-3 py-2 rounded resize-none h-32"
                  required
                />
                <Input
                  placeholder="Client's Name"
                  type="text"
                  name="clientName"
                  value={project.clientName}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="category"
                  value={project.category}
                  placeholder="Category"
                  type="text"
                  onChange={handleChange}
                  required
                />
                <Input
                  name="dateCompleted"
                  onChange={handleChange}
                  type="date"
                  required
                  value={
                    project.dateCompleted
                      ? project.dateCompleted.toISOString().split("T")[0]
                      : ""
                  }
                  placeholder="Completed On"
                />
                <CldUploadWidget
                  uploadPreset="test_site"
                  options={{ maxFiles: 5, multiple: true }}
                  onSuccess={(res) => {
                    const info = res.info as CloudinaryUploadWidgetInfo;
                    if (info.secure_url) {
                      setProject((prev) => {
                        if (prev.images.length >= 5) {
                          toast.error("You can upload up to 5 images only ...");
                          return prev;
                        }
                        return {
                          ...prev,
                          images: [...prev.images, info.secure_url],
                        };
                      });
                    }
                  }}
                >
                  {({ open }) => (
                    <Button
                      type="button"
                      onClick={() => {
                        setProject((prev) => ({ ...prev, images: [] }));
                        open?.();
                      }}
                    >
                      {editId ? "Update Images" : "Upload Images"}
                      {""} (Max. 5)
                    </Button>
                  )}
                </CldUploadWidget>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-1 bg-gray-400 text-white rounded"
                  >
                    Cancel
                  </button>
                  <Button type="submit" disabled={loading}>
                    {loading ? "Processing..." : editId ? "Update" : "Add"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
