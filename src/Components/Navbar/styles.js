import styled, { keyframes } from 'styled-components';

const upAnimate = keyframes`
  from {
    opacity: 0;
    transform: translateY(-200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const deslize = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  padding: 0 170px;


  button{
    display: none;
    background: none;
    border: none;
  }

  @media (max-width: 768px) {
    padding: 0px 25px;

    button{
      display: ${props => (props.menu ? 'none' : 'block')};
    }

    aside{
      display: ${props => (props.menu ? 'block' : 'none')};
      animation: ${upAnimate} 600ms ease forwards;

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

  @media (max-width: 768px) {
    >div{
      &:last-child{
        display: block;
      }
    }
  }

  aside{
    a{
      color: #fff;
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

        &::before{
          content: '';
          position: absolute;
          top: 8px;
          width: 100%;
          height: 3px;
          background: rgba(0, 0, 0, 0.9);
          box-sizing: inherit;
          animation: ${deslize} 600ms ease forwards;
        }
      }
    }
  }
`;

export const Logo = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: rgba(255,255,255,0.9);
  transition: 0.1s;
  display: inline-block;
  transition: 0.5s;
  background: transparent;
  box-shadow: 0px 0px 500px rgb(0, 200, 83, 0.9);

  &:hover{
    letter-spacing: 2px;
    color: #00c853;
  }

  span{
    background: #00c853;
    color: rgba(30,30,30);
    margin-left: -5px;
    display: inline-block;
    padding: 0px 5px;
  }
`;