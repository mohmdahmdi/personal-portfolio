"use client";
import { useState } from "react";
import AboutMeSideBar from "../../../components/aboutMeSidebar/aboutMeSidebar";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [side, setSide] = useState<boolean>(false)
  return (
    <div className="row-span-8 grid grid-cols-12">
      <AboutMeSideBar side={side} setSide={setSide} />
      <div
        className={`absolute left-[${side ? '25' : '25'}%] cursor-pointer z-20`}
        onClick={() => {
          setSide(!side)
        }}
      >
        {side ? <NavigateBefore /> : <NavigateNext />}
      </div>
      {children}
    </div>
  );
}
