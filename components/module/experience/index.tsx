import React from 'react'
import Card from './component/Card'
import CImage from '@/components/ui/image'
import { Red } from '@/lib/image'

export default function Experience() {
    return (
        <section 
            id='experience'
            className='min-h-screen relative flex items-center overflow-hidden'
        >
            <CImage
                src={Red}
                alt='red'
                sizeImg={400}
                contentClass='absolute z-2 bottom-0 left-0'
            />
            <div className='relative z-3 flex flex-col items-center gap-7 justify-center w-full'>
                <p className='md:text-[50px] text-[24px] font-semibold'>Experience</p>
                <div className='flex gap-4 flex-wrap'>
                    <Card
                        job='Frontend Developer'
                        company='Arnasa Technology'
                        start='06/2019'
                        end='09/2019'
                        task={[
                            'Build UI to translate weather data from BMKG',
                            'Create additional feature displays such as data import and graphs',
                            'Build Multi Page User Interface to One Page'
                        ]}
                    />
                    <Card
                        job='Frontend Developer'
                        company='OXINOS'
                        start='11/2023'
                        end='02/2026'
                        task={[
                            'Build UI panel/cms applications Fatwa TV, Dispusipda, Tovio, Project',
                            'Develop modern web landing page Tovio, Orderia, MarvelousTours',
                            'Build a dashboard view in the PROFILIX application',
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}
