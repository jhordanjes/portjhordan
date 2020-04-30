import React from 'react';
import Bounce from 'react-reveal/Bounce';
import { Container, Social, Content } from './styles';

export default function Contact() {
  return (
    <Container id="c">
            <aside>
              <Bounce left>
                <span>Você está</span>
                <span>precisando de</span>
                <span>ajuda em</span>
                <span>algum projeto?</span>
                <a href="https://github.com/jhordanjes">Vamos nos falar.</a>
              </Bounce>
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
