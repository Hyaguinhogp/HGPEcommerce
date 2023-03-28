import styled from "styled-components";

export const DefaultProductCardContainer = styled.div`
    position: relative;
    display: flex;
    width: 400px;
    padding: 15px;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;

    :hover {
        background-color: var(--grey-08);
    }
`

export const DefaultProductCardContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .product_image_container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 280px;
        background-color: var(--grey-04);
        overflow: hidden;

        img {
            height: 100%;
        }
    }

    .product_categories_container {
        display: flex;
        margin: 15px 0;
        gap: 8px;
    }

    h3 {
        font: var(--Heading-5-600);
        margin-bottom: 30px;
    }

    p {
        font: var(--body-1-600);
        color: var(--grey-02);
        margin-bottom: 30px;
    }

    .product_price_container {
        display: flex;
        justify-content: end;

        span {
            font: var(--body-2-600);
            align-items: flex-start;
        }
    }
`

export const Category = styled.h4`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    background-color: var(--theme-00);
    color: white;
    border-radius: 4px;
    font: var(--body-2-500);

`
