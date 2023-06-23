import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Main = styled.div`
    width: 100%;
    height: 77.4%;
    padding: 5.6rem 3.5rem;

    overflow-y: scroll;

    h1 {
        font-family: "Poppins", sans-serif;
        font-size: 3.2rem;
        font-weight: 500;

        margin-bottom: 1.1rem;
    }

    section {
        display: flex;
        align-items: center;
        gap: 1.3rem;

        padding: 1.6rem 0;
        
        #Img {
            width: 72px;
            height: 72px;
        }

        div {
            > h2 {
            font-family: "Poppins", sans-serif;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3.2rem;
            }

            > button {
                background: transparent;
                border: none;

                font-family: "Roboto", sans-serif;
                font-size: 1.2rem;
                color: ${({theme}) => theme.COLORS.TOMATO_400};
                line-height: 1.9rem;
            }
        } 
    }
    
`;