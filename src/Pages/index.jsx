import { Container } from "./styles";
import Header from "../components/Header";
import Home from "../components/Home";
import Sobre from "../components/Sobre";
import Soluções from "../components/Soluções";
import Dicas from "../components/Dicas";
import Clientes from "../components/Clientes";
import Contato from "../components/Contato";

function App() {
  return (
    <Container>
      <Header />
      <Home />
      <Sobre />
      <Soluções />
      <Dicas />
      <Clientes />
      <Contato />
    </Container>
  );
}

export default App;
