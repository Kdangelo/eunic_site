import './About.scss';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <section className="about-section pt-5">
        <Container>
          <Row className="mb-5">
            <Col xs={12}>
              <p className="text-white opacity-75 mb-5">NOSOTROS</p>
              <h1 className="display-5 fw-bold text-white">
                Contamos con más de 17 años de{" "}
                <span className="fst-italic text-warning">experiencia</span> en
                diseño, desarrollo, fabricación e instalación de muebles de
                cocina, closet, vanitorios, muebles para oficina, quinchos,
                mobiliario escolar para{" "}
                <sapn className="fst-italic text-warning">
                  clientes Inmobiliarios, Particulares e Instituciones Públicas
                </sapn>
                .
              </h1>
            </Col>
          </Row>
          <Row className="g-3 g-md-4 g-xl-5 mt-5">
            <Col xs={12}>
              <h2 className="text-white">Aportamos valor.</h2>
            </Col>
            <Col md={4}></Col>
            <Col md={4}>
              <div className="h-100 p-4">
                <h3 className="mb-3 text-warning">¿Por qué elegirnos?</h3>
                <p className="mb-0 text-white">
                  Buscamos la excelencia en todo lo que hacemos y estamos
                  comprometidos a contribuir a la sociedad en donde actuamos,
                  privilegiando la excelencia, la integridad, la calidad y la
                  innovación en el diseño. Celebramos las buenas ideas, la
                  camaradería y el alto desempeño.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="h-100 p-4">
                <h3 className="mb-3 text-warning">Ofrecemos</h3>
                <p className="mb-0 text-white">
                  Esmerada atención, entrega a tiempo, muebles de alta calidad,
                  y precios competitivos, complementada por un alto grado de
                  rectitud en la interrelación con clientes, proveedores y
                  terceros interesados.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="how-we-work">
        <Container>
          <Row>
            <Col md={12}>
              <p className="text-white opacity-75 mb-5">ASÍ TRABAJAMOS</p>
              <h3 className="text-white">Desarrollo de un proyecto</h3>
            </Col>
            <Col md={12}>
              <div className="steps-container m-5">
                {/* Paso 1 */}
                <div className="step-item d-flex mb-5">
                  <div className="step-number-column me-4">
                    <div className="step-circle d-flex justify-content-center align-items-center">
                      <span className="step-number">1</span>
                    </div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title text-white mb-3">DISEÑO</h4>
                    <p className="text-white">
                      Proceso de diseño de muebles en función de los
                      requerimientos del cliente, en el menor tiempo posible.
                    </p>
                  </div>
                </div>

                {/* Paso 2 */}
                <div className="step-item d-flex mb-5">
                  <div className="step-number-column me-4">
                    <div className="step-circle d-flex justify-content-center align-items-center">
                      <span className="step-number">2</span>
                    </div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title text-white mb-3">COTIZACIÓN</h4>
                    <p className="text-white">
                    Proceso de costeo por tipo de producto en detalle. Guía
                    para evaluar avances y estados de pago.
                    </p>
                  </div>
                </div>

                {/* Paso 3 */}
                <div className="step-item d-flex mb-5">
                  <div className="step-number-column me-4">
                    <div className="step-circle d-flex justify-content-center align-items-center">
                      <span className="step-number">3</span>
                    </div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title text-white mb-3">DOCUMENTACIÓN</h4>
                    <p className="text-white">
                      Contrato de Obra, Anexos económicos, Orden de Compra.
                    </p>
                  </div>
                </div>

                {/* Paso 4 */}
                <div className="step-item d-flex mb-5">
                  <div className="step-number-column me-4">
                    <div className="step-circle d-flex justify-content-center align-items-center">
                      <span className="step-number">4</span>
                    </div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title text-white mb-3">PRODUCCIÓN</h4>
                    <p className="text-white">
                      Producción en serie, en coordinación con instalación en
                      obra, reduciendo tiempo de entrega.
                    </p>
                  </div>
                </div>

                {/* Paso 5 */}
                <div className="step-item d-flex mb-5">
                  <div className="step-number-column me-4">
                    <div className="step-circle d-flex justify-content-center align-items-center">
                      <span className="step-number">5</span>
                    </div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title text-white mb-3">INSTLACIÓN</h4>
                    <p className="text-white">
                      Instalación en obra con entregas completas y documentadas
                      por piso. Recepción final ITO.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
