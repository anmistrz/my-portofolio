'use client';

import Button from "@/components/atom/Button/Button";
import Menu from "@/components/molecules/Menu/Menu";
import Modal from "@/components/molecules/Modal/Modal";
import MyInfo from "@/components/molecules/MyInfo/MyInfo";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineDownload, AiOutlineLaptop  } from "react-icons/ai";
import { personalInformation } from "@/myData/personalInformation/personalInformation";
import Skills from "@/components/molecules/Skills/Skills";
import { listDataSkills } from "@/myData/skilss/skills";
import MyExperience from "@/components/molecules/MyExperience/MyExperience";
import { listExperience } from "@/myData/experience/listExperience";

export default function Home() {

  const [isModal, setIsModal] = useState(true);

  const iconRight = <AiOutlineArrowRight size={20} color="#FFFFFF" />;

  const handleDownloadCV = () => {
    window.open("https://drive.google.com/drive/folders/1S0U9O_94okUmRAdLF5Hj1Sy8LIrk9gdW?usp=sharing", "_blank");
  }

  return (
    <div className="max-h-[100vh] max-w-screen bg-[#000000] text-white sm:overflow-hidden overflow-y-auto">
      <div className="flex w-full h-full sm:justify-between sm:gap-[12vw] py-8 px-10 sm:p-0  animate-fadeIn">
        <div className="">
          <div className="lg:w-[25vw] lg:h-0 lg:border-b-[100vh] lg:border-b-[#FFB400] 
              lg:border-l-transparent lg:border-r-[25vh] lg:border-r-transparent sm:d-none"
          >
          </div>
            <div className="lg:w-[30vw] lg:h-[85vh] lg:bg-[#00FF00] lg:absolute lg:top-14 lg:left-10 
            lg:rounded-3xl lg:shadow-2xl hidden sm:block md:hidden lg:block"
            >
            <Image 
              src="/profile.jpg"
              layout="fill" 
              objectFit="cover" 
              className="rounded-3xl"
              alt={""} 
            />
            </div>
        </div>
        <div className="w-full sm:mt-[10vh] lg:mt-[28vh] d-flex flex-col justify-center items-center gap-12">
          <div className="w-[150px] mb-12 sm:hidden h-[190px] sm:rounded-3xl shadow-2xl relative top-[10%] left-[50%] transform translate-x-[-50%] translate-y-[-25%]">
            <Image 
              src="/profile.jpg"
              layout="fill"
              objectFit="fit" 
              className="rounded-3xl"
              alt={""} 
            />
          </div>
          <div className="sm:w-[55vw] sm:h-[40vh] w-[80vw] h-[50vh] d-flex flex-col justify-center items-center gap-12">
            <div className="w-full mb-12">
              <p className="text-[#FFB400] sm:text-6xl text-4xl  sm:text-left text-center mb-2">{"I'm  Anas Ardiansyah"}</p>
              <p className="text-white sm:text-4xl text-2xl sm:text-left text-center mb-2">Looking for a new <span className="text-[#FFB400]">opportunity</span></p>
            </div>
            <div className="w-full mb-12">
              <p className="text-white text-xl sm:text-left text-center">
                I am a lifetime learner person, highly motivated to explore any knowledge and do self-development to be a better person. 
                My main characteristic is being a critical thinker and detail-oriented person. Currently having a big interest in UI/UX 
                design, Software Quality Assurance, and Web Development. I polished my communication skills through some lecturing 
                activities that enabled me to build a both independent and teamwork environment.
              </p>
            </div>

            <div className="w-full hidden sm:block">
             <Button 
                width="15vw" 
                height="6vh" 
                widthIcon="50px"
                heightIcon="50px"
                text="Contact Me" 
                icon={iconRight} 
                onClick={() => setIsModal(!isModal)}
              />
            </div>
            <div className="w-full sm:hidden mb-24">
             <Button 
                width="80vw" 
                height="6vh" 
                text="Contact Me" 
                icon={iconRight} 
                onClick={() => setIsModal(!isModal)}
              />
            </div>
          </div>
        </div>

        <div className="sm:h-1/2 fixed sm:right-8 sm:bottom-28 bottom-0 right-[0px]
          h-[70px] bg-[#212529] py-4 px-6 sm:py-0 sm:px-0 sm:bg-transparent sm:w-auto w-full">
          <Menu />
        </div>

        <Modal
          width="50vw"
          height="50vh"
          title="About"
          titleYellow="Me"
          shadowTitle="Resume"
          content={
            <div className="flex flex-col gap-4">
              <MyInfo data={personalInformation} />
              <div className="flex justify-center hidden sm:block w-full">
                <Button
                  width="25%"
                  height="6vh"
                  text="Download CV"
                  widthIcon="58px"
                  heightIcon="58px"
                  icon={<AiOutlineDownload size={30} color="#FFFFFF" />}
                  onClick={() => handleDownloadCV()}
                />
              </div>
              <div className="flex justify-center w-full lg:hidden">
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

              <Skills data={listDataSkills} />
              <MyExperience data={listExperience} icon={<AiOutlineLaptop size={30} color="#FFFFFF" />} />
            </div>
          }
          isClose={isModal}
          onClose={() => setIsModal(!isModal)}
        />
      </div>
    </div>
  );
}
