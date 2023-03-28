import DefaultProductCard from "../DefaultProductCard"
import { HomeCategoriesContainer } from "../HomeCategories/styles"
import { HomeHighlihtsContainer, HomeHighlihtsContent } from "./styles"

const HomeHighlights = () => {
    return (
        <HomeHighlihtsContainer>
            <HomeHighlihtsContent>
                <h2>Destaques</h2>
                <DefaultProductCard />
            </HomeHighlihtsContent>
        </HomeHighlihtsContainer>
    )
}

export default HomeHighlights
