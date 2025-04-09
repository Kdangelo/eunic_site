/* import { Outlet } from 'react-router-dom'; */
import { Col, Container, Row } from "react-bootstrap";
import CarouselHome from "../../components/common/Carousel/CarouselHome";

const Projects = () => {
  return (
    <>
      <section className="projects-page pt-5 pb-5 border-bottom border-white"  style={{ backgroundImage: "linear-gradient(180deg, #717372 0%, #000000 100%)" }}>
        <Container>
          <Row className="mb-5">
            <Col xs={12}>
              <h4 className="text-white opacity-75">PROYECTOS DESTACADOS</h4>
            </Col>
          </Row>
          <CarouselHome />
        </Container>
      </section>
      {/* <Outlet /> */} {/* Esto renderizará las subrutas */}
    </>
  );
};

export default Projects;