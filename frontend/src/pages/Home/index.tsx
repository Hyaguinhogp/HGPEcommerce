import Navbar from "../../components/Navbar"
import { HomeContainer, HomeContent } from "./styles"

const Home = () => {
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
