import { useEffect, useRef } from 'react';
import { Container, Start, About } from './styles';
import Header from '../../components/header';
import about from '../../assets/sobre.png';
import News from '../../components/News';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Formulario from '../../components/Formulario';
import Service from '../../components/Service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Home() {
  const title4Ref = useRef(null);
  const el = useRef();
  const tl = useRef();

  useEffect(() => {
    const animations = [
      gsap.to('.title-0', { y: 0 }),
      gsap.to('.title-1', { delay: 0.5, x: 0, opacity: 1 }),
      gsap.to('.title-2', { delay: 1, x: 0, opacity: 1 }),
      gsap.to('.title-3', { delay: 1.5, opacity: 1, y: 0 }),
      gsap.to('.title-4', { delay: 2, opacity: 1 }),
    ];

    const handleMouseEnter = () => {
      gsap.to(title4Ref.current, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power1.inOut',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(title4Ref.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power1.inOut',
      });
    };

    const handleMouseDown = () => {
      gsap.to(title4Ref.current, {
        scale: 0.9,
        duration: 0.2,
        ease: 'power1.inOut',
      });
    };

    const handleMouseUp = () => {
      gsap.to(title4Ref.current, {
        scale: 1.1,
        duration: 0.2,
        ease: 'power1.inOut',
      });
    };

    const element = title4Ref.current;

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('mouseup', handleMouseUp);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('mouseup', handleMouseUp);
      animations.forEach((animation) => animation.kill());
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.about',
            scrub: true,
            //markers: true,
            start: 'top 900px',
            end: 'bottom 1200px',
          },
        })
        .fromTo(
          '.title-about',
          { opacity: 0, y: 150 },
          {
            opacity: 1,
            y: 0,
          },
        )
        .fromTo(
          '.about',
          { opacity: 0, x: -200 },
          {
            opacity: 1,
            x: 0,
          },
        )
        .fromTo(
          '.img',
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
    <Container>
      <Header />

      <Start className="title-0">
        <section>
          <h1 className="title-1">Cuidamos da sua</h1>
          <h1 className="title-2">Contabilidade</h1>
          <h2 className="title-3">
            Para que você foque no que realmente importa!
          </h2>

          <a
            ref={title4Ref}
            className="title-4"
            style={{ display: 'inline-block', transform: 'scale(1)' }}
            href="https://api.whatsapp.com/send/?phone=5534997624502&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            VAMOS CONVERSAR
          </a>
        </section>
      </Start>

      <About className="about" ref={el}>
        <h1 className="title-about">Conheça a Martir Assessoria Contábil</h1>
        <section className="section">
          <div className="about">
            <h3>
              Apoio estratégico para o crescimento sustentável do seu negócio
            </h3>
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
            <a href="/Sobre">SAIBA MAIS SOBRE NÓS</a>
          </div>
          <img className="img" src={about} alt="Imagem sobre nós" />
        </section>
      </About>

      <Service />
      <Contact />
      <News />
      <Formulario />
      <Footer />
    </Container>
  );
}

export default Home;
