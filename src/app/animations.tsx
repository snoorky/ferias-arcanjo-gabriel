"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".logo", {
        opacity: 0,
        y: 50,
        duration: 1.5,
      });

      gsap.from(".title", {
        opacity: 0,
        y: 100,
        duration: 1.5,
      });

      gsap.from(".text", {
        opacity: 0,
        y: 100,
        duration: 1.5,
      });

      gsap.from(".warning", {
        opacity: 0,
        y: 100,
        duration: 1.5,
      });

      gsap.from("button", {
        opacity: 0,
        y: 100,
        duration: 1.5,
      });

      gsap.from(".limited", {
        opacity: 0,
        y: 100,
        duration: 1.5,
      });

      gsap.to(".limited", {
        y: -12,
        duration: 1.5,
        delay: 1.5,
        ease: "sine.out",
        yoyo: true,
        repeat: -1,
      });
    }, "#hero-section");

    return () => ctx.revert();
  }, []);

  return null;
}
