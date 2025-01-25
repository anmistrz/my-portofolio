import React from 'react'
import './Title.scss'

interface ITitle {
    title: string;
    shadowTitle: string;
    secondTitle?: string;
}

export default function Title({title, shadowTitle, secondTitle}: ITitle) {
  return (
    <div className='titleStyle'>
        <div className='titleContainer'>
            <p className='title'> {title} <span className='secondTitle'> {secondTitle} </span></p>
            <div className='titleShadow'>
                <p>{shadowTitle}</p>
            </div>
        </div>
    </div>
  )
}
