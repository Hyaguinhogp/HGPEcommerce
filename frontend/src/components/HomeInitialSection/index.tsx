import { Eletros, EletrosContainer, HomeInitialSectionContainer, HomeInitialSectionContent, TitleContainer } from "./styles";


const HomeInitialSection = () => {
    return (
        <HomeInitialSectionContainer>
            <HomeInitialSectionContent>
                <TitleContainer>
                    <h1>Os eletrônicos com o melhor preço do mercado!</h1>
                </TitleContainer>
                <EletrosContainer>
                    <Eletros />
                </EletrosContainer>
            </HomeInitialSectionContent>
        </HomeInitialSectionContainer>
    )
}

export default HomeInitialSection;
