import { MARQUEE_TEXT } from '@/lib/content'
import { cn } from '@/lib/util'
import React from 'react'
import style from '@/style/marquee.module.css'

export default function Marquee() {

    const content = [...MARQUEE_TEXT, ...MARQUEE_TEXT]
    

    return (
        <div className="relative w-full overflow-hidden bg-[#021c16] py-3">

        {/* gradient blur kiri */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-[#021c16] to-transparent" />

        {/* gradient blur kanan */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-[#021c16] to-transparent" />

        <div 
            className={cn("flex w-max gap-14 whitespace-nowrap text-white text-lg font-medium",
                style['marquee']
            )}
        >

            {content.map((item, index) => (
            <div key={index} className="flex items-center gap-14">
                <span>{item}</span>
                <span className="text-green-400 text-xl">✦</span>
            </div>
            ))}

        </div>
        </div>
    )
}
