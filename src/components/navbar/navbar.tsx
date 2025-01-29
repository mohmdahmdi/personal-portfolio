"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/pngs/Group 1.png";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";
import { Close, Menu } from "@mui/icons-material";

const Navbar = () => {
  const path = usePathname();
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <motion.nav
      className="flex justify-between border-b sticky top-0 backdrop-blur-sm z-50 mx-2"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "tween", ease: "easeInOut" }}
    >
      <Link className="p-7" href="/">
        <Image alt="logo" src={logo} width={25} height={25} />
      </Link>
      <div className="hidden sm:flex">
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
      <div className="relative mr-3 mb-2 text-xl">
        <div className="mt-5">
          <motion.button
            onClick={() => {
              setShowNav(!showNav);
            }}
            whileTap={{ rotate: 360 }}
            transition={{ type: "tween", ease: "easeInOut" }}
          >
            {showNav ? <Close /> : <Menu />}
          </motion.button>
        </div>
        <AnimatePresence>
          {showNav && (
            <motion.div
              className={`absolute flex flex-col right-7 bg-black border rounded px-4 ${
                showNav ? "" : "hidden"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height:'0' }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Link
                href="/experience"
                className={`nav-item-col ${
                  path == "/experience" ? "active-col" : ""
                }`}
              >
                Experience
              </Link>
              <Link
                href="/projects"
                className={`nav-item-col ${
                  path == "/projects" ? "active-col" : ""
                }`}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className={`nav-item-col ${
                  path == "/about" ? "active-col" : ""
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`nav-item-col ${
                  path == "/contact" ? "active-col" : ""
                }`}
              >
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
