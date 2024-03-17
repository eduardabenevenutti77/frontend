import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand={"lg"}>
      <Container>
        <Navbar.Brand as={Link}>Mary's App</Navbar.Brand>
        <Navbar.Toggle aria-controls="minhanav" />
          <Navbar.Text as={Link} to="/">
            Inicial
          </Navbar.Text>
          <Navbar.Text as={Link} to="/sobre">
            Sobre
          </Navbar.Text>
          <Navbar.Text as={Link} to="/contato">
            Contato
          </Navbar.Text>
          <Navbar.Text as={Link} to="/album">
            Album
          </Navbar.Text>
      </Container>
    </Navbar>
  );
}
