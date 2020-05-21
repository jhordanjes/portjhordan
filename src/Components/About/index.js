import React from 'react';
import { IoIosArrowRoundDown } from 'react-icons/io';

import jhordan from '../../assets/jhor.jpg';
import { Container, Content, Title } from './styles';

export default function About() {
  return (
    <Container id="q">
        <Content>
            <div>
                <img src={jhordan} alt="Jhordan Jesse" />
            </div>
            <div>
                <Title>
                    <b>&lt;</b> 
                    <span>S</span> 
                    <span>o</span>
                    <span>b</span>
                    <span>r</span>
                    <span>e</span>
                    <span>&nbsp;m</span>
                    <span>i</span>
                    <span>m</span>
                    <b>&nbsp;/&gt;</b>
                </Title>
                <p>
                    Me chamo <b>Jhordan Jessé</b>. Atualmente sou desenvolvedor fullstack, além de ser um cara apaixonado por React, React Native, Node.js.
                </p>
                <p>
                    Sou formado em Ciência da Computação pela Uninorte - Am, mas esse não é a único curso que já fiz, busco sempre melhorar meu design e habilidades todos os dias.
                </p>    
                <p>
                    Além disso, eu adoro trabalhar em equipe e sou um cara comunicativo, que adora conhecer novas tecnologias.
                </p>
            </div>      
        </Content>

        <div>
            <IoIosArrowRoundDown size={55} />
        </div>
    </Container>
  );
}
