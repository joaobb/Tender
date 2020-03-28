import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root, .App {
        min-height: 100%;
        height: 100%;
    }

    button:hover {
        cursor: pointer;
    }
`