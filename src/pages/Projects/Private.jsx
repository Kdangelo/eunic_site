import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const base = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Casa Grande - Peñalolen",
    image: `${base}assets/images/projects/private/project-1/img-1-desktop.jpg`,
    description: "Casa Particular - Diseño y Renovación Cocina",
    path: "/projects/private/casa-grande",
  },
  {
    title: "Condominio - Peñalolen",
    image: `${base}assets/images/projects/private/project-2/img-1-desktop.jpg`,
    description: "Casa Particular - Diseño e Instalación Cocina",
    path: "/projects/private/condominio",
  },
  {
    title: "Loggia - Chicureo",
    image: `${base}assets/images/projects/private/project-3/img-1-desktop.jpg`,
    description: "Casa Particular - Diseño e Instalación Lavandería",
    path: "/projects/private/loggia",
  },
];

const Private = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 text-dark text-uppercase">
          Proyectos Particulares
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

export default Private;