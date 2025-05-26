import { Container, Row, Col, Card } from "react-bootstrap";

const Private = () => {
  const projects = [
    {
      title: "Kitchen Remodel – La Florida",
      image: "/eunic_site/assets/projects/particular1.jpg",
      description: "Custom kitchen and cabinetry for private client.",
    },
    {
      title: "Patio Renovation",
      image: "/eunic_site/assets/projects/particular2.jpg",
      description: "Outdoor design upgrade for residential patio.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 text-dark text-uppercase">Private Projects</h2>
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

export default Private;