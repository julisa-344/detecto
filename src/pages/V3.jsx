import HeaderV3 from '../components/v3/HeaderV3'
import HeroV3 from '../components/v3/HeroV3'
import MetricsV3 from '../components/v3/MetricsV3'
import VersionNavWidget from '../components/VersionNavWidget'
import AccionesRapidasv3 from '../components/v3/AccionesRapidasV3'
import EspecialidadesV3 from '../components/v3/EspecialidadesV3'
import StackFeatureSection from '../components/ui/stack-feature-section'
import AppDetectaV3 from '../components/v3/AppDetectaV3'
import Footer from '../components/Footer'
import StaffMedico from '../components/StaffMedico'


export default function V3() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0c12' }}>
      <HeaderV3 />
      <HeroV3 />
      <VersionNavWidget current="Versión 03 — Futurista Disruptiva" />
      <AccionesRapidasv3 />
      <StaffMedico />
      <EspecialidadesV3 />
      <AppDetectaV3 />
      <PartnersV3 />
      <Footer />
    </div>
  )
}
