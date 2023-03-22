import HomeCategories from "../../components/HomeCategories";
import HomeInitialSection from "../../components/HomeInitialSection";
import DefaultPage from "../DefaultPage";

const Home = () => {

    return (
        <DefaultPage pageName="Home">
            <HomeInitialSection />
            <HomeCategories />
        </DefaultPage>
    )
}

export default Home
