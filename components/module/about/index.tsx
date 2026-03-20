'use client'
import CImage from '@/components/ui/image'
import { PurpleWhite } from '@/lib/image'
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {

    const containerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const sctx = gsap.context(() => {
            if(!containerRef.current) return null

            gsap.from('.about-text', {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    toggleActions: 'restart none none reset'
                }
            })
        }, containerRef)

        return () => sctx.revert()
    },[])

    return (
        <section
            ref={containerRef}
            id='about'
            className='min-h-screen w-full flex flex-col items-center justify-center gap-10 py-6 px-5 relative overflow-hidden'
        >
            <CImage
                src={PurpleWhite}
                alt='purple-white'
                sizeImg={400}
                contentClass='absolute top-0 left-0 z-2 rotate-90'
            />
            <div className='relative z-4 flex flex-col gap-7'>
                <div className='flex justify-center text-center'>
                    <p 
                        className='md:text-[50px] text-[24px] font-semibold about-text'
                        style={{
                            textShadow: '4px 4px 0 #a1a1a1'
                        }}
                    >
                        <span>Simple Design, Responsive</span>
                        <span className='block'>and Modern Web Application</span>
                    </p>
                </div>
                <div className='flex flex-col gap-4 text-neutral-500 font-medium px-8 md:text-[18px] text-[14px]'>
                    <p className='about-text'>
                        As a Frontend Developer with over 2 years and 4 months of experience, I develop modern web applications that are easy for users to understand when they first visit, as well as eye-catching web designs. 
                    </p>
                    <p className='about-text'>
                        I have experience with the NEXT JS framework as a technology for developing web applications. I also have experience with data processing or integration from servers to web applications. When integrating data from servers to web applications, I usually use several libraries such as Axios and Tanstack Query.
                    </p>
                    <p className='about-text'>I also have experience with responsive design for web, mobile, tablet, and desktop. And I am accustomed to building applications from scratch so that it is easy to track bugs in the code or call custom-made components.</p>
                    <p className='about-text'>Overall, I am experienced in building web applications for both large and small projects.</p>
                </div>
            </div>
        </section>
    )
}
