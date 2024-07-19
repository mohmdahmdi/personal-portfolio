"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="flex justify-between p-7 border-b mx-2 sticky top-0 backdrop-blur-sm z-50">
      <Link href="/">MA</Link>
      <div className="flex h-full">
        <Link
          href="/experience"
          className={`px-5 cursor-pointer transition-all ease-in-out duration-1000 ${
            path == "/experience" ? "active" : ""
          }`}
        >
          Experience
        </Link>
        <Link
          href="/projects"
          className={`px-5 cursor-pointer transition-all ease-in-out duration-1000 ${
            path == "/projects" ? "active" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`px-5 cursor-pointer transition-all ease-in-out duration-1000 ${
            path == "/about" ? "active" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`px-5 cursor-pointer transition-all ease-in-out duration-1000 ${
            path == "/contact" ? "active" : ""
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
