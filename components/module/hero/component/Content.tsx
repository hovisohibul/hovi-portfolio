import CImage from '@/components/ui/image'
import { Profile } from '@/lib/image'
import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Content() {
    return (
        <div className='flex md:flex-row flex-col-reverse items-center justify-around relative md:gap-0 gap-5 z-8 w-full'>
            <div className='flex flex-col gap-4'>
                <p className='text-[12px] font-medium'>Holla everyone, I'am Hovi Sohibul Wafa</p>
                <p className='text-[56px] font-semibold leading-[53px]'>
                    <span className='block'>Frontend Developer</span>
                    <span className='block'>Based in Bandung</span>
                </p>
                <p className='text-[14px] font-semibold text-neutral-400'>
                    <span className='block'>Programming for over 2 years and 4 months as a Frontend Developer,</span>
                    <span className='block'>with experience in building modern web applications using React,</span>
                    <span className='block'>Next.js, and Tailwind CSS.</span>
                </p>
                <button
                    className='cursor-pointer size-fit flex items-center gap-2'
                >
                    <p className='font-medium text-[14px]'>Download CV</p>
                    <IoMdDownload size={14}/>
                </button>
                <div className='flex items-center gap-6'>
                    <p className='text-[14px] font-medium'>Find me on:</p>
                    <div className='flex items-center gap-3'>
                        <FaInstagram size={16}/>
                        <FaGithub size={16}/>
                        <FaLinkedinIn size={16}/>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <CImage
                    src={Profile}
                    alt='profile'
                    sizeImg={400}
                    contentClass='md:w-[280px] w-[180px] md:h-[380px] h-[250px] rounded-lg z-5 relative'
                />
                <div className='bg-black md:w-[280px] w-[180px] md:h-[380px] h-[250px] rounded-lg z-3 absolute -bottom-2 -right-2'/>
            </div>
        </div>
    )
}
