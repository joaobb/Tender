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
        height: 100vh;
    }

    button:hover {
        cursor: pointer;
    }

    .sscroll::-webkit-scrollbar {
        width: 5px;
    }

    .sscroll::-webkit-scrollbar-thumb {
        background-color: #a8a8a8;
        border-radius: 10px;
    }
`;
