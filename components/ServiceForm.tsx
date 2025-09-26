"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { TiDeleteOutline } from "react-icons/ti";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import toast from "react-hot-toast";
import { Service } from "@/app/admin/services/page";

export default function ServiceForm({
  initialData,
  onSubmit,
  loading,
  onCancel,
}: {
  initialData?: Service | null;
  onSubmit: (data: FormData) => void;
  loading: boolean;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [images, setImages] = useState<string[]>([]);

  // const [title, setTitle] = useState(initialData?.title || "");
  // const [description, setDescription] = useState(
  //   initialData?.description || ""
  // );
  // const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title ?? "");
      setDescription(initialData.description ?? "");
      setImages(initialData.imageUrl ?? []);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (images.length < 1) {
      toast.error("At least 1 image is required...");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    images.forEach((img) => {
      formData.append("images[]", img);
    });

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <CldUploadWidget
        uploadPreset="test_site"
        options={{ multiple: true, maxFiles: 4 }}
        onSuccess={(res) => {
          const info = res.info as CloudinaryUploadWidgetInfo;
          if (info.secure_url) {
            setImages((prev) => {
              if (prev.length >= 4) {
                toast.error("You can add up to 4 images only...");
                return prev;
              }
              return [...prev, info.secure_url];
            });
          }
        }}
      >
        {({ open }) => (
          <Button
            type="button"
            onClick={() => {
              setImages([]);
              open?.();
            }}
          >
            Upload Images (Max 4)
          </Button>
        )}
      </CldUploadWidget>
      {/* <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="w-full border px-3 py-2 rounded"
      /> */}

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          onClick={onCancel}
          // className="px-3 py-1 bg-gray-400 text-white rounded"
          className="text-white"
          variant={"destructive"}
          icon={TiDeleteOutline}
          effect={"expandIcon"}
          iconPlacement="right"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className="cursor-pointer text-white"
          effect={"shineHover"}
          //   className={`px-3 py-1 bg-blue-600 text-white rounded hover:cursor-pointer ${
          //     loading && "cursor-default"
          //   }`}
        >
          {loading ? "Processing..." : initialData ? "Update" : "Add"}
        </Button>
      </div>
    </form>
  );
}
