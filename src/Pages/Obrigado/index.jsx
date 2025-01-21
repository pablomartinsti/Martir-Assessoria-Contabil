import { Container } from "./styles";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Obrigado() {
  const navigate = useNavigate();
  return (
    <Container>
      <main className="main obrigado">
        <div className="container">
          <h1>Obrigado pelo seu contato!</h1>
          <h2>
            Recebemos sua mensagem e em breve{"\n"} entraremos em contato com
            você.
          </h2>
          <h2>
            Enquanto isso, conheça mais sobre nossos{"\n"} serviços ou siga-nos
            nas redes sociais:
          </h2>
          <div className="botoes">
            <Button
              onClick={() => navigate("/")}
              title="Voltar à Página Inicial"
            />
            <Button
              href="https://www.instagram.com/martirassessoria/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            />
            <Button
              href="https://api.whatsapp.com/send/?phone=5534997624502&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            />
          </div>
        </div>
      </main>
    </Container>
  );
}

export default Obrigado;
