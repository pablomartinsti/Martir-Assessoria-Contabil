import { Container } from "./styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

import Logo from "../../assets/Logo.webp";

function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo da empresa" />

      <div className="menu-container">
        <a
          href="https://api.whatsapp.com/send/?phone=5534997624502&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <WhatsAppIcon
            className="icon"
            sx={{
              color: "#d7bb65",
              fontSize: "3rem",
              borderRadius: "100%",
              padding: 1,
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/martirassessoria/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <InstagramIcon
            className="icon"
            sx={{
              color: "#d7bb65",
              fontSize: "3rem",
              borderRadius: "100%",
              padding: 1,
            }}
          />
        </a>
      </div>
    </Container>
  );
}

export default Header;
