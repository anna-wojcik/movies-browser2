import styled from "styled-components";

export const Container = styled.div`
    height: 48px;
    width: 412px;
    background: ${({ theme }) => theme.colors.search.background};
    display: flex;
    align-items: center;
    gap: 16px;
    border: none;
    border-radius: 24px;
    padding: 12px 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        width: 100%;
        margin-bottom: 16px;
        margin-top: 8px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-size: 13px;
        height: 44px;
        padding: 14px 16px;
    }
`;

export const Image = styled.img`
    height: 24px;
    width: 24px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        height: 17px;
        width: 17px; 
    }
`;

export const Input = styled.input`
    border: none;
    width: 100%;
    color: ${({ theme }) => theme.colors.search.content};
    outline: none;
`;