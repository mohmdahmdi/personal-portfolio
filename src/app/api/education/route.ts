const { PrismaClient } = require("@prisma/client");
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data: {
    title: string;
    ed_from: string;
    ed_to: string;
    caption: string;
  } = await request.json();

  const prisma = new PrismaClient();
  await prisma.education.create({ data: data });
  return NextResponse.json("data inserted successfully!", { status: 200 });
}

export async function GET(request: Request) {
  const prisma = new PrismaClient();
  const data = await prisma.education.findMany({
    select: { title: true, ed_from: true, ed_to: true, caption: true },
  });
  return NextResponse.json({ data: data }, { status: 200 });
}
