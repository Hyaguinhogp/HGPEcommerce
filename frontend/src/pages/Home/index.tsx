import { useContext, useEffect } from "react";
import HomeInitialSection from "../../components/HomeInitialSection";
import Navbar from "../../components/Navbar"
import { pagesContext } from "../../contexts/ContextModel";
import { HomeContainer, HomeContent } from "./styles"

const Home = () => {

    const { setActualPage } = useContext(pagesContext);

    useEffect(() => {
        setActualPage("Home");
    }, []);

    return (
        <>
            <Navbar />
            <HomeInitialSection />
        </>
    )
}

export default Home
