import { Container } from "react-bootstrap";
import ProjectGallery from "../../../components/common/ProjectGallery/ProjectGallery";

const base = import.meta.env.BASE_URL;

const images = [
  `${base}assets/images/projects/real-estate/project-6/img-1-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-6/img-2-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-6/img-3-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-6/img-4-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-6/img-5-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-6/img-6-desktop.jpg`,
];

const RecreoCowork = () => (
  <section className="py-5 bg-light">
    <Container>
      <h1 className="mb-3">Recreo - Cowork</h1>
      <p className="lead">Sala Cowork</p>

      <ProjectGallery images={images} />

      <p>
        The Recreo Cowork project delivers a flexible, comfortable workspace designed
        to encourage productivity and collaboration. With modern finishes, natural
        lighting, and modular areas, it blends functionality with aesthetic harmony
        in a residential context.
      </p>
    </Container>
  </section>
);

export default RecreoCowork;