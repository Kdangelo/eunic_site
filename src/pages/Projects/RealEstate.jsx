import { Container, Row, Col, Card } from "react-bootstrap";

const RealEstate = () => {
  const projects = [
    {
      title: "Nuncio Ossa",
      image: "/src/assets/images/projects/real-estate/project-1/img-1-mobile.jpg",
      description: "Edifio Residencial",
    },
    {
      title: "Recreo",
      image: "/src/assets/images/projects/real-estate/project-2/img-1-mobile.jpg",
      description: "Edifio Residencial",
    },
    {
      title: "Regina Pacis",
      image: "/src/assets/images/projects/real-estate/project-3/img-1-mobile.jpg",
      description: "Edifio Residencial",
    },
    {
      title: "Santa Elena Colina",
      image: "/src/assets/images/projects/real-estate/project-4/img-1-mobile.jpg",
      description: "Condominio Residencial",
    },
    {
      title: "Helsinski",
      image: "/src/assets/images/projects/real-estate/project-5/img-1-mobile.jpg",
      description: "Espacios Comunes",
    },
    {
      title: "Recreo",
      image: "/src/assets/images/projects/real-estate/project-6/img-1-mobile.jpg",
      description: "Sala Cowork",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 text-dark text-uppercase">Proyectos Inmobiliarios</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
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
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RealEstate;