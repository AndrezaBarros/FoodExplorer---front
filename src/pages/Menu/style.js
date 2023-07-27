import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3.6rem;

    animation-name: leftrigth;
    animation-duration: 900ms;

    #Main {
        height: 100%;
        padding: 0 2.8rem 0 2.8rem;

        section {
            margin-top: 3.6rem;

            #ButtonText {
                padding: 1rem;
                border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.DARK_1000};

                :hover {
                    transition: transform 400ms;
                    transform: scale(1.03);
                    opacity: 1;
                    cursor: pointer;
                }
            }

        }
    }

    @keyframes leftrigth {
        0% {
            opacity: 0;
            transform: translateX(-15px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;