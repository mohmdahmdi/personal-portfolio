import { NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client");

export async function POST(req: Request) {
  const prisma = new PrismaClient();
  const data: { skill: string } = await req.json();
  await prisma.soft_skill.create({ data: data });
  return NextResponse.json("soft skill inserted successfully!", {
    status: 200,
  });
}

export async function GET() {
  const prisma = new PrismaClient();
  const data: { skill: string } = await prisma.soft_skill.findMany({
    select: { skill: true },
  });
  return NextResponse.json({ data: data }, { status: 200 });
}
