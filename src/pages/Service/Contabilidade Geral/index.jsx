import { Container, Section, Div, Article } from './styles';
import Header from '../../../components/header';
import Footer from '../../../components/Footer';

import Contact from '../../../components/Contact';
import Service from '../../../components/Service';
import Portal from '../../../components/Portal';

import contabilidade from '../../../assets/contabilidade.png';

function accounting() {
  return (
    <Container>
      <Header />

      <Section>
        <img style={{ width: 600, height: 310 }} src={contabilidade} />
        <Div>
          <h2>Contabilidade Geral</h2>
          <p>
            A contabilidade geral é essencial para o controle financeiro, gestão
            estratégica e cumprimento de obrigações fiscais. Com nossos
            serviços, garantimos que sua empresa esteja sempre em conformidade
            com as leis e que tenha uma gestão financeira eficiente para crescer
            de forma sustentável.
          </p>
          <a>FALE COM NOSSA EQUIPE</a>
        </Div>
      </Section>
      <Article>
        <div>
          <h3>Escrituração Contábil</h3>
          <p>
            Registro detalhado de todas as transações financeiras para controle
            e análise da saúde financeira do negócio.
          </p>
        </div>
        <div>
          <h3>Apuração de Tributos</h3>
          <p>
            Cálculo e pagamento correto dos impostos, garantindo conformidade
            fiscal e evitando multas desnecessárias.
          </p>
        </div>
        <div>
          <h3>Folha de Pagamento</h3>
          <p>
            Gerenciamento de salários e benefícios, assegurando o cumprimento
            das obrigações trabalhistas e sociais.
          </p>
        </div>
        <div>
          <h3>Consultoria Personalizada</h3>
          <p>
            Soluções contábeis adaptadas às necessidades específicas do seu
            negócio para maximizar resultados.
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

export default accounting;
