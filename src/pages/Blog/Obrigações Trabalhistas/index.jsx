import { Container, Section } from './styles';
import Header from '../../../components/header';
import Footer from '../../../components/Footer';
import TipsNews from '../../../components/Blog';
import Contact from '../../../components/Contact';
import trabalho from '../../../assets/trabalho.png';

function LaborObligations() {
  return (
    <Container>
      <Header />
      <Section>
        <h1>Como Lidar com as Obrigações Trabalhistas?</h1>
        <div>
          <p>
            Cumprir as obrigações trabalhistas é uma parte essencial da gestão
            de uma empresa que emprega funcionários. Além de garantir o
            bem-estar dos trabalhadores, estar em conformidade com as leis
            trabalhistas evita multas, processos judiciais e outros problemas
            legais. Neste artigo, vamos abordar as principais obrigações
            trabalhistas que os empreendedores devem conhecer e como
            administrá-las corretamente.
          </p>
          <img src={trabalho} />

          <h2>Principais Obrigações Trabalhistas</h2>

          <h3>1. Registro de Funcionários</h3>
          <p>
            Todo funcionário deve ser registrado na empresa de forma oficial,
            com a carteira de trabalho assinada. No registro, devem constar as
            informações sobre o cargo, salário, data de admissão e outras
            condições de trabalho. O registro garante que o funcionário tenha
            acesso aos direitos previstos em lei, como férias, 13º salário e
            FGTS.
          </p>

          <h3>2. Folha de Pagamento</h3>
          <p>
            A folha de pagamento é o documento que detalha os salários dos
            funcionários, incluindo descontos como INSS, FGTS e IRRF (Imposto de
            Renda Retido na Fonte). A empresa deve calcular corretamente os
            valores devidos e garantir que os pagamentos sejam feitos dentro dos
            prazos estabelecidos.
          </p>

          <h3>3. Contribuições ao INSS</h3>
          <p>
            O empregador deve contribuir com a Previdência Social para garantir
            a aposentadoria e outros benefícios aos funcionários. Essa
            contribuição é feita mensalmente por meio do recolhimento do INSS,
            sendo parte do valor descontado diretamente do salário do
            trabalhador, e outra parte paga pela empresa.
          </p>

          <h3>4. FGTS (Fundo de Garantia do Tempo de Serviço)</h3>
          <p>
            O FGTS é uma obrigação mensal do empregador, que deve depositar 8%
            do salário bruto de cada funcionário em uma conta específica
            vinculada ao trabalhador. Esse fundo pode ser sacado pelo
            funcionário em caso de demissão sem justa causa, aposentadoria,
            entre outros motivos previstos em lei.
          </p>

          <h3>5. 13º Salário</h3>
          <p>
            O 13º salário é um benefício garantido por lei aos trabalhadores
            formais e deve ser pago em duas parcelas, sendo a primeira até o dia
            30 de novembro e a segunda até o dia 20 de dezembro. Ele corresponde
            a um salário extra e é proporcional ao tempo de serviço prestado
            durante o ano.
          </p>

          <h3>6. Férias</h3>
          <p>
            Todo funcionário tem direito a 30 dias de férias remuneradas a cada
            12 meses de trabalho. O pagamento das férias deve ser feito até dois
            dias antes do início do período de descanso, e deve incluir um
            adicional de 1/3 do salário.
          </p>

          <h3>7. Benefícios Trabalhistas</h3>
          <p>
            Além dos direitos previstos por lei, algumas empresas optam por
            oferecer benefícios extras, como plano de saúde, vale-alimentação e
            vale-transporte. Embora alguns desses benefícios sejam obrigatórios
            em certas condições (como o vale-transporte), outros são
            voluntários, mas podem ser um diferencial para atrair e reter
            talentos.
          </p>

          <h2>Como Gerenciar as Obrigações Trabalhistas?</h2>

          <h3>1. Manter a Documentação em Dia</h3>
          <p>
            A organização dos documentos relacionados à contratação e à jornada
            de trabalho dos funcionários é fundamental. Contratos de trabalho,
            recibos de pagamento, documentos de FGTS e INSS, bem como registros
            de férias, devem ser mantidos em ordem para evitar problemas
            futuros.
          </p>

          <h3>2. Cumprir os Prazos</h3>
          <p>
            Pagamentos de salários, 13º, férias e contribuições como INSS e FGTS
            devem ser feitos dentro dos prazos estabelecidos pela legislação.
            Atrasos podem resultar em multas e processos trabalhistas. Um
            calendário de obrigações pode ajudar a manter tudo sob controle.
          </p>

          <h3>3. Automatizar Processos</h3>
          <p>
            Utilizar sistemas de gestão de folha de pagamento e controle de
            ponto pode facilitar o cumprimento das obrigações trabalhistas.
            Esses sistemas garantem precisão nos cálculos, além de armazenar
            todos os dados necessários para consultas futuras.
          </p>

          <h3>4. Consultar um Contador ou Especialista em RH</h3>
          <p>
            Contar com a orientação de um contador ou especialista em Recursos
            Humanos pode ser essencial para lidar com as obrigações
            trabalhistas. Esses profissionais garantem que a empresa esteja
            cumprindo as normas e ajudam a evitar problemas legais.
          </p>

          <h2>
            O que Acontece se a Empresa Não Cumprir as Obrigações Trabalhistas?
          </h2>
          <p>
            O não cumprimento das obrigações trabalhistas pode resultar em
            multas impostas pelo Ministério do Trabalho, processos judiciais
            movidos por funcionários e até mesmo dificuldades para operar a
            empresa. Além disso, a reputação do negócio pode ser prejudicada,
            afetando sua capacidade de atrair e reter talentos.
          </p>

          <h2>Conclusão</h2>
          <p>
            Lidar corretamente com as obrigações trabalhistas é uma parte
            essencial da gestão de uma empresa que possui funcionários. Cumprir
            as regras e manter os processos organizados não só garante o
            bem-estar dos trabalhadores, mas também evita complicações legais e
            financeiras para o empregador. Estar atento às datas de pagamento,
            manter uma documentação organizada e contar com o apoio de um
            contador ou especialista em RH são práticas fundamentais para
            garantir que sua empresa esteja sempre em conformidade com a
            legislação trabalhista.
          </p>
        </div>
      </Section>
      <Contact />
      <TipsNews />

      <Footer />
    </Container>
  );
}

export default LaborObligations;
