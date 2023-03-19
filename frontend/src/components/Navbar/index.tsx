import { NavbarContainer, NavbarContent, Logo, DropdownButton, Pages, PagesContainer } from "./styles";
import { useContext, useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { pagesContext } from "../../contexts/ContextModel";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { actualPage } = useContext(pagesContext);

    useEffect(() => {
        document.body.classList.remove("modal_active");
    }, []);

    const handleDropdownButton = () => {
        if (!isOpen) {
            document.body.classList.add("modal_active");
        }
        else {
            document.body.classList.remove("modal_active");
        }
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
                            <div className="dropdown_up_container">
                                <AiFillCloseCircle onClick={handleDropdownButton} />
                            </div>

                            <motion.div className="dropdown_mid_container">

                                <motion.div
                                    whileHover={{
                                        x: 10
                                    }}
                                    transition={{
                                        type: "spring",
                                        duration: 0.5,
                                    }}
                                >
                                    <Link to="/home" className={actualPage === "Home" ? "actual_page" : ""}>Home</Link>
                                </motion.div>

                                <motion.div
                                    whileHover={{
                                        x: 10
                                    }}
                                    transition={{
                                        type: "spring",
                                        duration: 0.5,
                                    }}
                                >
                                    <Link to="/store" className={actualPage === "Loja" ? "actual_page" : ""}>Loja</Link>
                                </motion.div>

                                <motion.div
                                    whileHover={{
                                        x: 10
                                    }}
                                    transition={{
                                        type: "spring",
                                        duration: 0.5,
                                    }}
                                >
                                    <Link to="/categories" className={actualPage === "Categorias" ? "actual_page" : ""}>Categorias</Link>
                                </motion.div>
                            </motion.div>


                            <div className="dropdown_bottom_container">
                                <button>Register</button>
                                <button className="login_button">Login</button>
                            </div>


                        </Pages>
                    </PagesContainer>
                    :
                    null
            }
            <NavbarContainer>
                <NavbarContent>
                    <Logo />
                    {
                        document.body.offsetWidth < 900 ?
                            <>
                                <h2>{actualPage}</h2>
                                <DropdownButton onClick={handleDropdownButton} />
                            </>
                            :
                            null
                    }

                </NavbarContent>
            </NavbarContainer>
        </>
    )
}

export default Navbar;
