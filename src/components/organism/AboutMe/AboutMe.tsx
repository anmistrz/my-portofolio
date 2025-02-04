'use client';

import React from 'react'
import Menu from '@/components/molecules/Menu/Menu';
import Title from '@/components/atom/Title/Title';
import MyInfo from '@/components/molecules/MyInfo/MyInfo';
import { personalInformation } from '@/myData/personalInformation/personalInformation';
import Button from '@/components/atom/Button/Button';
import { AiOutlineDownload, AiOutlineStar } from 'react-icons/ai';
import Skills from '@/components/molecules/Skills/Skills';
import { listDataSkills } from '@/myData/skilss/skills';
import MyExperience from '@/components/molecules/MyExperience/MyExperience';
import { listExperience } from '@/myData/experience/listExperience';

export default function AboutMe() {

  const handleDownloadCV = () => {
    window.open("https://drive.google.com/drive/folders/1S0U9O_94okUmRAdLF5Hj1Sy8LIrk9gdW?usp=sharing", "_blank");
  }

  return (
    <div className="max-h-[100vh] max-w-screen bg-[#000000] text-white overflow-y-auto scrollbar mb-20">

        <div className="sm:h-1/2 fixed sm:right-8 sm:bottom-28 bottom-0 right-[0px]
          h-[70px] bg-[#212529] z-[1000] py-4 px-6 sm:py-0 sm:px-0 sm:bg-transparent sm:w-auto w-full">
          <Menu />
        </div>

        <div className="flex flex-col items-center justify-center h-full py-24 px-12 gap-12">
          <div className="w-full sm:w-1/2">
            <Title 
              title="About" 
              secondTitle="Me" 
              shadowTitle="Resume" 
            />
          </div>

          <div className="w-full">
            <MyInfo data={personalInformation} />
          </div>

          <div className='hidden sm:block w-full'>
            <Button
              width="25%"
              height="6vh"
              text="Download CV"
              widthIcon="50px"
              heightIcon="50px"
              icon={<AiOutlineDownload size={30} color="#FFFFFF" />}
              onClick={() => handleDownloadCV()}
            />
          </div>
          <div className='flex justify-center w-full lg:hidden'>
            <Button
              width="100%"
              height="6vh"
              text="Download CV"
              widthIcon="48px"
              heightIcon="48px"
              icon={<AiOutlineDownload size={30} color="#FFFFFF" />}
              onClick={() => handleDownloadCV()}
            />
          </div>

          <div className="w-full">
            <Skills data={listDataSkills} />
          </div>

          <div className="w-full">
            <MyExperience data={listExperience} icon={<AiOutlineStar size={30} color="#FFFFFF" />} />
          </div>
        </div>
    </div>
  )
}
