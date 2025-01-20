import { NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client");

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const data: { language: string; level: string } = await request.json();
  await prisma.language.create({ data: data });
  return NextResponse.json("language inserted successfully!", { status: 200 });
}

export async function GET() {
  const prisma = new PrismaClient();
  const data: { language: string; level: string } =
    await prisma.language.findMany({ select: { language: true, level: true } });
  return NextResponse.json({ data: data }, { status: 200 });
}
