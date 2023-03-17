import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";
import { ReactComponent as LogoIcon } from "../../assets/logo_1.svg";
import { ReactComponent as DropdownIcon } from "../../assets/mobile_dropdown_button_1.svg";

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
`

export const Logo = styled(LogoIcon)`
    width: 25px;
    height: 25px;
    color: #ffffff;
`

export const DropdownButton = styled(DropdownIcon)`
    width: 25px;
    height: 25px;
    color: #ffffff;
`

