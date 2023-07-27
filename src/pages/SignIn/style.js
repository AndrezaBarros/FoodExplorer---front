import styled, { keyframes } from "styled-components";


export const ContainerMobile = styled.div`
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

        animation-name: topdown;
        animation-duration: 900ms;

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

    #Button {
        animation-name: topdown;
        animation-duration: 900ms;
    }

    #ButtonText {
        font-size: 1.4rem;

        animation-name: topdown;
        animation-duration: 900ms;
    }

    @keyframes topdown {
    0% {
        opacity: 0;
        transform: translateY(-15px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
    }
`;

export const FormMobile = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.LIGHT_400};

    animation-name: topdown;
    animation-duration: 900ms;
`;

export const ContainerDesktop = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    padding: 14.2rem 10.8rem;
    justify-content: space-between;
    align-items: center;

    #logo {
        display: flex;
        align-items: center;
        gap: 1.9rem;

        >img {
            width: 4.9rem;
        }

        >h1 {
            font-family: "Roboto", sans-serif;
            font-size: 4.2rem;
        }
    }

    > div {
        padding: 6.4rem;
        background-color: ${({theme}) => theme.COLORS.DARK_700};

        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        align-items: center;

        border-radius: 1.6rem;

        h2 {
           font-family: "Poppins", sans-serif;
           font-size: 3.2rem;
           font-weight: 500;

           text-align: center;
        }

        #ButtonText {
            font-size: 1.4rem;
        }
    }
`;

export const FormDesktop = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-family: "Roboto", sans-serif;
        font-size: 1.6rem;
    }

    input {
        width: 34.8rem;
        background-color: transparent;
        padding: 1.6rem 1.4rem;
        margin-top: 0.8rem;

        border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};
        border-radius: 0.5rem;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
`;