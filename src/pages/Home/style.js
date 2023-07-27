import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const MainMobile = styled.div`
    height: 100%;

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

        animation-name: popup;
        animation-duration: 700ms;

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
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            line-height: 2.5rem;
        }

        p {
            width: 18rem;
            height: 3.4rem;

            font-family: "Poppins", sans-serif;
            font-size: 1.1rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            line-height: 1.6rem;
        }
    }
    
    #Meal {
        width: 21.0rem;
        height: 29.2rem;

        padding: 2.4rem;
        position: relative;
        border-radius: 0.8rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_200};

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.2rem;


        #Svg {
            width: 2.4rem;
            height: 2.2rem;

            background: none;
            border: none;

            position: absolute;
            right: 1.6rem;
            top: 1.6rem;

            :hover {
                transition: transform 400ms;
                transform: scale(1.1);
                opacity: 1;
                cursor: pointer;
            }
        }
        
        #ImageMeal {
            width: 8.8rem;
            height: 8.8rem;

            border-radius: 50%;

            :hover {
                transition: transform 400ms;
                transform: scale(1.03);
                opacity: 1;
                cursor: pointer;
            }
        }

        h1 {
            width: 19.0rem;
            font-family: "Poppins", sans-serif;
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2.4rem;
            text-align: center;
        }

        #Price {
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.CAKE_200};

            text-align: center;
        }

        #Button {
            width: 16.2rem;
            padding: 5px 0 4px 0;
        }
    }
    
    section {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        font-family: "Poppins", sans-serif;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        #Carousel {
            display: flex;
            gap: 1.6rem;

            overflow-x: auto;
        }
    }

    @keyframes popup {
        0% {
            opacity: 0;
            transform: scale(1.4);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export const MainDesktop = styled.div`
    height: 100%;

    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 4.8rem;

    padding: 16.4rem 12.4rem 4.8rem;

    h3 {
        font-size: 3.2rem;
        font-weight: 400;
    }

    #Banner {
        height: 26.0rem;
        max-width: 112rem;
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        gap: 0.4rem;

        padding: 8.8rem 10rem;
        margin-bottom: 2.2rem;
        border-radius: 0.8rem;

        background: rgb(9,30,38);
        background: linear-gradient(180deg, #091E26 5%, #00131C 100%);

        animation-name: popup;
        animation-duration: 700ms;

        img {
            position: absolute;
            bottom: -1rem;
            left: -7rem;

            width: 65.6rem;
            height: 41.2rem;
        }

        h2 {
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-size: 4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        p {
            height: 3.4rem;
            width: 42.2rem;

            font-family: "Roboto", sans-serif;
            font-size: 1.6rem;
            text-align: end;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            line-height: 1.6rem;
        }
    }
    
    section {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        width: 112.2rem;

        font-family: "Poppins", sans-serif;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        #Carousel {
            display: flex;
            gap: 2.4rem;

            overflow-x: auto;

            #Meal {
                width: 30.4rem;
                height: 46.2rem;

                padding: 2.4rem 2.4rem 4.6rem;
                position: relative;
                border-radius: 0.8rem;

                background-color: ${({ theme }) => theme.COLORS.DARK_200};

                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                gap: 1.5rem;

                #Svg {
                    width: 2.4rem;
                    height: 2.2rem;

                    background: none;
                    border: none;

                    position: absolute;
                    right: 1.6rem;
                    top: 1.6rem;

                    :hover {
                        transition: transform 400ms;
                        transform: scale(1.1);
                        opacity: 1;
                        cursor: pointer;
                    }
                }
                
                #ImageMeal {
                    width: 17.6rem;
                    height: 17.6rem;

                    border-radius: 50%;
                    

                    :hover {
                        transition: transform 400ms;
                        transform: scale(1.03);
                        opacity: 1;
                        cursor: pointer;
                    }
        
                }

                h1 {
                    width: 25.6rem;
                    font-family: "Poppins", sans-serif;
                    font-size: 2.4rem;
                    font-weight: bold;
                    text-align: center;
                }

                p {
                    font-family: "Roboto", sans-serif;
                    font-size: 1.4rem;
                }

                #Price {
                    font-family: "Roboto", sans-serif;
                    font-weight: 400;
                    font-size: 3.2rem;
                    color: ${({ theme }) => theme.COLORS.CAKE_200};

                    text-align: center;
                }

                #Order {
                    width: 20.8rem;
                    display: flex;
                    gap: 1.6rem;
                    align-items: center;
                }
            }
        }
    }

    @keyframes popup {
        0% {
            opacity: 0;
            transform: scale(1.4);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
  
`;