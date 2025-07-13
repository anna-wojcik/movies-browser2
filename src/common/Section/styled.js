import styled from "styled-components";

export const StyledSection = styled.section`
    margin-top: 64px;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        margin-top: 44px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        margin-top: 24px;
    }
`;

export const Wrapper = styled.div`
    margin-top: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        margin-top: 18px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        margin-top: 12px;
    }
`;