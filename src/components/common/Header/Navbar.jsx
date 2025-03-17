import './Navbar.scss';
import logo from '../../../assets/images/log_ok.png';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navbars = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar className="fixed-top navbar-section" key={expand} expand={expand}>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                  src={logo}
                  width="150"
                  height="47"
                  alt="logo empresa Espacio Unico"
                />
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5 fs-5">
                  <LinkContainer to="/about">
                    <Nav.Link className='pe-4 text-black'>Nosotros</Nav.Link>
                  </LinkContainer>

                  <NavDropdown
                    title="Proyectos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="pe-3 text-black"
                  >
                    <LinkContainer to="/projects/furnitures">
                      <NavDropdown.Item>Proyectos Mobiliarios</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/projects/privates">
                      <NavDropdown.Item>Proyectos Particulares</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>

                  <LinkContainer to="/projects/civil-works">
                    <Nav.Link className='pe-4 text-black'>Obras Civiles</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/contact">
                    <Nav.Link className='pe-4 text-black'>Contacto</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navbars;