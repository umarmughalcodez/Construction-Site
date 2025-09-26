import prisma from "@/prisma/db.config";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await params;
    const { title, description, images, clientName, category, dateCompleted } =
      await req.json();
    if (!title || !description || !images || !clientName || !category) {
      return NextResponse.json({
        status: 400,
        error: "Please provide all the fields!",
      });
    }
    await prisma.projects.update({
      where: {
        id: Number(id),
      },
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
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export async function DELETE({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.projects.delete({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json({ status: 200 });
}

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const project = await prisma.projects.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json({ success: true, project });
};
