import { useContext, useEffect } from "react";
import { dropdownContext } from "../../contexts/DropdownContext";
import Dropdown from "../Dropdown";
import NavbarDesktopContent from "../NavbarDesktopContent";
import NavbarMobileContent from "../NavbarMobileContent";
import { Logo, NavbarContainer, NavbarContent } from "./styles";

const Navbar = () => {
    const { isOpen } = useContext(dropdownContext);

    useEffect(() => {
        document.body.classList.remove("modal_active");
    }, []);

    return (
        <>
            {
                isOpen ?
                    <Dropdown />
                    :
                    null
            }
            <NavbarContainer>
                <NavbarContent>
                    <Logo />
                    {
                        document.body.offsetWidth < 900 ?
                            <NavbarMobileContent />
                            :
                            <NavbarDesktopContent />
                    }

                </NavbarContent>
            </NavbarContainer>
        </>
    )
}

export default Navbar;
