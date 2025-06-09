import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const base = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Merida Seguridad",
    image: `${base}assets/images/projects/sales-room/project-1/img-1-desktop.jpg`,
    description: "Sala de Ventas",
    path: "/projects/sales-room/merida-seguridad",
  },
];

const SalesRoom = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 text-dark text-uppercase">
          Proyectos de Salas de Ventas
        </h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Link
                to={project.path}
                className="text-decoration-none text-dark"
              >
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
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

export default SalesRoom;