import { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { pagesContext } from "../../contexts/ContextModel";
import { HomeContainer, HomeContent } from "./styles";

const Store = () => {

    const { actualPage, setActualPage } = useContext(pagesContext);

    useEffect(() => {
        setActualPage("Loja");
    }, []);

    return (
        <>
            <Navbar />
            <HomeContainer>
                <HomeContent>
                    <h1>Store</h1>
                </HomeContent>
            </HomeContainer>
        </>
    )
}

export default Store;
