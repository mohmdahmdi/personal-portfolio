import generateToken from "@/utils/(auth)/jwtGen";
import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const creditionals = await request.json();

  const getCreds = await prisma.Admin.findUnique({
    where: {
      username: creditionals.username,
    },
  });

  let valid;

  if (getCreds) {
    valid = await bcrypt.compare(creditionals.password, getCreds.password);
  }
  if (valid) {
    const opt1 = { status: 200, header: "application/json" };
    
    const token = generateToken({
      username: getCreds.username,
      id: getCreds.id,
    });

    return NextResponse.json(
      { name: getCreds.username, accessToken: token },
      opt1
    );
  } else {
    const opt2 = { status: 401, header: "application/json" };
    return NextResponse.json({ error: "invalid username or password" }, opt2);
  }
}
