import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        color: gray;
    }

    html, body, #root {
        height: 100%;
    }
`;