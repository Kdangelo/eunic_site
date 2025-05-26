import { Container, Row, Col, Card } from "react-bootstrap";

const RealEstate = () => {
  const projects = [
    {
      title: "Residential Tower",
      image: "/eunic_site/assets/projects/inmobiliario1.jpg",
      description: "High-rise apartment building with custom furnishings.",
    },
    {
      title: "Valley Condos",
      image: "/eunic_site/assets/projects/inmobiliario2.jpg",
      description: "Mid-sized real estate development in Santiago.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 text-dark text-uppercase">Real Estate Projects</h2>
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