import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const MainMobile = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.1rem 3.2rem 4.3rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    overflow-y: scroll;

    animation-name: downtop;
    animation-duration: 900ms;

    #ButtonText {
        img {
           width: 2.2rem;
           height: 2.2rem;
        }

        font-size: 1.7rem;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 2.4rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        label {
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            margin-bottom: -1rem;
        }

        #UploadImage {
            border: none;
            border-radius: 0.8rem;
            padding: 1rem 3.2rem;

            background-color: ${({ theme }) => theme.COLORS.DARK_800};

            display: flex;
            align-items: center;
            gap: 0.8rem;
            position: relative;

            font-family: "Poppins", sans-serif;
            font-size: 1.4rem;
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            line-height: 2.4rem;
            
            > input[type=file] {
                opacity: 0;
            }

            > span {
                position: absolute;
                left: 7rem;
            }
        }

        .Input {
            padding: 1.6rem 1.4rem;
            border: none;
            border-radius: 0.8rem;

            background-color: ${({ theme }) => theme.COLORS.DARK_800};

            display: flex;
            align-items: center;
            gap: 0.8rem;
            position: relative;

            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

        select {
            width: 100%;
            
            padding: 1.3rem 1.6rem;
            border: none;
            border-radius: 0.5rem;

            font-family: "Roboto", sans-serif;
            font-size: 1.4rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            line-height: 2.2rem;
            
            appearance: none;
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='C4C4CC'><path d='M4.4545 8.75358C4.89384 8.31424 5.60616 8.31424 6.0455 8.75358L12 14.7081L17.9545 8.75358C18.3938 8.31424 19.1062 8.31424 19.5455 8.75358C19.9848 9.19292 19.9848 9.90523 19.5455 10.3446L12.7955 17.0946C12.3562 17.5339 11.6438 17.5339 11.2045 17.0946L4.4545 10.3446C4.01517 9.90523 4.01517 9.19292 4.4545 8.75358Z' fill='%23C4C4CC'/></svg>");
            background-position: top 50% left 95%;
            background-repeat: no-repeat;
            background-color: ${({ theme }) => theme.COLORS.DARK_900};

        }
        
        #Ingredients {
            width: 100%;
            padding: 0.8rem;
            background-color: ${({ theme }) => theme.COLORS.DARK_800};

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1.6rem;

            overflow: hidden;
            flex-wrap: wrap;
            border-radius: 0.5rem;

            > div {
                width: fit-content;
                padding: 0.8rem 1.6rem;
                border-radius: 0.8rem;

                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 0.8rem;

                background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
                color: ${({ theme }) => theme.COLORS.LIGHT_100};

                > input {
                    width: 7rem;
                    background: transparent;
                    border: none;

                    font-family: "Roboto", sans-serif;
                    font-size: 1.6rem;
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};
                }

                > button {
                    padding: 0;
                    background: transparent;
                    display: flex;
                    align-items: end;

                    border: none;

                    > img {
                        width: 0.8rem;
                        height: 0.8rem;

                        :hover {
                            transition: transform 400ms;
                            transform: scale(1.4);
                            opacity: 1;
                            cursor: pointer;
                        }
                    }
                }
            }

            .outlined {
                background-color: transparent;
                border-width: 1px;
                border-style: dashed;
                border-color: ${({ theme }) => theme.COLORS.LIGHT_500};

                > input {
                    font-family: "Roboto", sans-serif;
                    font-size: 1.6rem;
                    color: ${({ theme }) => theme.COLORS.LIGHT_500};
                }

                > button {
                    padding: 0;
                    background: transparent;
                    display: flex;
                    align-items: end;

                    > img {
                        width: 1rem;
                        height: 1rem;
                    }
                }
            }
        }

        #Description {
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
            border: none;
            border-radius: 0.8rem;

            padding: 1.4rem;

            font-family: "Roboto", sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.LIGHT_500};;
        }

        #Submits {
            width: 100%;

            display: flex;
            flex-direction: row;
            gap: 3.2rem;

            #ButtonRemove {
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
            }
        }
    }

    @keyframes downtop {
        0% {
            opacity: 0;
            transform: translateY(15px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const MainDesktop = styled.div`
    width: 100%;
    height: 100%;
    padding: 4rem 12.5rem 11.6rem 16.5rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    overflow-y: scroll;

    animation-name: downtop;
    animation-duration: 900ms;

    #ButtonText {
        img {
           width: 2.2rem;
           height: 2.2rem;
        }

        font-size: 2.4rem;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 3.2rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        max-width: 112.0rem;

        div {
            display: flex;
            flex-direction: column;
            gap: 1.6rem;
        }

        label {
            margin-bottom: -1rem;

            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        .Input {
                padding: 1.6rem 1.4rem;
                border: none;
                border-radius: 0.8rem;
                width: 46.3rem;

                background-color: ${({ theme }) => theme.COLORS.DARK_800};

                display: flex;
                align-items: center;
                gap: 0.8rem;
                position: relative;

                color: ${({ theme }) => theme.COLORS.LIGHT_500};
            }

        #Line1 {
            display: flex;
            gap: 3.2rem;

            #UploadImage {
                border: none;
                border-radius: 0.8rem;
                padding: 1.2rem 3.2rem 1.2rem 6.4rem;
                width: 22.9rem;

                background-color: ${({ theme }) => theme.COLORS.DARK_800};

                display: flex;
                align-items: center;
                gap: 0.8rem;
                position: relative;

                font-family: "Poppins", sans-serif;
                font-size: 1.4rem;
                font-weight: 100;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                line-height: 2.4rem;

                img {
                    position: absolute;
                    left: 3rem;
                }
            
                > input[type=file] {
                    width: 22.9rem;
                    opacity: 0;
                    position: absolute;
                }
            }

            select {
                width: 36.4rem;
                
                padding: 1.3rem 1.6rem;
                border: none;
                border-radius: 0.5rem;

                font-family: "Roboto", sans-serif;
                font-size: 1.4rem;
                font-weight: 400;
                color: ${({ theme }) => theme.COLORS.LIGHT_400};
                line-height: 2.2rem;
                
                appearance: none;
                background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='C4C4CC'><path d='M4.4545 8.75358C4.89384 8.31424 5.60616 8.31424 6.0455 8.75358L12 14.7081L17.9545 8.75358C18.3938 8.31424 19.1062 8.31424 19.5455 8.75358C19.9848 9.19292 19.9848 9.90523 19.5455 10.3446L12.7955 17.0946C12.3562 17.5339 11.6438 17.5339 11.2045 17.0946L4.4545 10.3446C4.01517 9.90523 4.01517 9.19292 4.4545 8.75358Z' fill='%23C4C4CC'/></svg>");
                background-position: top 50% left 95%;
                background-repeat: no-repeat;
                background-color: ${({ theme }) => theme.COLORS.DARK_800};

            }
        }

        #Line2 {
        display: flex;
        gap: 3.2rem;

            #Ingredients {
                width: 83.7rem;
                padding: 0.8rem;
                background-color: ${({ theme }) => theme.COLORS.DARK_800};

                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1.6rem;

                overflow: hidden;
                flex-wrap: wrap;
                border-radius: 0.5rem;

                > div {
                    width: fit-content;
                    padding: 0.8rem 1.6rem;
                    border-radius: 0.8rem;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.8rem;

                    background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};

                    > input {
                        width: 7rem;
                        background: transparent;
                        border: none;

                        font-family: "Roboto", sans-serif;
                        font-size: 1.6rem;
                        color: ${({ theme }) => theme.COLORS.LIGHT_100};
                    }

                    > button {
                        padding: 0;
                        background: transparent;
                        display: flex;
                        align-items: end;

                        border: none;

                        > img {
                            width: 0.8rem;
                            height: 0.8rem;

                            :hover {
                                transition: transform 400ms;
                                transform: scale(1.4);
                                opacity: 1;
                                cursor: pointer;
                            }
                        }
                    }
                }

                .outlined {
                    background-color: transparent;
                    border-width: 1px;
                    border-style: dashed;
                    border-color: ${({ theme }) => theme.COLORS.LIGHT_500};

                    > input {
                        font-family: "Roboto", sans-serif;
                        font-size: 1.6rem;
                        color: ${({ theme }) => theme.COLORS.LIGHT_500};
                    }

                    > button {
                        padding: 0;
                        background: transparent;
                        display: flex;
                        align-items: end;

                        > img {
                            width: 1rem;
                            height: 1rem;
                        }
                    }
                }
            }

            #Price {
                width: 25.1rem;
            }
        }
        
        #Description {
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
            border: none;
            border-radius: 0.8rem;

            padding: 1.4rem;

            font-family: "Roboto", sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.LIGHT_500};;
        }

        #Submits {
            width: 100%;

            display: flex;
            flex-direction: row;
            justify-content: end;
            align-items: end;
            gap: 3.2rem;

            #ButtonSave {
                width: 17.2rem;
            }

            #ButtonRemove {
                width: 17.2rem;
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
            }
        }
    }

    @keyframes downtop {
        0% {
            opacity: 0;
            transform: translateY(15px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;