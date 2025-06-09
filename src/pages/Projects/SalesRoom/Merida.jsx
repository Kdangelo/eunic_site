import { Container } from "react-bootstrap";
import ProjectGallery from "../../../components/common/ProjectGallery/ProjectGallery";

const base = import.meta.env.BASE_URL;

const images = [
  `${base}assets/images/projects/sales-room/project-1/img-1-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-2-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-3-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-4-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-5-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-6-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-7-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-8-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-9-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-10-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-11-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-12-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-13-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-14-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-15-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-16-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-17-desktop.jpg`,
  `${base}assets/images/projects/sales-room/project-1/img-18-desktop.jpg`,
];

const Merida = () => (
  <section className="py-5 bg-light">
    <Container>
      <h1 className="mb-3">Merida Seguridad</h1>
      <p className="lead">Sala de Ventas - Diseño e Instalación de Muebles para Sala de Ventas</p>

      <ProjectGallery images={images} />

      {/* <p>
        The Merida project features a modern sales room designed to showcase security solutions,
        enhancing the customer experience with functional and stylish furniture.
      </p> */}
    </Container>
  </section>
);

export default Merida;