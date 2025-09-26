"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ServiceForm from "@/components/ServiceForm";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import AdminNavbar from "@/components/AdminNavbar";

export interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string[];
}

export default function ServicesCRUD() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editService, setEditService] = useState<Service | null>(null);

  const fetchServices = async () => {
    try {
      const res = await fetch("/api/services");
      const data = await res.json();

      // Ensure it's an array
      if (Array.isArray(data)) {
        setServices(data);
      } else if (data.services && Array.isArray(data.services)) {
        setServices(data.services);
      } else {
        setServices([]); // fallback to empty array
        console.error("Unexpected API response format:", data);
      }
    } catch (err) {
      console.error("Failed to fetch services:", err);
      setServices([]);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
      const imageUrl = formData.getAll("images[]");

      if (!imageUrl.length) {
        toast.error("Please upload at least 1 image");
        return;
      }

      const body = {
        title: formData.get("title"),
        description: formData.get("description"),
        images: imageUrl,
      };

      if (editService) {
        await fetch(`/api/services/${editService.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } else {
        await fetch("/api/services", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      }

      setIsOpen(false);
      setEditService(null);
      fetchServices();
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/services/${id}`, { method: "DELETE" });
    fetchServices();
    toast.success("Deletion Success!");
  };

  return (
    <div>
      <AdminNavbar />

      <Toaster />
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Manage Services</h1>
        <Button
          className="bg-blue-500 hover:bg-blue-400 m-5 hover:scale-110 transition-all delay-75"
          effect="shineHover"
          onClick={() => {
            setIsOpen(true);
            setEditService(null);
          }}
          // className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
        >
          Add Service
        </Button>

        <ul className="space-y-8">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              service={s}
              onEdit={() => {
                setEditService(s);
                setIsOpen(true);
              }}
              onDelete={() => handleDelete(s.id)}
            />
          ))}
        </ul>

        {isOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-xl mb-4">
                {editService ? "Edit Service" : "Add Service"}
              </h2>
              <ServiceForm
                initialData={editService}
                onSubmit={handleSubmit}
                loading={loading}
                onCancel={() => setIsOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
