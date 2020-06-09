import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Social, Content, Message } from './styles';

export default function Contact() {
  return (
    <Container id="c">
            <Message>
              <Fade left>
                <span>Você está</span>
                <span>precisando de</span>
                <span>ajuda em</span>
                <span>algum projeto?</span>
                <a href="mailto:jhordanjes@gmail.com">Vamos nos falar.</a>
              </Fade>
              <p>
                Vou adorar poder te ajudar ;)
              </p>
            </Message>
            
            <Content>
              <Social>
                  <li> <a href="https://github.com/jhordanjes">github</a></li>
                  <li> <a href="https://instagram.com/jhordanjesse">instagram </a></li>
                  <li> <a href="https://www.linkedin.com/in/jhordan-oliveira-743330162">linkedin </a></li>
              </Social>

              <p>Jhordan © Todos os direitos reservados.</p>
            </Content>
    </Container>
  );
}
