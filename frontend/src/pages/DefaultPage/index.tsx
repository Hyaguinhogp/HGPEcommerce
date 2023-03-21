import { ReactNode, useContext, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { dropdownContext } from "../../contexts/DropdownContext";
import { pagesContext } from "../../contexts/PagesContext";
import { DefaultPageContainer } from "./styles";

interface IDefaultPageProps {
    children?: ReactNode
    pageName: string
}

const DefaultPage = ({ children, pageName }: IDefaultPageProps) => {

    const { setActualPage } = useContext(pagesContext);
    const { setIsOpen } = useContext(dropdownContext)

    useEffect(() => {
        setActualPage(pageName);
        setIsOpen(false);
    }, []);

    return (
        <>
            <Navbar />
            <DefaultPageContainer>
                {children}
            </DefaultPageContainer>
        </>
    )
}

export default DefaultPage;
