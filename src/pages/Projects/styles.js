import styled from 'styled-components';
import { word } from '../../styles/keyframes';
 
export const Header = styled.div`
  padding: 70px 170px;
  position: relative;

  &::before{
    content: '';
    width: 130px;
    height: 130px;
    position: absolute;
    right: 70px;
    bottom: -85px;
    z-index: 1;
    transform: rotate(45deg);
    border: 1px solid rgba(38,225,175,0.5);
  }

  &::after{
    content: '';
    width: 130px;
    height: 130px;
    position: absolute;
    right: 70px;
    bottom: -50px;
    z-index: 1;
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

export const Title = styled.h1`
  font-size: 25px;
    color: #fff;
    font-weight: 600;
    text-align: start;
    letter-spacing: 2px;
    transition: 1.9s;
    display: flex;
    position: relative;

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
        width: 190px;
        height: 15px;
        left: 0px;
        top: 10px;
        background: rgba(255,255,255,0.1);
        transform: skewY(-3deg);
    }
`;

export const Content = styled.div`
  box-shadow: 0px 0px 500px rgba(1,1,1,0.9);
  background: rgb(1,1,1,0.7);
  width: 100%;
  padding: 0px 170px;
  position: relative;

  &::before{
    content: 'Javascript';
    color: rgb(255,255,255,0.1);
    font-size: 80px;
    top: -75px;
    letter-spacing: 5px;
    left: -10px;
    position: absolute;
    z-index: -1;
  }

  @media (max-width: 940px) {
    padding: 0px;

    &::before{
        font-size: 50px;
        top: -50px;
    }
  }
`;

