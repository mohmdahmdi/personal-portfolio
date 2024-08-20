"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="flex justify-between border-b sticky top-0 backdrop-blur-sm z-50">
      <Link
        className="p-7"
        href="/"
      >
        MA
      </Link>
      <div className="flex">
        <Link
          href="/experience"
          className={`nav-item ${path == "/experience" ? "active" : ""}`}
        >
          Experience
        </Link>
        <Link
          href="/projects"
          className={`nav-item ${path == "/projects" ? "active" : ""}`}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`nav-item ${path == "/about" ? "active" : ""}`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`nav-item ${path == "/contact" ? "active" : ""}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
