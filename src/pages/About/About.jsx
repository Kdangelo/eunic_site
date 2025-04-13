import "./About.scss";
import { Card, Col, Container, Row } from "react-bootstrap";


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
          <Row className="h-100">
            <Col xs={12} className="mb-5">
              <Card border="warning border-2" className="mb-3 text-bg-dark h-100 w-100">
                <Row className="g-0 h-100">
                  <Col xs={12} md={3} className="d-flex align-items-center justify-content-center p-4 order-md-0 order-0">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="80" 
                      height="80" 
                      viewBox="0 0 512 512"
                      className="d-block mx-auto"
                    >
                      <path fill="#ffffff" d="M501.384 245.385c5.863 0 10.616 4.754 10.616 10.616 0 5.863-4.753 10.616-10.616 10.616H324.572c.531-3.462.807-7.007.807-10.616s-.276-7.156-.807-10.616h176.812zM285.722 46.519c46.527 6.541 88.195 28.219 119.867 59.892 31.673 31.673 53.351 73.34 59.892 119.867h-21.469c-6.376-40.655-25.619-77.043-53.434-104.856-27.813-27.814-64.201-47.057-104.856-53.434V46.519zM465.48 285.724c-6.543 46.525-28.218 88.196-59.891 119.867-31.671 31.671-73.34 53.349-119.867 59.892v-21.471c40.655-6.376 77.044-25.621 104.856-53.432 27.815-27.813 47.058-64.201 53.434-104.856h21.468zM226.276 465.482c-46.525-6.543-88.196-28.22-119.867-59.891-31.673-31.671-53.347-73.342-59.89-119.867h21.468c6.376 40.655 25.619 77.043 53.433 104.856 27.812 27.811 64.201 47.056 104.856 53.432v21.47zM46.517 226.278c6.542-46.527 28.219-88.194 59.892-119.867 31.671-31.673 73.342-53.348 119.867-59.89v21.467c-40.655 6.377-77.042 25.62-104.856 53.434-27.814 27.813-47.057 64.201-53.433 104.856h-21.47zm239.205-107.473c26.828 5.785 50.805 19.239 69.519 37.954 18.716 18.714 32.169 42.691 37.954 69.519h-21.814c-5.383-20.954-16.321-39.677-31.151-54.507-14.83-14.831-33.554-25.767-54.508-31.15v-21.816zm107.473 166.919c-5.785 26.828-19.238 50.805-37.954 69.519-18.714 18.714-42.691 32.167-69.519 37.954v-21.814c20.953-5.383 39.678-16.321 54.508-31.151 14.83-14.83 25.768-33.555 31.151-54.508h21.814zM226.276 393.197c-26.828-5.787-50.805-19.24-69.519-37.954-18.714-18.714-32.167-42.691-37.954-69.519h21.814c5.383 20.953 16.322 39.678 31.152 54.508 14.83 14.83 33.555 25.768 54.507 31.151v21.814zM118.803 226.278c5.787-26.828 19.24-50.805 37.954-69.519 18.714-18.715 42.691-32.169 69.519-37.954v21.816c-20.952 5.383-39.677 16.319-54.507 31.15-14.83 14.83-25.769 33.555-31.152 54.507h-21.814zm147.812 98.296v176.811c0 5.862-4.753 10.615-10.616 10.615-5.862 0-10.616-4.753-10.616-10.615V324.574c3.462.531 7.007.807 10.616.807s7.156-.276 10.616-.807zm-79.188-57.957H10.616C4.754 266.617 0 261.864 0 256.001c0-5.862 4.754-10.616 10.616-10.616h176.811a69.968 69.968 0 00-.807 10.616c0 3.609.276 7.154.807 10.616zm57.956-79.188V10.616C245.383 4.754 250.137 0 255.999 0c5.863 0 10.616 4.754 10.616 10.616v176.813a69.967 69.967 0 00-10.616-.808c-3.609 0-7.154.277-10.616.808z"/>
                      <path fill="#ec6c33" d="M255.999 205.728c27.765 0 50.273 22.508 50.273 50.273 0 27.765-22.508 50.273-50.273 50.273-27.765 0-50.272-22.508-50.272-50.273 0-27.765 22.507-50.273 50.272-50.273z"/>
                    </svg>
                  </Col>
                  <Col xs={12} md={9} className="order-md-1 order-1">
                    <Card.Body className="d-flex flex-column h-100">
                      <Card.Title className="text-warning fs-1">Misión</Card.Title>
                      <Card.Text className="text-white fw-semibold fs-4 flex-grow-1">
                        Diseñamos, desarrollamos y ejecutamos proyectos
                        mobiliarios de alta calidad adaptados a las necesidades
                        y expectativas de nuestros clientes, con un alto
                        compromiso en la calidad y oportunidad del servicio,
                        basados en un equipo humano cohesionado y comprometido
                        con procesos de mejora continua que garantizan la
                        satisfacción de nuestros clientes y el crecimiento de la
                        empresa.
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={12} className="mb-5">
              <Card border="warning border-2" className="mb-3 text-bg-dark h-100 w-100">
                <Row className="g-0 h-100">
                  <Col xs={12} md={3} className="d-flex align-items-center justify-content-center p-4 order-md-0 order-0">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="80" 
                      height="80" 
                      viewBox="0 0 122.88 78.5" 
                      className="d-block mx-auto"
                    >
                      <g>
                        <path fill="#ffffff" d="M50.57,17.2C40.73,10.31,31,8.79,20.94,11.42c2.2-5.29,5.51-8.76,9.4-10.39c5.51-2.31,14.53-0.67,18.08,4.27 C50.24,7.82,51.15,11.56,50.57,17.2L50.57,17.2z M83.52,55.32c-0.27-1.12,0.43-2.24,1.55-2.51c1.12-0.27,2.24,0.43,2.51,1.55 c0.54,2.27,1.47,4.03,2.71,5.3c1.27,1.29,2.9,2.12,4.84,2.5c1.13,0.22,1.86,1.31,1.64,2.44c-0.22,1.13-1.31,1.86-2.44,1.64 c-2.76-0.55-5.13-1.76-7-3.67C85.54,60.75,84.24,58.35,83.52,55.32L83.52,55.32z M13.54,55.32c-0.27-1.12,0.43-2.24,1.55-2.51 c1.12-0.27,2.24,0.43,2.51,1.55c0.54,2.27,1.47,4.03,2.71,5.3c1.27,1.29,2.9,2.12,4.84,2.5c1.13,0.22,1.86,1.31,1.64,2.44 c-0.22,1.13-1.31,1.86-2.44,1.64c-2.76-0.55-5.13-1.76-7-3.67C15.56,60.75,14.26,58.35,13.54,55.32L13.54,55.32z M61.3,47.71 c2.8,0,5.07,2.21,5.07,4.93c0,2.72-2.27,4.93-5.07,4.93c-2.8,0-5.07-2.21-5.07-4.93C56.23,49.92,58.5,47.71,61.3,47.71L61.3,47.71z M26.66,34.57c10,0,18.11,7.88,18.11,17.61c0,9.72-8.11,17.61-18.11,17.61c-10,0-18.11-7.88-18.11-17.61 C8.55,42.45,16.65,34.57,26.66,34.57L26.66,34.57z M96.64,34.57c10,0,18.11,7.88,18.11,17.61c0,9.72-8.11,17.61-18.11,17.61 c-10,0-18.11-7.88-18.11-17.61C78.53,42.45,86.63,34.57,96.64,34.57L96.64,34.57z M72.31,17.2c9.84-6.89,19.57-8.41,29.62-5.78 c-2.2-5.29-5.51-8.76-9.4-10.39C87.02-1.28,78,0.36,74.46,5.3C72.64,7.82,71.73,11.56,72.31,17.2L72.31,17.2z M107.57,17.4 c-3.42-3.52-8.96-5.11-16.63-4.77c-8.69,0.43-17.87,4.06-20.82,12.29c-2.47-5.42-14.89-5.42-17.35,0 c-2.95-8.23-12.13-11.87-20.82-12.29c-7.67-0.34-13.2,1.26-16.63,4.77C10.5,23.86,0.96,40.74,0.16,48.99 C-3.1,82.47,44.92,90.87,52.62,56.3c4.37,7.75,13.27,7.75,17.64,0c7.7,34.58,55.72,26.17,52.46-7.31 C121.92,40.74,112.38,23.86,107.57,17.4L107.57,17.4z" />
                      </g>
                    </svg>
                  </Col>
                  <Col xs={12} md={9} className="order-md-0 order-1">
                    <Card.Body className="d-flex flex-column h-100">
                      <Card.Title className="text-warning fs-1">Visión</Card.Title>
                      <Card.Text className="text-white fw-semibold fs-4 flex-grow-1">
                        Nos proyectamos a ser una de las empresas más importante
                        en el abastecimiento de mobiliario para nuevos proyectos
                        constructivo en la zona central del país, destacándonos
                        por ofrecer productos y servicios de alta calidad que
                        superen las expectativas de nuestros clientes, asegurando
                        la rentabilidad empresa, la fuente de trabajo de nuestros
                        colaboradores, y crecimiento sostenido bajo estrictas
                        reglas éticas y responsabilidad social.
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="values-section py-5">
        <Container>
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
                    <h4 className="step-title text-warning mb-3">INSTLACIÓN</h4>
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
