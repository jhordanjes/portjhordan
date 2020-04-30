import styled, { keyframes } from 'styled-components';

const upAnimate = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
    padding: 50px 170px 20px 170px;

    @media (max-width: 768px) {
        padding: 50px 10px;    
    }

    aside{
        padding-left: 70px;
        @media (max-width: 768px) {
            padding-left: 20px;        
        }
        >p{
            margin-top: 7px;
        }

        span{
            display: flex;
            font-size: 70px;
            font-weight: bold;
            color: #00c853;

            @media (max-width: 768px) {
                font-size: 40px;       
            }
        }

        a{
            color: #00c853;
            font-size: 70px;
            font-weight: bold;
            overflow: hidden;
            position: relative;
            display: inline-block;
            padding-top: 10px;

            &:hover{
                color: #fff;
                &::before{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 5px;
                    background: #00c853;
                    animation: ${upAnimate} 600ms ease forwards;
                }
            }

            @media (max-width: 768px) {
                font-size: 40px;        
            }
        }

            
    }
`;

export const Content = styled.div`
    background: rgba(255,255,255,0.7);
    padding: 50px 20px;
    margin-top: 70px;
    justify-items: center;
    display: flex;
    justify-content: space-between;
    transition: 0.9s;

    &:hover{
        background: #fff;
    }

    @media (max-width: 768px) {
        padding: 80px 10px;
        display: grid;
        justify-content: center;
    }



    p{
        width: 500px;
        color: rgba(1,1,1,0.7);
        font-weight: bold;
        font-size: 15px;
        @media (max-width: 768px) {
            width: 315px;
        }
    }
`;
 
export const Social = styled.ul`
    width: 100%;
    list-style-type: none;
    display: inline-block;

    li{
        padding: 0px 20px;
        display: inline;
        transition: 0.6s;

        a{
            color: #000;
            font-size: 15px;
            font-weight: bold;
            text-transform: uppercase;
            overflow: hidden;
            position: relative;
            display: inline-block;
            

            &:hover{
                color: rgba(1,1,1,0.8);
                &::before{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background: #00c853;
                    animation: ${upAnimate} 600ms ease forwards;
                }
            }
        }
    }
`;
