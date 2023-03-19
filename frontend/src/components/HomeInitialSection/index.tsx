import { DefaultContainer, DefaultContent } from "../../styles/global";
import { Eletros, HomeInitialSectionContainer, HomeInitialSectionContent } from "./styles";


const HomeInitialSection = () => {
    return (
        <HomeInitialSectionContainer>
            <HomeInitialSectionContent>
                <h1>Os eletrônicos com o melhor preço do mercado!</h1>
                <Eletros />
            </HomeInitialSectionContent>
        </HomeInitialSectionContainer>
    )
}

export default HomeInitialSection;
