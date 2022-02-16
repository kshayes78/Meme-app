import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Roboto:wght@400;700&display=swap");

*{
    box-sizing: border-box
}
 body {
     background: #082032;
     color: white;
     font-family: "Anton", sans-serif;
     font-size: 1.15em; 
     margin: 10
 }

`;
export default GlobalStyles;
