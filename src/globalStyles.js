import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html{
    font-size: 62.5%;
}


:root{
     --darkBlue: #155263;
     --brightOrange: #ff6f3c;
     --darkYellow: #ff9a3c;
     --brightYellow: #ffc93c;

     --headlineFont: 'Ruda', Sans-Serif;
     --bodyFont: 'Roboto Slab', Serif;
}

h1, h2, h3, h4, h5, h6{
    font-family: var(--headlineFont);
}

p{
    font-family: var(---bodyFont) 
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

`;

export default GlobalStyle;
