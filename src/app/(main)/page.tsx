"use client";

import { Spline } from "../../lib/spline";
import { TypeAnimation } from "../../lib/typeAnimation";
import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";
import pattern from "../../assets/pngs/Pattern.png";
import { motion } from "framer-motion";

const eastSea = localFont({
  src: "../../assets/fonts/East_Sea_Dokdo/EastSeaDokdo-Regular.ttf",
});

const ubuntuBold = localFont({
  src: "../../assets/fonts/Ubuntu/Ubuntu-Bold.ttf",
});

export default function Home() {
  return (
    <div className="w-[100vw] row-span-8">
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] sm:translate-x-0 sm:translate-y-0 sm:top-0 sm:left-0 sm:static sm:ml-[15vw] sm:mt-[15vh]">
        <div>
          <div className="sm:text-[3rem] translate-y-4 text-center text-[2.5rem] sm:text-left">
            Hello
          </div>
          <div
            className={`text-[3rem] text-center sm:text-left sm:text-[5rem] ${ubuntuBold.className}`}
          >{`I'm M.Ahmadi`}</div>
        </div>
        <div className="text-center text-xs sm:text-xl sm:text-left ">
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
            wrapper="div"
            className={`${eastSea.className}`}
            speed={30}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
        <div className="flex justify-between sm:justify-normal">
          <Link
            className="border rounded-md px-4 py-3 mt-7 block fjalla hover:bg-slate-300
           hover:text-black transition-all ease-in-out duration-500 -translate-y-2 sm:mr-3"
            href="/about"
          >
            About me
          </Link>
          <Link
            className="border rounded-md px-4 py-3 mt-7 block fjalla hover:bg-inherit hover:text-slate-300 bg-slate-300
           text-black transition-all ease-in-out duration-500 -translate-y-2 "
            href="/contatc"
          >
            Contact
          </Link>
        </div>
      </div>
      <motion.div
        className="absolute sm:left-[30%] left-0  bottom-[0%] w-[100vw] h-[100vh] sm:scale-75 overflow-clip"
        initial={{ x: 700 }}
        animate={{ x: 0 }}
        transition={{ delay: 2, duration: 2 }}
      >
        <Spline
          className="absolut"
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
    </div>
  );
}
