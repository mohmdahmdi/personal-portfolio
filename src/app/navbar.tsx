"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="flex justify-between p-7 border-b mx-4 sticky">
      <Link href="/">MA</Link>
      <div className="flex">
        <Link
          href="/experience"
          className={`px-5 cursor-pointer ${
            path == "/experience" ? "active" : ""
          }`}
        >
          Experience
        </Link>
        <Link
          href="/projects"
          className={`px-5 cursor-pointer ${
            path == "/projects" ? "active" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`px-5 cursor-pointer ${
            path == "/about" ? "active" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`px-5 cursor-pointer ${
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
