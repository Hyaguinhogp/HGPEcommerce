import styled from "styled-components";
import { ReactComponent as EletrosIcon } from "../../assets/eletros_1.svg";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const HomeInitialSectionContainer = styled(DefaultContainer)`
    padding-top: 145px;
    padding-bottom: 60px;
    background-color: var(--theme-00);
    font: var(--Heading-2-600);
    color: var(--whiteFixed);
    overflow: hidden;
`

export const HomeInitialSectionContent = styled(DefaultContent)`
    max-width: 100vw;
`

export const Eletros = styled(EletrosIcon)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 700px;
    right: calc((700px - 100%) / 2);
`
