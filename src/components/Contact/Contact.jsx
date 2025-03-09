import "../../styles/Contact.css";
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section>
      <Container fluid>
        <Row>
          {/* Columna izquierda - Información de contacto */}
          <Col lg={5} className='order-2 order-lg-1 text-bg-primary p-5 contact-section'>
            <div className='m-5 d-none d-lg-block'>
              <h1>
                Contáctate con <strong className='text-warning'>Espacio Único</strong> 
              </h1>
            </div>
            <div className='m-5'>
              <div className='mb-5'>
                <h4><strong>Dirección</strong></h4>
                <p>
                  Santa Amalia 3500 Depto 33 F Edificio F
                  <br />
                  La Florida, Santiago de Chile
                </p>
              </div>
              <div className='mb-5'>
                <h4><strong>Información de Contacto</strong></h4>
                <p>
                  Tel: +56 9 5555 55555
                  <br />
                  Email: contacto@eunico.cl
                </p>
              </div>
              <div>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.3514199343817!2d-70.55961031116958!3d-33.544244704643944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d13938089d37%3A0xc36d7aeca5c7455e!2sSta.%20Amalia%203500%2C%20Depto%2033%20F%20Edificio%20F%2C%208290886%20La%20Florida%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1719968890769!5m2!1ses!2scl'
                  width='100%'
                  height='250'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
          </Col>
          {/* Columna derecha - Formulario */}
          <Col lg={7} className='order-1 order-lg-2 p-5'>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
