import styled from "styled-components";

export const Main = styled.main`
    margin: 0 auto;
    max-width: 1408px;
    width: 100%;
    padding: 0 20px;
    margin-bottom: 80px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 60px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        padding: 0 16px;
        margin-bottom: 40px;
    }
`;