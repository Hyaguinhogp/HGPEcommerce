import { motion } from "framer-motion";
import styled from "styled-components";

export const ProductCarrouselContainer = styled(motion.div)`
    display: flex;
    width: 100%;
    margin-top: 20px;
    overflow-x: hidden;
`

export const ProductCarrouselContent = styled(motion.div)`
    display: flex;
    gap: 20px;
`
