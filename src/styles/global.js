import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
   scroll-behavior: smooth;
  }

  body{
    background: rgb(22, 22, 27);
    -webkit-font-smoothing: antialiased;
  }

  body::-webkit-scrollbar {
    width: 0.5em;
    background: rgb(11, 10, 13);
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: rgba(38,225,175);
    outline: 1px solid slategrey;
  }

  body, input, button{
    font-family: 'Montserrat', sans-serif;
   
  }

  ::selection{

    background: #F5EFE1;
    color: #fff;
  }

  #root{
    max-width: 100%;
    margin: 0 auto;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  p{
    color: rgba(255,255,255,0.6); 
  }
`;
