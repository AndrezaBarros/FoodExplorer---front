import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 7.7rem;
    padding: 30px 27px;

    background-color: ${({theme}) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-between;
    align-items: center;

    > section {
        display: flex;
        align-items: center;
        gap: 0.6rem;

        > img {
            width: 1.8rem;
        }

        > span {
        font-size: 1.5rem;
        font-weight: 700;
        
        color: ${({theme}) => theme.COLORS.LIGHT_700};
        }
    }

    > span {
        font-family: "DM Sans", serif;
        font-size: 1.2rem; 
    }
`;