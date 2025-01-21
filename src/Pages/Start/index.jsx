import { Container } from "./styles";
import Header from "../../components/Header";
import Home from "../../components/Home";
import Sobre from "../../components/Sobre";
import Soluções from "../../components/Soluções";
import Dicas from "../../components/Dicas";
import Clientes from "../../components/Clientes";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";

function Start() {
  return (
    <Container>
      <Header />
      <Home />
      <Sobre />
      <Soluções />
      <Dicas />
      <Clientes />
      <Contato />
      <Footer />
    </Container>
  );
}

export default Start;
