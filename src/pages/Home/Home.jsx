import "./Home.scss";
import { Col, Container, Row } from "react-bootstrap";
import CarouselHome from "../../components/common/Carousel/CarouselHome";

const Home = () => {
  return (
    <>
      <CarouselHome />
      <section className="home-section pt-5">
        <Container>
          <Row className="mb-5">
            <Col xs={12}>
         {/*      <p className="text-white opacity-75 mb-5">NOSOTROS</p> */}
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
                <p className="mb-0 text-white fw-semibold">
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
                <p className="mb-0 text-white fw-semibold">
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
    </>
  );
};

export default Home;
