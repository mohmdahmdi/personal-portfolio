"use client";
import { useEffect, useState } from "react";
import AboutMeSideBar from "../../../components/aboutMeSidebar/aboutMeSidebar";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import useWindowSize from "@/hooks/useWindowSize";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [side, setSide] = useState<boolean>(false);
  const size = useWindowSize();
  useEffect(() => {
    if (size?.width && size?.width > 738) {
      setSide(true);
    }
  }, [size]);

  return (
    <div className="row-span-8 grid grid-cols-12">
      <AboutMeSideBar side={side} setSide={setSide} />
      <div
        className={`fixed top-[50vh] left-0 cursor-pointer md:invisible`}
        onClick={() => {
          setSide(!side);
        }}
      >
        {side ? <NavigateBefore /> : <NavigateNext />}
      </div>
      <div
        className={`${
          "col-span-12"
        } md:col-span-10 h-89vh`}
      >
        {children}
      </div>
    </div>
  );
}
