import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 0.5rem;
    border: none;
    padding: 1.2rem 0;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    font-family: "Poppins";
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    line-height: 2.4rem;
    text-align: center;

    img {
        width: 2.2rem;
        height: 2.2rem;
    }
`;