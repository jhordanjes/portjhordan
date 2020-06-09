import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FiMenu } from 'react-icons/fi';
import { Container, Logo, Content} from './styles';
import sera from '../../assets/logo.png';

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
            <img src={sera} alt=""/>
            <span>Jhordan</span>
          </Logo>
        </Link>
        
        <nav>
            <Link to="/">
              Home
            </Link>
            <Link to="/projects">
              Projetos
            </Link>
            <HashLink to="#c">
              Contato
            </HashLink>
        </nav>

        <button type="button" onClick={openMenu}>
          <FiMenu size={30} color="rgba(38,225,175)" />
        </button>
    
      </Content>

    </Container>
  );
}
