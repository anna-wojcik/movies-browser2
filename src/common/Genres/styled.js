import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        gap: 12px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        gap: 8px;
    };

    ${({ $inTileMovie }) => $inTileMovie && css`
        gap: 8px;
        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            gap: 8px;
        };
    `}
`;

export const Genre = styled.div`
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.genres.content};
    background: ${({ theme }) => theme.colors.genres.background};
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 6px 12px;
        font-size: 12px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        padding: 4px 8px;
        font-size: 10px;
    };
`;