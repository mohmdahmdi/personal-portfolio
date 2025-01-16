"use client"

import { Spline } from "../../lib/spline";
import { TypeAnimation } from "../../lib/typeAnimation";
import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";
import pattern from "../../assets/pngs/Pattern.png";
import {motion} from "framer-motion"

const eastSea = localFont({
  src: "../../assets/fonts/East_Sea_Dokdo/EastSeaDokdo-Regular.ttf",
});

const ubuntuBold = localFont({
  src: "../../assets/fonts/Ubuntu/Ubuntu-Bold.ttf",
});

export default function Home() {
  return (
    <div className="w-[100vw] h-auto">
      <motion.div className="absolute left-[30%] bottom-[0%] w-[100vw] h-[100vh]" initial={{x:700}} animate={{x:0}} transition={{delay:2, duration:2}}>
      <Spline
        scene="https://prod.spline.design/GYoWaR-5AP6XM-zO/scene.splinecode"
      />
      </motion.div>

      <Image
        src={pattern}
        alt="pattern"
        width={0}
        height={0}
        className="absolute bottom-0 left-0 -z-20"
      />
      <div className="absolute top-1/2 -translate-y-1/2 left-[15vw]">
        <div>
          <div className="text-[3rem] translate-y-4">Hello</div>
          <div
            className={`text-[5rem] ${ubuntuBold.className}`}
          >{`I'm M.Ahmadi`}</div>
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
          className={`block ${eastSea.className}`}
          speed={30}
          style={{ fontSize: "3rem" }}
          repeat={Infinity}
        />
        <Link
          className="border rounded-md px-4 py-3 mt-7 inline-block fjalla hover:bg-slate-300
           hover:text-black transition-all ease-in-out duration-500 -translate-y-2 "
          href="/about"
        >
          About me
        </Link>
      </div>
    </div>
  );
}
