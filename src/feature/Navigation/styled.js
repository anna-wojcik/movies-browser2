import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const List = styled.ul`
    color: ${({ theme }) => theme.colors.navigation.content};
    font-size: 16px;
    font-weight: 500;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        gap: 12px;
        font-size: 10px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    padding: 12px 24px;
    color: ${({ theme }) => theme.colors.navigation.content};
    text-decoration: none;

    &.active {
        border: 1px solid ${({ theme }) => theme.colors.navigation.border};
        border-radius: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        padding: 8px 12px;
    }
`;