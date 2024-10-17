import { Container, Section, Div, Article } from './styles';
import Header from '../../../components/header';
import Footer from '../../../components/Footer';
import Contact from '../../../components/Contact';
import Service from '../../../components/Service';
import Portal from '../../../components/Portal';
import gestao from '../../../assets/gestao.png';
function Management() {
  return (
    <Container>
      <Header />

      <Section>
        <img style={{ width: 600, height: 310 }} src={gestao} />
        <Div>
          <h2>Gestão Financeira</h2>
          <p>
            A Gestão Financeira é o coração de uma empresa bem-sucedida. Com um
            controle financeiro eficiente, sua empresa pode crescer de forma
            sustentável, tomar decisões estratégicas com base em dados reais e
            garantir a saúde econômica do negócio. Nosso serviço de gestão
            financeira oferece suporte para organizar suas finanças e planejar o
            futuro de forma segura.
          </p>
          <a>FALE COM NOSSA EQUIPE</a>
        </Div>
      </Section>
      <Article>
        <div>
          <h3>Controle de Fluxo de Caixa</h3>
          <p>
            Monitoramos e gerenciamos todas as entradas e saídas de recursos
            financeiros, garantindo que sua empresa mantenha um fluxo de caixa
            saudável e previsível.
          </p>
        </div>
        <div>
          <h3>Planejamento Orçamentário</h3>
          <p>
            Ajudamos na elaboração de orçamentos anuais e mensais, permitindo
            que sua empresa planeje melhor os gastos e investimentos
          </p>
        </div>
        <div>
          <h3>Análise de Indicadores Financeiros</h3>
          <p>
            Fornecemos relatórios detalhados com os principais indicadores de
            desempenho financeiro, ajudando na tomada de decisões estratégicas.
          </p>
        </div>
        <div>
          <h3>Consultoria Financeira</h3>
          <p>
            Oferecemos aconselhamento contínuo para melhorar a rentabilidade do
            seu negócio, identificar áreas de economia e maximizar os resultados
            financeiros.
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

export default Management;
