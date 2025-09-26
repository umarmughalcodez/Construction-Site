"use client";
import Image from "next/image";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { Button } from "./ui/button";

export default function ServiceCard({
  service,
  onEdit,
  onDelete,
}: {
  service: {
    id: number;
    title: string;
    description: string;
    imageUrl: string[];
  };
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <li className="flex justify-between items-center border p-3 rounded shadow-lg">
      <div className="flex flex-col items-center justify-center w-full space-y-3">
        <div className="w-64 h-40 relative">
          {service.imageUrl.length > 0 && (
            <Image
              src={service.imageUrl[0]}
              alt={service.title}
              fill
              className="object-cover rounded"
            />
          )}
          {/* {service.imageUrl && (
            
          )} */}
        </div>
        <h2 className="font-semibold">
          {service.title.length > 30
            ? service.title.slice(1, 30) + "..."
            : service.title}
        </h2>
        <p className="text-gray-600">
          {service.description.length > 30
            ? service.description.slice(1, 30) + "..."
            : service.description}
        </p>
        <div className="space-x-2">
          <Button
            onClick={onEdit}
            className="text-white"
            // className="px-3 py-1 bg-yellow-500 text-white rounded"
            variant="default"
            effect="expandIcon"
            icon={MdEdit}
            iconPlacement="right"
          >
            Edit
          </Button>
          <Button
            className="text-white"
            onClick={onDelete}
            variant="destructive"
            effect="expandIcon"
            icon={MdDeleteOutline}
            iconPlacement="right"
          >
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
}
