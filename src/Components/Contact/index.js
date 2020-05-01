import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
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
                <Link to="/notfound">Vamos nos falar.</Link>
              </Fade>
              <p>
                Conte-me sobre o seu projeto. Vou adorar te ajudar ;)
              </p>
            </aside>
            
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
