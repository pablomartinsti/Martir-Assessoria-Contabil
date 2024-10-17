import { useEffect, useRef } from 'react';
import { Container, Main, Section } from './styles';
import Header from '../../components/header';
import Formulario from '../../components/Formulario';
import Footer from '../../components/Footer';
import Portal from '../../components/Portal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Contato() {
  const el = useRef();
  const tl = useRef();

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
            trigger: '#item-1',
            scrub: true,
            //markers: true,
            start: 'top 600px',
            end: 'bottom 400px',
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
        );
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <Container>
      <Header />
      <Main className="main">
        <div>
          <h1 className="text">FALE COM A </h1>
          <h1 className="text-1">NOSSA EQUIPE</h1>
        </div>
      </Main>

      <Formulario />
      <Section ref={el}>
        <h1 id="item-1">Nosso Endereço</h1>
        <iframe
          id="item-2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.4203042860113!2d-48.1886814!3d-18.912781399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44e47cb652523%3A0x5f15f8d7ffe57801!2sR.%20Alambique%2C%20229%20-%20Morumbi%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038407-309!5e0!3m2!1sen!2sbr!4v1728065693314!5m2!1sen!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Section>
      <Portal />
      <Footer />
    </Container>
  );
}

export default Contato;
