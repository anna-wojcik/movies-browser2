import styled, { css } from "styled-components";
import { ReactComponent as LeftArrow } from "./leftArrow.svg";
import { ReactComponent as RightArrow } from "./rightArrow.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin: 56px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px){
        gap: 8px;    
        margin: 50px 0;     
    }

    ${({ $buttons }) => $buttons && css`
        gap: 12px;
        margin: 0;

        @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px){
            margin: 0;     
        }
    `}
`;

export const Button = styled.button`
    padding: 8px 16px;
    border-radius: 5px;
    height: 36px;
    border: none;
    background: ${({ theme }) => theme.colors.pagination.button};
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;

    &:disabled {
        background: ${({ theme }) => theme.colors.pagination.buttonDisabled};
    }

    &:not(:disabled):hover {
        background: ${({ theme }) => theme.colors.pagination.hover};
    }

    &:not(:disabled):active {
        border: 2px solid ${({ theme }) => theme.colors.pagination.active};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px){
        padding: 8px 12px;
        height: 24px;
    }
`;

export const StyledLeftArrow = styled(LeftArrow)`
    color: ${({ theme }) => theme.colors.pagination.arrow};
    width: 7px;
    height: 11px;

    ${({ $buttonDisabled }) => $buttonDisabled && css`
        color: ${({ theme }) => theme.colors.pagination.arrowDisabled};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px){
        width: 5px;
        height: 8px;
    }
`;

export const StyledRightArrow = styled(RightArrow)`
    color: ${({ theme }) => theme.colors.pagination.arrow};
    width: 7px;
    height: 11px;

    ${({ $buttonDisabled }) => $buttonDisabled && css`
        color: ${({ theme }) => theme.colors.pagination.arrowDisabled};
    `}
    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px){
        width: 5px;
        height: 8px;
    }
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.pagination.content};
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    display: flex;
    gap: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px){
        font-size: 10px;
        gap: 2px;
    }
`;

export const BoldContent = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.pagination.contentBold};
`;