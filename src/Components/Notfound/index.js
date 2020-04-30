import React from 'react';
import { Container, First, Last } from './styles';

export default function Notfound() {
  return (
    <Container>
        <First>
            <div>
                <span>Puts. você encontrou um</span>
                <h1>404</h1>
            </div>
        </First>
        <Last>
            <div>
                <p>Foi mal, cara.</p>
                <p>Você tá perdidaço, ou eu sem querer te levei pra um lugar sem saída :(</p>
                <button>Voltar para a home</button>
            </div>
        </Last>
    </Container>
  );
}
