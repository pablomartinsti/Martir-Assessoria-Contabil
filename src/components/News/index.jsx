import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Section, Article, Aside } from './styles';
import planejamento from '../../assets/planejamento.png';
import regime from '../../assets/regime.png';
import tax from '../../assets/tax.png';
import Cards from '../Cards';

function News() {
  const el = useRef();
  const tl = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '#item-0',
            scrub: true,
            // markers: true,
            start: 'top 700px',
            end: 'bottom 900px',
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
          { opacity: 0, x: -200 },
          {
            opacity: 1,
            x: 0,
          },
        )
        .fromTo(
          '#item-3',
          {
            opacity: 0,
            x: 200,
          },
          { opacity: 1, x: 0 },
        )
        .fromTo(
          '#item-4',
          {
            opacity: 0,
            x: 200,
          },
          { opacity: 1, x: 0 },
        );
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Container ref={el}>
      <div id="item-0">
        <h1 id="item-1">Dicas e Novidades Contábeis</h1>
        <Section>
          <Article id="item-2">
            <img src={tax} alt="imagem da noticia" />
            <h3>
              {' '}
              Imposto de Renda: Deduções Legais e Como Aumentar a Restituição
            </h3>
            <p>
              A declaração do Imposto de Renda oferece diversas oportunidades de
              deduções legais que podem aumentar sua restituição ou reduzir o
              valor a ser pago. Conheça as despesas que podem ser deduzidas,
              como educação, saúde e dependentes, e veja como organizar suas
              finanças de forma a maximizar os benefícios fiscais e garantir que
              você esteja aproveitando todas as possibilidades de redução de
              impostos.
            </p>
            <a href="/Blog/Imposto-de-Renda-Deduções-Legais-e-Como-Aumentar-a-Restituição">
              SAIBA MAIS
            </a>
          </Article>
          <Aside>
            <div id="item-3">
              <Cards
                image={regime}
                title="Como Escolher o Regime Tributário Ideal para sua Empresa"
                description="Escolha o regime tributário ideal para sua empresa com base no faturamento e atividade."
                linkText="SAIBA MAIS"
                linkHref="/Blog/Como-Escolher-o-Regime-Tributário-Ideal-para-sua-Empresa"
              />
            </div>
            <div id="item-4">
              <Cards
                image={planejamento}
                title="Planejamento Tributário: Como Reduzir a Carga de Impostos Legalmente"
                description="Planejamento Tributário é a redução legal de impostos por meio de estratégias fiscais."
                linkText="SAIBA MAIS"
                linkHref="/Blog/Planejamento-Tributário-Como-Reduzir-a-Carga-de-Impostos-Legalmente"
              />
            </div>
          </Aside>
        </Section>
      </div>
    </Container>
  );
}

export default News;
