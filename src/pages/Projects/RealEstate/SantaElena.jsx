import { Container } from "react-bootstrap";
import ProjectGallery from "../../../components/common/ProjectGallery/ProjectGallery";

const base = import.meta.env.BASE_URL;

const images = [
  `${base}assets/images/projects/real-estate/project-4/img-1-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-4/img-2-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-4/img-3-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-4/img-4-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-4/img-5-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-4/img-6-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-4/img-7-desktop.jpg`,
];

const SantaElena = () => (
  <section className="py-5 bg-light">
    <Container>
      <h1 className="mb-3">Santa Elena de Colina</h1>
      <p className="lead">Condominio Residencial</p>

      <ProjectGallery images={images} />

{/*       <p>
        Santa Elena Colina is a suburban residential condominium project designed
        to offer a peaceful and functional living experience. It features green
        areas, well-defined communal spaces, and architectural consistency
        across units.
      </p> */}
    </Container>
  </section>
);

export default SantaElena;