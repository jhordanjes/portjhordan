import styled from 'styled-components';
import { opacity } from '../../styles/keyframes';

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
    animation: ${opacity} 1.9s linear;
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