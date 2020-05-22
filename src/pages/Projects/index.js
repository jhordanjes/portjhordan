import React from 'react';
import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';
import List from '../../Components/List';

import { Container, Title } from '../../styles';
import { Header, Content } from './styles';
 
export default function Projects() {
  return (
    <>
        <Navbar />
            <Container>
                <Header>
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
                </Header>
                <Content>
                    <List />
                </Content>
            </Container>
        <Contact />
    </>
    );
}