"use client";
import AdminNavbar from "@/components/AdminNavbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React from "react";
import { Toaster } from "react-hot-toast";

const Admin = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Toaster />

      {/* Top Header */}
      <AdminNavbar />

      {/* Main Dashboard */}
      <main className="flex-1 px-8 py-10">
        <h2 className="text-xl font-medium mb-6 text-gray-800">
          Dashboard Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Services */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg text-gray-700">
                Manage Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                Add, edit, or remove your services.
              </p>
              <Button
                onClick={() => router.push("/admin/services")}
                className="w-full"
              >
                Go to Services
              </Button>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg text-gray-700">
                Manage Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                Keep your portfolio updated with latest projects.
              </p>
              <Button
                onClick={() => router.push("/admin/projects")}
                className="w-full"
              >
                Go to Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Admin;
