import { IInformationApi } from "@/interfaces/interfaces";
import { NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client");

export async function POST(request : Request) {
  const prisma = new PrismaClient();
  const data : IInformationApi = await request.json();
  await prisma.info.create({data : data});
  const opt = { status: 200, header: "application/json" };
  return NextResponse.json("info created succesfuly!", opt);
}

export async function GET() {
  const prisma = new PrismaClient();
  const data : IInformationApi = await prisma.info.findMany({select : {about_me:true}, where : {id : 1}}) 
  return NextResponse.json({data : data}, {status: 200});
}