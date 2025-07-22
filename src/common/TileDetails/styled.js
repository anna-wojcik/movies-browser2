import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.tileDetails.background};
    gap: 40px;

    ${({ $internal }) => $internal && css`
        padding: 40px;

        @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
            padding: 0;
        };

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            gap: 30px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
            gap: 16px;
        };
    `};

    ${({ $external }) => $external && css`
        padding: 0;

        @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
            flex-direction: column;
            padding: 40px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            padding: 30px;
            gap: 30px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
            padding: 16px;
            gap: 16px;
        }
    `};
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 8px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        gap: 20px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        padding: 4px 0;
        gap: 16px;
    };

    ${({ $info }) => $info && css`
        gap: 8px;
        padding: 0;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            gap: 8px;
            padding: 0;
        };
    `};
`;

export const Image = styled.img`
    border-radius: 5px;
    ${({ $person }) => $person && css`
        max-height: 564px;
        max-width: 399px;

        @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
            height: 364px;
            width: auto;
        };

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            height: 264px;
            width: auto;
        };

        @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
            height: 163px;
            width: auto;
        }
    `};

    ${({ $movie }) => $movie && css`
        max-height: 464px;
        max-width: 312px;

        @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
            height: 364px;
            width: auto;
        };

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            height: 264px;
            width: auto;
        };

        @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
            height: 169px;
            width: auto;
        }
    `};
`;

export const Title = styled.h2`
    font-size: 34px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.tileDetails.content};
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 24px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-weight: 500;
        font-size: 14px;
    };
`;

export const Year = styled.p`
    font-size: 22px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.tileDetails.content};
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-size: 13px;
        color: ${({ theme }) => theme.colors.tileDetails.info};
    };
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 18px;
    font-weight: 400;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
        gap: 6px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-size: 12px;
        gap: 4px;
    };
`;

export const Info = styled.p`
    color: ${({ theme }) => theme.colors.tileDetails.info};
    margin: 0;

    ${({ $movie }) => $movie && css`
        @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
            display: none;
        };
    `};
`;

export const InfoValue = styled.p`
    color: ${({ theme }) => theme.colors.tileDetails.infoValue};
    margin: 0;
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.tileDetails.content};
    margin: 0;
    line-height: 1.6;
    word-wrap: break-word;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-size: 14px;
    };
`;