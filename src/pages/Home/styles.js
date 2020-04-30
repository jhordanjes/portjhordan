import styled from 'styled-components';

export const Container = styled.div`
    display: column;
    width: 100%;
    margin-top: 70px;
    padding: 0px 170px;

    @media (max-width: 768px) {
        padding: 0px 50px;
    }

    span{
        font-size: 55px;
        font-weight: 600;
        margin-top: 40px;
        color: #fff;
        text-align: start;
        letter-spacing: 2px;
        transition: 0.4s;

        b{
            color: #00c853;
        }
    }

    svg{
        display: inline-block;
    }


    > div{
        margin-top: 40px;
        text-align: center;
    }
`;

export const Content = styled.div`
    display: grid;

    img{
        width: 240px;
        border-radius: 50%;
        justify-self: center;
        box-shadow: 0px 0px 70px rgba(255,255,255,0.1);
        border: 4px solid rgba(255,255,255,0.2);
        transition: 0.4s;

        &:hover{
            box-shadow: 0px 0px 10px rgba(255,255,255,0.3);
            border: 4px solid rgba(255,255,255,0.9);
        }
    }

    p{
        margin-top: 20px;
        color: rgba(255,255,255,0.4);
        text-align: justify;

        b{
            color: #00c853;
        }
    }
`;