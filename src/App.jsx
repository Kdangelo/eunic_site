import { Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import RealEstate from './pages/Projects/RealEstate';
import CivilWorks from './pages/Projects/CivilWorks';
import Private from './pages/Projects/Private';
import SalesRoom from './pages/Projects/SalesRoom';
import NuncioOssa from './pages/Projects/RealEstate/NuncioOssa';
import Recreo from './pages/Projects/RealEstate/Recreo';
import ReginaPacis from './pages/Projects/RealEstate/ReginaPacis';
import SantaElena from './pages/Projects/RealEstate/SantaElena';
import Helsinski from './pages/Projects/RealEstate/Helsinski';
import RecreoCowork from './pages/Projects/RealEstate/RecreoCowork';
import Condominio from './pages/Projects/Private/Condominio';
import CasaGrande from './pages/Projects/Private/CasaGrande';
import Loggia from './pages/Projects/Private/Loggia';
import Merida from "./pages/Projects/SalesRoom/Merida";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/real-estate" element={<RealEstate />} />
        <Route path="projects/civil-works" element={<CivilWorks />} />
        <Route path="projects/private" element={<Private />} />
        <Route path="projects/sales-room" element={<SalesRoom />} />
        <Route path="projects/real-estate/nuncio-ossa" element={<NuncioOssa />} />
        <Route path="projects/real-estate/recreo" element={<Recreo />} />
        <Route path="projects/real-estate/regina-pacis" element={<ReginaPacis />} />
        <Route path="projects/real-estate/santa-elena" element={<SantaElena />} />
        <Route path="projects/real-estate/helsinski" element={<Helsinski />} />
        <Route path="projects/real-estate/recreo-cowork" element={<RecreoCowork />} />
        <Route path="projects/private/casa-grande" element={<CasaGrande />} />
        <Route path="projects/private/condominio" element={<Condominio />} />
        <Route path="projects/private/loggia" element={<Loggia />} />
        <Route path="projects/sales-room/merida-seguridad" element={<Merida />} />
      </Route>
    </Routes>
  );
}

export default App;
