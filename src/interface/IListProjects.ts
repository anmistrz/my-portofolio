export interface IImageItem {
    idImage: number,
    image: string
}

export interface Ilinks {
    id: number,
    title: string,
    url: string
}

export interface IListProjects {
    id: number,
    title: string,
    description: string,
    defaultImage: string,
    images: IImageItem[],
    links: Ilinks[],
    technology: string[],
    type: string,
    slug: string
}