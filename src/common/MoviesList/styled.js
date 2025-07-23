import styled from "styled-components";

export const MoviesList = styled.div`
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;