import { Container } from "react-bootstrap";
import ProjectGallery from "../../../components/common/ProjectGallery/ProjectGallery";

const base = import.meta.env.BASE_URL;

const images = [
  `${base}assets/images/projects/private/project-3/img-1-desktop.jpg`,
  `${base}assets/images/projects/private/project-3/img-2-desktop.jpg`,
  `${base}assets/images/projects/private/project-3/img-3-desktop.jpg`,
  `${base}assets/images/projects/private/project-3/img-4-desktop.jpg`,
];

const Loggia = () => (
  <section className="py-5 bg-light">
    <Container>
      <h1 className="mb-3">Loggia - Chicureo</h1>
      <p className="lead">Casa Particular - Diseño e Instalación de Muebles de Lavandería</p>

      <ProjectGallery images={images} />

{/*       <p>
        The Loggia project in Peñalolen features a functional and stylish laundry area,
        designed to enhance the utility and aesthetics of the home.
      </p> */}
    </Container>
  </section>
);

export default Loggia;