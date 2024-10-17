import { Container } from './styles';

function Contact() {
  return (
    <Container>
      <div>
        <h3>
          Fale agora com um especialista em contabilidade e tire todas as suas
          dúvidas.
        </h3>
        <a
          href="https://api.whatsapp.com/send/?phone=5534997624502&text&type=phone_number&app_absent=0"
          target='"_blank'
        >
          FALE COM A NOSSA EQUIPE
        </a>
      </div>
    </Container>
  );
}

export default Contact;
