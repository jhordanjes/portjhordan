import styled from 'styled-components';
 
export const Header = styled.div`
  padding: 90px 170px;
  position: relative;

  &::before{
    content: '';
    width: 130px;
    height: 130px;
    position: absolute;
    right: 70px;
    bottom: -70px;
    z-index: -1;
    transform: rotate(45deg);
    border: 1px solid rgba(38,225,175,0.5);
  }

  &::after{
    content: '';
    width: 130px;
    height: 130px;
    position: absolute;
    right: 70px;
    bottom: -40px;
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

export const Content = styled.div`
  box-shadow: 0px 0px 500px rgba(1,1,1,0.9);
  background: rgb(1,1,1,0.6);
  width: 100%;
  padding: 30px 170px;
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

  text-align: center;
  p{
    
      a{
          background: rgba(38,225,175);
          border-bottom: 3px solid #138868;
          border-radius: 4px;
          color: rgba(1,1,1,0.8);
          padding: 8px;
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
        bottom: 10px;
        position: relative;
    }
    .alice-carousel__dots li{
        width: 15px;
        height: 15px;
    }
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