import React from 'react';
import List from '../../Components/List';
import Contact from '../../Components/Contact';
import Navbar from '../../Components/Navbar';
import About from '../../Components/About';
import { Title } from '../../styles';
import { Container } from './styles';
 
export default function Home(){
    return(
        <>
            <Navbar />
            <About />
            <Container id="p">
                <Title>
                    <b>&lt;</b> 
                    <span>P</span> 
                    <span>r</span>
                    <span>o</span>
                    <span>j</span>
                    <span>e</span>
                    <span>t</span>
                    <span>o</span>
                    <span>s</span>
                    <b>&nbsp;/&gt;</b>
                </Title>
                <p>
                    Abaixo estão alguns projetos recentes.
                    Buscando um crescimento constantemente<b>.</b>
                </p>

                <List />
            </Container>
            <Contact />
        </>
    )
}