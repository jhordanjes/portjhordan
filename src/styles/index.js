import styled from 'styled-components';
import { word } from '../util/keyframes';

export const Container = styled.div`
    width: 100%;
    position: relative;

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

    b{
        color: rgba(38,225,175);
    }

    span{
        cursor: default;
        &:hover{
            color: rgba(38,225,175);
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