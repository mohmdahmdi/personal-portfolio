
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function resetAutoIncrement() {
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Admin';`;
}
