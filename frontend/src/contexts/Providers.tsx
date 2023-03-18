import { ReactNode } from "react"
import { PagesProvider } from "./ContextModel"

interface IProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: IProvidersProps) => {
    return (
        <PagesProvider>
            {children}
        </PagesProvider>
    )
}

export default Providers
