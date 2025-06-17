import './ContactForm.scss';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Spinner state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start spinner

    emailjs
      .sendForm(
        'service_qptj4cr',        // ✅ Your EmailJS service ID
        'template_gpzaojc',       // ✅ Your EmailJS template ID
        form.current,
        'RtBhVGOMAVskH7StT'       // ✅ Your EmailJS public key
      )
      .then(
        (result) => {
          alert('Mensaje enviado con éxito');
          e.target.reset();
        },
        (error) => {
          alert('Ocurrió un error al enviar el mensaje');
          console.error(error.text);
        }
      )
      .finally(() => setLoading(false)); // Stop spinner
  };

  return (
    <>
      <div className="mb-5 d-lg-none d-md-block">
        <h1 className="text-center">
          Contáctanos y haz realidad tus ideas en <strong className="text-warning">Espacio Único</strong>
        </h1>
      </div>

      <Form ref={form} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: '900px' }}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>
                <span className="text-black">Nombre</span> <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Ingrese su Nombre" name="user_name" required />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formLastName">
              <Form.Label>
                <span className="text-black">Apellido</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Ingrese su Apellido" name="user_lastname" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>
                <span className="text-black">Tu Email</span> <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control type="email" placeholder="Ingrese su Email" name="user_email" required />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formCompany">
              <Form.Label>
                <span className="text-black">Compañía</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Ingrese su Compañía" name="user_company" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>
            <span className="text-black">Asunto</span> <span className="text-warning">*</span>
          </Form.Label>
          <Form.Control type="text" placeholder="Ingrese el asunto del mensaje" name="subject" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>
            <span className="text-black">Mensaje</span> <span className="text-warning">*</span>
          </Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Escríbanos su mensaje" name="message" required />
        </Form.Group>

        {/* Optional privacy checkbox */}
        {/* <Form.Group className="mb-4" controlId="formCheckbox">
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
        </Form.Group> */}

        <div className="d-grid">
          <Button
            variant="warning"
            type="submit"
            size="lg"
            className="text-white mt-3"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Enviando...
              </>
            ) : (
              'Enviar Mensaje'
            )}
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ContactForm;