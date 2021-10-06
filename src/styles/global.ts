import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    :root {
        --background: #f0f2f5;
        --blue: #5429cc;
        --blue-light: #6495ED;

        --text-body: #363f5f;

        --table-head: #969cb3;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1 {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`