import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './ButtonBack.scss'

export default function ButtonBack({onClick}: {onClick: () => void}) {
  return (
    <div className='buttonBackStyle' onClick={onClick}>
        <button className='buttonBackContainer'>
            <AiOutlineArrowLeft size={20} color='#FFFFFF' className='buttonBackIcon' />
            <span className='buttonBackText'>Back</span>
        </button>
    </div>
  )
}
