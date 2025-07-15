import styled, { keyframes } from "styled-components";
import { ReactComponent as LoaderIcon } from './loader.svg';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    } 
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
    margin-top: 120px;
    display: flex;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px){
        margin-top: 24px; 
    }
`;

export const StyledLoaderIcon = styled(LoaderIcon)`
    animation: ${rotate} 2s linear infinite;
    display: inline-block;
    height: 91px;
    width: 91px;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px){
        height: 35px;
        width: 35px; 
    }
`;