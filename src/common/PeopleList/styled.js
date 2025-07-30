import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const List = styled.ul`
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
`;

export const Item = styled.li`
    background: ${({ theme }) => theme.colors.peopleList.background};
    border-radius: 5px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    height: 100%;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        padding: 12px;
        gap: 10px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        padding: 8px;
        gap: 8px;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;

    &:hover {
        box-shadow: 0px 0px 10px 2px rgba(161, 161, 162, 1);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 231px;
    border-radius: 5px;
    object-fit: cover;
    aspect-ratio: 2/3;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        max-height: 178px;
    }
`;

export const Name = styled.h2`
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    margin: 0;
    color: ${({ theme }) => theme.colors.peopleList.content};

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        font-size: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-size: 14px;
    }
`;

export const Role = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    color: ${({ theme }) => theme.colors.peopleList.role};
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        font-size: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-size: 13px;
    }
`;