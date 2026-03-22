"use client";

import CImage from "@/components/ui/image";
import { Purple, PurpleWhite } from "@/lib/image";
import React from "react";
import Content from "./component/Content";
import Marquee from "@/components/ui/marquee";

export default function HeroIndex() {
  return (
    <section
      id="home"
      className="min-h-screen w-full relative flex items-center md:justify-start justify-center overflow-hidden"
    >
      <Content />
      <CImage
        src={Purple}
        alt="purple"
        sizeImg={400}
        loading="eager"
        contentClass="absolute bottom-0 right-0 min-w-[130px] -rotate-90"
      />
      <div className="absolute bottom-0">
        <Marquee />
      </div>
    </section>
  );
}
