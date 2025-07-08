import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Image = styled.img`
    height: 40px;
    width: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        height: 17px;
        width: 17px;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.logo.content};
    font-size: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-size: 13px;
        gap: 8px;
    }
`;