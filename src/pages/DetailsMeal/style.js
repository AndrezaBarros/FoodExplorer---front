import styled from "styled-components";

export const ContainerMobile = styled.div`
    width: 100vw;
    height: 100vh;

    @keyframes downtop {
        0% {
            opacity: 0;
            transform: translateY(15px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const MainMobile = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    padding: 1.6rem 5.6rem 0;

    animation-name: downtop;
    animation-duration: 900ms;

    #ButtonText {
        padding: 2.4rem -12.4rem;
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

export const ContainerDesktop = styled.div`
    width: 100vw;
    height: 100vh;

    #ButtonText {
        padding: 2.4rem 12.4rem;
        align-self: flex-start;
    }

    @keyframes downtop {
        0% {
            opacity: 0;
            transform: translateY(15px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const MainDesktop = styled.div`
    width: 100%;
    height: 75%;

    display: flex;
    gap: 4.7rem;
    align-items: center;

    padding: 0 12.2rem;

    animation-name: downtop;
    animation-duration: 900ms;

    #Meal {
        margin-top: -25rem;
        clip-path: circle(50% at center);
        -webkit-clip-path: circle(50% at center);
        img {
            width: 39rem;
            height: 38.9rem;
        }
    }

    #Details {
        width: 100%;
        height: 30rem;

        margin-top: -25rem;

        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        h1 {
            font-family: "Poppins", sans-serif;
            font-size: 4rem;
            font-weight: 500;
            text-align: start;

            margin-bottom: 0.8rem;
        }

        p {
            width: 68.7rem;
            height: 6.8rem;

            font-family: "Poppins", sans-serif;
            font-size: 2.4rem;
            font-weight: 300;
            text-align: start;

        }

        #Tags {
            width: 48.8rem;
            height: 3.2rem;

            display: flex;
            gap: 1.2rem;
            flex-wrap: wrap;
            justify-content: start;

            margin-bottom: 2.4rem;

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
            width: 29.4rem;
            height: 4.8rem;

            display: flex;
            align-items: center;
            gap: 3.3rem;

            #Button {       
                font-size: 1.4rem;
            }

        }
    }
`;