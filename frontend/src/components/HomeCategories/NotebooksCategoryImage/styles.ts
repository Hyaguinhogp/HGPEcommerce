import styled from "styled-components"

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 20px;
    z-index: 10;

    h2 {
        color: var(--random-00);
        font: var(--Heading-6-500);
    }
`

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
`

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    justify-content: end;
    text-align: center;

    h3 {
        font: var(--body-1-400);
        color: var(--whiteFixed);
    }

    span {
        color: var(--random-01);
    }
`

export const NotebookTypesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 200px;
`

interface INotebookTypeProps {
    color: string
}

export const NotebookType = styled.div<INotebookTypeProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    height: 100%;
    border: 2px solid var(${(props: INotebookTypeProps) => props.color});
    border-radius: 4px;

    svg {
        position: relative;
        width: 80px;
    }

    h3 {
        color: var(${(props: INotebookTypeProps) => props.color});
    }
`
