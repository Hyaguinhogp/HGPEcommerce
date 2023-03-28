import { ReactComponent as Notebooks } from "../../../assets/notebook_card.svg";
import { ReactComponent as NoteGamer } from "../../../assets/notebook_gamer_icon.svg";
import { ReactComponent as NoteWork } from "../../../assets/notebook_work_icon.svg";
import { ReactComponent as NoteCasual } from "../../../assets/notebook_casual_icon.svg";
import { BottomContainer, InfoContainer, NotebookType, NotebookTypesContainer, TitleContainer } from "./styles";

const NotebooksCategoryImage = () => {
    return (
        <>
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
        </>
    )
}

export default NotebooksCategoryImage;
