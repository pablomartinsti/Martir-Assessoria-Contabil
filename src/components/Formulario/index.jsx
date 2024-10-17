import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Container,
  Section,
  Article,
  Main,
  Form,
  Input,
  Textarea,
  Button,
} from './styles';

function Formulario() {
  const el = useRef();
  const tl = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.section',
            scrub: true,
            // markers: true,
            start: 'top 500px',
            end: 'bottom 700px',
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
        )
        .fromTo(
          '#item-5',
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
      <Section className="section">
        <Article>
          <Main>
            <h2 id="item-1">
              Conte com Nossa Experiência para Soluções Contábeis Personalizadas
            </h2>
            <p className="text" id="item-2">
              Simplifique Suas Finanças Estamos aqui para ajudar você a alcançar
              os melhores resultados na gestão contábil do seu negócio. Preencha
              o formulário ao lado e nossa equipe especializada entrará em
              contato com você rapidamente para oferecer soluções personalizadas
              e eficientes que farão a diferença no seu dia a dia.
            </p>
            <div id="item-3">
              <img
                width="24"
                height="24"
                src=" https://img.icons8.com/?size=100&id=16733&format=png&color=E8B931"
                alt="new-post"
              />
              <p>(34) 9 9762-4502</p>
            </div>
            <div id="item-4">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/?size=100&id=jicLxt1sA2qa&format=png&color=E8B931"
                alt="new-post"
              />
              <p>Karinehelenacontadora@gmail.com</p>
            </div>
          </Main>
          <Form id="item-5">
            <Input placeholder="Digite seu Nome"></Input>
            <Input placeholder="Digite seu E-mail"></Input>
            <Input placeholder="Digite seu Telefone"></Input>
            <Textarea placeholder="Digite sua Mensagem Aqui"></Textarea>
            <Button>ENVIAR</Button>
          </Form>
        </Article>
      </Section>
    </Container>
  );
}

export default Formulario;
