import { motion } from "framer-motion"
import styled from "styled-components"

export const PagesContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: end;
    width: 100%;
    min-height: 100vh;
    background-color: #000000aa;
    z-index: 20;
`

export const Pages = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    height: 100vh;
    padding: 30px 20px;
    background-color: var(--whiteFixed);

    .dropdown_up_container {
        display: flex;
        justify-content: end;

        svg {
            width: 40px;
            height: 40px;
            color: var(--theme-00);
            cursor: pointer;
        }

        svg:hover {
            color: var(--theme-01);
        }
    }

    .dropdown_mid_container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 40%;
        font: var(--Heading-5-400);

        a {
            color: var(--theme-00);
            text-decoration: none;
        }

        .actual_page {
            text-decoration: underline;
        }

    }

    .dropdown_bottom_container {
        display: flex;
        justify-content: end;

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px 10px;
            margin-left: 5px;
            border: 0;
            border-radius: 4px;
            font: var(--Heading-7-500);
            color: var(--whiteFixed);
            background-color: var(--theme-00);
            cursor: pointer;
        }

        button:hover {
            background-color: var(--theme-01);
        }

        .login_button {
            background-color: transparent;
            color: var(--theme-00);
            border: 2px solid var(--theme-00);
        }

        .login_button:hover {
            color: var(--whiteFixed);
            border: 2px solid transparent;
        }
    }
`
