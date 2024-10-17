import { useEffect, useRef } from 'react';
import { Container, Section } from './styles';
import Cards from '../../components/Cards';
import contabilidade from '../../assets/contabilidade.png';
import declaração from '../../assets/declaração.png';
import abertura from '../../assets/abertura.png';
import consultoria from '../../assets/consultoria.png';
import gestao from '../../assets/gestao.png';
import terceirizaçao from '../../assets/terceirizaçao.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Service() {
  const el = useRef();
  const tl = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.container',
            scrub: true,
            //markers: true,
            start: 'top 700px',
            end: 'bottom 1000px',
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
        );
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <Container>
      <Section ref={el}>
        <div className="container">
          <h1 id="item-1">Confira Alguns de Nossos Serviços</h1>
          <div className="section">
            <div id="item-2">
              <Cards
                image={contabilidade}
                title="Contabilidade Geral"
                description="Gerencie as finanças do seu negócio de maneira eficiente com nossa contabilidade completa."
                linkText="SAIBA MAIS"
                linkHref="/Serviço/Contabilidade-Geral"
              />
            </div>
            <div id="item-3">
              <Cards
                image={declaração}
                title="Declaração de Imposto de Renda"
                description=" Evite complicações com o fisco. Deixe sua declaração de imposto
                em nossas mãos."
                linkText="SAIBA MAIS"
                linkHref="/Serviço/Declaração-Imposto-de-Renda"
              />
            </div>
            <div id="item-4">
              <Cards
                image={abertura}
                title="Abertura e Regularização de Empresas"
                description=" Abra sua empresa com segurança e eficiência, cuidamos de toda a
                documentação necessária."
                linkText="SAIBA MAIS"
                linkHref="/Serviço/Abertura-e-Regularização-de-Empresas"
              />
            </div>
            <div id="item-5">
              <Cards
                image={consultoria}
                title="Consultoria Fiscal e Tributária"
                description="Otimize seus impostos e maximize seu lucro com nosso planejamento fiscal."
                linkText="SAIBA MAIS"
                linkHref="/Serviço/Consultoria-Fiscal-e-Tributária"
              />
            </div>
            <div id="item-6">
              <Cards
                image={gestao}
                title="Gestão Financeira"
                description="Controle o fluxo de caixa e melhore a saúde financeira da sua empresa com nossas soluções."
                linkText="SAIBA MAIS"
                linkHref="/Serviço/Gestão-Financeira"
              />
            </div>
            <div id="item-7">
              <Cards
                image={terceirizaçao}
                title="Terceirização de Serviço Fiscal e Contábil"
                description="Terceirize com nossa equipe especializada, garantindo precisão e conformidade."
                linkText="SAIBA MAIS"
                linkHref="/Serviço/Terceirização-de-Serviço-Fiscal-e-Contábil"
              />
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}

export default Service;
