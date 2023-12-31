import styled from "styled-components";

export const ContainerMobile = styled.div`
    width: 100vw;
    height: 100vh;

    padding: 15.8rem 5.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;

    animation-name: leftrigth;
    animation-duration: 900ms;
    
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

    @keyframes leftrigth {
        0% {
            opacity: 0;
            transform: translateX(-15px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export const ContainerDesktop = styled.div`
    width: 100vw;
    height: 100vh;

    padding: 15.8rem 5.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15rem;

    animation-name: leftrigth;
    animation-duration: 900ms;
    
    #Logo {
        display: flex;
        gap: 1.1rem;
        align-items: center;

        > img {
            width: 6.2rem;
            height: 6.2rem;
        }

        > h1 {
            font-size: 5.2rem;
        }
    }

    div {
        display: flex;
        gap: 8rem;
    }

    #UserType {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.9rem;

        background-color: transparent;
        border: none;

        > img {
            width: 5rem;
            height: 5rem;
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

    #Button {
        width: 40%;
    }

    img {
        width: 5rem;
    }

    @keyframes leftrigth {
        0% {
            opacity: 0;
            transform: translateX(-15px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;