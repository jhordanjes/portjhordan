import React from 'react';
import gobarber from '../../assets/github.png';
import aircnc from '../../assets/aircnc.png';
import { Container, Projects, Span } from './styles';

export default function Project() {
  return (
    <Container id="p">
        <Span><b>&lt;</b>Projetos<b> /&gt;</b></Span>
        <p>
            Abaixo estão alguns projetos que fiz parte.
            Buscando um crescimento constantemente.
        </p>
        
        <Projects>
            <ul>
                <li>             
                    <img src={gobarber} alt="projeto" />
                 
                    <div>
                        <span>Gobarber</span>
                        <p>Uma aplicação para prestadores de serviço</p>
                    </div>
                </li>
                <li>
                    <img src={aircnc} alt="projeto" />
        
                    <div>
                        <span>AirCnc</span>
                        <p>Uma aplicação para prestadores de serviço</p>
                    </div>
                </li>
                <li>
                    <img src={aircnc} alt="projeto" />
                    
                    <div>
                        <span>Rocketshoes</span>
                        <p>Uma aplicação para prestadores de serviço</p>
                    </div>
                </li>
                <li>
                    <img src={gobarber} alt="projeto" />
                    
                    <div>
                        <span>Github Repositories</span>
                        <p>Uma aplicação para prestadores de serviço</p>
                    </div>
                </li>
            </ul>
        </Projects>
    </Container>
  );
}
