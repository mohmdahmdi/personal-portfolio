import { cookies } from "next/headers";
const jwt = require("jsonwebtoken");

export const cookieName = "USER_SESSION"

export function saveSession(accessToken : string){
  cookies().set(cookieName, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production"
  })
}

export function checkSession(){
  const accessToken = cookies().get("USER_SESSION")?.value
  const secretKey = process.env.JWT_SECRET

  if(accessToken){
    return jwt.verify(accessToken, secretKey);
  }else{
    return false
  }
}