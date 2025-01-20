import { useRef, useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { Container } from "./styles";
import Button from "../Button";

function Modal({ isOpen, onClose }) {
  const [formStatus, setFormStatus] = useState("");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formRef.current) {
      setFormStatus("Erro: O formulário não foi encontrado.");
      return;
    }

    const SERVICE_ID = "service_ocg8rum";
    const TEMPLATE_ID = "template_q6hlaou";
    const PUBLIC_KEY = "6Z2XpytWyhkd4bo7I";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setFormStatus("Mensagem enviada com sucesso!");
        formRef.current?.reset();
      },
      (error) => {
        console.error(error.text);
        setFormStatus("Erro ao enviar mensagem. Tente novamente.");
      }
    );
  };
  if (!isOpen) {
    return null;
  }
  return (
    <Container>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>
            x
          </button>
          <div>
            <h2>Agende sua Consultoria</h2>
            <p>Preencha o formulário abaixo para agendar sua consultoria.</p>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="from_name" required />
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="from_email" required />
            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" required />
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows={4} required></textarea>
            {formStatus && (
              <h4 style={{ textAlign: "center", color: "#000" }}>
                {formStatus}
              </h4>
            )}
            <Button title="Enviar" type="submit" />
          </form>
        </div>
      </div>
    </Container>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
