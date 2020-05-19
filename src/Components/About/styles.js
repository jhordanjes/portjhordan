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

const digite = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
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
        margin-top: 10px;
        animation: ${jump} 1.1s linear infinite;

        @media (max-width: 768px) {
            margin-top: -20px;
        }
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
            font-size: 55px;
            font-weight: 600;
            color: #fff;
            text-align: start;
            letter-spacing: 2px;
            transition: 0.4s;

            b{
                color: #00c853;
                animation: ${digite} 0.9s infinite;
            }

            @media (max-width: 768px) {
                font-size: 40px;
            }
        }

        &:first-child{
            padding-right: 80px;
            animation: ${fadeleft} 0.9s linear;
            position: relative;

            &::before{
                content: '';
                position: absolute;
                width: 270px;
                height: 220px;
                border-radius: 50%;
                background: #212121;
                box-shadow: 0px 0px 600px rgba(255,255,255,0.1);
                transform: skewX(20deg);
                z-index: -1;
            }

            &::after{
                content: '';
                position: absolute;
                width: 250px;
                height: 240px;
                left: -5px;
                bottom: 1px;
                border-radius: 50%;
                background: #212121;
                transform: skewX(-20deg);
                z-index: -1;
            }
    
            @media (max-width: 768px) {
                padding: 0;
            }
        }

        &:last-child{
            animation: ${faderight} 0.9s linear;
            @media (max-width: 768px) {
                padding-top: 30px;
            }
        }
    }

    img{
        width: 240px;
        height: 240px;
        background-color: rgba(255,255,255,0.1);
        border-radius: 50%;
        justify-self: center;
        box-shadow: 0px 0px 100px rgba(255,255,255,0.1);
        border: 2px solid transparent;
        transition: 0.4s;

        &:hover{
            box-shadow: 0px 0px 100px rgba(255,255,255,0.2);
        }
    }

    p{
        margin-top: 20px;
        b{
            color: #00c853;
        }
    }
`;
