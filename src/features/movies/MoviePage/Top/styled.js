import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.backdrop.background};
    display: flex;
    justify-content: center;
    padding: 0 20px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        padding: 0px 16px;    
    };
`;

export const Backdrop = styled.div`
    width: 100%;
    max-width: 1368px;
    aspect-ratio: 16 / 9;
    background-image: ${({ backdrop_url }) => `url(${backdrop_url})`};
    background-size: cover;
    background-position: center;
    box-shadow: inset 0px 0px 30px 20px rgba(0, 0, 0, 1);
    display: flex;
    align-items: flex-end;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        box-shadow: inset 0px -6px 25px 15px rgba(0, 0, 0, 1);
        margin: 0 10px;
    };
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 56px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        gap: 14px;
        margin-bottom: 38px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        gap: 4px;
        margin-bottom: 8px;
    };
`;

export const Title = styled.h2`
    font-size: 64px;
    font-weight: 600;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.backdrop.content};
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 44px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-size: 24px;
    };
`;