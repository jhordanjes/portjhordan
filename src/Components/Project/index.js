import React from 'react';
import { Link } from 'react-router-dom';
import aircnc from '../../assets/aircnc.png';
import { Container, Projects, Title, Description } from './styles';

export default function Project() {
  return (
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
        
        <Projects>
            <ul>
                <Link to="/projects">
                    <li>             
                        <img src={aircnc} alt="projeto" />
                        <Description>
                            <span>Gobarber<b>_</b></span>
                            <p>Uma aplicação para prestadores de serviço</p>
                        </Description>
                    </li>
                </Link>
                <Link to="/project">
                    <li>
                        <img src={aircnc} alt="projeto" />
                        <Description>
                            <span>AirCnc<b>_</b></span>
                            <p>Semana Omnistack 9, disponibilizar espaço para dev.</p>
                        </Description>
                    </li>
                </Link>
                <li>
                    <img src={aircnc} alt="projeto" />
                    <Description>
                        <span>Rocketshoes<b>_</b></span>
                        <p>Uma aplicação para prestadores de serviço</p>
                    </Description>
                </li>
                <li>
                    <img src={aircnc} alt="projeto" />
                    <Description>
                        <span>Github Repositories<b>_</b></span>
                        <p>Uma aplicação para prestadores de serviço</p>
                    </Description>
                </li>
            </ul>
        </Projects>
    </Container>
  );
}
