import React, { useState } from 'react';
import {
  Container,
  Section,
  Article,
  BurgerMenu,
  NavMenu,
  NavLink,
} from './styles';
import Logo from '../../assets/Logo.png';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import instagram from '../../assets/instagram.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Section>
        <div className="Contact">
          <div>
            <img src={phone} alt="imagem telefone" />
            <a
              href="https://api.whatsapp.com/send/?phone=5534997624502&text&type=phone_number&app_absent=0"
              target='"_blank'
            >
              (34) 9 9762-4502
            </a>
          </div>
          <div>
            <img src={email} />
            <a href="mailto:karinehelenacontadora@gmail.com">
              karinehelenacontadora@gmail.com
            </a>
          </div>
        </div>
        <div className="icon">
          <a
            href="https://www.instagram.com/martirassessoria/"
            target='"_blank'
          >
            <img src={linkedin} alt="imagem linkedin" />
          </a>
          <a
            href="https://www.instagram.com/martirassessoria/"
            target='"_blank'
          >
            <img src={instagram} alt="imagem instagram" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5534997624502&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img src={whatsapp} alt="imagem whatsapp" />
          </a>
        </div>
      </Section>
      <Article>
        <div className="menu">
          <img src={Logo} alt="Logo" />
          <BurgerMenu onClick={toggleMenu}>
            &#9776; {/* Ícone do menu hambúrguer */}
          </BurgerMenu>
          <NavMenu open={menuOpen}>
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/Sobre">SOBRE</NavLink>
            <NavLink href="/Serviço">SERVIÇOS</NavLink>
            <NavLink href="/Blog">BLOG</NavLink>
            <NavLink href="/Contato">FALE CONOSCO</NavLink>
          </NavMenu>
        </div>
      </Article>
    </Container>
  );
}

export default Header;
