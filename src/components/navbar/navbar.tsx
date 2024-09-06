"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/pngs/Group 1.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const path = usePathname();

  return (
    <motion.nav
      className="flex justify-between border-b sticky top-0 backdrop-blur-sm z-50 mx-2"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{type:"tween", ease:"easeInOut"}}
    >
      <Link className="p-7" href="/">
        <Image alt="logo" src={logo} width={25} height={25} />
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
    </motion.nav>
  );
};

export default Navbar;
