import { cn } from '@/lib/util'
import React from 'react'

interface ICard {
    job: string
    company: string
    start: string
    end: string
    task: string[]
}

export default function Card({
    job, company, start, end,
    task
}: ICard) {
    return (
        <div 
            className={cn('relative border-2 border-green-600 flex flex-col gap-3 bg-[#021c16] p-3 rounded-lg text-neutral-100',
                'w-[380px]'   
            )}
        >
            <h2 className='text-[24px] font-semibold'>{job}</h2>
            <p>{company}</p>
            <p>{start} - {end}</p>
            <div className='flex flex-col gap-1 ml-5'>
                {task.map((item, index) => (
                    <li
                        key={index}
                        className='text-[16px] leading-5'
                    >
                        {item}
                    </li>
                ))}
            </div>
        </div>
    )
}
