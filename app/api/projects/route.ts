import prisma from "@/prisma/db.config";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const projects = await prisma.projects.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { status: 500, error: "Internal server error" },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { title, description, images, clientName, dateCompleted, category } =
      await req.json();
    if (!title || !description || !images || !clientName || !category) {
      return NextResponse.json(
        { status: 400, error: "Please provide all required fields" },
        { status: 400 }
      );
    }
    await prisma.projects.create({
      data: {
        title,
        description,
        imageUrl: images,
        clientName,
        dateCompleted,
        category,
      },
    });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { status: 500, error: "Internal server error" },
      { status: 500 }
    );
  }
};
