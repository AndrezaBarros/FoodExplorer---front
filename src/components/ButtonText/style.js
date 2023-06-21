import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;

    background: transparent;
    border: none;

    font-family: "Poppins", serif;
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
`;