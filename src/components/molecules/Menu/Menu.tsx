import React from 'react'
import './Menu.scss'
import ButtonMenu from '@/components/atom/ButtonMenu/ButtonMenu'
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineFileText } from 'react-icons/ai'
import { usePathname, useRouter } from 'next/navigation'

export default function Menu() {
    const router = useRouter()
    const pathname = usePathname()
    const pathNow = pathname.split('/')[1]

  return (
    <div className='menuStyle'>
        <div className='menuContainer'>
            <div className='menuList'>
                <ul>
                    <li>
                        <ButtonMenu 
                            width='auto' 
                            height='5vh'
                            isActived={pathNow === '' ? true : false}
                            text='Home' 
                            onClick={() => router.push('/')}
                            icon={<AiOutlineHome size={20} color='#FFFFFF' />} 
                        />
                    </li>
                    <li>
                        <ButtonMenu 
                            width='auto' 
                            height='5vh'
                            isActived={pathNow === 'about' ? true : false}
                            text='About' 
                            onClick={() => router.push('/about')}
                            icon={<AiOutlineInfoCircle size={20} color='#FFFFFF' />}
                        />
                    </li>
                    <li>
                        <ButtonMenu 
                            width='auto' 
                            height='5vh' 
                            isActived={pathNow === 'project' ? true : false}
                            text='Project'
                            onClick={() => router.push('/project')} 
                            icon={<AiOutlineFileText size={20} color='#FFFFFF' />}
                        />
                    </li>
                    {/* <li>
                        <ButtonMenu 
                            width='auto' 
                            height='5vh' 
                            isActived={pathNow === 'skill' ? true : false}
                            text='Skills' 
                            onClick={() => router.push('/skill')}
                            icon={<AiOutlineFundProjectionScreen size={20} color='#FFFFFF' />}
                        />
                    </li> */}
                </ul>
            </div>
        </div>
    </div>
  )
}
