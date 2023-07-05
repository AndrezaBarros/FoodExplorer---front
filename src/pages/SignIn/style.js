import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    padding: 0 4.7rem 0 6.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    #logo {
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: 1.1rem;

        margin: 15.8rem 2rem 4.1rem 0;

        > h1 {
            font-family: "Roboto", sans-serif;
            font-size: 3.7rem;
            font-weight: 700;
        }

        > img {
            width: 4.3rem;
            height: 4.3rem;
        }
    }

    #ButtonText {
        font-size: 1.4rem;
    }
`;

export const Form = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.LIGHT_400};
`;