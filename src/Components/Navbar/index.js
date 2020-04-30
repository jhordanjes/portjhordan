import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Container, Logo, Content} from './styles';

export default function Navbar() {
  const [menu, setMenu ] = useState(false);

  function openMenu() {
    setMenu(!menu);
  }

  return (
    <Container menu={menu} >
      <Content>
        <Logo>
          Jhor <span>dan_</span>
        </Logo>
        <aside>
            <a href="#q">
              Quem sou
            </a>
            <a href="#p">
              Projetos
            </a>
            <a href="#c">
              Contato
            </a>
        </aside>

        <button type="button" onClick={openMenu}>
          <FiMenu size={30} color="#00c853" />
        </button>
    
      </Content>

    </Container>
  );
}
