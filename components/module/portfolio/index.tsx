"use client";
import CImage from "@/components/ui/image";
import { BlackWhite, BlackX, Blue } from "@/lib/image";
import React, { useLayoutEffect, useRef } from "react";
import Content from "./component/Content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!containerRef.current) return null;

      gsap.from(".texting", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "restart none none reset",
        },
      });
    }, containerRef);

    return () => context.revert();
  });

  return (
    <section
      ref={containerRef}
      id="portfolio"
      className="bg-[#021c16] flex flex-col py-12 px-10 relative overflow-hidden"
    >
      <div className="flex flex-col gap-4 max-w-[700px] z-10">
        <p className="text-neutral-50 font-bold md:text-[56px] text-[40px] leading-tight">
          Portfolio
        </p>

        <p className="text-neutral-300 text-[16px] leading-relaxed texting">
          Over the past few years, I have been building and experimenting with
          modern web interfaces as a frontend developer. Each project represents
          my approach to crafting clean, responsive, and user-friendly web
          experiences.
        </p>

        <p className="text-neutral-400 text-[15px] leading-relaxed texting">
          From interactive UI components to optimized layouts, I focus on
          creating websites that are not only visually appealing but also
          performant and scalable across different devices and screen sizes.
        </p>
      </div>
      {/* <p className='text-neutral-50 font-bold text-[56px]'>
                Portfolio
            </p>
            <p className='text-neutral-300 max-w-[520px]'>
                A collection of projects I have built as a frontend developer, 
                focusing on modern UI, smooth animations, and responsive design.
            </p> */}
      <CImage
        src={BlackWhite}
        alt="black"
        sizeImg={400}
        contentClass="absolute z-3 -top-[100px] -right-25 rotate-180"
      />
      <CImage
        src={Blue}
        alt="black"
        sizeImg={400}
        contentClass="absolute z-3 bottom-0 left-0"
      />
      <Content />
    </section>
  );
}
