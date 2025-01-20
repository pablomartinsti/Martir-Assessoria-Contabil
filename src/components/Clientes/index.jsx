import { Container, Section } from "./styles";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import joao from "../../assets/joao.webp";
import maria from "../../assets/maria.webp";

function Clientes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  const animationVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Container>
      <Section>
        <motion.main
          ref={ref}
          variants={animationVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <h1>Clientes Satisfeitos, Resultados Reais</h1>
          <div className="box">
            <div className="card">
              <div>
                <img
                  style={{ width: "100%", height: 200 }}
                  src={joao}
                  alt="perfil"
                />
                <h2>João Silva, Empreendedor</h2>
              </div>
              <p>
                A Martir Contábil foi essencial para{"\n"} regularizar minha
                empresa e organizar{"\n"} minha contabilidade. Recomendo a
                todos.
              </p>
              <div className="icon">
                <StarIcon sx={{ color: "#d7bb65" }} />
                <StarIcon sx={{ color: "#d7bb65" }} />
                <StarIcon sx={{ color: "#d7bb65" }} />
                <StarIcon sx={{ color: "#d7bb65" }} />
                <StarHalfIcon sx={{ color: "#d7bb65" }} />
              </div>
            </div>
            <div className="card">
              <div>
                <img
                  style={{ width: "100%", height: 200 }}
                  src={maria}
                  alt="perfil"
                />
                <h2>Maria Costa, Empresária</h2>
              </div>
              <p>
                Economizei muito tempo e dinheiro{"\n"} com a consultoria deles.
                Serviço ágil{"\n"} e de qualidade.
              </p>
              <div className="icon">
                <StarIcon sx={{ color: "#d7bb65" }} />
                <StarIcon sx={{ color: "#d7bb65" }} />
                <StarIcon sx={{ color: "#d7bb65" }} />
                <StarIcon sx={{ color: "#d7bb65" }} />
                <StarIcon sx={{ color: "#d7bb65" }} />
              </div>
            </div>
          </div>
        </motion.main>
      </Section>
    </Container>
  );
}

export default Clientes;
