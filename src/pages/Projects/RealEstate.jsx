import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Nuncio Ossa",
    image: "/eunic_site/assets/images/projects/real-estate/project-1/img-1-desktop.jpg",
    description: "Edificio Residencial",
    path: "/projects/real-estate/nuncio-ossa",
  },
  {
    title: "Recreo",
    image: "/eunic_site/assets/images/projects/real-estate/project-2/img-1-desktop.jpg",
    description: "Edificio Residencial",
    path: "/projects/real-estate/recreo",
  },
  {
    title: "Regina Pacis",
    image: "/eunic_site/assets/images/projects/real-estate/project-3/img-1-desktop.jpg",
    description: "Edificio Residencial",
    path: "/projects/real-estate/regina-pacis",
  },
  {
    title: "Santa Elena Colina",
    image: "/eunic_site/assets/images/projects/real-estate/project-4/img-1-desktop.jpg",
    description: "Condominio Residencial",
    path: "/projects/real-estate/santa-elena",
  },
  {
    title: "Helsinski",
    image: "/eunic_site/assets/images/projects/real-estate/project-5/img-1-desktop.jpg",
    description: "Espacios Comunes",
    path: "/projects/real-estate/helsinski",
  },
  {
    title: "Recreo - Cowork",
    image: "/eunic_site/assets/images/projects/real-estate/project-6/img-1-desktop.jpg",
    description: "Sala Cowork",
    path: "/projects/real-estate/recreo-cowork",
  },
];

const RealEstate = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 text-dark text-uppercase">
          Proyectos Inmobiliarios
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
                    style={{ height: "200px", objectFit: "cover" }}
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

export default RealEstate;