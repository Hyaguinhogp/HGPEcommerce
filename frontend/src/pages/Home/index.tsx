import { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar"
import { pagesContext } from "../../contexts/ContextModel";
import { HomeContainer, HomeContent } from "./styles"

const Home = () => {

    const { actualPage, setActualPage } = useContext(pagesContext);

    useEffect(() => {
        setActualPage("Home");
    }, []);

    return (
        <>
            <Navbar />
            <HomeContainer>
                <HomeContent>
                    <h1>Home</h1>
                </HomeContent>
            </HomeContainer>
        </>
    )
}

export default Home
