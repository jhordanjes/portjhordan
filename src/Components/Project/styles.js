import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 0px 70px rgba(1,1,1,0.7);
  background: rgba(1,1,1,0.5);
  width: 100%;
  margin-top: 45px;
  padding: 50px 170px;

  @media (max-width: 768px) {
    padding: 50px 25px;
  }


  > span{
    font-size: 60px;
    color: #fff;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }

  p{
    margin-top: 20px;
  }

`;

export const Projects = styled.div`
  padding: 60px 50px;
  text-align: center;

  @media (max-width: 768px) {
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
    
    &:hover{
      width: 440px;

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }

  ul li:hover span{
    letter-spacing: 2px;
    color: #00c853;
  
  }

  ul li span{
    font-size: 25px;
    transition: 0.4s;
    color: #fff;
  }

  ul li p{
    position: relative;
    bottom: 10px;
  }
`;