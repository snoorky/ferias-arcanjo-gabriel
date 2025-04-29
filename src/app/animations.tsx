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

      gsap.from(".button", {
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
    }, "#hero");

    return () => ctx.revert();
  }, []);

  return null;
}

export function BenefitsAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".title", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".title",
          start: "top bottom",
        },
      });

      gsap.from(".item0", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0,
        scrollTrigger: {
          trigger: ".item0",
          start: "top bottom",
        },
      });

      gsap.from(".item1", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".item1",
          start: "top bottom",
        },
      });

      gsap.from(".item2", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0.6,
        scrollTrigger: {
          trigger: ".item2",
          start: "top bottom",
        },
      });

      gsap.from(".item3", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0.9,
        scrollTrigger: {
          trigger: ".item3",
          start: "top bottom",
        },
      });
    }, "#benefits");

    return () => ctx.revert();
  }, []);

  return null;
}

export function ActivitiesAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".title", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".title",
          start: "top bottom",
        },
      });

      gsap.from(".item0", {
        opacity: 0,
        x: -100,
        duration: 1.5,
        delay: 0,
        scrollTrigger: {
          trigger: ".item0",
          start: "top bottom",
        },
      });

      gsap.from(".item1", {
        opacity: 0,
        x: -100,
        duration: 1.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".item0",
          start: "top bottom",
        },
      });

      gsap.from(".item2", {
        opacity: 0,
        x: -100,
        duration: 1.5,
        delay: 0.6,
        scrollTrigger: {
          trigger: ".item0",
          start: "top bottom",
        },
      });

      gsap.from(".item3", {
        opacity: 0,
        x: -100,
        duration: 1.5,
        delay: 0.9,
        scrollTrigger: {
          trigger: ".item0",
          start: "top bottom",
        },
      });

      gsap.from(".item4", {
        opacity: 0,
        x: -100,
        duration: 1.5,
        delay: 1.2,
        scrollTrigger: {
          trigger: ".item0",
          start: "top bottom",
        },
      });

      gsap.fromTo(
        ".activities",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          delay: 1.2,
          scrollTrigger: {
            trigger: ".activities",
            start: "top bottom",
          },
        }
      );

      gsap.from(".button", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".button",
          start: "top bottom",
        },
      });
    }, "#activities");

    return () => ctx.revert();
  }, []);

  return null;
}

export function AboutAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".title", {
        opacity: 0,
        x: 100,
        duration: 1.7,
        scrollTrigger: {
          trigger: ".title",
          start: "top bottom",
        },
      });

      gsap.from(".subtitle", {
        opacity: 0,
        x: 100,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".subtitle",
          start: "top bottom",
        },
      });

      gsap.from(".content", {
        opacity: 0,
        x: 100,
        duration: 1.9,
        scrollTrigger: {
          trigger: ".content",
          start: "top bottom",
        },
      });

      gsap.from(".video", {
        opacity: 0,
        x: -100,
        duration: 1.9,
        scrollTrigger: {
          trigger: ".video",
          start: "top bottom",
        },
      });

      gsap.from(".titleGallery", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".titleGallery",
          start: "top bottom",
        },
      });

      gsap.from(".item0", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0,
        scrollTrigger: {
          trigger: ".item0",
          start: "top bottom",
        },
      });

      gsap.from(".item1", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".item1",
          start: "top bottom",
        },
      });

      gsap.from(".item2", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0.6,
        scrollTrigger: {
          trigger: ".item2",
          start: "top bottom",
        },
      });

      gsap.from(".item3", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0.9,
        scrollTrigger: {
          trigger: ".item3",
          start: "top bottom",
        },
      });

      gsap.from(".item4", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 1.2,
        scrollTrigger: {
          trigger: ".item4",
          start: "top bottom",
        },
      });

      gsap.from(".item5", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0,
        scrollTrigger: {
          trigger: ".item5",
          start: "top bottom",
        },
      });

      gsap.from(".item6", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".item6",
          start: "top bottom",
        },
      });

      gsap.from(".item7", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0.6,
        scrollTrigger: {
          trigger: ".item7",
          start: "top bottom",
        },
      });

      gsap.from(".item8", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0.9,
        scrollTrigger: {
          trigger: ".item8",
          start: "top bottom",
        },
      });

      gsap.from(".item9", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0,
        scrollTrigger: {
          trigger: ".item9",
          start: "top bottom",
        },
      });

      gsap.from(".item10", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".item10",
          start: "top bottom",
        },
      });

      gsap.from(".item11", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0.6,
        scrollTrigger: {
          trigger: ".item11",
          start: "top bottom",
        },
      });

      gsap.from(".item12", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0.9,
        scrollTrigger: {
          trigger: ".item12",
          start: "top bottom",
        },
      });
    }, "#about");

    return () => ctx.revert();
  }, []);

  return null;
}

export function TestimonialAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".title", {
        opacity: 0,
        y: 100,
        duration: 1.7,
        scrollTrigger: {
          trigger: ".title",
          start: "top bottom",
        },
      });

      gsap.from(".item0", {
        opacity: 0,
        y: 100,
        duration: 1.7,
        scrollTrigger: {
          trigger: ".item0",
          start: "top bottom",
        },
      });

      gsap.from(".item1", {
        opacity: 0,
        y: 100,
        duration: 1.7,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".item1",
          start: "top bottom",
        },
      });

      gsap.from(".item2", {
        opacity: 0,
        y: 100,
        duration: 1.7,
        delay: 0.6,
        scrollTrigger: {
          trigger: ".item2",
          start: "top bottom",
        },
      });
    }, "#testimonial");

    return () => ctx.revert();
  }, []);

  return null;
}
