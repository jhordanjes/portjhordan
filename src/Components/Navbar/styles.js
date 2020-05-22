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
  font-size: 18px;
  font-weight: bold;
  color: rgba(255,255,255);
  transition: 0.1s;
  display: inline-block;
  transition: 0.5s;
  text-transform: uppercase;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    width: 117px;
    height: 8px;
    left: -5px;
    top: 6px;
    background: rgba(255,255,255,0.1);
    z-index: -1;
    transform: skewY(6deg);
  }

  @media (max-width: 768px) {
    font-size: 15;
  }

  &:hover{
    letter-spacing: 2px;
    color: rgba(38,225,175);
  }

  b{
    color: rgba(38,225,175);
    margin-left: -8px;
    display: inline-block;
    padding: 0px 5px;
  }
`;