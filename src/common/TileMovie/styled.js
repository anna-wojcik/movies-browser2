import styled, { css } from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.tileMovie.background};
    gap: 16px;
    height: 100%;
    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        flex-direction: row;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 434px;
    border-radius: 5px;
    object-fit: cover;
    aspect-ratio: 2/3;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        max-height: 169px;
        width: auto;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    
    &:hover {
        box-shadow: 0px 0px 10px 2px rgba(161, 161, 162, 1);
    }
`;

export const Box = styled.div`
    ${({ $external }) => $external && css`
        display: flex;
        flex-direction: column;
        height: 100%;

        @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
            gap: 8px;
        }
    `}

    ${({ $internal }) => $internal && css`
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
        height: 100%;

        @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
            height: auto;
            margin-bottom: 0;

            & > :nth-child(2) {
                margin-top: -4px;
            }
        }
    `}
`;

export const Title = styled.h2`
    font-size: 22px;
    font-weight: 500;
    margin: 0;
    color: ${({ theme }) => theme.colors.tileMovie.content};
    line-height: 1.3;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        font-size: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-size: 14px;
    }
`;

export const Paragraph = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.tileMovie.subContent};
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-size: 13px;
    }
`;

export const Role = styled.span`
    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        display: none;
    }
`;