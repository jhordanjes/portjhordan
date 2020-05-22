import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <Logo>
            Jhor <span>dan_</span>
          </Logo>
        </Link>
        
        <aside>
            <Link to="/">
              Home
            </Link>
            <Link to="/projects">
              Projetos
            </Link>
            <a href="#c">
              Contato
            </a>
        </aside>

        <button type="button" onClick={openMenu}>
          <FiMenu size={30} color="rgba(38,225,175)" />
        </button>
    
      </Content>

    </Container>
  );
}
