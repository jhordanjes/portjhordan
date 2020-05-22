import styled from 'styled-components';

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