import { Container } from "react-bootstrap";
import ProjectGallery from "../../../components/common/ProjectGallery/ProjectGallery";

const base = import.meta.env.BASE_URL;

const images = [
  `${base}assets/images/projects/private/project-1/img-1-desktop.jpg`,
  `${base}assets/images/projects/private/project-1/img-2-desktop.jpg`,
  `${base}assets/images/projects/private/project-1/img-3-desktop.jpg`,
  `${base}assets/images/projects/private/project-1/img-4-desktop.jpg`,
  `${base}assets/images/projects/private/project-1/img-5-desktop.jpg`,
  `${base}assets/images/projects/private/project-1/img-6-desktop.jpg`,
];

const CasaGrande = () => (
  <section className="py-5 bg-light">
    <Container>
      <h1 className="mb-3">Casa Grande - Peñalolen</h1>
      <p className="lead">Casa Particular - Diseño y Renovación de Muebles de Cocina</p>

      <ProjectGallery images={images} />

{/*       <p>
        The Casa Grande project in Peñalolen features a spacious and elegant design,
        blending modern aesthetics with functional living spaces.
      </p> */}
    </Container>
  </section>
);

export default CasaGrande;