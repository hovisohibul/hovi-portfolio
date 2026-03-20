'use client'
import { BAR_ITEMS } from '@/lib/content'
import React, { useEffect, useState } from 'react'
import { Dancing_Script } from "next/font/google";
import gsap from 'gsap';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { cn } from '@/lib/util';

const dancing = Dancing_Script({
    variable: '--font-dancing-script'
})

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export default function Navbar() {

    const [isSticky, setIsSticky] = useState<boolean>(false)
    const [isCheck, setIsCheck] = useState<string>('home')

    useEffect(() => {
        const handleStick = () => {
            if(window.scrollY > 0){
                setIsSticky(true)
            }else{
                setIsSticky(false)
            }
        }

        document.addEventListener('scroll', handleStick)

        BAR_ITEMS.forEach((item) => {
            const section = document.getElementById(item.link)

            if(!section) return

            ScrollTrigger.create({
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => setIsCheck(item.link),
                onEnterBack: () => setIsCheck(item.link)
            })
        })

        return () => {
            document.removeEventListener('scroll', handleStick)
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    },[])

    const handleClick = (link: string) => {
        setIsCheck(link)
        gsap.to(window, {
            duration: 1.7,
            scrollTo: `#${link}`,
            ease: 'power2.out'
        })
    }

    return (
        <div className={cn(
            'py-3 px-5 flex items-center justify-between z-50 w-full transition-all',
            isSticky ? 'fixed top-0 left-0 bg-white shadow-md duration-300' : 'absolute top-0 left-0'
        )}>
            <p className={`${dancing.className} text-[20px] font-semibold`}>H.S.W</p>
            <div className='flex items-center gap-6'>
                {BAR_ITEMS.map((item, idx) => (
                    <button
                        key={idx}
                        type='button'
                        className={cn('cursor-pointer font-medium text-[14px]', 
                            item.link === isCheck && 'flex items-center gap-2'
                        )}
                        onClick={() => handleClick(item.link)}
                    >
                        {item.link === isCheck && (
                            <div className='rounded-full w-2 h-2 bg-green-500 transition-shadow duration-500'/>
                        )}
                        <p>{item.title}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}
