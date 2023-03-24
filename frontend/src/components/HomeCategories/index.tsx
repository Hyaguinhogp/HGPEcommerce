import { useState } from "react";
import DefaultCategoryImage from "./DefaultCategoryImage";
import NotebooksCategoryImage from "./NotebooksCategoryImage";
import { DotsContainer, HomeCategoriesContainer, HomeCategoriesContent, HomeCategoriesImages } from "./styles";

const HomeCategories = () => {

    const images = [0, 1, 2];
    const [actualImage, setActualImage] = useState(0);

    return (
        <HomeCategoriesContainer>
            <HomeCategoriesContent>
                <HomeCategoriesImages>
                    <DefaultCategoryImage
                        position={0}
                        actualImage={actualImage}
                        setActualImage={setActualImage}
                    >
                        <h1 style={{
                            font: "var(--Heading-4-500)",
                            color: "black"
                        }}>Luis é gay</h1>
                    </DefaultCategoryImage>

                    <DefaultCategoryImage
                        position={1}
                        actualImage={actualImage}
                        setActualImage={setActualImage}
                    >
                        <NotebooksCategoryImage />
                    </DefaultCategoryImage>

                    <DefaultCategoryImage
                        position={2}
                        actualImage={actualImage}
                        setActualImage={setActualImage}
                    >
                        <h1 style={{
                            font: "var(--Heading-4-500)",
                            color: "black"
                        }}>União Flasco</h1>
                    </DefaultCategoryImage>
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
