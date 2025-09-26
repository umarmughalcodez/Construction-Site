"use client";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

const AdminNavbar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    toast.success("Logged out successfully");
    router.push("/login");
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-semibold text-[#00215B]">
        Welcome, Admin 👋
      </h1>
      <div className="mx-5 space-x-6">
        <Button
          effect={"hoverUnderline"}
          variant={"link"}
          className="p-0 text-[#00215B]"
          onClick={() => redirect("/admin/services")}
        >
          Manage Services
        </Button>
        <Button
          effect={"hoverUnderline"}
          variant={"link"}
          className="p-0 text-[#00215B]"
          onClick={() => redirect("/admin/projects")}
        >
          Manage Projects
        </Button>

        <Button
          variant="destructive"
          onClick={handleLogout}
          className="text-white"
        >
          Logout
        </Button>
      </div>
    </header>
  );
};

export default AdminNavbar;
