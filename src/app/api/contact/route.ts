const { PrismaClient } = require("@prisma/client");
import { IContactData } from "@/interfaces/interfaces";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data: IContactData = await req.json();
  const prisma = new PrismaClient();
  await prisma.contact.create({ data: data });
  return NextResponse.json("contact data inserted successfully!", {
    status: 200,
  });
}

export async function GET() {
  const prisma = new PrismaClient();
  const data = await prisma.contact.findMany({ where: { id: 1 } });
  return NextResponse.json({ data }, { status: 200 });
}
