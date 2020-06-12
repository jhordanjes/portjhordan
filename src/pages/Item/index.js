import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';
import { Content, Header } from './styles';
import { Container, Title } from '../../styles';
import gobarber from '../../assets/gobarber.png';
import gobarberRegister from '../../assets/gobarberRegister.png';
import gobarberProfile from '../../assets/gobarberProfile.png';
import gobarberDash from '../../assets/gobarberDash.png';


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
                Gobarber é uma aplicação para prestadores de serviços de um salão de beleza, tanto para barbeiros como cabeleireiros<b>.&nbsp;</b> 
                Podendo agilizar o processo de agendamentos, cancelamentos, pagamentos, etc. Sem muita complicação<b>.</b>
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
                <div className="item"> <img src={gobarber} alt=""/> </div>
                <div className="item"> <img src={gobarberRegister} alt=""/> </div>
                <div className="item"> <img src={gobarberDash} alt=""/> </div>
                <div className="item"> <img src={gobarberProfile} alt=""/> </div>
            </AliceCarousel>
            <p>Acompanhe no <a href="https://github.com/jhordanjes/gobarber-ts">github</a></p>
        </Content>
      </Container>
      <Contact />
      </>
  );
}

export default Project;