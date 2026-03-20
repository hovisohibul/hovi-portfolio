import Navbar from '@/components/ui/navbar'
import React from 'react'

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className='relative w-full h-full'>
            <Navbar/>
            {children}
        </div>
    )
}
