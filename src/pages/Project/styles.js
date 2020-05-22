import styled from 'styled-components';
import { word } from '../../util/keyframes';

export const Description = styled.div`
    width: 100%;
    padding: 90px 170px;
    position: relative;

    p{
        margin-top: 20px;
    }

    b{
        color: rgba(38,225,175);
    }

    &::before{
        content: '';
        width: 130px;
        height: 130px;
        position: absolute;
        right: 70px;
        bottom: -70px;
        z-index: -1;
        transform: rotate(45deg);
        border: 1px solid rgba(38,225,175);
    }

    &::after{
        content: '';
        width: 130px;
        height: 130px;
        position: absolute;
        right: 70px;
        bottom: -50px;
        z-index: -1;
        transform: rotate(45deg);
        border: 1px solid rgba(255,255,255,0.2);
    }

    @media (max-width: 940px) {
        padding: 50px 25px;

        &::before{
            right: 25px;
            width: 100px;
            height: 100px;
        }

        &::after{
            right: 25px;
            width: 100px;
            height: 100px;
        }
    }
`;

export const Container = styled.div`
  box-shadow: 0px 0px 500px rgba(1,1,1,0.9);
  background: rgb(1,1,1,0.7);
  width: 100%;
  padding: 0px 170px 25px 170px;
  position: relative;

  &::before{
    content: 'Gobarber';
    color: rgb(255,255,255,0.1);
    font-size: 90px;
    top: -75px;
    letter-spacing: 5px;
    left: -20px;
    position: absolute;
    z-index: -1;
  }

  @media (max-width: 940px) {
    padding: 50px 0px;

    &::before{
        font-size: 60px;
        top: -50px;
    }
  }
`;

export const Title = styled.h1`
    font-size: 25px;
    color: #fff;
    font-weight: 600;
    text-align: start;
    letter-spacing: 2px;
    transition: 1.9s;
    display: inline-flex;
    position: relative;
    overflow: hidden;

    span{
        cursor: default;
        &:hover{
          color: rgba(38,225,175);
          animation: ${word} 0.8s;
        }
    }

    &::before{
        content: '';
        position: absolute;
        width: 110%;
        height: 15px;
        left: 0px;
        top: 10px;
        background: rgba(255,255,255,0.1);
        transform: skewY(-3deg);
    }    
`;

export const Banner = styled.div`
  text-align: center;
  p{
    

      a{
          background: rgba(38,225,175);
          border-bottom: 3px solid rgba(255,255,255,0.9);
          border-radius: 4px;
          color: rgba(1,1,1,0.8);
          padding: 10px;
          font-size: 15px;
          font-weight: bold;
          text-transform: uppercase;
      }
  }
  
  div{
    width: 100%;

    img{
        height: 100%;
        width: 100%;
    }

    .alice-carousel__dots{
        bottom: 30px;
        position: relative;
    }

    .alice-carousel__dots li{
        width: 15px;
        height: 15px;
    }
  }
`;