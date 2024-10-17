import { Container, Section, Div, Article } from './styles';
import Header from '../../../components/header';
import Footer from '../../../components/Footer';
import Contact from '../../../components/Contact';
import Service from '../../../components/Service';
import Portal from '../../../components/Portal';
import consultoria from '../../../assets/consultoria.png';
function Consultancy() {
  return (
    <Container>
      <Header />

      <Section>
        <img style={{ width: 600, height: 310 }} src={consultoria} />
        <Div>
          <h2>Consultoria Fiscal e Tributária</h2>
          <p>
            A Consultoria Fiscal e Tributária é essencial para que sua empresa
            mantenha suas obrigações fiscais em dia, evitando erros que possam
            resultar em multas ou problemas com o fisco. Com uma assessoria
            especializada, ajudamos a otimizar a carga tributária e garantir que
            sua empresa esteja sempre em conformidade com as leis fiscais
            vigentes.
          </p>
          <a>FALE COM NOSSA EQUIPE</a>
        </Div>
      </Section>
      <Article>
        <div>
          <h3>Planejamento Tributário</h3>
          <p>
            Analisamos a situação fiscal da sua empresa e sugerimos estratégias
            legais para reduzir a carga tributária, respeitando as normas
            fiscais.
          </p>
        </div>
        <div>
          <h3> Apuração de Tributos</h3>
          <p>
            Realizamos o cálculo correto dos impostos de acordo com o regime
            tributário da sua empresa, assegurando que tudo esteja em
            conformidade com a legislação.
          </p>
        </div>
        <div>
          <h3>Revisão Fiscal</h3>
          <p>
            Revisamos processos e documentos fiscais para identificar possíveis
            inconsistências ou oportunidades de melhorar a gestão tributária.
          </p>
        </div>
        <div>
          <h3>Consultoria Preventiva</h3>
          <p>
            Aconselhamos sua empresa sobre boas práticas fiscais para evitar
            autuações e garantir uma gestão eficiente dos tributos a longo
            prazo.
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

export default Consultancy;
