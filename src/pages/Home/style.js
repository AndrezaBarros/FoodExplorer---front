import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Main = styled.div`
    height: 77.4%;

    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    padding: 1.5rem 0 1.5rem 2.4rem;

    #Banner {
        height: 12.0rem;
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        gap: 0.4rem;

        margin: 2.9rem 1.6rem 3.8rem 0.8rem;
        padding: 3.8rem 1rem 2.2rem 0;
        border-radius: 0.3rem;

        background: rgb(9,30,38);
        background: linear-gradient(180deg, #091E26 5%, #00131C 100%);

        img {
            position: absolute;
            bottom: 0;
            left: -3rem;

            width: 19.1rem;
            height: 14.9rem;
        }

        h2 {
            width: 18rem;
            height: 2.5rem;

            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-size: 1.7rem;
            color: ${({theme}) => theme.COLORS.LIGHT_300};

            line-height: 2.5rem;
        }

        p {
            width: 18rem;
            height: 3.4rem;

            font-family: "Poppins", sans-serif;
            font-size: 1.1rem;
            color: ${({theme}) => theme.COLORS.LIGHT_300};

            line-height: 1.6rem;
        }
    }
    
    
    section {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        font-family: "Poppins", sans-serif;
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        #Carousel {
            display: flex;
            gap: 1.6rem;

            overflow-x: auto;
        }
    }
`;