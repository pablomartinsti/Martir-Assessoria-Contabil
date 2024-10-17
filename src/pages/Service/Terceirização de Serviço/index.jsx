import { Container, Section, Div, Article } from './styles';
import Header from '../../../components/header';
import Footer from '../../../components/Footer';
import Contact from '../../../components/Contact';
import Service from '../../../components/Service';
import Portal from '../../../components/Portal';
import terceirizaçao from '../../../assets/terceirizaçao.png';
function Outsourcing() {
  return (
    <Container>
      <Header />

      <Section>
        <img style={{ width: 600, height: 310 }} src={terceirizaçao} />
        <Div>
          <h2>Terceirização de Serviço Fiscal e Contábil</h2>
          <p>
            A terceirização dos serviços fiscais e contábeis permite que sua
            empresa foque no seu core business enquanto profissionais
            especializados cuidam de toda a parte burocrática. Com nossa
            expertise, garantimos que todas as obrigações fiscais e contábeis
            sejam cumpridas corretamente, evitando problemas com o fisco e
            proporcionando uma gestão eficiente
          </p>
          <a>FALE COM NOSSA EQUIPE</a>
        </Div>
      </Section>
      <Article>
        <div>
          <h3>Gestão Contábil Completa</h3>
          <p>
            Assumimos toda a contabilidade da sua empresa, desde o registro de
            transações financeiras até a elaboração de balanços e demonstrações
            contábeis.
          </p>
        </div>
        <div>
          <h3>Apuração e Pagamento de Tributos</h3>
          <p>
            Realizamos o cálculo e o pagamento de todos os impostos, garantindo
            que sua empresa esteja em conformidade com a legislação fiscal.
          </p>
        </div>
        <div>
          <h3>Elaboração e Envio de Declarações</h3>
          <p>
            Preparamos e enviamos todas as declarações fiscais obrigatórias,
            como o Imposto de Renda, SPED Fiscal e Contribuições, evitando
            atrasos e penalidades.
          </p>
        </div>
        <div>
          <h3>Consultoria Contábil e Fiscal</h3>
          <p>
            Fornecemos assessoria contínua para garantir que sua empresa adote
            as melhores práticas fiscais e contábeis, otimizando sua operação e
            reduzindo custos.
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

export default Outsourcing;
