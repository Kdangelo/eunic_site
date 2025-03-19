import './Contact.scss';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from "../../components/common/ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className="contact-section">
      <Container fluid>
        <Row>
          {/* Columna izquierda - Información de contacto */}
          <Col lg={5} className='order-2 order-lg-1 text-bg-primary p-5 contact-info'>
            <div className='m-5 d-none d-lg-block'>
              <h1>
              Contáctanos y haz realidad tus ideas en <strong className="text-warning">Espacio Único</strong>
              </h1>
            </div>
            <div className='m-5'>
              <div className='mb-5'>
                <h4><strong>Dirección</strong></h4>
                <p>
                  Avda. Santa Rosa 2057, Galpón 3B
                  <br />
                  San Bernardo, Región Metropolitana
                </p>
              </div>
              <div className='mb-5'>
                <h4><strong>Información de Contacto</strong></h4>
                <p>
                  Tel: +56 9 7448 8795
                  <br />
                  +56 9 7448 8795
                  <br />
                  Email: ventas@eunico.cl
                </p>
              </div>
              <div>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.6634164774723!2d-70.63527792430119!3d-33.63996817331494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d819ce77cecf%3A0x88c3ff7dbfd6ceb8!2sAv.%20Sta.%20Rosa%202057%2C%20San%20Bernardo%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1742256853934!5m2!1ses!2scl'
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
