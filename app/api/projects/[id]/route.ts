import prisma from "@/prisma/db.config";
import { NextRequest, NextResponse } from "next/server";

// ✅ Update project
export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const { title, description, images, clientName, category, dateCompleted } =
      await req.json();

    if (!title || !description || !images || !clientName || !category) {
      return NextResponse.json(
        { error: "Please provide all the fields!" },
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

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}

// ✅ Delete project
export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    await prisma.projects.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}

// ✅ Get project by ID
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const project = await prisma.projects.findUnique({
      where: { id: Number(id) },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, project }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
