import { Container, Row, Col, Card } from "react-bootstrap";

const CivilWorks = () => {
  const projects = [
    {
      title: "Foundation Work – Los Pinos",
      image: "/eunic_site/assets/projects/obras1.jpg",
      description: "Concrete foundations for multi-unit housing.",
    },
    {
      title: "Infrastructure Upgrade",
      image: "/eunic_site/assets/projects/obra2.jpg",
      description: "Structural support work for public access facilities.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 text-dark text-uppercase">Civil Works Projects</h2>
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

export default CivilWorks;