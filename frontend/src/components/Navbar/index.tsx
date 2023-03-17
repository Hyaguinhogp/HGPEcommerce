import { NavbarContainer, NavbarContent, Logo, DropdownButton, Pages, PagesContainer } from "./styles";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownButton = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {
                isOpen ?
                    <PagesContainer>
                        <Pages
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 0.2,
                                type: "tween"
                            }}
                        >
                            <button onClick={handleDropdownButton}>x</button>
                            <h1>Opa</h1>
                            <h1>Opa</h1>
                            <h1>Opa</h1>
                            <h1>Opa</h1>
                        </Pages>
                    </PagesContainer>
                    :
                    null
            }
            <NavbarContainer>
                <NavbarContent>
                    <Logo />
                    <h2>Home</h2>
                    <DropdownButton onClick={handleDropdownButton} />

                </NavbarContent>
            </NavbarContainer>
        </>
    )
}

export default Navbar;
