import styled from "styled-components";

export const ContainerMobile = styled.div`
    width: 100vw;
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

export const ContainerDesktop = styled.div`
    width: 100vw;
    height: 7.7rem;
    padding: 2.3rem 12.3rem;

    background-color: ${({theme}) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-between;
    align-items: center;

    > section {
        display: flex;
        align-items: center;
        gap: 0.6rem;

        > img {
            width: 3.0rem;
        }

        > span {
            font-size: 2.4rem;
            font-weight: bold;
            
            color: ${({theme}) => theme.COLORS.LIGHT_700};
        }
    }

    > span {
        font-family: "Roboto", sans-serif;
        font-size: 1.4rem; 
    }
`;