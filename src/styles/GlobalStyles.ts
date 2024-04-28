import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        background-color: #F9F9F9;
;       
    }

    body, button, input{
        font-family: 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
        

        
    }
`