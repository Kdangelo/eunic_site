import { Container } from "react-bootstrap";
import ProjectGallery from "../../../components/common/ProjectGallery/ProjectGallery";

const base = import.meta.env.BASE_URL;

const images = [
  `${base}assets/images/projects/real-estate/project-2/img-1-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-2/img-2-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-2/img-3-desktop.jpg`,
  `${base}assets/images/projects/real-estate/project-2/img-4-desktop.jpg`,
];

const Recreo = () => (
  <section className="py-5 bg-light">
    <Container>
      <h1 className="mb-3">Recreo</h1>
      <p className="lead">Edificio Residencial</p>

      <ProjectGallery images={images} />

{/*       <p>
        Recreo is a residential project featuring modern design and smart spatial
        distribution. It incorporates elegant finishes and shared spaces that foster
        a strong sense of community.
      </p> */}
    </Container>
  </section>
);

export default Recreo;