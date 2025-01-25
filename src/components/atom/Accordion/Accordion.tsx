import React from 'react'
import { AiFillCaretRight, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import './Accordion.scss'

interface IAccordion {
    title: string,
    content: string[]
}

export default function Accordion({title, content}: IAccordion) {
    const [isActive, setIsActive] = React.useState(false)

  return (
    <div className='accordionStyle'>
        <div className='accordionContainer'>
            <div className='accordionTitle'>
                <p className='title'>
                    {title}
                </p>
                <div className='accordionIcon' onClick={() => setIsActive(!isActive)}>
                    <span className={`icon ${isActive ? 'active' : ''}`}>
                        {isActive ? <AiFillMinusCircle size={20} color='#FFD700' /> : <AiFillPlusCircle size={20} color='#FFD700' />}
                    </span>
                </div>
            </div>
            <div className='accordionContent'>
                <div className={`${isActive ? 'accordionContentText' : 'close'}`}>
                    {content.map((item: string, index: number) => (
                        <div key={index} className='content'>
                            <span className='contentIcon'><AiFillCaretRight size={20} color='#FFD700' /></span>
                            <p className='contentDesc'>{item}</p>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
