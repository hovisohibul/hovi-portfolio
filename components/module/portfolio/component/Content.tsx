"use client"

import React, { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { IMAGE_SLIDER } from "@/lib/content"
import CImage from "@/components/ui/image"

gsap.registerPlugin(ScrollTrigger)

export default function Content() {

  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // const slides = [...IMAGE_SLIDER]

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const slider = sliderRef.current
      const container = containerRef.current

      if (!slider || !container) return

      const totalWidth = slider.scrollWidth - window.innerWidth

      // penting: set height container
      gsap.set(container, {
        height: totalWidth + window.innerHeight
      })

      const horizontal = gsap.to(slider, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })

      // fade in image
      const images = gsap.utils.toArray('.slide')

      images.forEach((img: any) => {
        gsap.set(img, {
          opacity: 0,
          x: 200,
          y: 80,
          scale: 0.9
        })

        gsap.to(img, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            containerAnimation: horizontal,
            start: 'left 90%',
            end: 'left 55%',
            scrub: 1
            // toggleActions: 'play none none reverse'
          }
        })
      })

    }, containerRef)

    return () => ctx.revert()

  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full z-5 overflow-hidden"
    >

      <div
        ref={sliderRef}
        className="flex gap-10 items-center w-max pl-[65vw] mt-[100px]"
      >

        {IMAGE_SLIDER.map((item, index) => (
            <CImage
                key={index}
                src={item.src}
                alt={item.title}
                width={400}
                contentClass="md:w-[370px] w-[280px] h-[250px] object-cover slide flex-shrink-0"
            />
        ))}

      </div>

    </div>
  )
}