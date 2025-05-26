import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// Project categories and links
const categories = [
  {
    title: "Real Estate",
    path: "/projects/real-estate",
    image: "/eunic_site/assets/projects/inmobiliario1.jpg",
  },
  {
    title: "Civil Works",
    path: "/projects/civil-works",
    image: "/eunic_site/assets/projects/obras1.jpg",
  },
  {
    title: "Private",
    path: "/projects/private",
    image: "/eunic_site/assets/projects/particular1.jpg",
  },
  {
    title: "Sales Room",
    path: "/projects/sales-room",
    image: "/eunic_site/assets/projects/sala1.jpg",
  },
];

const Projects = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 text-dark text-uppercase">
          Our Projects
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
                    style={{ height: "200px", objectFit: "cover" }}
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