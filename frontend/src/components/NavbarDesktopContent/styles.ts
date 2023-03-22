import styled from "styled-components";

export const NavbarDesktopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    `

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;

    a {
        font: var(--Heading-6-400);
        color: white;
        text-decoration: none;
    }

    .actual_page {
        text-decoration: underline;
    }
    `

export const SearchAndProfile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;

    input {
        display: flex;
        width: 70%;
        height: 70%;
        border-radius: 4px;
        padding-left: 10px;
        font: var(--body-1-400);
    }

    input:focus {
        outline: none;
    }

    .profile_image_container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: var(--whiteFixed);
        border-radius: 50%;
        overflow: hidden;
    }

    img {
        width: 100%;
    }
`
