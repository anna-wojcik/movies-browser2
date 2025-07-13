import styled from "styled-components";

export const HeaderStyled = styled.header`
    height: 94px;
    background: ${({ theme }) => theme.colors.header.background};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        height: 100%;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        padding: 0 16px;
    }
`;

export const Container = styled.div`
    max-width: 1368px;
    width: 100%;
    display: flex;
    
    align-items: center;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        flex-direction: column;
        align-items: flex-start;
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