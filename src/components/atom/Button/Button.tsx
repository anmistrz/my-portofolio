import React from 'react'
import './Button.scss'

interface IButtonStyleProps {
  width: string;
  height: string;
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  widthIcon?: string;
  heightIcon?: string;
}

export default function Button({ width, height, text, icon, onClick, widthIcon, heightIcon }: IButtonStyleProps) {
  return (
    <>
      <button
        className='buttonStyle'
        style={{
          width: width,
          height: height
        }}
        onClick={onClick}
      >
        <div className='flex items-center justify-between w-full h-full'>
          <span className='buttonText'>{text}</span>
          <span className='buttonIcon' style={{ width: widthIcon, height: heightIcon }}>
            {icon}
          </span>
        </div>
      </button>
    </>
  )
}
