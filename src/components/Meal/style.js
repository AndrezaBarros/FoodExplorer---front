import styled from "styled-components";

export const Container = styled.div`
    width: 21rem;
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

        position: absolute;
        right: 1.6rem;
        top: 1.6rem;
    }

    #ImageMeal {
        width: 8.8rem;
        height: 8.8rem;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
    }

    #Price {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};

        text-align: center;
    }

    #Button {
        padding: 5px 0 4px 0;
    }
`;