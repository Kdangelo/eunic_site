import './Footer.scss';
import logo from '../../../assets/images/log_ok_white.png';
import { Container, Row, Col, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <Row>
          <Col lg={3} xs={12} className="mb-4 mb-lg-0">
            <div className="logo-container mb-4">
              <img src={logo} alt="logo empresa Espacio Unico" height="70" />
            </div>
          </Col>
          <Col lg={3} md={6} xs={12} className="mb-4 mb-lg-0">
            <h2 className="text-white border-bottom border-warning border-2 me-5 mb-4 pb-3">MENÚ</h2>
            <Nav className="flex-column">
              <LinkContainer to="/about">
                <Nav.Link className="text-white py-1">Nosotros</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link className="text-white py-1">Proyectos</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects/furnitures">
                <Nav.Link className="text-white py-1">- Proyectos Mobiliarios</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects/privates">
                <Nav.Link className="text-white py-1">- Proyectos Particulares</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects/civil-works">
                <Nav.Link className="text-white py-1">Obras Civiles</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="text-white py-1">Contacto</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
          <Col lg={3} md={6} xs={12} className="mb-4 mb-lg-0">
            <h2 className="text-white border-bottom border-warning border-2 me-5 mb-4 pb-3">CONTACTO</h2>
            <div className="">
              <p className="text-white mb-2">+56 9 7448 8795</p>
              <p className="text-white mb-2">ventas@eunico.cl</p>
              <p className="text-white mb-2">
                Avda. Santa Rosa 2057, Galpón 3B
                <br />
                San Bernardo, Región Metropolitana
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <h2 className="text-white border-bottom border-warning border-2 me-5 mb-4 pb-3">LEGAL</h2>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
