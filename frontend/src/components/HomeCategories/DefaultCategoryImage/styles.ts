import { motion } from "framer-motion";
import styled from "styled-components";

interface ICategoryImageProps {
    position: number
    actualImage: number
    isSelected?: boolean
    right?: boolean
    left?: boolean
}

export const CategoryImage = styled(motion.div)`
    position: ${(props: ICategoryImageProps) => props.isSelected ? "relative" : "absolute"};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: ${(props: ICategoryImageProps) => props.isSelected ? "90%" : "80%"};
    height: ${(props: ICategoryImageProps) => props.isSelected ? "80vh" : "70vh"};
    border-radius: 5px;
    background-color: white;
    overflow: hidden;
    right: ${({ isSelected, right }: ICategoryImageProps) => !isSelected && right ? "0px" : "none"};
    left: ${({ isSelected, left }: ICategoryImageProps) => !isSelected && left ? "0px" : "none"};
    z-index: ${(props: ICategoryImageProps) => props.isSelected ? 5 :
        (props.position - props.actualImage) === 1 || (props.position - props.actualImage) === -1 ? 3 : 0};
    cursor: pointer;

    > svg {
        position: absolute;
        width: 100%;
        scale: 1.3;
    }
`
