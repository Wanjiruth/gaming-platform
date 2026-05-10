import React from "react";
import style from "./About.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./../AnimatedTitle/AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);
export default function About() {
  useGSAP(() => {
    const clipAnimtaion = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=900 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    gsap.set(".img", {
      width: "25vw",
      height: "63vh",
      borderRadius: "20px",
    });
    clipAnimtaion.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          welcome to zentry
        </h2>
        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br/> l<b>a</b>rgest shared a<b>d</b>venture,"
          containerClass="mt-5 !text-black text-center special-font"
        />

        <div className="about-subtext">
          <p>The Game of Games begins-your life, now and epic MMORPG</p>
          <p>Zentry Unites every player from countless games and platforms</p>
        </div>
      </div>
      <div className="h-dvh w-screen flex justify-center items-center overflow-hidden" id="clip">
        <div className="img mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
