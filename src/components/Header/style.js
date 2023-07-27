import styled from "styled-components";

export const ContainerMobile = styled.div`
    width: 100vw;
    height: 11.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    padding: 5.6rem 2.8rem 2.4rem;

    #Home {
        height: 3.4rem;

        display: flex;
        justify-content: space-between;
        align-items: center;


        #logo {
        display: flex;
        align-items: center;
        gap: 0.8rem;

            :hover {
                transition: transform 400ms;
                transform: scale(1.1);
                opacity: 1;
                cursor: pointer;
            }
        
            > img {
                width: 2.5rem;
            }

            > span {
                font-weight: bold;
                font-size: 2.1rem;
            }

            #Admin {
                font-size: 1.4rem;
                font-weight: 100;
                color: ${({ theme }) => theme.COLORS.CAKE_200};
            }
        }
    }

    #Menu {
        width: 100%;

        display: flex;
        gap: 1.6rem;
        align-items: center;

        > h1 {
            font-family: "Roboto", sans-serif;
            font-size: 2.1rem;
            font-weight: 400;
        }
    }
`;

export const OrderMobile = styled.div`
    position: relative;
    width: 3.7rem;

    display: flex;
    align-items: flex-end;
    
    > img {
        width: 2.6rem;
    }

    > label {
        display: flex;

        button {
            position: absolute;
            bottom: 1.1rem;
            left: 1.5rem;

            background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
            border: none;
            border-radius: 50%;

            width: 2rem;
            height: 2rem;

            font-family: "Poppins", serif;
            font-size: 1.4rem;
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        input {
            display: none;
        }

        &:hover{
            transform: scale(1.1);
            transition: transform 0.3s;

            cursor: pointer;
        }
    }

`;

export const ContainerDesktop = styled.div`
    width: 100vw;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    padding: 2.8rem 12.3rem;

    #Main {
        display: flex;
        align-items: center;
        justify-content: space-between;

        section {
            display: flex;
            align-items: center;
            gap: 0.8rem;

            img {
                width: 3.0rem;
            }

            span {
                width: 14.6rem;
                font-family: "Roboto", sans-serif;
                font-weight: 700;
                font-size: 2.4rem;

                position: relative;
            }

            #Admin {
                position: absolute;
                left: 26.5rem;
                top: 6.5rem;

                font-family: "Roboto", sans-serif;
                font-size: 1.4rem;
                color: ${({ theme }) => theme.COLORS.CAKE_200};
            }
            
        }

        div {
            position: relative;

            img {
                position: absolute;
                top: 1.2rem;
                left: 15.5rem;

                width: 2.4rem;
                height: 2.4rem;
            }

            #Input {
                width: 58.1rem;
                height: 4.8rem;
                padding: 1.2rem 1.4rem;
                border-radius: 0.8rem;
                border: none;
                
                display: flex;
                align-items: center;
                text-align: center;
                
                background-color: ${({ theme }) => theme.COLORS.DARK_900};
                color: ${({ theme }) => theme.COLORS.LIGHT_100};;
            }
        }

        #divButtonText {
            width: 10.8rem;

            #Favorites {
                font-family: "Roboto", sans-serif;
                font-size: 1.6rem;
            }
        }
        

        #Button {
            max-width: 21.6rem;
        }
    }
`;