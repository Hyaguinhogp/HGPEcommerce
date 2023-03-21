import { createContext, ReactNode, useState } from "react"

interface IPageProviderData {
    actualPage: string
    setActualPage: React.Dispatch<React.SetStateAction<string>>
}

interface IPageProviderProps {
    children: ReactNode
}

export const pagesContext = createContext<IPageProviderData>({} as IPageProviderData)

export const PagesProvider = ({ children }: IPageProviderProps) => {

    const [actualPage, setActualPage] = useState("Home");

    return (
        <pagesContext.Provider value={{ actualPage, setActualPage }}>
            {children}
        </pagesContext.Provider>
    )
}
