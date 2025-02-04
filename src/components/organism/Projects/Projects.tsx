'use client';

import React from 'react'
import Menu from '@/components/molecules/Menu/Menu';
import Title from '@/components/atom/Title/Title';
import { listTabsProjects } from '@/myData/tabProjects/listTabProjects';
import { listProjects } from '@/myData/projects/listProjects';
import CardProject from '@/components/molecules/CardProject/CardProject';
import { typeProject } from '@/utils/Enums';
import { IListProjects } from '@/interface/IListProjects';


export default function Projects() {
  const [data, setData] = React.useState<IListProjects[]>(listProjects)
  const [activeTab, setActiveTab] = React.useState<string>(typeProject.ALL)

  const handleData = (type: typeProject) => {
    if (type === typeProject.ALL) {
      setData(listProjects)
      setActiveTab(typeProject.ALL)
      return
    }
    const filterData = listProjects.filter((project) => project.type === type)
    setData(filterData)
    setActiveTab(type)
  }

  return (
    <div className="max-h-screen max-w-screen bg-[#000000] text-white overflow-y-auto scrollbar animate-fadeIn">

        <div className="sm:h-1/2 fixed sm:right-8 sm:bottom-28 bottom-0 right-[0px]
          h-[70px] bg-[#212529] py-4 px-6 sm:py-0 sm:px-0 sm:bg-transparent sm:w-auto w-full z-50">
          <Menu />
        </div>

        <div className="flex flex-col items-center justify-center h-full sm:py-24 sm:px-12 gap-12 py-20 px-8 w-full">
          <div className="w-full sm:w-1/2">
            <Title 
              title="My" 
              secondTitle="Portofolio" 
              shadowTitle="Works" 
            />
          </div>

          <div className="w-full">
            <div className='flex justify-center max-w-[100vw] gap-8 overflow-x-auto px-12'>
              {listTabsProjects.map((tab, index) => (
                <div className={`max-w-[max-content] w-full h-18 text-white font-medium text-[14px] 
                  px-4 py-4 hover:border-[#FFD700] hover:border-b-4 cursor-pointer
                  hover:font-bold sm:text-2xl ${activeTab === tab ? 'border-[#FFD700] border-b-4' : ''}`}
                  key={index}
                  onClick={() => handleData(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              {data.map((project: IListProjects, index: number) => (
                <CardProject key={index} data={project} />
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}
