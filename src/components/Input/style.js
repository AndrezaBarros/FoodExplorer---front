import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 1.4rem;
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    > input {
        width: 100%;
        height: 100%;

        background: transparent;
        border: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-weight: 400;
    }
`;