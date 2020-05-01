import React from 'react';
import history from '../../services/history';
import { Container, First, Last } from './styles';

export default function Notfound() {
  return (
    <Container>
        <First>
            <div>
                <span>Puts. você encontrou um</span>
                <h1>404_</h1>
            </div>
        </First>
        <Last>
            <div>
                <p>O que você procura não existe :(</p>
                <button type="button" onClick={() => history.push('/')}>Voltar para a home</button>
            </div>
        </Last>
    </Container>
  );
}
