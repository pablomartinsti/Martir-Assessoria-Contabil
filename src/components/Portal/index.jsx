import { Container, Section } from './styles';
import Cards from '../Cards';
import regime from '../../assets/regime.png';
import tax from '../../assets/tax.png';
import planejamento from '../../assets/planejamento.png';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Portal() {
  const el = useRef();
  const tl = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '#item-1',
            scrub: true,
            // markers: true,
            start: 'top 600px',
            end: 'bottom 300px',
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
      <h1 id="item-1">Seu Portal de Dicas Contábeis</h1>
      <Section>
        <div id="item-2">
          <Cards
            image={tax}
            title="Imposto de Renda: Deduções Legais e Como Aumentar a Restituição"
            description="Maximize sua restituição do Imposto de Renda com deduções legais e seguras."
            linkText="SAIBA MAIS"
            linkHref="/Blog/Imposto-de-Renda-Deduções-Legais-e-Como-Aumentar-a-Restituição"
          />
        </div>
        <div id="item-3">
          <Cards
            image={regime}
            title="Como Escolher o Regime Tributário Ideal para sua Empresa"
            description=" Escolha o regime tributário ideal para sua empresa com base no faturamento e atividade."
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
      </Section>
    </Container>
  );
}

export default Portal;
