import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Social, Content } from './styles';

export default function Contact() {
  return (
    <Container id="c">
            <aside>
              <Fade left>
                <span>Você está</span>
                <span>precisando de</span>
                <span>ajuda em</span>
                <span>algum projeto?</span>
                <a href="https://github.com/jhordanjes">Vamos nos falar.</a>
              </Fade>
              <p>
                Vou adorar te ajudar com seus projetos ;)
              </p>
            </aside>
            
            <Content>
              <Social>
                  <li> <a href="https://github.com/jhordanjes">github</a></li>
                  <li> <a href="https://instagram.com/jhordanjes">instagram </a></li>
                  <li> <a href="https://instagram.com/jhordanjes">linkedin </a></li>
              </Social>

              <p>Jhordan © Todos os direitos reservados.</p>
            </Content>
    </Container>
  );
}
