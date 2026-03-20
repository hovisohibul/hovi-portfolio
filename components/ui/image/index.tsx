'use client'

import { cn } from '@/lib/util'
import Image, { ImageProps, StaticImageData } from 'next/image'
import React from 'react'

interface IImage extends Omit<ImageProps, 'src' | 'alt'> {
    src: string | StaticImageData
    alt: string
    contentClass?: string
    imageClass?: string
    isFill?: boolean
    sizeImg?: number
    isLoading?: boolean
}

export default function CImage({
    src, alt, contentClass, isFill = false, sizeImg,
    imageClass, isLoading, ...props
}: IImage) {

    const isSize = isFill ? { fill: true } : { width: sizeImg, height: sizeImg }

    return (
        <div
            className={cn(
                'overflow-hidden', 
                contentClass,
                isFill && 'relative',
                isLoading ? 'animate-pulse bg-[#cbd5e0]' : 'bg-transparent'
            )}
        >
            <Image
                src={src}
                alt={alt}
                className={cn(
                    imageClass,
                    'size-full object-cover',
                    isLoading ? 'blur-xl' : 'blur-0',
                )}
                {...isSize}
                {...props}
            />
        </div>
    )
}
