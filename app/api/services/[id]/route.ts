import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db.config";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { title, description, images } = await req.json();
    const { id } = await params;
    if (!title || !description || !images) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const updated = await prisma.services.update({
      where: { id: Number(id) },
      data: { title, description, imageUrl: images },
    });
    return NextResponse.json(updated);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.services.delete({ where: { id: Number(id) } });
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await params;
    const service = await prisma.services.findUnique({
      where: { id: Number(id) },
    });
    if (!service) {
      return NextResponse.json(
        { status: 404, message: "Service not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(service);
  } catch (error) {
    console.error("Error fetching service:", error);
    return NextResponse.json(
      { status: 500, message: "Internal server error" },
      { status: 500 }
    );
  }
};
