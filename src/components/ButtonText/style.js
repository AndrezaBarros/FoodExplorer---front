import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    display: flex;
    align-items: center;

    background: transparent;
    border: none;

    font-family: "Poppins", serif;
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    :hover {
        transition: transform 400ms;
        transform: scale(1.03);
        opacity: 1;
        cursor: pointer;
    }
`;