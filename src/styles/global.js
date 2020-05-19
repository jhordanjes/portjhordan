import { createGlobalStyle, keyframes } from 'styled-components';

const colors = keyframes`
  from {
    background: #141414;
  }
  to {
    background: #000;
  }
`;

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
    background: #141414;
    animation: ${colors} 3.5s linear infinite;
    -webkit-font-smoothing: antialiased;
  }

  body::-webkit-scrollbar {
    width: 0.5em;
    background: #212121;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: #00c853;
    outline: 1px solid slategrey;
  }

  body, input, button{
    font-family: 'Montserrat', sans-serif;
   
  }

  ::selection{
    background: rgba(255,255,255,0.2);
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
