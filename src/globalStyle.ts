import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #f8f8f8;
    font-family: sans-serif;
  }

  img{
    width: 100%;
    height: auto;
  }
`