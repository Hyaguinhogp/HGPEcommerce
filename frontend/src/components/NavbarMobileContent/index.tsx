import { useContext } from "react";
import { dropdownContext } from "../../contexts/DropdownContext";
import { pagesContext } from "../../contexts/PagesContext";
import { DropdownButton } from "./styles";

const NavbarMobileContent = () => {
    const { actualPage } = useContext(pagesContext);
    const { handleDropdownButton } = useContext(dropdownContext);
    return (
        <>
            <h2>{actualPage}</h2>
            <DropdownButton onClick={handleDropdownButton} />
        </>
    )
}

export default NavbarMobileContent;
