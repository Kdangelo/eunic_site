import { Container } from "react-bootstrap";
import ProjectGallery from "../../../components/common/ProjectGallery/ProjectGallery";

const base = import.meta.env.BASE_URL;

const images = [
  `${base}assets/images/projects/real-estate/project-5/img-1-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-5/img-2-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-5/img-3-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-5/img-4-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-5/img-5-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-5/img-6-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-5/img-7-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-5/img-8-desktop.jpg`,
];

const Helsinski = () => (
  <section className="py-5 bg-light">
    <Container>
      <h1 className="mb-3">Helsinski</h1>
      <p className="lead">Espacios Comunes</p>

      <ProjectGallery images={images} />

      <p>
        The Helsinski project showcases elegant common areas designed for both
        social interaction and relaxation. Featuring contemporary interiors,
        flexible seating zones, and high-end materials, these shared spaces elevate
        the residential experience.
      </p>
    </Container>
  </section>
);

export default Helsinski;