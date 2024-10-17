import { useEffect } from 'react';
import { Container, Main } from './styles';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Service from '../../components/Service';
import Portal from '../../components/Portal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Serviço() {
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
      gsap.killTweensOf('.text');
    };
  }, []);

  return (
    <Container>
      <Header />

      <Main className="main">
        <div>
          <h1 className="text">DESCUBRA SOBRE </h1>
          <h1 className="text-1">NOSSA SOLUÇÕES</h1>
        </div>
      </Main>

      <Service />

      <Contact />
      <Portal />
      <Footer />
    </Container>
  );
}

export default Serviço;
