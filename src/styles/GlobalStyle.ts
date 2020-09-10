import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiased !important;
    }

    html, body, :root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
    }

    :root {    
        --main-background: #f5f6fa;
        --white: #fff;
        --black: #333;
        --gray: #a6a6a8;
        --light-gray: #d6d6d6;    

        --purple: #432cff;        
        --blue: #0186d1;
    }
`;
