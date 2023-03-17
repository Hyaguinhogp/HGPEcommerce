import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";
import { ReactComponent as LogoIcon } from "../../assets/logo_1.svg";
import { ReactComponent as DropdownIcon } from "../../assets/mobile_dropdown_button_1.svg";
import { motion } from "framer-motion";

export const NavbarContainer = styled(DefaultContainer)`
    height: 85px;
    background-color: var(--theme-00);
`

export const NavbarContent = styled(DefaultContent)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--whiteFixed);
    font: var(--Heading-5-400);
    text-decoration-line: underline;
`

export const Logo = styled(LogoIcon)`
    width: 30px;
    height: 30px;
    color: #ffffff;
`

export const DropdownButton = styled(DropdownIcon)`
    width: 25px;
    height: 25px;
    color: #ffffff;
    cursor: pointer;

    :hover {
        cursor: pointer;
    }
`

export const PagesContainer = styled.div`
    display: flex;
    justify-content: end;
    position: absolute;
    width: 100%;
    min-height: 100vh;
    background-color: #000000aa;
`

export const Pages = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    height: 100vh;
    background-color: var(--whiteFixed);
`

