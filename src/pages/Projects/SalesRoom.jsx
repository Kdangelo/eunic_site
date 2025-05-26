import { Container, Row, Col, Card } from "react-bootstrap";

const SalesRoom = () => {
  const projects = [
    {
      title: "Sales Room – Ñuñoa",
      image: "/eunic_site/assets/projects/sala1.jpg",
      description: "Complete design and build of sales room environment.",
    },
    {
      title: "Marketing Suite – Providencia",
      image: "/eunic_site/assets/projects/sala2.jpg",
      description: "Branded space for client engagement and promotions.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 text-dark text-uppercase">Sales Room Projects</h2>
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

export default SalesRoom;