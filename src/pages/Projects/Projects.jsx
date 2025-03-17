import { Outlet } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>Nuestros Proyectos</h1>
      <Outlet /> {/* Esto renderizará las subrutas */}
    </div>
  );
};

export default Projects;