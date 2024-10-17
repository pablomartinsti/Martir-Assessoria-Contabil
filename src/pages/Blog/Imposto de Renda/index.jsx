import { Container, Section } from './styles';
import Header from '../../../components/header';
import Footer from '../../../components/Footer';
import Contact from '../../../components/Contact';
import TipsNews from '../../../components/Blog';
import tax from '../../../assets/tax.png';

function Tax() {
  return (
    <Container>
      <Header />
      <Section>
        <h1>Imposto de Renda: Deduções Legais e Como Aumentar a Restituição</h1>
        <div>
          <p>
            Todos os anos, muitas pessoas têm dúvidas sobre como declarar o
            Imposto de Renda corretamente e, principalmente, sobre como podem
            aproveitar as deduções legais para aumentar a restituição ou reduzir
            o valor a ser pago. Saber exatamente o que pode ser deduzido e como
            isso funciona é essencial para não perder dinheiro e manter sua
            situação fiscal em conformidade. Vamos abordar as principais
            deduções e como elas podem beneficiar você.
          </p>
          <img src={tax} />

          <h2>O que são deduções no Imposto de Renda?</h2>
          <p>
            Deduções são despesas que podem ser subtraídas da base de cálculo do
            imposto, diminuindo o valor final sobre o qual o imposto é aplicado.
            Isso significa que, ao incluir determinadas despesas na sua
            declaração, você reduz a quantidade de imposto a pagar ou aumenta o
            valor que receberá de restituição.
          </p>

          <h2>Principais deduções legais permitidas</h2>
          <ul>
            <li>
              <strong>Despesas Médicas:</strong> Gastos com saúde podem ser
              deduzidos integralmente, desde que sejam devidamente comprovados.
              Isso inclui consultas médicas, exames, cirurgias, despesas
              hospitalares, planos de saúde e medicamentos relacionados a
              internações. Importante: as despesas precisam estar no nome do
              contribuinte ou de seus dependentes.
            </li>
            <li>
              <strong>Educação:</strong> Despesas com educação formal, como
              mensalidades escolares e universitárias, podem ser deduzidas, mas
              há um limite anual. Vale lembrar que cursos extracurriculares,
              como idiomas ou preparatórios, não são dedutíveis.
            </li>
            <li>
              <strong>Dependentes:</strong> Ter dependentes na sua declaração
              pode aumentar as deduções. Dependentes podem ser filhos, enteados,
              cônjuges, pais, avós ou até netos, desde que sigam as regras
              estabelecidas pela Receita Federal. Cada dependente acrescenta um
              valor fixo de dedução na sua base de cálculo.
            </li>
            <li>
              <strong>Contribuições à Previdência Social e Privada:</strong> As
              contribuições feitas ao INSS, tanto por empregados quanto por
              autônomos e empregadores domésticos, são dedutíveis. Também é
              possível deduzir até 12% da sua renda tributável com contribuições
              à previdência privada, desde que o plano seja do tipo PGBL.
            </li>
            <li>
              <strong>Pensão Alimentícia:</strong> Se você paga pensão
              alimentícia determinada judicialmente, esse valor é dedutível
              integralmente. Porém, os pagamentos devem seguir o que está
              previsto na sentença ou acordo homologado.
            </li>
            <li>
              <strong>Despesas com Doações e Incentivos Culturais:</strong>{' '}
              Doações feitas a fundos de incentivo à cultura, como o Fundo da
              Criança e do Adolescente, ou a projetos culturais e esportivos
              aprovados, também podem ser deduzidas. Essas deduções são
              limitadas a um percentual da renda tributável.
            </li>
          </ul>

          <h2>Como aumentar sua restituição?</h2>
          <p>
            Para aumentar a restituição, é importante que você esteja ciente de
            todas as deduções permitidas pela Receita Federal e se organize ao
            longo do ano para reunir os comprovantes das despesas. Algumas dicas
            para garantir que você maximize o valor da sua restituição incluem:
          </p>
          <ul>
            <li>
              <strong>Organização é a chave:</strong> Guarde todos os recibos e
              comprovantes de despesas dedutíveis ao longo do ano, como notas
              fiscais de despesas médicas, boletos de escola e comprovantes de
              pagamento de plano de saúde.
            </li>
            <li>
              <strong>Declaração completa:</strong> Utilize o modelo completo da
              declaração do Imposto de Renda, caso tenha muitas despesas
              dedutíveis. Embora o modelo simplificado seja mais prático, ele
              oferece apenas um desconto padrão de 20%, que pode ser menor do
              que as deduções que você conseguiria com o modelo completo.
            </li>
            <li>
              <strong>Inclua todos os dependentes elegíveis:</strong>{' '}
              Dependentes aumentam as deduções, então não deixe de incluí-los na
              declaração se forem elegíveis conforme as regras da Receita
              Federal.
            </li>
            <li>
              <strong>Revise suas declarações anteriores:</strong> Caso tenha
              esquecido de deduzir alguma despesa em anos anteriores, você pode
              corrigir isso através de uma retificação da declaração, garantindo
              que todas as deduções possíveis sejam incluídas.
            </li>
          </ul>

          <h2>Cuidados ao declarar as deduções</h2>
          <p>
            Embora as deduções possam reduzir significativamente o valor do
            imposto a pagar, é fundamental que todas as informações prestadas na
            declaração estejam devidamente comprovadas. A Receita Federal pode
            solicitar a comprovação de despesas, e caso você não consiga
            fornecer os documentos exigidos, poderá ser multado.
          </p>
          <p>Evite cometer erros comuns como:</p>
          <ul>
            <li>
              Declarar despesas que não são dedutíveis (por exemplo, cursos não
              formais na seção de educação).
            </li>
            <li>
              Não incluir recibos ou notas fiscais válidas para despesas
              médicas.
            </li>
            <li>
              Declarar dependentes que não atendem aos critérios da Receita
              Federal.
            </li>
          </ul>

          <h2>Conclusão</h2>
          <p>
            Utilizar as deduções legais a seu favor é uma forma inteligente de
            reduzir o valor do Imposto de Renda e aumentar sua restituição. O
            segredo está em se manter organizado ao longo do ano, compreender
            quais despesas são dedutíveis e optar pelo modelo completo da
            declaração, caso seja mais vantajoso para você. E, claro, sempre
            declarar com precisão para evitar problemas futuros com a Receita
            Federal. Se precisar de ajuda, conte com o apoio de um contador para
            garantir que você está aproveitando todas as oportunidades de
            redução fiscal.
          </p>
        </div>
      </Section>
      <Contact />
      <TipsNews />

      <Footer />
    </Container>
  );
}

export default Tax;
