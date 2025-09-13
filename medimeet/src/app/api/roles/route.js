import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { role } = await req.json();
    if (!role) return NextResponse.json({ error: "Role required" }, { status: 400 });

    const saved = await prisma.userRole.create({
      data: { role },
    });

    return NextResponse.json(saved);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
