import { NextResponse } from "next/server";
import prisma from "@/prisma/db.config";

export async function GET() {
  try {
    const services = await prisma.services.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { title, description, images } = await req.json();
    if (!title || !description || !images) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    await prisma.services.create({
      data: { title, description, imageUrl: images },
    });
    return NextResponse.json(
      { message: "Created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating service:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
