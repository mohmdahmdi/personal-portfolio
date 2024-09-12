import { api } from "@/api/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const jwt = require("jsonwebtoken");

export const cookieName = "USER_SESSION"

export function saveSession(accessToken : string){
  cookies().set(cookieName, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production"
  })
}

export async function checkSession(){
  const accessToken = cookies().get("USER_SESSION")?.value
  const secretKey = process.env.JWT_SECRET

  if(accessToken){
    try{
      const valid = jwt.verify(accessToken, secretKey);
      if(valid){
        return true
      }
    } catch{
        const res = await api.post("./login/removeSession");
    }
  }else{
    return false
  }
}