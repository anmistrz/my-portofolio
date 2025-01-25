import Image from 'next/image'
import React from 'react'
import './CardProject.scss'
import { useRouter } from 'next/navigation'
import { IListProjects } from '@/interface/IListProjects'

interface ICardProject {
    data: IListProjects
}

export default function CardProject({data}: ICardProject) {
    const router = useRouter()
  return (
    <div className='cardProjectStyle steps-frame-1 animate-leftIn' onClick={() => router.push(`/project/detail/${data.slug}`)}>
        <div className='cardProjectImage'>
            <Image
                src={data.defaultImage}
                alt={data.title}
                unoptimized
                objectFit='cover'
                fill
                className='imageStyle'
            />
        </div>
        <div className='cardProjectTitle'>
            <h1>{data.title}</h1>
        </div>
    </div>
  )
}
