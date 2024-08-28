import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  cookies().delete("USER_SESSION");
  return NextResponse.json("Cookie removed successfully", { status: 200 });
}
