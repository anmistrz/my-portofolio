import React from 'react'
import Image from 'next/image'
import Menu from '@/components/molecules/Menu/Menu'
import Title from '@/components/atom/Title/Title'
import { useParams, useRouter } from 'next/navigation'
import ButtonBack from '@/components/atom/ButtonBack/ButtonBack'
import { IImageItem, Ilinks, IListProjects } from '@/interface/IListProjects'

interface IDetailProject {
    data: IListProjects
}

export default function DetailProject({data}: IDetailProject) {
    const [showingImage, setShowingImage] = React.useState({
        src: data.defaultImage,
        alt: data.title
    })

    const params = useParams()
    const router = useRouter()
    const title:string[] = params && typeof params['slug'] === 'string' ? params['slug'].split('-') : []

    const backToProject = () => {
        router.push('/project')
    }

  return (
    <div className="max-h-screen max-w-screen bg-[#000000] text-white animate-fadeIn">
        <div className='max-h-[calc(100vh-70px)]  overflow-y-auto scrollbar'>
            <div className="sm:h-1/2 fixed sm:right-8 sm:bottom-28 bottom-0 right-[0px]
                h-[70px] bg-[#212529] py-4 px-6 sm:py-0 sm:px-0 sm:bg-transparent sm:w-auto w-full z-50">
                <Menu />
            </div>

            <div className="flex flex-col items-center justify-center h-full py-20 px-8 gap-12 w-full">
                <div className="w-full sm:w-1/2">
                    <Title 
                        title={title[0]}
                        secondTitle={title[1]}
                        shadowTitle="Detail" 
                    />         
                </div>

                <div className='w-[85vw] flex justify-center h-[35vh] sm:h-[80vh] relative p-12'>
                    <Image
                        src={showingImage.src}
                        alt={showingImage.alt}
                        fill
                        className='sm:w-[80vw] sm:h-[80vh] w-[100vw] h-[10vh] left-0 top-0'
                    />
                </div>
                <div className='w-full max-w-[80vw] gap-8 overflow-x-auto'>
                    <div className=' sm:w-[80vw] sm:h-[10vh] w-[250vw] h-[10vh] flex justify-center gap-4'>
                        {data.images.map((dataImage: IImageItem, index: number) => (
                            <div 
                                key={index} 
                                className={`
                                    relative w-full h-full cursor-pointer 
                                    ${showingImage.src === dataImage.image ? 'border-[#FFD700] border-b-8' : ''}
                                    
                                `}
                                onMouseEnter={() => setShowingImage({
                                    src: dataImage.image,
                                    alt: dataImage.idImage.toString()
                                })}
                            >
                                <Image
                                    src={dataImage.image}
                                    alt={dataImage.idImage.toString()}
                                    fill
                                    className='w-full h-full left-0 top-0'
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center gap-12 mt-4'>
                    <p className='text-center capitalize font-bold text-4xl'>{data.title}</p>
                    <p className='text-center text-xl mx-8'>{data.description}</p>

                    <div className='flex justify-center gap-4'>
                        {data.links.map((itemLinks: Ilinks, index: number) => (
                            <div className='flex flex-col items-center gap-2' key={index}>
                                <a 
                                    href={itemLinks.url} target='_blank' 
                                    rel='noreferrer' 
                                    className='text-[#ffb400] 
                                    hover:text-[#FFD700] transition-all duration-300 ease-in-out text-xl font-bold'
                                >
                                    {itemLinks.title}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className='sm:flex sm:justify-center gap-4 sm:max-w-[100vw] max-w-[100%] overflow-x-auto grid grid-cols-2 gap-4'>
                        {data.technology.map((tech: string, index: number) => (
                            <p key={index} className='text-black bg-[#ffb400] px-4 py-2 rounded-full font-medium text-center'>{tech}</p>
                        ))}
                    </div>
                    {/* <h1>{data.technology}</h1>
                    <h1>{data.link}</h1> */}
                </div>
            </div>
            <ButtonBack onClick={backToProject} />
        </div>
    </div>
  )
}
