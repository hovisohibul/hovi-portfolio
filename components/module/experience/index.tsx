"use client";
import React, { useLayoutEffect, useRef } from "react";
import Card from "./component/Card";
import CImage from "@/components/ui/image";
import { Red } from "@/lib/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const contextGsap = gsap.context(() => {
      if (!containerRef.current) return null;

      gsap.from(".card", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "restart none none reset",
        },
      });
    }, containerRef);

    return () => contextGsap.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="min-h-screen relative flex items-center overflow-hidden"
    >
      <CImage
        src={Red}
        alt="red"
        sizeImg={400}
        contentClass="absolute z-2 bottom-0 left-0"
      />
      <div className="relative z-3 flex flex-col items-center gap-7 justify-center w-full">
        <p
          className="md:text-[50px] text-[24px] font-semibold"
          style={{
            textShadow: "4px 4px 0 #a1a1a1",
          }}
        >
          Experience
        </p>
        <div className="flex gap-4 flex-wrap card">
          <Card
            job="Frontend Developer"
            company="Arnasa Technology"
            start="06/2019"
            end="09/2019"
            task={[
              "Build UI to translate weather data from BMKG",
              "Create additional feature displays such as data import and graphs",
              "Build Multi Page User Interface to One Page",
            ]}
          />
          <Card
            job="Frontend Developer"
            company="OXINOS"
            start="11/2023"
            end="02/2026"
            task={[
              "Build UI panel/cms applications Fatwa TV, Dispusipda, Tovio, Project",
              "Develop modern web landing page Tovio, Orderia, MarvelousTours",
              "Build a dashboard view in the PROFILIX application",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
