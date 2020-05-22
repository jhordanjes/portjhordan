import styled, { keyframes } from 'styled-components';

const upAnimate = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const faderight = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;


export const Container = styled.div`
    padding: 50px 170px 20px 170px;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 380px;
        height: 380px;
        top: 80px;
        left: -190px;
        background: rgb(1,1,1,0.1);
        box-shadow: 0px 0px 500px rgba(1,1,1,0.7);
        transform: rotate(45deg);
        z-index: -1;
    }

    &::after{
        content: '';
        position: absolute;
        width: 380px;
        height: 380px;
        top: 80px;
        animation: ${faderight} 0.9s linear;
        right: 0;
        background: rgb(1,1,1,0.1);
        box-shadow: 0px 0px 500px rgba(1,1,1,0.7);
        transform: skewY(-50deg);
        z-index: -1;
    }

    @media (max-width: 940px) {
        padding: 50px 10px;

        &::before{
            display: none;
        }    
    }

`;

export const Message = styled.div`
    padding-left: 70px;
    
    @media (max-width: 768px) {
        padding-left: 20px;
        padding-top: 30px;       
    }
 
    >p{
        margin-top: 7px;
    }

    span{
        display: flex;
        font-size: 70px;
        font-weight: bold;
        color: rgba(38,225,175);

        @media (max-width: 768px) {
            font-size: 40px;       
        }
    }

    a{
        color: rgba(38,225,175);
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
                background: rgba(38,225,175);
                animation: ${upAnimate} 600ms ease forwards;
            }
        }

     
        @media (max-width: 768px) {
            font-size: 40px;        
        }
    }
`;

export const Content = styled.div`
    background: rgba(1,1,1,0.7);
    padding: 50px 20px;
    margin-top: 70px;
    justify-items: center;
    display: flex;
    justify-content: space-between;
    transition: 0.9s;
    box-shadow: 0px 0px 500px rgba(1,1,1,0.9);

    @media (max-width: 768px) {
        margin-top: 90px;
        padding: 80px 10px;
        display: grid;
        justify-content: center;
    }



    p{
        width: 500px;
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
            color: rgba(255,255,255,0.9);
            font-size: 15px;
            font-weight: bold;
            text-transform: uppercase;
            overflow: hidden;
            position: relative;
            display: inline-block;
            

            &:hover{
                color: rgba(255,255,255,0.6);
                &::before{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background: rgba(38,225,175);
                    animation: ${upAnimate} 600ms ease forwards;
                }
            }
        }
    }
`;
