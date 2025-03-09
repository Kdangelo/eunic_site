import "../../styles/ContactForm.css";
import { Button, Col, Form, Row } from "react-bootstrap";

const ContactForm = () => {
  return (
    <>
      <div className="mb-5 d-lg-none d-md-block">
        <h1 className="text-center">
        Contáctanos y haz realidad tus ideas en <strong className="text-warning">Espacio Único</strong>
        </h1>
      </div>
      <Form className="mx-auto" style={{ maxWidth: "900px" }}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>
                <span className="text-primary">Nombre</span>{' '}
                <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su Nombre"
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formLastName">
              <Form.Label>
                <span className="text-primary">Apellido</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Ingrese su Apellido" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>
                <span className="text-primary">Tu Email</span>{' '}
                <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su Email"
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formCompany">
              <Form.Label>
                <span className="text-primary">Compañía</span>{' '}
                <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su Compañía"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>
            <span className="text-primary">Asunto</span>{' '}
            <span className="text-warning">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el asunto del mensaje"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>
            <span className="text-primary">Mensaje</span>{' '}
            <span className="text-warning">*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Escribanos su mensaje"
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formCheckbox">
          <Form.Check 
            type="checkbox" 
            label={
              <>
                Acepto que mis datos personales sean tratados por Espacio Único de acuerdo con la 
                <a href="/politica-privacidad" className="text-primary mx-1">Política de Privacidad</a> 
                  y los 
                <a href="/terminos-uso" className="text-primary mx-1">Términos de Uso</a>.
              </>
            }
            required 
          />
      </Form.Group>

        <div className="d-grid">
          <Button
            variant="warning" 
            type="submit" 
            size="lg" 
            className="text-white mt-3"
          >
            Enviar Mensaje
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ContactForm;
