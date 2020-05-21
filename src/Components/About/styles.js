import styled, { keyframes } from 'styled-components';

const jump = keyframes`
  0% {
    transform: translateY(40%);
  }
  25% {
    transform: translateY(100%);
  }
  50% {
      transform: translateY(70%);
  }
  75% {
      transform: translateY(100%);
  }
  100% {
      transform: translateY(100%);
  }
`;

const faderight = keyframes`
    from {
        transform: translateX(70px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const fadeleft = keyframes`
    from {
        transform: translateX(-70px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const boolone = keyframes`
    0% {
        width: 220px;
        transform: skewX(0deg);
    }
    25% {
        width: 230x;
        transform: skewX(10deg);
    }
    50% {
        width: 240px;
        transform: skewX(25deg);
    }
    75%{
        width: 230x;
        transform: skewX(10deg);
    }
    100%{
        width: 220px;
        transform: skewX(0deg);
    }
`;

const booltwo = keyframes`
    0% {
        width: 220px;
        transform: skewX(-25deg);
    }
    25% {
        width: 230px;
        transform: skewX(-10deg);
    }
    50% {
        width: 240px;
        transform: skewX(0deg);
    }
    75%{
        width: 230px;
        transform: skewX(-10deg);
    }
    100%{
        width: 220px;
        transform: skewX(-25deg);
    }
`;

export const Container = styled.div`
    width: 100%;
    margin: 75px 0px;
    padding: 25px 170px 50px 170px;
    

    @media (max-width: 768px) {
        padding: 0px 25px 55px 25px;
    }

    >div{
        text-align: center;
    }

    svg{
        color: rgb(255,255,255,0.9);
        margin-top: 45px;
        animation: ${jump} 1.7s linear infinite;
        transform: rotate(70deg);
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: grid;
    }

    div{
        margin: auto;
        text-align: start;

        span{
            font-size: 25px;
            color: #fff;
            font-weight: 600;
            text-align: start;
            letter-spacing: 2px;
            transition: 1.9s;
            position: relative;


            b{
                color: #00c853;
            }

            &::before{
                content: '';
                position: absolute;
                width: 170px;
                height: 15px;
                left: 0px;
                top: 10px;
                background: rgba(255,255,255,0.1);
                z-index: -1;
                transform: skewY(-3deg);
            }
        }

        &:first-child{
            padding-right: 80px;
            animation: ${fadeleft} 0.9s linear;
            position: relative;

            &::before{
                content: '';
                position: absolute;
                animation: ${boolone} 1.7s linear infinite;
                height: 230px;
                border-radius: 50%;
                left: 0px;
                background: rgba(255,255,255,0.1);
                z-index: -1;
            }
            &::after{
                content: '';
                position: absolute;
                animation: ${booltwo} 1.7s linear infinite;
                height: 230px;
                left: 0px;    
                border-radius: 50%;
                background: rgba(255,255,255,0.1);
                z-index: -1;
            }
    
            @media (max-width: 768px) {
                padding: 0;
            }
        }

        &:last-child{
            animation: ${faderight} 0.9s linear;
            @media (max-width: 768px) {
                padding-top: 70px;
            }
        }
    }

    img{
        width: 230px;
        height: 230px;
        background-color: rgba(255,255,255,0.1);
        border-radius: 50%;
        justify-self: center;
        box-shadow: 0px 0px 500px rgb(1,1,1);
        border: 2px solid transparent;
        transition: 0.4s;
    }

    p{
        margin-top: 20px;
        b{
            color: #00c853;
        }
    }
`;
