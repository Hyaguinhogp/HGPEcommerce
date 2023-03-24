import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const HomeCategoriesContainer = styled(DefaultContainer)`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--theme-00);
`

export const HomeCategoriesContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const HomeCategoriesImages = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85vh;
`

export const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 20px;
    gap: 5px;

    .dot {
        width: 15px;
        height: 15px;
        border: 2px solid var(--theme-01);
        border-radius: 50%;
        cursor: pointer;
    }

    .selected {
        background-color: var(--theme-01);
    }
`


