import styled, { css } from "styled-components";

export const VoteParagrapgh = styled.p`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0;
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.vote.content};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    };
    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-weight: 600;
        font-size: 13px;
    };

    ${({ $inTileMovie }) => $inTileMovie && css`
        font-size: 16px;
        font-weight: 600;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 14px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
            font-size: 12px;
        }
    `};
    
    ${({ $inBackdrop }) => $inBackdrop && css`
        font-size: 30px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.vote.contentInBackdrop};
        line-height: 1.3;
        width: 150px;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 20px;
            width: 100%;
        };

        @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
            font-size: 14px;
        };
    `};
`;

export const Star = styled.img`
    height: 24px;
    width: 24px;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 20px;
        width: 20px;
    };
    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        height: 16px;
        width: 16px;
    };

    ${({ $inBackdrop }) => $inBackdrop && css`
        height: 40px;
        width: 40px;
    `};
`;

export const Span = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.vote.content};
    align-self: flex-end;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-size: 13px;
        color: ${({ theme }) => theme.colors.vote.subContent};
        align-self: center;
    };  

    ${({ $skale }) => $skale && css`
        margin-right: 4px;
        @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
            display: none;
        };
    `};

    ${({ $inTileMovie }) => $inTileMovie && css`
        font-size: 16px;
        color: ${({ theme }) => theme.colors.vote.subContent};
        align-self: center;
        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 14px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
            font-size: 13px;
        }
    `};

    ${({ $inBackdrop }) => $inBackdrop && css`
        font-size: 16px;
        color: ${({ theme }) => theme.colors.vote.contentInBackdrop};

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 14px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
            font-size: 10px;
            color: ${({ theme }) => theme.colors.vote.contentInBackdrop};
        };
        ${({ $skale }) => $skale && css`
            @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
                margin-right: 0;
                display: inline;
            };
        `};
    `};
`;

