import "../../styles/ContactForm.css";
import { Button, Col, Form, Row } from "react-bootstrap";

const ContactForm = () => {
  return (
    <>
      <div className="mb-5 d-lg-none d-md-block">
        <h1 className="text-center">
          Contáctate con <strong className="text-warning">Espacio Único</strong>
        </h1>
      </div>
      <Form className="mx-auto" style={{ maxWidth: "900px" }}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su Nombre"
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su Apellido" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Tu Email *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su Email"
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formCompany">
              <Form.Label>Compañía *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su Compañía"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formAsunto">
          <Form.Label>Asunto *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el asunto del mensaje"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMensaje">
          <Form.Label>Mensaje *</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Escribanos su mensaje"
            required
          />
        </Form.Group>

        <div className="d-grid">
          <Button variant="warning" type="submit" size="lg">
            Enviar Mensaje
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ContactForm;
