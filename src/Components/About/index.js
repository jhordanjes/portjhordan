import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import jhordan from '../../assets/jhor.jpg';
import { Container, Content } from './styles';

export default function About() {
  return (
    <Container id="q">
        <Content>
            <div>
                <img src={jhordan} alt="Jhordan Jesse" />
            </div>
            <div>
                <span>Olá, amg<b>_</b></span>
                <p>
                    Me chamo <b>Jhordan Jessé</b>, nasci em Maués/AM. Atualmente sou desenvolvedor fullstack como freelancer, além de ser um cara apaixonado por React, React Native, Node.js.
                </p>
                <p>
                    Sou formado em Ciência da Computação pela Uninorte - Am, mas, esse não é a único curso que já fiz, eu também partipei do GoStack da Rocketseat.
                </p>    
                <p>
                    Escrevo código e melhoro meu design e habilidades todos os dias.
                </p>
                <p>
                    Além disso, eu adoro trabalhar em equipe e sou um cara comunicativo, que adora conhecer novas tecnologias.
                </p>
            </div>      
        </Content>
            <div>
                <a href="#p">
                <MdKeyboardArrowDown color="#fff" size={60} align="center" />
                </a>
                
            </div>
    </Container>
  );
}
