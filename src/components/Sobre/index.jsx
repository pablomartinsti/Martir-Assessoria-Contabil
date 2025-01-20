import { Container, Section, Main } from "./styles";
import LockResetIcon from "@mui/icons-material/LockReset";
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import foto from "../../assets/sobre.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Sobre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  const animationVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Container>
      <Section>
        <Main>
          <motion.div
            ref={ref}
            variants={animationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
          >
            <div className="box-conteudo">
              <h1>Por Que Escolher Martir Assessoria Contabil ?</h1>
              <div className="section">
                <div className="conteudo">
                  <div className="icon">
                    <LockResetIcon
                      sx={{ fontSize: "2rem", color: " #d7bb65;" }}
                    />
                  </div>
                  <div>
                    <h2>Segurança Jurídica</h2>
                    <p>
                      Evite problemas fiscais e mantenha sua empresa 100% em
                      conformidade.
                    </p>
                  </div>
                </div>
                <div className="conteudo">
                  <div className="icon">
                    <LanguageIcon
                      sx={{ fontSize: "2rem", color: " #d7bb65;" }}
                    />
                  </div>
                  <div>
                    <h2>
                      Atendimento em Todo o{"\n"}
                      Brasil
                    </h2>
                    <p>
                      Seja presencial ou online, estamos prontos para ajudá-lo
                      onde você estiver.
                    </p>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="conteudo">
                  <div className="icon">
                    <CurrencyExchangeIcon
                      sx={{ fontSize: "2rem", color: " #d7bb65;" }}
                    />
                  </div>
                  <div>
                    <h2>Economia e Planejamento</h2>
                    <p>
                      Aproveite ao máximo incentivos fiscais e reduza custos.
                    </p>
                  </div>
                </div>
                <div className="conteudo">
                  <div className="icon">
                    <AccessTimeIcon
                      sx={{ fontSize: "2rem", color: " #d7bb65;" }}
                    />
                  </div>
                  <div>
                    <h2>Resolução Rápida</h2>
                    <p>Regularizamos sua situação fiscal em tempo recorde.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.img
            src={foto}
            alt="foto da equipe trabalhando"
            ref={ref}
            variants={animationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </Main>
      </Section>
    </Container>
  );
}

export default Sobre;
