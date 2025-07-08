import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: ${({ theme }) => theme.colors.bodyBackground};
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
`;