import { Spline } from "../lib/spline";
import { TypeAnimation } from "../lib/typeAnimation";
import Link from "next/link";
import localFont from "next/font/local";

const eastSea = localFont({
  src: "../assets/fonts/East_Sea_Dokdo/EastSeaDokdo-Regular.ttf",
});

export default function Home() {
  return (
    <div>
      <Spline
        scene="https://prod.spline.design/GYoWaR-5AP6XM-zO/scene.splinecode"
        className="absolute left-[30%] bottom-[0%]"
      />
      <div className="mt-32 h-[200vh] ml-[17%]">
        <div>
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
          className={`block ${eastSea.className}`}
          speed={30}
          style={{ fontSize: "3rem" }}
          repeat={Infinity}
        />
        <Link
          className="border rounded-md px-4 py-3 mt-7 inline-block fjalla hover:bg-slate-300
           hover:text-black transition-all ease-in-out duration-500 "
          href="/about"
        >
          About me
        </Link>
      </div>
    </div>
  );
}
