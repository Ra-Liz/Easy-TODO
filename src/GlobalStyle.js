import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html,
    body {
        width: 100%;
        height: 100%;
        font-size: 16px;
    }

    #root {
        width: 100%;
        height: 100%;
    }

    .no-hover:hover {
        background-color: rgba(0, 0, 0, 0) !important;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(255, 128, 0, .6);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 128, 0, .8);
    }
    
    @media (max-width: 900px) {
        #navbar {
            display: none;
        }
    }
`;

export default GlobalStyle;
