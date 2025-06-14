import "./About.scss";
import { Col, Container, Row } from "react-bootstrap";
import MisionVision from "./MisionVision";
import bgImage  from "../../assets/images/about-background.jpg";

const About = () => {
  return (
    <>
      <section className="about-section pt-5">
        <Container>
          <Row className="mb-5">
            <Col xs={12}>
              <h4 className="text-white opacity-75">NOSOTROS</h4>
            </Col>
          </Row>
          <MisionVision />
        </Container>
      </section>

      <section className="values-section py-5 position-relative">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(${bgImage })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            opacity: 0.8,
          }}
        ></div>
        <Container className="position-relative">
          <Row className="mb-5">
            <Col xs={12}>
              <h2
                className="text-white d-inline-block px-5 py-3 mb-5"
                style={{ backgroundColor: "rgba(113, 115, 114, 0.8)" }}
              >
                Nuestros Valores
              </h2>
            </Col>
            <Col lg={2} className="d-none d-lg-block"></Col>
            <Col md={6} lg={5} className="mb-5">
              <div
                className="h-100 p-4"
                style={{ backgroundColor: "rgba(113, 115, 114, 0.8)" }}
              >
                <h3 className="pb-3 text-warning border-bottom border-white">
                  Ética Empresarial
                </h3>
                <h4 className="pt-2 mb-0 text-white fw-semibold">
                  Nuestra actuación se rige por la honestidad y transparencia
                  empresarial, equidad corporativa, y competencia leal.
                </h4>
              </div>
            </Col>
            <Col md={6} lg={5} className="mb-5">
              <div
                className="h-100 p-4"
                style={{ backgroundColor: "rgba(113, 115, 114, 0.8)" }}
              >
                <h3 className="pb-3 text-warning border-bottom border-white">
                  Respeto
                </h3>
                <h4 className="pt-2 mb-0 text-white fw-semibold">
                  Brindamos un trato justo, considerado y deferente a nuestros
                  clientes, proveedores, empleados y terceros interesados.
                </h4>
              </div>
            </Col>
            <Col lg={2} className="d-none d-lg-block"></Col>
            <Col md={6} lg={5} className="mb-5">
              <div
                className="h-100 p-4"
                style={{ backgroundColor: "rgba(113, 115, 114, 0.8)" }}
              >
                <h3 className="pb-3 text-warning border-bottom border-white">
                  Compromiso
                </h3>
                <h4 className="pt-2 mb-0 text-white fw-semibold">
                  Mantenemos un compromiso permanente con nuestros clientes en
                  términos de calidad, garantía y puntualidad.
                </h4>
              </div>
            </Col>
            <Col md={6} lg={5} className="mb-5">
              <div
                className="h-100 p-4"
                style={{ backgroundColor: "rgba(113, 115, 114, 0.8)" }}
              >
                <h3 className="pb-3 text-warning border-bottom border-white">
                  Calidad
                </h3>
                <h4 className="pt-2 mb-0 text-white fw-semibold">
                  Tomamos la perfección con pasión, persistencia y consistencia,
                  como rasgo distintivo para ser eficaces en la satisfacción de
                  las necesidades y sueños de nuestros clientes.
                </h4>
              </div>
            </Col>
            <Col lg={2} className="d-none d-lg-block"></Col>
            <Col md={6} lg={5} className="mb-5">
              <div
                className="h-100 p-4"
                style={{ backgroundColor: "rgba(113, 115, 114, 0.8)" }}
              >
                <h3 className="pb-3 text-warning border-bottom border-white">
                  Confianza
                </h3>
                <h4 className="pt-2 mb-0 text-white fw-semibold">
                  Actuamos con honradez, honestidad, rectitud, probidad y
                  moralidad, en una permanente búsqueda de la confianza y
                  lealtad de nuestros clientes.
                </h4>
              </div>
            </Col>
            <Col md={6} lg={5} className="mb-5">
              <div
                className="h-100 p-4"
                style={{ backgroundColor: "rgba(113, 115, 114, 0.8)" }}
              >
                <h3 className="pb-3 text-warning border-bottom border-white">
                  Trabajo en Equipo
                </h3>
                <h4 className="pt-2 mb-0 text-white fw-semibold">
                  Promovemos el trabajo cohesionado impulsando la coordinación,
                  cooperación y cocreación, motivando a nuestros colaboradores a
                  entregar su máximo potencial para alcanzar sus metas
                  personales y contribuir a los objetivos empresariales.
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="how-we-work border-bottom border-white mt-5 pb-5">
        <Container>
          <Row>
            <Col md={12} className="mt-5">
              <h4 className="text-white opacity-75 mb-5">ASÍ TRABAJAMOS</h4>
              <h3 className="text-white">Desarrollo de un proyecto</h3>
            </Col>
            <Col md={12}>
              <div className="steps-container m-5">
                {/* Paso 1 */}
                <div className="step-item d-flex mb-4">
                  <div className="step-number-column me-4">
                    <div className="step-circle d-flex justify-content-center align-items-center">
                      <span className="step-number">1</span>
                    </div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title text-warning mb-3">DISEÑO</h4>
                    <p className="text-white">
                      Proceso de diseño de muebles en función de los
                      requerimientos del cliente, en el menor tiempo posible.
                    </p>
                  </div>
                </div>

                {/* Paso 2 */}
                <div className="step-item d-flex mb-4">
                  <div className="step-number-column me-4">
                    <div className="step-circle d-flex justify-content-center align-items-center">
                      <span className="step-number">2</span>
                    </div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title text-warning mb-3">COTIZACIÓN</h4>
                    <p className="text-white">
                      Proceso de costeo por tipo de producto en detalle. Guía
                      para evaluar avances y estados de pago.
                    </p>
                  </div>
                </div>

                {/* Paso 3 */}
                <div className="step-item d-flex mb-4">
                  <div className="step-number-column me-4">
                    <div className="step-circle d-flex justify-content-center align-items-center">
                      <span className="step-number">3</span>
                    </div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title text-warning mb-3">
                      DOCUMENTACIÓN
                    </h4>
                    <p className="text-white">
                      Contrato de Obra, Anexos económicos, Orden de Compra.
                    </p>
                  </div>
                </div>

                {/* Paso 4 */}
                <div className="step-item d-flex mb-4">
                  <div className="step-number-column me-4">
                    <div className="step-circle d-flex justify-content-center align-items-center">
                      <span className="step-number">4</span>
                    </div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title text-warning mb-3">PRODUCCIÓN</h4>
                    <p className="text-white">
                      Producción en serie, en coordinación con instalación en
                      obra, reduciendo tiempo de entrega.
                    </p>
                  </div>
                </div>

                {/* Paso 5 */}
                <div className="step-item d-flex mb-4">
                  <div className="step-number-column me-4">
                    <div className="step-circle d-flex justify-content-center align-items-center">
                      <span className="step-number">5</span>
                    </div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title text-warning mb-3">INSTALACIÓN</h4>
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
