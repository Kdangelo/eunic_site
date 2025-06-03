import { Container } from "react-bootstrap";
import ProjectGallery from "../../../components/common/ProjectGallery/ProjectGallery";

const base = import.meta.env.BASE_URL;

const images = [
  `${base}assets/images/projects/real-estate/project-3/img-1-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-3/img-2-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-3/img-3-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-3/img-4-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-3/img-5-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-3/img-6-desktop.jpg`,
];

const ReginaPacis = () => (
  <section className="py-5 bg-light">
    <Container>
      <h1 className="mb-3">Regina Pacis</h1>
      <p className="lead">Edificio Residencial</p>

      <ProjectGallery images={images} />

      <p>
        Regina Pacis is a residential development known for its architectural harmony
        and thoughtfully designed interiors. The project emphasizes comfort, lighting,
        and modern aesthetics across all its living spaces.
      </p>
    </Container>
  </section>
);

export default ReginaPacis;