import styled from "styled-components";

export const Title = styled.h1`
    font-size: 32px;
    font-size: 600;
    color: ${({ theme }) => theme.colors.title.content};
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        font-size: 26px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-size: 20px;
    }
`;