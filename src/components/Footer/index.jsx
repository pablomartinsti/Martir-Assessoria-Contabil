import { Container, Section, Main, Article } from './styles';
import logo from '../../assets/logo.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import instagram from '../../assets/instagram.png';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import map from '../../assets/map.png';

function Footer() {
  return (
    <Container>
      <Section>
        <Main>
          <img className="logo" src={logo} alt="imagem logo" />
          <div className="social">
            <h4>Inovação e Transparência</h4>
            <h4> para o Sucesso Contábil</h4>
          </div>
          <div className="social">
            <a
              href="https://www.instagram.com/martirassessoria/"
              target='"_blank'
            >
              {' '}
              <img className="icon" src={linkedin} alt="icon linkedin" />{' '}
            </a>
            <a
              href="https://www.instagram.com/martirassessoria/"
              target='"_blank'
            >
              {' '}
              <img className="icon" src={instagram} alt="icon instagram" />{' '}
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5534997624502&text&type=phone_number&app_absent=0"
              target='"_blank'
            >
              {' '}
              <img className="icon" src={whatsapp} alt="icon whatsapp" />{' '}
            </a>
          </div>
        </Main>

        <Main>
          <h3>Serviços</h3>
          <a href="/Serviço/Gestão-Financeira">Gestão Financeira</a>
          <a href="/Serviço/Contabilidade-Geral">Contabilidade Geral</a>
          <a href="/Serviço/Consultoria-Fiscal-e-Tributária">
            Consultoria Fiscal e Tributária
          </a>
          <a href="/Serviço/Declaração-Imposto-de-Renda">
            Declaração de Imposto de Renda
          </a>
          <a href="/Serviço/Abertura-e-Regularização-de-Empresas">
            Abertura e Regularização de Empresas
          </a>
          <a href="/Serviço/Terceirização-de-Serviço-Fiscal-e-Contábil">
            Terceirização de Serviço Fiscal e Contábil
          </a>
        </Main>
        <Main>
          <h3>Navegação</h3>
          <a href="/">Home</a>
          <a href="/Sobre">Sobre</a>
          <a href="/Serviço">Serviços</a>
          <a href="/Blog">Blog</a>
          <a href="/Contato">Contato</a>
        </Main>
        <Main>
          <h3>Contato</h3>
          <div className="contact">
            <img
              src={phone}
              alt="icon telefone"
              style={{ width: 24, height: 24, margin: '0 10px' }}
            />
            <a
              href="https://api.whatsapp.com/send/?phone=5534997624502&text&type=phone_number&app_absent=0"
              target='"_blank'
            >
              (34) 9 9762-4502
            </a>
          </div>
          <div className="contact">
            <img
              src={email}
              alt="icon email"
              style={{ width: 24, height: 24, margin: '0 10px' }}
            />
            <a href="mailto:karinehelenacontadora@gmail.com">
              Karinehelenacontadora@gmail.com
            </a>
          </div>
          <div className="contact">
            <img
              src={map}
              alt="icon mapa"
              style={{ width: 24, height: 24, margin: '0 10px' }}
            />
            <a
              href="https://www.google.com/maps/dir//R.+Alambique,+229+-+Morumbi+Uberl%C3%A2ndia+-+MG+38407-309/@-18.9127814,-48.1886814,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94a44e47cb652523:0x5f15f8d7ffe57801!2m2!1d-48.1886814!2d-18.9127814?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
              target='"_blank'
            >
              Rua:Alambique 229 Morumbi
              <br /> Uberlândia/MG
            </a>
          </div>
        </Main>
      </Section>
      <Article>
        <p>© 2024 Mártír Assessoria Contábil. Todos os direitos reservados.</p>
      </Article>
    </Container>
  );
}

export default Footer;
