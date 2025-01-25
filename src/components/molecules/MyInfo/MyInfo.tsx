import React from 'react'
import './MyInfo.scss'

interface IMyInfoContent {
    title: string;
    content: string;
}

interface IMyInfoStyleProps {
  data: IMyInfoContent[];
}

export default function MyInfo({data}: IMyInfoStyleProps) {
  return (
    <div className='myInfoStyle'>
        <div className='myInfoContainer'>
            <div className='myInfoTitle'>
                <h1>Personal Information</h1>
            </div>
            <div className='myInfoContent'>
                {data.map((item, index) => (
                    <div key={index} className='myInfoItem'>
                        <p className='myInfoItemTitle'>{item.title}</p>
                        <p className='myInfoItemContent'>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
