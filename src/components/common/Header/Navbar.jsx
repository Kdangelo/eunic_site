import './Navbar.scss';
import { useState } from 'react';
import logo from '../../../assets/images/log_ok.png';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navbars = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [expanded, setExpanded] = useState(false);

  // Función para cerrar el menú
  const closeMenu = () => setExpanded(false);

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          className="navbar-section py-4"
          key={expand}
          expand={expand}
          expanded={expanded}
          onToggle={(expanded) => setExpanded(expanded)}
        >
          <Container>
            <LinkContainer to="/" onClick={closeMenu}>
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
                <Nav className="justify-content-end flex-grow-1 pe-5 fs-4">
                  <LinkContainer to="/about" onClick={closeMenu}>
                    <Nav.Link className='pe-4 text-black'>Nosotros</Nav.Link>
                  </LinkContainer>

{/*                   <NavDropdown
                    title="Proyectos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="pe-3 text-black fs-4"
                  >
                    <LinkContainer to="/projects/furnitures" onClick={closeMenu}>
                      <NavDropdown.Item>Proyectos Mobiliarios</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/projects/privates" onClick={closeMenu}>
                      <NavDropdown.Item>Proyectos Particulares</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown> */}
                
                  <LinkContainer to="/projects" onClick={closeMenu}>
                    <Nav.Link className='pe-4 text-black'>Proyectos</Nav.Link>
                  </LinkContainer>

{/*                   <LinkContainer to="/projects/civil-works" onClick={closeMenu}>
                    <Nav.Link className='pe-4 text-black'>Obras Civiles</Nav.Link>
                  </LinkContainer> */}

                  <LinkContainer to="/contact" onClick={closeMenu}>
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