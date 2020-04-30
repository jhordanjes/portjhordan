import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';
import { MdKeyboardArrowDown } from 'react-icons/md';
import jhordan from '../../assets/jhor.jpg';
import { Container, Content } from './styles';

export default function Sobre() {
  return (
        <Container>
            <Content>
                <Bounce>
                    <img src={jhordan} alt="Jhordan Jesse" />
                </Bounce>
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
            </Content>

            <Jump forever={true}>
                <MdKeyboardArrowDown color="#fff" size={60} align="center" />
            </Jump>
                
        </Container>
    );
}
