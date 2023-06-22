import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = (): JSX.Element => (
  <Navbar data-bs-theme="primary">
    <Container fluid>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Nav className="">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Features</Nav.Link>
        <Nav.Link href="#">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavBar;
