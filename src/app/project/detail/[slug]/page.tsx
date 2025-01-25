'use client';

import React from 'react'
import DetailProject from '@/components/organism/Projects/Detail/DetailProject'
import { useParams } from 'next/navigation'
import { listProjects } from '@/myData/projects/listProjects';

export default function DetailProjects() {
    const params = useParams()
    const getDetailData = listProjects.filter((project) => project.slug === params.slug)
    console.log("PARAMSSSS", params)
  return (
    <DetailProject data={getDetailData[0]} />
  )
}
