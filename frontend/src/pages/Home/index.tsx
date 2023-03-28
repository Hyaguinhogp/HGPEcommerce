import HomeCategories from "../../components/HomeCategories";
import HomeHighlights from "../../components/HomeHighlights";
import HomeInitialSection from "../../components/HomeInitialSection";
import DefaultPage from "../DefaultPage";

const Home = () => {

    return (
        <DefaultPage pageName="Home">
            <HomeInitialSection />
            <HomeCategories />
            <HomeHighlights />
        </DefaultPage>
    )
}

export default Home
