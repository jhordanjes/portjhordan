import { keyframes } from 'styled-components';

export const jump = keyframes`
    0% {
        transform: translateY(40%);
    }
    25% {
        transform: translateY(100%);
    }
    50% {
        transform: translateY(70%);
    }
    75% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(100%);
    }
`;

export const faderight = keyframes`
    from {
        transform: translateX(70px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const fadeleft = keyframes`
    from {
        transform: translateX(-70px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const gumone = keyframes`
    0% {
        width: 220px;
        transform: skewX(0deg);
    }
    25% {
        width: 230x;
        transform: skewX(10deg);
    }
    50% {
        width: 240px;
        transform: skewX(25deg);
    }
    75%{
        width: 230x;
        transform: skewX(10deg);
    }
    100%{
        width: 220px;
        transform: skewX(0deg);
    }
`;

export const gumtwo = keyframes`
    0% {
        width: 220px;
        transform: skewX(-25deg);
    }
    25% {
        width: 230px;
        transform: skewX(-10deg);
    }
    50% {
        width: 240px;
        transform: skewX(0deg);
    }
    75%{
        width: 230px;
        transform: skewX(-10deg);
    }
    100%{
        width: 220px;
        transform: skewX(-25deg);
    }
`;

export const word = keyframes`
    0% {
        transform: scaleY(1.0);
    }
    25% {
        transform: scaleY(0.9);
    }
    50% {
        transform: scaleY(0.7);
    }
    75% {
        transform: scaleY(1.7);
    }
    100% {
        transform: scaleY(1.1);
    }
`;

export const opacity = keyframes`
    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

export const menu = keyframes`
    0%{
        height: 0px;
    }
    100%{
        height: 3px;
    }
`;

export const deslize = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const up = keyframes`
    from {
        opacity: 0;
        transform: translateY(-200px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;