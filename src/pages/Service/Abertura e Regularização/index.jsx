import { Container, Section, Div, Article } from './styles';
import Header from '../../../components/header';
import Footer from '../../../components/Footer';
import Contact from '../../../components/Contact';
import Service from '../../../components/Service';
import Portal from '../../../components/Portal';
import abertura from '../../../assets/abertura.png';
function Opening() {
  return (
    <Container>
      <Header />

      <Section>
        <img style={{ width: 600, height: 310 }} src={abertura} />
        <Div>
          <h2>Abertura e Regularização de Empresas</h2>
          <p>
            O processo de abertura e regularização de empresas exige cuidado e
            conhecimento das legislações e normas em vigor. Nosso serviço
            especializado garante que sua empresa seja aberta e mantida dentro
            das conformidades legais, evitando problemas futuros com órgãos
            governamentais e facilitando seu crescimento no mercado.
          </p>
          <a>FALE COM NOSSA EQUIPE</a>
        </Div>
      </Section>
      <Article>
        <div>
          <h3>Abertura de Empresas</h3>
          <p>
            Orientamos e executamos todo o processo burocrático para a abertura
            de sua empresa, desde a escolha do regime tributário adequado até o
            registro nos órgãos competentes.
          </p>
        </div>
        <div>
          <h3> Alterações Contratuais</h3>
          <p>
            Realizamos alterações de contratos sociais, como mudança de sócios,
            endereço, ou capital social, garantindo que as modificações estejam
            em conformidade com a legislação.
          </p>
        </div>
        <div>
          <h3>Obtenção de Alvarás e Licenças</h3>
          <p>
            Providenciamos a obtenção dos alvarás e licenças necessários para
            que sua empresa possa operar legalmente em seu segmento de atuação.
          </p>
        </div>
        <div>
          <h3>Regularização Fiscal e Cadastral</h3>
          <p>
            Auxiliamos na regularização de pendências junto à Receita Federal,
            Secretaria da Fazenda e demais órgãos fiscalizadores, evitando
            multas e bloqueios.
          </p>
        </div>
      </Article>

      <Service />

      <Contact />

      <Portal />

      <Footer />
    </Container>
  );
}

export default Opening;
