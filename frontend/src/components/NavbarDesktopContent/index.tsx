import { useContext } from "react";
import { dropdownContext } from "../../contexts/DropdownContext";
import { pagesContext } from "../../contexts/PagesContext";
import { Navbar, NavbarDesktopContainer, SearchAndProfile } from "./styles";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const NavbarDesktopContent = () => {
    const { actualPage } = useContext(pagesContext);

    const animation = {
        whileHover: {
            y: -5
        },
        transition: {
            type: "spring",
            duration: 0.5
        }
    }

    return (
        <NavbarDesktopContainer>
            <Navbar>
                <motion.div {...animation}>
                    <Link to="/home" className={actualPage === "Home" ? "actual_page" : ""}>Home</Link>
                </motion.div>

                <motion.div {...animation}>
                    <Link to="/store" className={actualPage === "Loja" ? "actual_page" : ""}>Loja</Link>
                </motion.div>

                <motion.div {...animation}>
                    <Link to="/categories" className={actualPage === "Categorias" ? "actual_page" : ""}>Categorias</Link>
                </motion.div>
            </Navbar>
            <SearchAndProfile>
                <input type="text" placeholder="Notebook gamer..." />
                <figure className="profile_image_container">
                    <img src="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg" alt="" />
                </figure>
            </SearchAndProfile>
        </NavbarDesktopContainer>
    )
}

export default NavbarDesktopContent;
