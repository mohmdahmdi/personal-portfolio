const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

export async function POST(request: Request) {
  const prisma = new PrismaClient();

  const informations = await request.json();
  const encryptedPasword = await bcrypt.hash(informations.password, 10)
  const newInfo = {...informations, password : encryptedPasword}
  const createAdmin = await prisma.Admin.create({ data: newInfo });
  
  return new Response("Admin created succesfuly!", {status:201})
}