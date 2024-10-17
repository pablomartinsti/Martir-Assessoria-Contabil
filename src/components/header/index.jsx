import { Container, Section, Article } from './styles';
import Logo from '../../assets/Logo.png';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import instagram from '../../assets/instagram.png';

function Header() {
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
            {' '}
            <img src={linkedin} alt="imagem linkedin" />
          </a>
          <a
            href="https://www.instagram.com/martirassessoria/"
            target='"_blank'
          >
            {' '}
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
        <img src={Logo} alt="Logo" />
        <nav>
          <a href="/">HOME</a>
          <a href="/Sobre">SOBRE</a>
          <a href="/Serviço">SERVIÇOS</a>
          <a href="/Blog">BLOG</a>
          <a href="/Contato">FALE CONOSCO</a>
        </nav>
      </Article>
    </Container>
  );
}

export default Header;
