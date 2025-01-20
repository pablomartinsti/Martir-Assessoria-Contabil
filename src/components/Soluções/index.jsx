import { Container, Section, Main } from "./styles";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import BusinessIcon from "@mui/icons-material/Business";
import foto from "../../assets/soluções.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Soluções() {
  // Separando referências para `motion.div` e `motion.img`
  const refDiv = useRef(null);
  const refImg = useRef(null);
  const isInViewDiv = useInView(refDiv, { triggerOnce: true });
  const isInViewImg = useInView(refImg, { triggerOnce: true });

  const animationVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Container>
      <Section>
        <Main>
          {/* Animação para o conteúdo da seção */}
          <motion.div
            ref={refDiv}
            variants={animationVariants}
            initial="hidden"
            animate={isInViewDiv ? "visible" : "hidden"}
            transition={{ duration: 1 }}
          >
            <div className="box-conteudo">
              <h1>
                Soluções Inteligentes para Sua {"\n"}
                Empresa
              </h1>
              <div className="section">
                <div className="conteudo">
                  <div className="icon">
                    <BusinessIcon
                      sx={{ fontSize: "2rem", color: " #d7bb65;" }}
                    />
                  </div>
                  <div>
                    <h2>
                      Abertura e Regularização{"\n"}
                      de Empresas
                    </h2>
                    <p>
                      Organizamos toda a documentação necessária para começar ou
                      regularizar seu negócio.
                    </p>
                  </div>
                </div>
                <div className="conteudo">
                  <div className="icon">
                    <LocalAtmIcon
                      sx={{ fontSize: "2rem", color: " #d7bb65;" }}
                    />
                  </div>
                  <div>
                    <h2>
                      Consultoria Tributária {"\n"}
                      Personalizada
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
                    <SignalCellularAltIcon
                      sx={{ fontSize: "2rem", color: " #d7bb65;" }}
                    />
                  </div>
                  <div>
                    <h2>Planejamento Tributário</h2>
                    <p>Otimização de impostos com oportunidades legais.</p>
                  </div>
                </div>
                <div className="conteudo">
                  <div className="icon">
                    <ImportContactsIcon
                      sx={{ fontSize: "2rem", color: " #d7bb65;" }}
                    />
                  </div>
                  <div>
                    <h2>
                      Defesa e Representação{"\n"}
                      Fiscal
                    </h2>
                    <p>
                      Representamos você em auditorias e processos com a Receita
                      Federal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animação para a imagem */}
          <motion.img
            src={foto}
            alt="foto da equipe trabalhando"
            ref={refImg}
            variants={animationVariants}
            initial="hidden"
            animate={isInViewImg ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </Main>
      </Section>
    </Container>
  );
}

export default Soluções;
