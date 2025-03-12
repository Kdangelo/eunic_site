import './Navbars.css';
import logo from '../../assets/images/log_ok.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar className='fixed-top navbar-section' key={expand} expand={expand}>
          <Container>
            <Navbar.Brand href='/'>
              <img
                src={logo}
                width='150'
                height='47'
                className=''
                alt='logo empresa Espacio Unico' 
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-5 fs-5'>
                  <Nav.Link href='#action1' className='pe-4 text-black'>Nosotros</Nav.Link>
                  <NavDropdown
                    title='Proyectos'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='pe-3 text-black'
                  >
                    <NavDropdown.Item href='#action3'>Proyectos Mobiliarios</NavDropdown.Item>
                    <NavDropdown.Item href='#action4'>Proyectos Particulares</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href='#action1' className='pe-4 text-black'>Obras Civiles</Nav.Link>
                  <Nav.Link href='#contact' className='pe-4 text-black'>Contacto</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>        
      ))}
    </>
  )
};

export default Navbars;