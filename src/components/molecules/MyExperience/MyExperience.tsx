import React from 'react'
import './MyExperience.scss'
import { IMyExperience, IMyExperienceProps } from '@/interface/IMyExperience'
import Accordion from '@/components/atom/Accordion/Accordion'


export default function MyExperience({data, icon} : IMyExperienceProps) {
  return (
    <div className='myExperienceStyle'>
        <div className='myExperienceContainer'>
            <div className='myExperienceTitle'>
                <h1>Experience</h1>
            </div>
            <div className='myExperienceContent'>
                {data.map((item: IMyExperience, index: number) => (
                    <div className='myExperienceItem' key={index}>
                        <div className='myExperienceItemIcon'>
                            <span className='straightLine'></span>
                            <div className='myExperienceIcon'>
                                <span className='icon'>
                                    {icon}
                                </span>
                            </div>
                        </div>
                        <div className='myExperienceItemContent'>
                            <p className='myExperienceItemDate'>{item.date}</p>
                            <p className='myExperienceItemTitle'>{item.title}</p>
                            <p className='myExperienceItemCompany'>{item.company}</p>
                            <p className='myExperienceItemDesc'>
                                {item.desc}
                            </p>
                            {item.detailDesc && (
                                // <div className='myExperienceItemDetail'>
                                //     {item.detailDesc.map((detail: string, index: number) => (
                                //         // <div className='myExperienceItemDetailItem' key={index}>
                                //         //     {/* <div className='myExperienceItemDetailIcon'></div> */}
                                //         //     <p key={index} className='myExperienceItemDetailDesc'>{detail}</p>
                                //         // </div>
                                //     ))}
                                // </div>
                                <Accordion title='Detail' content={item.detailDesc} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
