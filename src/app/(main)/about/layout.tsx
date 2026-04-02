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
    if (size?.width && size?.width > 1024) {
      setSide(true);
    }
  }, [size]);

  return (
    <div className="h-full flex">
      <AboutMeSideBar side={side} setSide={setSide} />
      <div className={`h-full overflow-scroll w-full`}>
        
        {children}
      </div>
    </div>
  );
}
