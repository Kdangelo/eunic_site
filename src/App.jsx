import { Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Furnitures from './pages/Projects/Furnitures/Furnitures';
import Privates from './pages/Projects/Privates/Privates';
import CivilWorks from './pages/Projects/CivilWorks/CivilWorks';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Ruta de proyectos */}
        <Route path="projects" element={<Projects />}>
          <Route path="furnitures" element={<Furnitures />} />
          <Route path="privates" element={<Privates />} />
          <Route path="civil-works" element={<CivilWorks />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
