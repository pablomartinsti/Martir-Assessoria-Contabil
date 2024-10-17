import { Container, Section, Div, Article } from './styles';
import Header from '../../../components/header';
import Footer from '../../../components/Footer';
import Contact from '../../../components/Contact';
import Service from '../../../components/Service';
import Portal from '../../../components/Portal';
import declaração from '../../../assets/declaração.png';
function Declaration() {
  return (
    <Container>
      <Header />

      <Section>
        <img style={{ width: 600, height: 310 }} src={declaração} />
        <Div>
          <h2>Declaração de Imposto de Renda</h2>
          <p>
            A Declaração de Imposto de Renda é uma obrigação anual para pessoas
            físicas e jurídicas no Brasil. É essencial garantir que o processo
            seja feito corretamente para evitar problemas com o fisco e
            maximizar as oportunidades de restituição. Oferecemos serviços
            especializados para garantir que sua declaração seja precisa e em
            conformidade com as normas da Receita Federal.
          </p>
          <a>FALE COM NOSSA EQUIPE</a>
        </Div>
      </Section>
      <Article>
        <div>
          <h3>Elaboração da Declaração</h3>
          <p>
            Preparamos e enviamos sua declaração de imposto de renda com base
            nas informações financeiras do ano, garantindo que tudo esteja de
            acordo com a legislação vigente.
          </p>
        </div>
        <div>
          <h3> Análise de Deduções e Restituições</h3>
          <p>
            Analisamos todas as possíveis deduções legais para que você possa
            maximizar a restituição do imposto ou reduzir a carga tributária
            devida.
          </p>
        </div>
        <div>
          <h3>Correção de Declarações Anteriores</h3>
          <p>
            Se houver erros em declarações anteriores, fazemos a retificação
            para corrigir possíveis problemas e evitar multas.
          </p>
        </div>
        <div>
          <h3>Consultoria Preventiva</h3>
          <p>
            Orientamos você sobre boas práticas fiscais para o planejamento
            financeiro, garantindo que suas finanças estejam organizadas para a
            próxima declaração.
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

export default Declaration;
