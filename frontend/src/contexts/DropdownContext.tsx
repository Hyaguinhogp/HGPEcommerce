import { createContext, ReactNode, useState } from "react"

interface IDropdownProviderData {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleDropdownButton: () => void
}

interface IDropdownProviderProps {
    children: ReactNode
}

export const dropdownContext = createContext<IDropdownProviderData>({} as IDropdownProviderData)

export const DropdownProvider = ({ children }: IDropdownProviderProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownButton = () => {
        if (!isOpen) {
            document.body.classList.add("modal_active");
        }
        else {
            document.body.classList.remove("modal_active");
        }
        setIsOpen(!isOpen);
    }

    return (
        <dropdownContext.Provider value={{ isOpen, setIsOpen, handleDropdownButton }}>
            {children}
        </dropdownContext.Provider>
    )
}
