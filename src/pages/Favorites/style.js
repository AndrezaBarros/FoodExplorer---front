import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    animation-name: rigthleft;
    animation-duration: 900ms;
`;

export const MainMobile = styled.div`
    width: 100%;
    height: 100%;
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

            clip-path: circle(50% at center);
            -webkit-clip-path: circle(50% at center);
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

                :hover {
                    transition: transform 400ms;
                    transform: scale(1.1);
                    opacity: 1;
                    cursor: pointer;
                }
            }
        } 
    }

    @keyframes rigthleft {
        0% {
            opacity: 0;
            transform: translateX(15px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
`;

export const MainDesktop = styled.div`
    width: 100%;
    height: 100%;
    padding: 3.4rem 12.3rem;

    overflow-y: scroll;

    #List {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4.8rem;

        overflow-y:auto;
    }

    h1 {
        width: 23.9rem;

        font-family: "Poppins", sans-serif;
        font-size: 3.2rem;
        font-weight: 500;

        margin-bottom: 1.1rem;
    }

    section {
        display: flex;
        align-items: center;
        gap: 1.3rem;
        width: 23.1rem;

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

                :hover {
                    transition: transform 400ms;
                    transform: scale(1.1);
                    opacity: 1;
                    cursor: pointer;
                }
            }
        } 
    }

    @keyframes rigthleft {
        0% {
            opacity: 0;
            transform: translateX(15px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
`;