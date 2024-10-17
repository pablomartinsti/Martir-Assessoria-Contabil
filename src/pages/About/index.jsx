import { useEffect, useRef } from 'react';
import { Container, Main, Section, Div, Article } from './styles';
import Header from '../../components/header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import about from '../../assets/sobre.png';
import Portal from '../../components/Portal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Sobre() {
  const el = useRef();
  const tl = useRef();
  const EL = useRef();
  const TL = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.main', {
      y: 0,
      opacity: 1,
    });
    gsap.to('.text', {
      x: 0,
      opacity: 1,
    });
    gsap.to('.text-1', {
      x: 0,
      opacity: 1,
    });
    return () => {
      gsap.killTweensOf('.main');
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.div',
            scrub: true,
            //markers: true,
            start: 'top 650px',
            end: 'bottom 750px',
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
        );
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      TL.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.h1',
            scrub: true,
            //markers: true,
            start: 'top 500px',
            end: 'bottom 380px',
          },
        })
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
        );
    }, EL);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Container>
      <Header />

      <Main className="main">
        <div>
          <h1 className="text">CONHEÇA MAIS </h1>
          <h1 className="text-1">SOBRE NÓS</h1>
        </div>
      </Main>
      <Section id="item-0" ref={el}>
        <Div className="div" id="item-1">
          <div>
            <h3>Missão</h3>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/?size=100&id=59881&format=png&color=FFFFFF"
              alt="rocket"
            />
          </div>
          <p>
            Oferecer soluções contábeis personalizadas, focadas em eficiência e
            inovação, para apoiar nossos clientes na conquista de seus objetivos
            financeiros, sempre com transparência, confiança e resultados
            sólidos.
          </p>
        </Div>
        <Div id="item-2">
          <div>
            <h3>Visão</h3>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/?size=100&id=60022&format=png&color=FFFFFF"
              alt="visible--v1"
            />
          </div>
          <p>
            Ser referência no setor contábil, reconhecida por inovação e
            excelência, promovendo o crescimento sustentável das empresas e
            ajudando-as a alcançar seus objetivos financeiros com confiança e
            segurança.
          </p>
        </Div>
        <Div id="item-3">
          <div>
            <h3>Valores</h3>
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/?size=100&id=9894&format=png&color=FFFFFF"
              alt="suitcase"
            />
          </div>
          <p>
            Transparência e ética em cada ação; inovação contínua para otimizar
            processos; excelência e parceria no suporte ao sucesso sustentável
            dos nossos clientes.
          </p>
        </Div>
      </Section>
      <Article ref={EL}>
        <h1 className="h1" id="item-4" style={{ marginTop: 200 }}>
          Mártír Assessoria Contábil
        </h1>
        <div className="container">
          <div id="item-5">
            <h4>
              Apoio estratégico para o crescimento sustentável do seu negócio
            </h4>
            <p>
              Fundada em 2023, a Mártír Assessoria Contábil surgiu com o
              propósito de transformar a forma como as empresas gerenciam suas
              finanças. Com uma equipe altamente qualificada, temos orgulho em
              oferecer serviços que vão além da contabilidade tradicional,
              agregando valor ao negócio de nossos clientes.
            </p>
            <p>
              Nosso foco é oferecer soluções contábeis eficientes e
              personalizadas, sempre com o objetivo de proporcionar suporte
              estratégico para o crescimento sustentável de cada cliente.
              Acreditamos na transparência, na excelência e em uma parceria que
              impulsione resultados duradouros e positivos.
            </p>

            <a href="/Serviço">Saiba mais sobre nossos serviços</a>
          </div>
          <img id="item-6" src={about} />
        </div>
      </Article>
      <Contact />

      <Portal />

      <Footer />
    </Container>
  );
}

export default Sobre;
