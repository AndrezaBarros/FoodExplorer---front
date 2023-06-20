import styled from "styled-components";

export const Container = styled.div`
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
        
            > img {
                width: 2.5rem;
            }

            > span {
                font-weight: bold;
                font-size: 2.1rem;
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

export const Order = styled.div`
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