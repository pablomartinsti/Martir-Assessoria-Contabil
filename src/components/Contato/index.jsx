import { Container } from "./styles";
import Button from "../Button";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Modal from "../Modal";

function Contato() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  const animationVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <Container>
      <motion.section
        ref={ref}
        variants={animationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <main>
          <h1>Entre em Contato e Resolva Suas Pendências Fiscais</h1>
          <h2>
            Agende uma avaliação gratuita com nossos especialistas e descubra
            como podemos ajudar sua empresa.
          </h2>
          <div className="box-button">
            {/* Botão para formulário */}
            <Button onClick={handleOpenModal} title="Agendar uma Consultoria" />

            {/* Botão para WhatsApp */}
            <Button
              title="Fale com um Especialista Agora"
              href="https://api.whatsapp.com/send/?phone=5534997624502&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </main>
      </motion.section>
      {/* Componente Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Container>
  );
}

export default Contato;
