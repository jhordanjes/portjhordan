import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';
import { Content, Header } from './styles';
import { Container, Title } from '../../styles';
import aircnc from '../../assets/aircnc.png';
import gobarber from '../../assets/gobarber.png';

function Project() {
  return (
      <>
      <Navbar />
      <Container>
        <Header>
            <Title>
                <b>&lt;</b> 
                <span>G</span> 
                <span>o</span>
                <span>b</span>
                <span>a</span>
                <span>r</span>
                <span>b</span>
                <span>e</span>
                <span>r</span>
                <b>&nbsp;/&gt;</b>
            </Title>
            <p>
                Gerenciar agendamentos de um salão de beleza na mão pode demandar várias horas do barbeiro ou cabeleireira, por exemplo<b>.&nbsp;</b> 
                Carentes de tecnologia, esses negócios podem despender várias horas diariamente apenas recebendo ligações e trocando mensagens com clientes sobre seus agendamentos, cancelamentos, pagamentos e etc<b>.</b>
            </p>
        </Header>
      
        <Content>
            <AliceCarousel   
                fadeOutAnimation={true}
                mouseDragEnabled={true}
                autoPlay={true}
                autoPlayInterval={2500}
                buttonsDisabled={true}
            >
                <div className="item"> <img src={aircnc} alt=""/> </div>
                <div className="item"> <img src={gobarber} alt=""/> </div>
                <div className="item"> <img src={aircnc} alt=""/> </div>
                <div className="item"> <img src={gobarber} alt=""/> </div>
            </AliceCarousel>
            <p>Acompanhe no <a href="https://github.com/jhordanjes">github</a></p>
        </Content>
      </Container>
      <Contact />
      </>
  );
}

export default Project;