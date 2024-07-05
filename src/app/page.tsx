"use client";

import Spline from "@splinetool/react-spline/next";
import { TypeAnimation } from "react-type-animation";
import '../assets/styles/font.css'
import Navbar from './navbar';

export default function Home() {
  return (
    <div className="">
      <Spline
        scene="https://prod.spline.design/GYoWaR-5AP6XM-zO/scene.splinecode"
        className="absolute left-[30%] transition-all ease-in-out duration-500"
      />
      <Navbar/>
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
        className="eastsea"
        speed={30}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
      <div className="anton">sdfd</div>
      <div className="fjalla">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illo!
      </div>
    </div>
  );
}
