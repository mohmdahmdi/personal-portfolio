import resetAutoIncrement from "@/utils/helpers/resetAutoInc";
import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

export async function POST(request: Request) {
  const prisma = new PrismaClient();

  const informations = await request.json();
  const encryptedPasword = await bcrypt.hash(informations.password, 10);
  const newInfo = { ...informations, password: encryptedPasword };
  const createAdmin = await prisma.Admin.create({ data: newInfo });

  return new Response("Admin created succesfuly!", { status: 201 });
}

export async function GET() {
  const prisma = new PrismaClient();
  const admins = await prisma.Admin.findMany({
    select: {
      id: true,
      username: true,
      accessType: true,
    },
  });
  const opt = { status: 200, header: "application/json" };
  return NextResponse.json({ data: admins }, opt);
}

export async function DELETE(req: Request) {
  const prisma = new PrismaClient();
  const admin: { id: number } = await req.json();
  const deleteAdmin = await prisma.Admin.delete({
    where: { id : admin.id},
  });
  resetAutoIncrement()
  return NextResponse.json(`admin with ${admin.id} deleted!`, {});
}

export async function PUT(req: Request) {
  const prisma = new PrismaClient();
  const admin: { id: number, username?: string, accessType ?: string } = await req.json();
  const update = await prisma.Admin.update({
    where: { id: admin.id },
    data : {
      username : admin.username,
      accessType : admin.accessType
    }
  });
  return NextResponse.json(`admin with ${admin.id} updated!`, {});
}