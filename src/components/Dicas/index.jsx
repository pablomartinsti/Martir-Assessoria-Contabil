import { Container, Section } from "./styles";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Dicas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  const animationVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Container>
      <Section>
        <motion.div
          ref={ref}
          variants={animationVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <div className="box">
            <h1>Dicas para Ficar em Dia com a Receita Federal</h1>
            <div className="box-main">
              <div className="main">
                <div className="icon">
                  <Filter1Icon sx={{ color: " #d7bb65", fontSize: "2rem" }} />
                  <div className="card">
                    <h2>Declare Seus Rendimentos Corretamente</h2>
                    <p>
                      Evite erros no imposto de renda e garanta{"\n"}
                      que tudo esteja registrado.{" "}
                    </p>
                  </div>
                </div>
                <div className="icon">
                  <Filter2Icon sx={{ color: " #d7bb65", fontSize: "2rem" }} />
                  <div className="card">
                    <h2>Organize Seus Registros Financeiros</h2>
                    <p>
                      Mantenha comprovantes de transações{"\n"}e pagamentos de
                      forma acessível.
                    </p>
                  </div>
                </div>
              </div>
              <div className="main">
                <div className="icon">
                  <Filter3Icon sx={{ color: " #d7bb65", fontSize: "2rem" }} />
                  <div className="card">
                    <h2>Conte com Orientação Profissional</h2>
                    <p>
                      Um contador especializado ajuda você a evitar{"\n"}
                      problemas e aproveitar oportunidades fiscais.
                    </p>
                  </div>
                </div>
                <div className="icon">
                  <Filter4Icon sx={{ color: " #d7bb65", fontSize: "2rem" }} />
                  <div className="card">
                    <h2>Esteja Atualizado com as Leis Fiscais</h2>
                    <p>
                      Acompanhe mudanças na legislação para{"\n"}
                      evitar surpresas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </Container>
  );
}

export default Dicas;
