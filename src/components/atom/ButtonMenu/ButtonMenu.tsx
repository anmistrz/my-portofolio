import React from 'react'
import './ButtonMenu.scss'

interface IButtonMenuStyleProps {
    width: string;
    height: string;
    text: string;
    isActived?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
}

export default function ButtonMenu({width, height, isActived,  text, icon, onClick}: IButtonMenuStyleProps) {
  return (
    <div className='buttonMenuStyle animate-rightIn'>
        <button
            className='buttonMenuContainer'
            style={{
                width: width,
                height: height
            }}
            onClick={onClick}
        >
            <div className='flex items-center w-full h-full'>
                {/* <span className='buttonMenuText'>{text}</span> */}
                <span className={`buttonMenuIcon ${isActived ? 'active' : ''}`}>
                    {icon}
                    <span className='effects'>
                        <p className='textButton'>{text}</p>
                    </span>
                </span>
            </div>
        </button>
    </div>
  )
}
