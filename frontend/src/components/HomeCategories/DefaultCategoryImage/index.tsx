import { ReactNode } from "react";
import { CategoryImage } from "./styles";

interface ICategoryImageProps {
    position: number,
    actualImage: number,
    setActualImage: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

const DefaultCategoryImage = ({ position, actualImage, setActualImage, children }: ICategoryImageProps) => {


    const setProps = (position: number) => {

        const isSelected = position === actualImage;
        const right = position > actualImage;
        const left = position < actualImage;

        const animate = {
            width: isSelected ? "90%" : "80%",
            height: isSelected ? "80vh" : "70vh",
            x: !isSelected ? (right ? "0px" : "0px") : "0px",
        }

        const transition = {
            type: "spring",
            duration: 0.5
        }

        return {
            position,
            actualImage,
            isSelected,
            right,
            left,
            animate,
            transition
        }
    }

    return (
        <CategoryImage {...setProps(position)} onClick={() => setActualImage(position)}>
            {children}
        </CategoryImage>
    )
}

export default DefaultCategoryImage;
