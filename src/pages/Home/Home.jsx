import "./Home.scss";
import { Col, Container, Row } from "react-bootstrap";
import CarouselHome from "../../components/common/Carousel/CarouselHome";
import homeDesktop from "../../assets/images/home-desktop.jpg";
import homeMobile from "../../assets/images/home-mobile.jpeg";
import homeValueBackground from "../../assets/images/home-value-background.jpg";

const Home = () => {
  return (
    <>
      <CarouselHome />
      <section className="home-section pt-5">
        <Container>
          <Row>
            <Col xs={12} className="border-bottom border-black border-2">
              <h1 className="display-5 fw-bold text-white text-center mb-5">
                Muebles que te cambian la vida
              </h1>
            </Col>
          </Row>
          <Row className="d-flex flex-md-row justify-content-center align-items-center my-5">
            <Col xs={12} md={8} className="mb-4 mb-md-0">
              <h1 className="display-6 fw-bold text-white">
                Contamos con más de 17 años de{" "}
                <span className="fst-italic text-warning">experiencia</span> en
                diseño, desarrollo, fabricación e instalación de muebles de
                cocina, closet, vanitorios, muebles para oficina, quinchos,
                mobiliario escolar para{" "}
                <span className="fst-italic text-warning">
                  clientes Inmobiliarios, Particulares e Instituciones Públicas
                </span>
                .
              </h1>
            </Col>
            <Col xs={12} md={4}>
              <picture>
                <source srcSet={homeMobile} media="(max-width: 575px)" />
                <img
                  className="img-fluid d-block w-100 rounded-4 d-none d-md-block"
                  src={homeDesktop}
                  alt="Muebles de cocina"
                  loading="lazy"
                />
              </picture>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 position-relative">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(${homeValueBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            opacity: 0.8, // Ajusta la opacidad si deseas que el texto sea más legible
          }}
        ></div>
        <Container className="position-relative">
          <Row className="g-3 g-md-4 g-xl-5 mt-5">
            <Col xs={12}>
              <h1 className="text-white d-inline-block px-5 py-3" style={{ backgroundColor: 'rgba(113, 115, 114, 0.8)' }}>Aportamos valor</h1>
            </Col>
            <Col lg={2} className="d-none d-lg-block"></Col>
            <Col md={6} lg={5}>
              <div className="h-100 p-4" style={{ backgroundColor: 'rgba(113, 115, 114, 0.8)' }}>
                <h3 className="mb-3 text-warning">¿Por qué elegirnos?</h3>
                <h4 className="mb-0 text-white fw-semibold">
                  Buscamos la excelencia en todo lo que hacemos y estamos
                  comprometidos a contribuir a la sociedad en donde actuamos,
                  privilegiando la excelencia, la integridad, la calidad y la
                  innovación en el diseño. Celebramos las buenas ideas, la
                  camaradería y el alto desempeño.
                </h4>
              </div>
            </Col>
            <Col md={6} lg={5}>
              <div className="h-100 p-4" style={{ backgroundColor: 'rgba(113, 115, 114, 0.8)' }}>
                <h3 className="mb-3 text-warning">Ofrecemos</h3>
                <h4 className="mb-0 text-white fw-semibold">
                  Esmerada atención, entrega a tiempo, muebles de alta calidad,
                  y precios competitivos, complementada por un alto grado de
                  rectitud en la interrelación con clientes, proveedores y
                  terceros interesados.
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
