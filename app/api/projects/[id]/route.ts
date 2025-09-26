import prisma from "@/prisma/db.config";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { title, description, images, clientName, category, dateCompleted } =
      await req.json();

    if (!title || !description || !images || !clientName || !category) {
      return NextResponse.json(
        { status: 400, error: "Please provide all the fields!" },
        { status: 400 }
      );
    }

    await prisma.projects.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        imageUrl: images,
        category,
        clientName,
        dateCompleted,
      },
    });

    return NextResponse.json({ status: 200, success: true });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { status: 500, error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    await prisma.projects.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ status: 200, success: true });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { status: 500, error: "Failed to delete project" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const project = await prisma.projects.findUnique({
      where: { id: Number(id) },
    });

    if (!project) {
      return NextResponse.json(
        { status: 404, error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, project });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { status: 500, error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}
