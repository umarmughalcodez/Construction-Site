import prisma from "@/prisma/db.config";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const projects = await prisma.projects.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { title, description, images, clientName, dateCompleted, category } =
      await req.json();

    if (!title || !description || !images || !clientName || !category) {
      return NextResponse.json({
        status: 400,
      });
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

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
