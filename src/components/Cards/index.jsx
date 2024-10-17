import { Container, Section } from './styles';

function Cards({ image, title, description, linkText, linkHref }) {
  return (
    <Container>
      <img src={image} alt={title} />
      <Section>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={linkHref}> {linkText}</a>
      </Section>
    </Container>
  );
}

export default Cards;
