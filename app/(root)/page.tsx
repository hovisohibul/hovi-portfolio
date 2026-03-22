import About from "@/components/module/about";
import Experience from "@/components/module/experience";
import HeroIndex from "@/components/module/hero";
import Portfolio from "@/components/module/portfolio";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My PortFolio",
};

export default function page() {
  return (
    <>
      <HeroIndex />
      <About />
      <Portfolio />
      <Experience />
    </>
  );
}
