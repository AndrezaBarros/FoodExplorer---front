import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Main = styled.div`
    width: 100%;
    height: 77.4%;

    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    padding: 3.8rem 5rem;

    #ButtonText {
        align-self: flex-start;
    }

    #Meal {
        clip-path: circle(50% at center);
        -webkit-clip-path: circle(50% at center);
        img {
            width: 26.4rem;
            height: 26.4rem;
        }
    }

    h1 {
        font-family: "Poppins", sans-serif;
        font-size: 2.7rem;
        font-weight: 500;
        text-align: center;

        margin-bottom: 0.8rem;
    }

    p {
        width: 29rem;
        height: 4.6rem;

        font-family: "Poppins", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        text-align: center;

        margin-bottom: 0.8rem;
    }

    #Tags {
        width: 30rem;
        height: fit-content;

        display: flex;
        gap: 2.4rem;
        flex-wrap: wrap;
        justify-content: center;

        margin-bottom: 3.2rem;

        span {
            width: fit-content;
            height: 3.2rem;
            background-color: ${({ theme }) => theme.COLORS.DARK_1000};
            border-radius: 0.5rem;
            padding: 0.4rem 0.8rem;

            font-family: "Poppins", sans-serif;
            font-size: 1.4rem;
            line-height: 2.4rem;
        }
    }

    #Order {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1.6rem;

        #Button {       
            font-size: 0.9rem;
        }

    }

`;