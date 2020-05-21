import styled from 'styled-components';
import { jump, faderight, fadeleft, gumone, gumtwo, word } from '../../util/keyframes';

export const Container = styled.div`
    width: 100%;
    margin: 75px 0px;
    padding: 25px 170px 50px 170px;
    position: relative;

    &::before{
        content: '';
        width: 130px;
        height: 130px;
        position: absolute;
        right: 70px;
        bottom: -140px;
        z-index: -1;
        transform: rotate(45deg);
        border: 1px solid #00c853;
    }

    &::after{
        content: '';
        width: 130px;
        height: 130px;
        position: absolute;
        right: 70px;
        bottom: -110px;
        z-index: -1;
        transform: rotate(45deg);
        border: 1px solid rgba(255,255,255,0.2);
    }

    @media (max-width: 768px) {
        padding: 0px 25px 55px 25px;

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

    >div{
        text-align: center;
    }

    svg{
        color: rgb(255,255,255,0.9);
        margin-top: 45px;
        animation: ${jump} 1.7s linear infinite;
        transform: rotate(70deg);
    }
`;


export const Image = styled.div`
    padding-right: 80px;
    animation: ${fadeleft} 0.9s linear;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        animation: ${gumone} 1.7s linear infinite;
        height: 230px;
        border-radius: 50%;
        left: 0px;
        background: rgba(255,255,255,0.1);
        z-index: -1;
    }
    
    &::after{
        content: '';
        position: absolute;
        animation: ${gumtwo} 1.7s linear infinite;
        height: 230px;
        left: 0px;
        top: 0;    
        border-radius: 50%;
        background: rgba(255,255,255,0.1);
        z-index: -1;
    }

    img{
        width: 230px;
        height: 230px;
        background-color: rgba(255,255,255,0.1);
        border-radius: 50%;
        justify-self: center;
        box-shadow: 0px 0px 500px rgb(1,1,1);
        border: 2px solid transparent;
        transition: 0.4s;
    }
    
    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const Text = styled.div`
    animation: ${faderight} 0.9s linear;
    position: relative;

    p{
        margin-top: 20px;
        b{
            color: #00c853;
        }
    }

    @media (max-width: 768px) {
        top: 55px;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: grid;
    }

    div{
        margin: auto;
        text-align: start;
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

    b{
        color: #00c853;
    }

    span{
        cursor: default;
        &:hover{
            color: #00c853;
            animation: ${word} 0.7s;
        }
    }

    &::before{
        content: '';
        position: absolute;
        width: 220px;
        height: 15px;
        left: 0px;
        top: 10px;
        background: rgba(255,255,255,0.1);
        z-index: -1;
        transform: skewY(-3deg);
    }    
`;

export const Box = styled.div`
    border-top: 1px solid rgba(255,255,255,0.1);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    width: 100%;
    height: 20px;
    color: rgba(255,255,255,0.1);
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 8px;
    position: relative;
    top: 15px;
`;