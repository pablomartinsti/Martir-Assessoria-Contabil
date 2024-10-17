import { Container, Section } from './styles';
import Header from '../../../components/header';
import Footer from '../../../components/Footer';
import TipsNews from '../../../components/Blog';
import Contact from '../../../components/Contact';
import lucros from '../../../assets/lucros.png';

function ProLaboreandProfits() {
  return (
    <Container>
      <Header />
      <Section>
        <h1>Como Montar um Pró-Labore Correto para os Sócios</h1>
        <div>
          <p>
            Definir o pró-labore dos sócios é um passo fundamental para a boa
            gestão financeira de uma empresa. Pró-labore é a remuneração paga
            aos sócios que efetivamente trabalham na empresa, sendo diferente da
            participação nos lucros. Além de estar diretamente ligado à
            previdência e aos impostos, definir corretamente o pró-labore ajuda
            a manter a estrutura financeira da empresa saudável e evita
            problemas fiscais. Neste artigo, vamos explicar o que é o
            pró-labore, como defini-lo corretamente e quais são os aspectos
            legais envolvidos.
          </p>
          <img src={lucros} />

          <h2>O que é Pró-Labore?</h2>
          <p>
            O pró-labore é a remuneração dos sócios que exercem funções
            administrativas ou operacionais dentro da empresa. Ele não é um
            salário tradicional, mas sim uma remuneração pelo trabalho que o
            sócio realiza. Ao contrário da distribuição de lucros, que depende
            do desempenho da empresa, o pró-labore é fixo e deve ser pago
            independentemente do resultado financeiro do negócio.
          </p>
          <h2>Diferença Entre Pró-Labore e Lucros</h2>
          <p>
            É importante entender a diferença entre pró-labore e distribuição de
            lucros. O pró-labore refere-se à remuneração pelo trabalho do sócio,
            e sobre ele incidem impostos e contribuições, como INSS e Imposto de
            Renda. Já a distribuição de lucros não está sujeita à contribuição
            previdenciária ou ao imposto de renda, desde que a empresa esteja
            regularizada com a contabilidade.
          </p>

          <h2>Como Definir o Pró-Labore Correto?</h2>
          <p>
            Definir o valor do pró-labore de forma correta é essencial para
            evitar problemas fiscais e manter a gestão financeira equilibrada.
            Veja os principais aspectos a considerar:
          </p>

          <h3>1. Função dos Sócios na Empresa</h3>
          <p>
            O pró-labore deve refletir a função e o papel que cada sócio
            desempenha na empresa. Sócios que atuam diretamente na gestão ou
            operações, por exemplo, devem receber um pró-labore compatível com
            suas responsabilidades. Já sócios que não exercem funções na
            administração podem não ter pró-labore, recebendo apenas a
            distribuição de lucros.
          </p>

          <h3>2. Capacidade Financeira da Empresa</h3>
          <p>
            O valor do pró-labore precisa ser definido de acordo com a saúde
            financeira da empresa. Ele não pode comprometer o fluxo de caixa, e
            é importante que a empresa tenha recursos para cobrir outras
            despesas operacionais antes de definir uma remuneração elevada para
            os sócios.
          </p>

          <h3>3. Referência ao Mercado</h3>
          <p>
            É uma boa prática utilizar como referência os salários pagos a
            profissionais do mercado que ocupam cargos semelhantes ao dos sócios
            dentro da empresa. Isso ajuda a definir um valor justo e compatível
            com o setor.
          </p>

          <h3>4. Contribuições e Impostos</h3>
          <p>
            Sobre o pró-labore, incidem algumas obrigações fiscais, como a
            contribuição para o INSS (20% por parte da empresa e de 11% a 14%
            por parte do sócio) e o Imposto de Renda Retido na Fonte, dependendo
            do valor. Esses custos devem ser levados em consideração ao definir
            o valor.
          </p>

          <h2>Obrigações Fiscais Relacionadas ao Pró-Labore</h2>
          <p>
            Ao definir o pró-labore, é importante entender as obrigações fiscais
            que incidem sobre ele:
          </p>
          <ul>
            <li>
              <strong>INSS:</strong> A empresa deve contribuir com 20% sobre o
              valor do pró-labore. O sócio também deve recolher uma alíquota de
              11% a 14%, que será descontada diretamente da remuneração.
            </li>
            <li>
              <strong>Imposto de Renda:</strong> Dependendo do valor do
              pró-labore, pode haver retenção de imposto de renda na fonte,
              seguindo as faixas de tributação da Receita Federal.
            </li>
            <li>
              <strong>FGTS:</strong> O pró-labore não está sujeito ao
              recolhimento de FGTS, uma vez que o sócio não é considerado um
              empregado formal.
            </li>
          </ul>
          <h2>Pró-Labore para MEI, Simples Nacional e Outros Regimes</h2>
          <ul>
            <li>
              <strong>MEI:</strong> No caso de Microempreendedores Individuais
              (MEI), o dono da empresa não recebe pró-labore. Ele retira
              diretamente da empresa, sem necessidade de formalizar essa
              retirada como pró-labore.
            </li>
            <li>
              <strong>Simples Nacional:</strong> Para empresas optantes pelo
              Simples Nacional, o sócio que trabalha na empresa deve ter
              pró-labore e cumprir as obrigações fiscais relacionadas a ele.
            </li>
            <li>
              <strong>Lucro Presumido e Lucro Real:</strong> Nos regimes de
              Lucro Presumido e Lucro Real, o pró-labore deve ser declarado e
              sujeito à tributação como qualquer outra empresa.
            </li>
          </ul>
          <h2>Conclusão</h2>
          <p>
            Montar um pró-labore correto para os sócios é uma prática essencial
            para manter a empresa em conformidade com as obrigações fiscais e
            garantir uma gestão financeira eficiente. Ao definir o pró-labore, é
            necessário considerar a função dos sócios, a capacidade financeira
            da empresa e as obrigações fiscais. Consultar um contador é sempre
            recomendável para garantir que o valor definido esteja dentro das
            normas legais e adequado à realidade da empresa.
          </p>
        </div>
      </Section>
      <Contact />
      <TipsNews />

      <Footer />
    </Container>
  );
}

export default ProLaboreandProfits;
