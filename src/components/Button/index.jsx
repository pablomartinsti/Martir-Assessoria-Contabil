import { Container } from "./styles";
import PropTypes from "prop-types";

function Button({ title, href, target, rel, onClick, type }) {
  if (href) {
    return (
      <Container>
        <a href={href} target={target} rel={rel}>
          {title}
        </a>
      </Container>
    );
  }

  return (
    <Container>
      <button type={type} onClick={onClick}>
        {title}
      </button>
    </Container>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
};

export default Button;
