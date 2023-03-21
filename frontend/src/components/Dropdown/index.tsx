import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { dropdownContext } from "../../contexts/DropdownContext";
import { pagesContext } from "../../contexts/PagesContext";
import { Pages, PagesContainer } from "./styles";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Dropdown = () => {

    const { actualPage } = useContext(pagesContext);
    const { handleDropdownButton } = useContext(dropdownContext);

    return (
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
    )
}

export default Dropdown;
