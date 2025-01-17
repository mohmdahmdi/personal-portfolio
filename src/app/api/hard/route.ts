const { PrismaClient } = require("@prisma/client");
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const data: { skill: string; caption: string } = await request.json();
  await prisma.hard_skill.create({data : data});
  return NextResponse.json("hard skill created successfully!", {status : 200});
}

export async function GET() {
  const prisma = new PrismaClient();
  const data = await prisma.hard_skill.findMany({select:{ skill: true, caption: true}});
  return NextResponse.json(data, {status : 200});
}