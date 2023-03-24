import styled from "styled-components";
import { ReactComponent as EletrosIcon } from "../../assets/eletros_1.svg";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const HomeInitialSectionContainer = styled(DefaultContainer)`
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: var(--theme-00);
    font: var(--Heading-2-600);
    color: var(--whiteFixed);
    overflow: hidden;
`

export const HomeInitialSectionContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: 900px) {
        width: 40%;
        z-index: 2;
        font: var(--Heading-0-500);

        h1 {
            position: absolute;
            width: 40%;
        }
    }
`

export const EletrosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700px;

    @media (min-width: 900px) {
        width: 50%;
    }
`

export const Eletros = styled(EletrosIcon)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;


`
