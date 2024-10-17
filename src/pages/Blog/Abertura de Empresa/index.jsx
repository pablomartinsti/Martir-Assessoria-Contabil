import { Container, Section } from './styles';
import Header from '../../../components/header';
import Footer from '../../../components/Footer';
import Contact from '../../../components/Contact';
import TipsNews from '../../../components/Blog';
import abertura from '../../../assets/abertura.jpg';

function CompanyOpening() {
  return (
    <Container>
      <Header />
      <Section>
        <h1>
          Abertura de Empresa: O Que Você Precisa Saber para Formalizar Seu
          Negócio
        </h1>
        <div>
          <p>
            A formalização de um negócio é o primeiro passo para quem deseja
            empreender com segurança e legalidade no Brasil. A abertura de uma
            empresa envolve uma série de procedimentos burocráticos que precisam
            ser seguidos corretamente para garantir que a sua empresa esteja
            legalmente registrada e em conformidade com as obrigações fiscais e
            trabalhistas. Neste artigo, vamos explicar o processo de abertura de
            empresa, quais são os principais tipos de empresa e os documentos
            necessários.
          </p>
          <img src={abertura} />

          <h3>2. Registro no Órgão Competente</h3>
          <p>
            Após a definição do tipo de empresa, o próximo passo é o registro na{' '}
            <strong>Junta Comercial</strong> do estado onde a empresa será
            sediada. Esse processo envolve a criação do{' '}
            <strong>Contrato Social</strong>, que define o nome, a atividade, o
            capital social e a estrutura da empresa. No caso de MEIs, o processo
            é feito pelo Portal do Empreendedor e é bem mais simples.
          </p>

          <h3>3. Obtenção do CNPJ</h3>
          <p>
            Com o registro aprovado pela Junta Comercial, é hora de solicitar o{' '}
            <strong>CNPJ</strong> (Cadastro Nacional de Pessoa Jurídica) junto à
            Receita Federal. O CNPJ é o equivalente ao CPF para empresas e é
            essencial para todas as transações comerciais.
          </p>

          <h3>4. Inscrição Estadual e Municipal</h3>
          <p>
            Dependendo da atividade da empresa, pode ser necessário obter a{' '}
            <strong>Inscrição Estadual</strong> e/ou{' '}
            <strong>Inscrição Municipal</strong>. A Inscrição Estadual é
            obrigatória para empresas que comercializam produtos e está ligada
            ao ICMS (Imposto sobre Circulação de Mercadorias e Serviços). Já a
            Inscrição Municipal é necessária para empresas que prestam serviços,
            pois estão sujeitas ao ISS (Imposto Sobre Serviços).
          </p>

          <h3>5. Alvará de Funcionamento</h3>
          <p>
            Para iniciar as operações, a empresa também precisará de um{' '}
            <strong>Alvará de Funcionamento</strong>, que é emitido pela
            prefeitura local. Esse documento atesta que o estabelecimento cumpre
            as normas de segurança, higiene e uso do solo.
          </p>

          <h3>6. Cadastro na Previdência Social</h3>
          <p>
            Independentemente de a empresa ter funcionários ou não, é necessário
            se cadastrar na <strong>Previdência Social</strong> para cumprir as
            obrigações trabalhistas. Se a empresa for contratar funcionários, é
            preciso também realizar o registro dos empregados e cumprir com os
            encargos trabalhistas, como FGTS e INSS.
          </p>

          <h2>Documentos Necessários para a Abertura de Empresa</h2>
          <p>
            Os principais documentos exigidos para a abertura de uma empresa
            são:
          </p>
          <ul>
            <li>Cópia do RG e CPF dos sócios.</li>
            <li>Comprovante de residência dos sócios.</li>
            <li>Comprovante de endereço da empresa.</li>
            <li>Contrato Social (ou Certificado de MEI).</li>
            <li>
              Documento de constituição da empresa, como o requerimento do
              empresário individual ou o estatuto social (para SA).
            </li>
          </ul>

          <h2>Vantagens de Formalizar Seu Negócio</h2>
          <p>Formalizar o negócio traz várias vantagens, entre elas:</p>
          <ul>
            <li>
              <strong>Acesso a linhas de crédito:</strong> Empresas formalizadas
              podem solicitar financiamentos em bancos com melhores condições.
            </li>
            <li>
              <strong>Credibilidade no mercado:</strong> Ter uma empresa
              formalizada aumenta a confiança dos clientes e fornecedores.
            </li>
            <li>
              <strong>Cumprimento das obrigações fiscais:</strong> Estar
              legalmente estabelecido evita problemas com o fisco, como multas e
              impedimentos operacionais.
            </li>
          </ul>

          <h2>Conclusão</h2>
          <p>
            A abertura de empresa é um processo que, embora envolva algumas
            etapas burocráticas, é essencial para garantir que o negócio opere
            de forma legal e sustentável. Contar com o suporte de um contador
            pode facilitar o processo, assegurando que todas as etapas sejam
            cumpridas corretamente e que a empresa inicie suas operações com
            segurança. Se você está pensando em abrir uma empresa, siga essas
            orientações e comece com o pé direito.
          </p>
        </div>
      </Section>
      <Contact />
      <TipsNews />

      <Footer />
    </Container>
  );
}

export default CompanyOpening;
