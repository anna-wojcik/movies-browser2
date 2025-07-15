import styled from "styled-components";
import { ReactComponent as DangerIcon } from "./danger.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    gap: 24px;
    margin-top: 180px;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px){
        margin-top: 120px;
        gap: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px){
        margin-top: 60px;
        gap: 16px;
    }
`;

export const StyledDangerIcon = styled(DangerIcon)`
    height: 120px;
    width: 120px;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px){
        height: 90px;
        width: 90px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px){
        height: 60px;
        width: 60px;
    }
`;

export const Title = styled.h1`
    font-size: 38px;
    font-weight: 700;
    text-align: center;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px){
        font-size: 28px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px){
        font-size: 18px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    max-width: 500px;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px){
        max-width: 350px;
        font-size: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px){
        max-width: 240px;
        font-size: 12px;
    }
`;

