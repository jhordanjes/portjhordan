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
                <span>Quem sou<b>_</b></span>
                <p>
                    Olá, me chamo <b>Jhordan Jessé</b>, nasci em Maués/AM e atualmente sou desenvolvedor fullstack como freelancer, além de ser um cara apaixonado por JavaScript e todo o ecossistema dessa tecnologia.
                </p>
                <p>
                    Sou formado em Ciência da Computação pela Uninorte - Am, mas, esse não é a único curso que já fiz, eu também partipei do GoStack da Rocketseat.
                </p>    
                <p>
                    Eu bebo café, como pizza. Escrevo código e melhoro meu design e habilidades todos os dias.
                </p>
                <p>
                    Além disso, eu adoro trabalhar em equipe e sou um cara bem comunicativo, que devora novas tecnologias e gosta de brincar com frameworks JavaScript.
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
