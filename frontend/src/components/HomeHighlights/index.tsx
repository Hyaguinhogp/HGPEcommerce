import ProductCarrousel from "../ProductCarrousel"
import { HomeHighlihtsContainer, HomeHighlihtsContent } from "./styles"

const HomeHighlights = () => {
    return (
        <HomeHighlihtsContainer>
            <HomeHighlihtsContent>
                <h2>Destaques</h2>
                <ProductCarrousel />
            </HomeHighlihtsContent>
        </HomeHighlihtsContainer>
    )
}

export default HomeHighlights
