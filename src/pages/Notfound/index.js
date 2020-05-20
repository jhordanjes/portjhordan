import React from 'react';
import Contact from '../../Components/Contact';
import Navbar from '../../Components/Navbar';
import history from '../../services/history';
import { Container, First, Last } from './styles';

export default function Home(){
    return(
        <>
            <Navbar />
            <Container>
                <First>
                    <div>
                        <span>erro</span>
                        <h1>404_</h1>
                        <p>O que você procura não existe :(</p>
                        <button type="button" onClick={() => history.push('/')}>Voltar para a home</button>
                    </div>
                </First>
                <Last>
                    <div>
                        
                    </div>
                </Last>
            </Container>
            <Contact />
        </>
    )
}