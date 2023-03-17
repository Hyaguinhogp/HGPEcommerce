import { NavbarContainer, NavbarContent, Logo, DropdownButton } from "./styles";

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarContent>
                <Logo />
                <h2>Home</h2>
                <DropdownButton />
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar;
