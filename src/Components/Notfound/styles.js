import styled,{ keyframes } from 'styled-components';

const rolate = keyframes`
  0% {
    transform: translateX(5px);
  }
  25% {
    transform: translateX(0px);
  }

  50% {
      transform: translateX(-5px);
  }

  75% {
      transform: translateX(0px);
  }
  100% {
      transform: translateX(5px);
  }
`;

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    display: grid;
  }
`;

export const First = styled.div`
    background: #00c851;
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        height: 50vh;
    }

    div{
        margin: auto;
        text-align: center;
        animation: ${rolate} 1.1s linear infinite;
    }

    span{
        font-size: 30px;
    }

    h1{
        font-size: 120px;
    }
`;

export const Last = styled.div`
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        height: 50vh;
    }

    div{
        margin: auto;
        padding: 0px 50px;
    }

    p{
        font-size: 30px;
    }

    button{
        height: 60px;
        margin-top: 20px;
        border: 0;
        background: rgba(255,255,255,0.7);
        padding: 0px 20px;
        font-size: 20px;
        font-weight: bold;

        &:hover{
            background: rgba(255,255,255,0.9);
        }
    }
`;

