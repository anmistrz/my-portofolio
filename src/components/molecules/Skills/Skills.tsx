import { IDataSkillsContentProps } from '@/interface/ISkilss'
import React from 'react'
import CirclePie from '../CirclePie/CirclePie'
import './Skills.scss'

export default function Skills({data}:IDataSkillsContentProps) {
  return (
    <div className='skillsStyle'>
        <div className='skillsContainer'>
            <div className='skillsTitle'>
                <h1>Skills</h1>
            </div>
            <div className='skillsContent'>
                {data.map((item, index) => (
                    <div key={index} className='skillsItem'>
                        <div className='skillsItemContent'>
                            <p className='skillsItemTitle'>{item.title}</p>
                            <CirclePie colour='#ffb400' percentage={item.value} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

  )
}
