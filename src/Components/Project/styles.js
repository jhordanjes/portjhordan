import styled from 'styled-components';
import { word, opacity } from '../../util/keyframes';

export const Container = styled.div`
  box-shadow: 0px 0px 500px rgba(1,1,1,0.9);
  background: rgb(1,1,1,0.7);
  width: 100%;
  margin-top: 45px;
  padding: 50px 170px;
  position: relative;
  
  &::before{
    content: 'Developer';
    color: rgb(255,255,255,0.1);
    font-size: 110px;
    top: -100px;
    letter-spacing: 5px;
    left: -20px;
    position: absolute;
    z-index: -1;
    animation: ${opacity} 2.9s linear;
  }

  @media (max-width: 940px) {
    padding: 50px 25px;

    &::before{
      font-size: 60px;
      top: -60px;
    }
  }

  p{
    margin-top: 20px;
  }

  b{
    color: rgba(38,225,175);
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

export const Projects = styled.div`
  padding: 60px 50px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0px;
  }

  @media (max-width: 940px) {
    padding: 60px 0px;
  }


  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    width: 100%;
    list-style: none;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  ul li img{
    width: 450px;
    transition: 0.4s;

    @media (max-width: 768px) {
      width: 90%;
    }

    @media (max-width: 940px) {
      width: 350px;
    }
    
    &:hover{
      width: 440px;

      @media (max-width: 768px) {
        width: 100%;
      }

      @media (max-width: 940px) {
        width: 360px;
      }
    }
  }

  ul li:hover span{
    letter-spacing: 1px;
    color: rgba(38,225,175);
  }
`;

export const Description = styled.div`
  p{
    position: relative;
    bottom: 10px;
    color: rgba(255,255,255,0.4);
  }

  span{
    font-size: 25px;
    transition: 0.4s;
    color: rgba(255,255,255,0.9);
    overflow: hidden;
    position: relative;
  }
`;