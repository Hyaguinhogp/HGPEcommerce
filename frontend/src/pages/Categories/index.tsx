import { useContext, useEffect } from "react"
import Navbar from "../../components/Navbar"
import { pagesContext, PagesProvider } from "../../contexts/ContextModel";
import { HomeContainer, HomeContent } from "./styles"

const Categories = () => {

    const { actualPage, setActualPage } = useContext(pagesContext);

    useEffect(() => {
        setActualPage("Categorias");
    }, []);

    return (
        <>
            <Navbar />
            <HomeContainer>
                <HomeContent>
                    <h1>Categories</h1>
                </HomeContent>
            </HomeContainer>
        </>
    )
}

export default Categories
