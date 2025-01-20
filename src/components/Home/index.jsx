import { Container, Section, ContainerItems, Aside } from "./styles";
import Button from "../Button";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

function Home() {
  const form = useRef(null);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ocg8rum",
        "template_q6hlaou",
        form.current,
        "6Z2XpytWyhkd4bo7I"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Mensagem enviada com sucesso!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage("Erro ao enviar a mensagem. Tente novamente.");
        }
      );
  };

  return (
    <Container>
      <Section>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ContainerItems>
            <main>
              <h1>
                A Solução Contábil que Você Precisa{"\n"}
                para Crescer o Seu Negócio!{" "}
              </h1>

              <h2>
                Deixe a burocracia com a gente e foque no que realmente{"\n"}
                importa: o crescimento do seu negócio.
              </h2>

              <Button
                title="Quero Minha Consultoria Gratuita Agora!"
                href="https://api.whatsapp.com/send/?phone=5534997624502&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              />
              <p>
                Fale com um especialista e resolva suas pendências fiscais sem
                complicação
              </p>
            </main>
          </ContainerItems>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Aside>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div>
                <h2>Agende sua Consultoria</h2>
                <p>
                  Preencha o formulário abaixo para agendar sua consultoria.
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="from_name" required />
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="from_email" required />
                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" name="phone" required />
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                ></textarea>
                <Button title="Enviar" type="submit" />
              </form>
              {message && <p>{message}</p>}
            </div>
          </Aside>
        </motion.div>
      </Section>
    </Container>
  );
}

export default Home;
