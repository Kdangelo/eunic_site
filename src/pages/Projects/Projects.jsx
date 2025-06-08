import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const base = import.meta.env.BASE_URL;

// Project categories and links
const categories = [
  {
    title: "Proyectos Inmobiliarios",
    path: "/projects/real-estate",
    image: `${base}assets/images/projects/real-estate/project-5/img-1-desktop.jpg`,
  },
  {
    title: "Proyectos Particulares",
    path: "/projects/private",
    image: `${base}assets/images/projects/private/project-1/img-1-desktop.jpg`,
  },
  {
    title: "Salas de ventas",
    path: "/projects/sales-room",
    image: `${base}assets/images/projects/sales-room/project-1/img-1-desktop.jpg`,
  },
  /*   {
    title: "Civil Works",
    path: "/projects/civil-works",
    image: "/eunic_site/assets/projects/obras1.jpg",
  }, */
];

const Projects = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 text-dark text-uppercase">
          Nuestros Proyectos
        </h2>
        <Row>
          {categories.map((cat, index) => (
            <Col xs={12} md={6} className="mb-4" key={index}>
              <Link to={cat.path} className="text-decoration-none">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={cat.image}
                    alt={cat.title}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="text-dark fs-5 text-center">
                      {cat.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;