import styled from "styled-components";

export const HeaderStyled = styled.header`
    height: 94px;
    background: ${({ theme }) => theme.colors.header.background};
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        padding: 0 16px;
        height: 100%;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 80px;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        gap: 19px;
        padding: 24px 0;
        width: 100%;
        justify-content: space-between;
    }
`;