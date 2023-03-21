import { ReactNode } from "react"
import { DropdownProvider } from "./DropdownContext"
import { PagesProvider } from "./PagesContext"

interface IProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: IProvidersProps) => {
    return (
        <PagesProvider>
            <DropdownProvider>
                {children}
            </DropdownProvider>
        </PagesProvider>
    )
}

export default Providers
