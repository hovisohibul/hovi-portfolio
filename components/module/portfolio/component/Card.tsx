import { StaticImageData } from 'next/image'
import React from 'react'

interface ICard {
    src: string | StaticImageData
}

export default function Card() {
    return (
        <div>Card</div>
    )
}
