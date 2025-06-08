import { Container } from "react-bootstrap";
import ProjectGallery from "../../../components/common/ProjectGallery/ProjectGallery";

const base = import.meta.env.BASE_URL;

const images = [
  `${base}assets/images/projects/private/project-2/img-1-desktop.jpg`,
  `${base}assets/images/projects/private/project-2/img-2-desktop.jpg`,
  `${base}assets/images/projects/private/project-2/img-3-desktop.jpg`,
  `${base}assets/images/projects/private/project-2/img-4-desktop.jpg`,
  `${base}assets/images/projects/private/project-2/img-5-desktop.jpg`,
  `${base}assets/images/projects/private/project-2/img-6-desktop.jpg`,
];

const Condominio = () => (
  <section className="py-5 bg-light">
    <Container>
      <h1 className="mb-3">Condominio - Peñalolen</h1>
      <p className="lead">Casa Particular - Diseño e Instalación de Muebles de Cocina</p>

      <ProjectGallery images={images} />

{/*       <p>
        The Helsinski project showcases elegant common areas designed for both
        social interaction and relaxation.
      </p> */}
    </Container>
  </section>
);

export default Condominio;