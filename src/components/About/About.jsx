import { Col, Container, Row } from "react-bootstrap";
import "../../styles/About.css";

const About = () => {
  return (
    <section className="about-section pt-5">
      <Container>
        <Row>
          <p className="text-white">SERVICIOS Y PRODUCTOS</p>
          <h1 className="text-white">
            Contamos con más de 17 años de{" "}
            <span className="text-warning">experiencia</span> en diseño,
            desarrollo, fabricación e instalación de muebles de cocina, closet,
            vanitorios, muebles para oficina, quinchos, mobiliario escolar para{" "}
            <sapn className="text-warning">
              clientes Inmobiliarios, Particulares e Instituciones Públicas
            </sapn>
            .
          </h1>
        </Row>
        <Row>
          <Col>
            <h2 className="text-white">Aportamos valor.</h2>
          </Col>
          <Col>
            <Col>
              <h3>¿Por qué elegirnos?</h3>
            </Col>
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                corrupti corporis itaque officia quae esse cupiditate! Nam
                accusantium dolores recusandae vero veniam, labore ab quasi qui!
                Quod, impedit! Pariatur, iusto?
              </p>
            </Col>
          </Col>
          <Col>
            <Col>
              <h3>Ofrecemos</h3>
            </Col>
            <Col>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                mollitia culpa voluptate repellendus cum ducimus laboriosam odio
                dolor necessitatibus! Ratione animi quos temporibus esse nobis,
                possimus soluta labore cupiditate fuga.
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
