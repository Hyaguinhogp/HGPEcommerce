import { BottomContainer, CategoryImage, DotsContainer, HomeCategoriesContainer, HomeCategoriesContent, HomeCategoriesImages, InfoContainer, NotebookType, NotebookTypesContainer, TitleContainer } from "./styles";
import { ReactComponent as Notebooks } from "../../assets/notebook_card.svg";
import { ReactComponent as NoteGamer } from "../../assets/notebook_gamer_icon.svg";
import { ReactComponent as NoteWork } from "../../assets/notebook_work_icon.svg";
import { ReactComponent as NoteCasual } from "../../assets/notebook_casual_icon.svg";
import { useState } from "react";

const HomeCategories = () => {

    const [images, setImages] = useState([0, 1, 2]);
    const [actualImage, setActualImage] = useState(0);


    const setProps = (position: number) => {
        return {
            position,
            actualImage,
            isSelected: position === actualImage,
            right: position > actualImage,
            left: position < actualImage
        }
    }

    return (
        <HomeCategoriesContainer>
            <HomeCategoriesContent>
                <HomeCategoriesImages>
                    <CategoryImage {...setProps(0)} style={{ backgroundColor: "blue" }}></CategoryImage>

                    <CategoryImage {...setProps(1)}>
                        <Notebooks />
                        <InfoContainer>
                            <TitleContainer>
                                <h2>Notebooks</h2>
                            </TitleContainer>
                            <BottomContainer>
                                <h3>Encontre o <span>notebook ideal</span> para todas as necessidades!</h3>
                                <NotebookTypesContainer>
                                    <NotebookType color="--random-00">
                                        <NoteGamer />
                                        <h3>Gamer</h3>
                                    </NotebookType>
                                    <NotebookType color="--random-01">
                                        <NoteWork />
                                        <h3>Trabalho</h3>
                                    </NotebookType>
                                    <NotebookType color="--random-02">
                                        <NoteCasual />
                                        <h3>Casual</h3>
                                    </NotebookType>
                                </NotebookTypesContainer>
                            </BottomContainer>
                        </InfoContainer>
                    </CategoryImage>

                    <CategoryImage {...setProps(2)} style={{ backgroundColor: "pink" }}></CategoryImage>
                </HomeCategoriesImages>
                <DotsContainer>
                    {
                        images.map((index, image) => {
                            return <div
                                className={index === actualImage ? "dot selected" : "dot"}
                                onClick={() => setActualImage(index)}
                            ></div>
                        })
                    }
                </DotsContainer>
            </HomeCategoriesContent>
        </HomeCategoriesContainer>
    )
}

export default HomeCategories;
