export interface HomeProps {
    history: object
    location: object
    match: object
}

export interface HeaderProps {
    path: string
}

export interface ListProps {
    history: object
    location: {
        [pathname: string]: string
    }
    match: object
}

export interface ItemStructure {
    title: string
    description: string
    images: {
        ['Poster Art']: {
            url: string
            height: number
            width: number
        }
    }
    programType: string
    releaseYear: number
    id: number
}

export interface ItemProps {
    key: number
    item: {
        title: string
        description: string
        images: {
            ['Poster Art']: {
                url: string
                height: number
                width: number
            }
        }
        programType: string
        releaseYear: number
        id: number
    }
}

export interface MainProps {
    children: any
    location: {
        pathname: string
    }
}

export interface LayoutRouteProps {
    exact?: any
    path?: string
    component: any
}