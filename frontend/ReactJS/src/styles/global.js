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

    .shadowed {
        box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.1);
    }

    .shadowed--inset {
        box-shadow: inset 0 4px 8px 4px rgba(0, 0, 0, 0.1);
    }

    .toggleable {
        cursor: pointer;

        font-size: 1rem;
        font-weight: bold;

        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;

        color: black;

        height: 48px;
        width: 48px;
        min-width: 48px;

        border-radius: 50%;

        font-size: 1.4rem;

        background-color: white;

        box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.1);
    }

    .toggleable--active {
        box-shadow: inset 0 4px 8px 4px rgba(0, 0, 0, 0.1);
    }

    button:hover {
        cursor: pointer;
    }

    .centralized {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sscroll::-webkit-scrollbar {
        width: 5px;
    }

    .sscroll::-webkit-scrollbar-thumb {
        background-color: #a8a8a8;
        border-radius: 10px;
    }
`;
