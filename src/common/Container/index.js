import styled from "styled-components";

export const Container = styled.div`
    padding: 0 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        padding: 0 16px;
    }
`;