import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    padding: 15.8rem 5.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
    
    #Logo {
        display: flex;
        gap: 1.1rem;

        > img {
            width: 4.3rem;
            height: 4.3rem;
        }

        > h1 {
            font-size: 3.7rem;
        }
    }

    #UserType {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.9rem;

        background-color: transparent;
        border: none;

        > img {
            width: 4rem;
            height: 4rem;
        }

        > h2 {
            font-family: "Poppins", sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }
    }

    #UserType:focus{
        border-radius: 0.8rem;
        padding: 0.8rem;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }

`;