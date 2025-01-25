import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './Modal.scss'

interface IModalStyleProps {
    width?: string;
    height?: string;
    title: string;
    titleYellow: string;
    shadowTitle: string;
    onClose?: () => void;
    content: React.ReactNode;
    isClose: boolean;
}

export default function Modal({title, titleYellow ,shadowTitle, content ,onClose, isClose}: IModalStyleProps) {
  return (
    <div className={`modalStyle ${isClose ? 'hidden d-none' : 'block'} animate-fadeIn`}>
        <div className='modalClose'>
            <button 
                className='modalCloseButton'
                onClick={onClose}
            >
                <span className='hidden sm:block'>
                    <AiOutlineClose size={40} color='#FFFFFF' />
                </span>
                <span className='lg:hidden'>
                    <AiOutlineClose size={20} color='#FFFFFF' />
                </span>
            </button>
        </div>
        <div className='modalContainer'>
            <div className='modalHeader'>
                <h1 className='shadowTitle'>{shadowTitle}</h1>
                <h1 className='modalTitle'> {title} <span className='text-[#FFD700]'> {titleYellow} </span></h1>
            </div>
            <div className='modalContent'>
                {content}
            </div>
            {/* <div className='modalFooter'>
                <button className='modalButton'>Download</button>
            </div> */}
        </div>
    </div>
  )
}
