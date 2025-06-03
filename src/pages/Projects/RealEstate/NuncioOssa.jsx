import { Container } from "react-bootstrap";
import ProjectGallery from "../../../components/common/ProjectGallery/ProjectGallery";

const base = import.meta.env.BASE_URL;

const images = [
  `${base}assets/images/projects/real-estate/project-1/img-1-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-1/img-2-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-1/img-3-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-1/img-4-desktop.jpg`,
];

const NuncioOssa = () => (
  <section className="py-5 bg-light">
    <Container>
      <h1 className="mb-3">Nuncio Ossa</h1>
      <p className="lead">Edificio Residencial</p>

      <ProjectGallery images={images} />

      <p>
        Residential building focused on vertical urban living with custom
        finishes and efficient space use. The project includes community areas,
        balconies, and high-quality interior fixtures.
      </p>
    </Container>
  </section>
);

export default NuncioOssa;