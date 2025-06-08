import './ContactForm.scss';
import { Button, Col, Form, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qptj4cr',     // 🔁 Replace with your EmailJS Service ID
        'template_gpzaojc',    // 🔁 Replace with your EmailJS Template ID
        form.current,
        'RtBhVGOMAVskH7StT')
      .then(
        (result) => {
          console.log(result.text);
          alert('Mensaje enviado con éxito');
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert('Ocurrió un error al enviar el mensaje');
        }
      );
  };

  return (
    <>
      <div className="mb-5 d-lg-none d-md-block">
        <h1 className="text-center">
          Contáctanos y haz realidad tus ideas en <strong className="text-warning">Espacio Único</strong>
        </h1>
      </div>

      <Form ref={form} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: "900px" }}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>
                <span className="text-black">Nombre</span>{' '}
                <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su Nombre"
                name="user_name"
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formLastName">
              <Form.Label>
                <span className="text-black">Apellido</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su Apellido"
                name="user_lastname"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>
                <span className="text-black">Tu Email</span>{' '}
                <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su Email"
                name="user_email"
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formCompany">
              <Form.Label>
                <span className="text-black">Compañía</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su Compañía"
                name="user_company"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>
            <span className="text-black">Asunto</span>{' '}
            <span className="text-warning">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el asunto del mensaje"
            name="subject"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>
            <span className="text-black">Mensaje</span>{' '}
            <span className="text-warning">*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Escribanos su mensaje"
            name="message"
            required
          />
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
          >
            Enviar Mensaje
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ContactForm;