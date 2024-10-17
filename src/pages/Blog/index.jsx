import { useEffect } from 'react';
import { Container, Start } from './styles';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import News from '../../components/News';
import Contact from '../../components/Contact';
import TipsNews from '../../components/Blog';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Blog() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.start', {
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
      gsap.killTweensOf('.start');
    };
  }, []);

  return (
    <Container>
      <Header />
      <Start className="start">
        <div>
          <h1 className="text">PORTAL CONTÁBIL DA</h1>
          <h1 className="text-1">MARTIR ASSESSORIA</h1>
        </div>
      </Start>

      <News />
      <Contact />

      <TipsNews />

      <Footer />
    </Container>
  );
}

export default Blog;
