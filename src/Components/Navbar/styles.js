import styled from 'styled-components';
import { up, deslize } from '../../styles/keyframes';

export const Container = styled.div`
  padding: 0 170px;

  button{
    display: none;
    background: none;
    border: none;
  }

  @media (max-width: 940px) {
    padding: 0 50px;

    button{
      display: ${props => (props.menu ? 'none' : 'block')};
    }

    aside{
      display: ${props => (props.menu ? 'block' : 'none')};
      animation: ${up} 600ms ease forwards;

      a{
        margin-left: 5px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0px 25px;

    button{
      display: ${props => (props.menu ? 'none' : 'block')};
    }

    aside{
      display: ${props => (props.menu ? 'block' : 'none')};
      animation: ${up} 600ms ease forwards;

      a{
        margin-left: 5px;
      }
    }
  }

`;

export const Content = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  >div{
    &:last-child{
      display: none;
    }
  }

  @media (max-width: 940px) {
    >div{
      &:last-child{
        display: block;
      }
    }
  }

  aside{
    a{
      color: rgba(255,255,255,0.7);
      margin-left: 35px;
      text-transform: uppercase;
      font-size: 15px;
      font-weight: bold;
      overflow: hidden;
      position: relative;
      display: inline-block;

      @media (max-width: 768px) {
        margin-left: 10px;
        font-size: 14;

        &:first-child{
          display: none;
        }
      }
    
      &:hover{
        overflow: hidden;
        color: rgba(255,255,255);

        &::before{
          content: '';
          position: absolute;
          top: 8px;
          width: 100%;
          height: 3px;
          background: rgb(22, 22, 27);
          box-sizing: inherit;
          animation: ${deslize} 900ms ease forwards;
        }
      }
    }
  }
`;

export const Logo = styled.div`
  justify-items: center;

  span{
    text-transform: uppercase;
    font-family: 'Orbitron', sans-serif;
    color: rgba(255,255,255);
    font-size: 17px;
    position: relative;
    left: 5px;
    font-weight: bold;
    letter-spacing: 1px;
    bottom: 20px;
    justify-items: center;
  }

  img{
    height: 50px;
    width: 50px;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    span{
      font-size: 16px;
      bottom: 15px;
    }

    img{
      height: 40px;
      width: 40px;
    }
  }
`;