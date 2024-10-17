import { useEffect, useRef } from 'react';
import { Container, Section, Div } from './styles';
import Cards from '../Cards';
import abertura from '../../assets/abertura.jpg';
import mei from '../../assets/mei.png';
import contador from '../../assets/contador.png';
import notas from '../../assets/notas.png';
import trabalho from '../../assets/trabalho.png';
import lucros from '../../assets/lucros.png';
import planejamento from '../../assets/planejamento.png';
import regime from '../../assets/regime.png';
import tax from '../../assets/tax.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function TipsNews() {
  const el = useRef();
  const tl = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.div',
            scrub: true,
            // markers: true,
            start: 'top 1100px',
            end: 'bottom 1100px',
          },
        })
        .fromTo(
          '#item-1',
          { opacity: 0, y: 150 },
          {
            opacity: 1,
            y: 0,
          },
        )
        .fromTo(
          '#item-2',
          { opacity: 0, y: 150 },
          {
            opacity: 1,
            y: 0,
          },
        )
        .fromTo(
          '#item-3',
          {
            opacity: 0,
            y: 150,
          },
          { opacity: 1, y: 0 },
        )
        .fromTo(
          '#item-4',
          { opacity: 0, y: 150 },
          {
            opacity: 1,
            y: 0,
          },
        )
        .fromTo(
          '#item-5',
          { opacity: 0, y: 150 },
          {
            opacity: 1,
            y: 0,
          },
        )
        .fromTo(
          '#item-6',
          {
            opacity: 0,
            y: 150,
          },
          { opacity: 1, y: 0 },
        )
        .fromTo(
          '#item-7',
          {
            opacity: 0,
            y: 150,
          },
          { opacity: 1, y: 0 },
        )
        .fromTo(
          '#item-8',
          {
            opacity: 0,
            y: 150,
          },
          { opacity: 1, y: 0 },
        )
        .fromTo(
          '#item-9',
          {
            opacity: 0,
            y: 150,
          },
          { opacity: 1, y: 0 },
        );
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <Container ref={el}>
      <Section className="div">
        <Div>
          <div id="item-1">
            <Cards
              image={tax}
              title="Imposto de Renda: Deduções Legais e Como Aumentar a Restituição"
              description="Deduções Legais — Utilize deduções como saúde e educação para aumentar a restituição."
              linkText="SAIBA MAIS"
              linkHref="/Blog/Imposto-de-Renda-Deduções-Legais-e-Como-Aumentar-a-Restituição"
            />
          </div>
          <div id="item-2">
            <Cards
              image={regime}
              title="Como Escolher o Regime Tributário Ideal para sua Empresa"
              description="Escolha o regime tributário ideal para sua empresa com base no faturamento e atividade."
              linkText="SAIBA MAIS"
              linkHref="/Blog/Como-Escolher-o-Regime-Tributário-Ideal-para-sua-Empresa"
            />
          </div>
          <div id="item-3">
            <Cards
              image={planejamento}
              title="Planejamento Tributário: Como Reduzir a Carga de Impostos Legalmente"
              description="Planejamento Tributário é a redução legal de impostos por meio de estratégias fiscais."
              linkText="SAIBA MAIS"
              linkHref="/Blog/Planejamento-Tributário-Como-Reduzir-a-Carga-de-Impostos-Legalmente"
            />
          </div>
          <div id="item-4">
            <Cards
              image={mei}
              title="O que é o MEI e quem pode abrir?"
              description="O MEI é um regime simplificado para formalizar pequenos negócios com benefícios previdenciários e tributação reduzida."
              linkText="SAIBA MAIS"
              linkHref="/Blog/O-que-é-o-MEI-e-quem-pode-abrir?"
            />
          </div>
          <div id="item-5">
            <Cards
              image={lucros}
              title="Como Montar um Pró-Labore Correto para os Sócios"
              description="Pró-Labore: Definição correta da remuneração dos sócios e suas obrigações fiscais."
              linkText="SAIBA MAIS"
              linkHref="/Blog/Como-Montar-um-Pró-Labore-Correto-para-os-Sócios"
            />
          </div>
          <div id="item-6">
            <Cards
              image={contador}
              title="Quando Devo Contratar um Contador para Minha Empresa?"
              description="Descubra o momento ideal para contratar um contador e otimizar sua gestão financeira."
              linkText="SAIBA MAIS"
              linkHref="/Blog/Quando-Devo-Contratar-um-Contador-para-Minha-Empresa?"
            />
          </div>
          <div id="item-7">
            <Cards
              image={notas}
              title="Emissão de Notas Fiscais: O Que Você Precisa Saber"
              description="Como emitir notas fiscais corretamente e cumprir obrigações fiscais."
              linkText="SAIBA MAIS"
              linkHref="/Blog/Emissão-de-Notas-Fiscais-O-Que-Você-Precisa-Saber"
            />
          </div>
          <div id="item-8">
            <Cards
              image={trabalho}
              title="Como Lidar com as Obrigações Trabalhistas?"
              description="Lidar com obrigações trabalhistas envolve calcular salários e encargos corretamente."
              linkText="SAIBA MAIS"
              linkHref="/Blog/Como-Lidar-com-as-Obrigações-Trabalhistas?"
            />
          </div>
          <div id="item-9">
            <Cards
              image={abertura}
              title="Abertura de Empresa: O Que Você Precisa Saber para Formalizar Seu Negócio"
              description="Abertura de Empresa: Guia para formalizar seu negócio e operar legalmente no mercado."
              linkText="SAIBA MAIS"
              linkHref="/Blog/Abertura-de-Empresa:-O-Que-Você-Precisa-Saber"
            />
          </div>
        </Div>
      </Section>
    </Container>
  );
}

export default TipsNews;
