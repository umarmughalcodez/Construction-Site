"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { TiDeleteOutline } from "react-icons/ti";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function ServiceForm({
  initialData,
  onSubmit,
  loading,
  onCancel,
}: {
  initialData?: { title: string; description: string; imageUrl?: string[] };
  onSubmit: (data: FormData) => void;
  loading: boolean;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setImages(initialData.imageUrl || []);
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
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Title Input */}
      <motion.input
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />

      {/* Description */}
      <motion.textarea
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />

      {/* Upload Button */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
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
      </motion.div>

      {/* Uploaded Images Preview */}
      <AnimatePresence>
        {images.length > 0 && (
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="preview"
                className="w-full h-32 object-cover rounded"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buttons */}
      <motion.div
        className="flex justify-end gap-2"
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <Button
          type="button"
          onClick={onCancel}
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
        >
          {loading ? "Processing..." : initialData ? "Update" : "Add"}
        </Button>
      </motion.div>
    </motion.form>
  );
}
