import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import VersionPicker from './pages/VersionPicker'
import V1 from './pages/V1'
import V2 from './pages/V2'
import V3 from './pages/V3'
import V4 from './pages/V4'
import V5 from './pages/V5'
import OncologiaMedica from './pages/OncologiaMedica'
import PreventivoRosa from './pages/PreventivoRosa'
import StaffMedico from './pages/StaffMedico'
import DoctorDetail from './pages/DoctorDetail'
import SobreDetecta from './pages/SobreDetecta'
import Dermatologia from './pages/Dermatologia'
import Investigacion from './pages/Investigacion'
import ComiteEtica from './pages/ComiteEtica'
import GestionEtica from './pages/GestionEtica'
import DiagnosticoImagenes from './pages/DiagnosticoImagenes'
import Hospitalizacion from './pages/Hospitalizacion'
import SalaOperaciones from './pages/SalaOperaciones'
import Quimioterapia from './pages/Quimioterapia'
import Farmacia from './pages/Farmacia'
import LaboratorioClinico from './pages/LaboratorioClinico'
import OncologiaCabezaCuello from './pages/OncologiaCabezaCuello'
import MastologiaGinecologia from './pages/MastologiaGinecologia'
import Psicooncologia from './pages/Psicooncologia'
import OncologiaPediatrica from './pages/OncologiaPediatrica'
import GinecologiaOncologica from './pages/GinecologiaOncologica'
import UrologiaOncologica from './pages/UrologiaOncologica'
import EnfermedadesInfecciosas from './pages/EnfermedadesInfecciosas'
import Geriatria from './pages/Geriatria'
import MedicinaInterna from './pages/MedicinaInterna'
import Endocrinologia from './pages/Endocrinologia'
import Gastroenterologia from './pages/Gastroenterologia'
import Hematologia from './pages/Hematologia'
import MedicinaGeneral from './pages/MedicinaGeneral'
import Nefrologia from './pages/Nefrologia'
import CirugiaPlastica from './pages/CirugiaPlastica'
import GinecologiaObstetricia from './pages/GinecologiaObstetricia'
import Odontologia from './pages/Odontologia'
import ResultadosAnatomia from './pages/ResultadosAnatomia'
import ResultadosLaboratorio from './pages/ResultadosLaboratorio'
import PreventivoAzul from './pages/PreventivoAzul'
import Login from './pages/Login'
import ScrollToTop from './components/ScrollToTop'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<VersionPicker />} />
        <Route path="/v1" element={<V1 />} />
        <Route path="/v2" element={<V2 />} />
        <Route path="/v3" element={<V3 />} />
        <Route path="/v4" element={<V4 />} />
        <Route path="/v5" element={<V5 />} />
        <Route path="/v4/oncologia-medica" element={<OncologiaMedica />} />
        <Route path="/v4/preventivo-rosa" element={<PreventivoRosa />} />
        <Route path="/v4/staff-medico" element={<StaffMedico />} />
        <Route path="/v4/staff-medico/:slug" element={<DoctorDetail />} />
        <Route path="/v4/sobre-detecta" element={<SobreDetecta />} />
        <Route path="/v4/dermatologia" element={<Dermatologia />} />
        <Route path="/v4/investigacion" element={<Investigacion />} />
        <Route path="/v4/comite-etica" element={<ComiteEtica />} />
        <Route path="/v4/gestion-etica" element={<GestionEtica />} />
        <Route path="/v4/diagnostico-imagenes" element={<DiagnosticoImagenes />} />
        <Route path="/v4/hospitalizacion" element={<Hospitalizacion />} />
        <Route path="/v4/sala-operaciones" element={<SalaOperaciones />} />
        <Route path="/v4/quimioterapia" element={<Quimioterapia />} />
        <Route path="/v4/farmacia" element={<Farmacia />} />
        <Route path="/v4/laboratorio-clinico" element={<LaboratorioClinico />} />
        <Route path="/v4/oncologia-cabeza-cuello" element={<OncologiaCabezaCuello />} />
        <Route path="/v4/mastologia-ginecologia" element={<MastologiaGinecologia />} />
        <Route path="/v4/psicooncologia" element={<Psicooncologia />} />
        <Route path="/v4/oncologia-pediatrica" element={<OncologiaPediatrica />} />
        <Route path="/v4/ginecologia-oncologica" element={<GinecologiaOncologica />} />
        <Route path="/v4/urologia-oncologica" element={<UrologiaOncologica />} />
        <Route path="/v4/enfermedades-infecciosas" element={<EnfermedadesInfecciosas />} />
        <Route path="/v4/geriatria" element={<Geriatria />} />
        <Route path="/v4/medicina-interna" element={<MedicinaInterna />} />
        <Route path="/v4/endocrinologia" element={<Endocrinologia />} />
        <Route path="/v4/gastroenterologia" element={<Gastroenterologia />} />
        <Route path="/v4/hematologia" element={<Hematologia />} />
        <Route path="/v4/medicina-general" element={<MedicinaGeneral />} />
        <Route path="/v4/nefrologia" element={<Nefrologia />} />
        <Route path="/v4/cirugia-plastica" element={<CirugiaPlastica />} />
        <Route path="/v4/ginecologia-obstetricia" element={<GinecologiaObstetricia />} />
        <Route path="/v4/odontologia" element={<Odontologia />} />
        <Route path="/v4/resultados-anatomia-patologica" element={<ResultadosAnatomia />} />
        <Route path="/v4/resultados-laboratorio-patologico" element={<ResultadosLaboratorio />} />
        <Route path="/v4/preventivo-azul" element={<PreventivoAzul />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
