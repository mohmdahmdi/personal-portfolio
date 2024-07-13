"use client";

import Spline from "@splinetool/react-spline/next";
import { TypeAnimation } from "react-type-animation";
import "../assets/styles/font.css";
import Navbar from "./navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Spline
        scene="https://prod.spline.design/GYoWaR-5AP6XM-zO/scene.splinecode"
        className="absolute left-[30%] transition-all ease-in-out duration-500"
      />
      <Navbar />
      <div className="mt-32 ml-[17%]">
        <div className="fjalla">
          <div className="text-[3rem]">Hello</div>
          <div className="text-[5rem] font-bold">{`I'm M.Ahmadi`}</div>
        </div>
        <TypeAnimation
          sequence={[
            "I'm a programmer.",
            2000,
            "I'm a front-end developer.",
            2000,
            "I'm a React developer.",
            2000,
            "Absolutly i'm a linux fan.",
            2000,
          ]}
          wrapper="span"
          className="eastsea block"
          speed={30}
          style={{ fontSize: "3rem" }}
          repeat={Infinity}
        />
        <Link
          className="border rounded-md px-4 py-3 mt-7 inline-block fjalla hover:bg-slate-300
           hover:text-black transition-all ease-in-out duration-500 "
          href="/"
        >
          About me
        </Link>
      </div>
    </div>
  );
}
