import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3.6rem;

    #Main {
        height: 100%;
        padding: 0 2.8rem 0 2.8rem;

        section {
            margin-top: 3.6rem;

            div {
                padding: 1rem;
                border-bottom: 0.1rem solid ${({theme}) => theme.COLORS.DARK_1000};

                > a {
                font-family: "Poppins", sans-serif;
                font-size: 2.4rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};

                text-decoration: none;
            }
            }
        }
    }
`;