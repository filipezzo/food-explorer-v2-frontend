import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body{
  background: black;
  background: ${({ theme }) => theme.colors['dark-400']};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors['light-base']};
}

button, input, text-area{
  color: ${({ theme }) => theme.colors['light-base']};
}

button{
  cursor: pointer;
}

a{
  text-decoration: none;
}


`
