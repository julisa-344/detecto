import HeaderV2 from '../components/v2/HeaderV2'
import HeroV2 from '../components/v2/HeroV2'
import MetricsBarV2 from '../components/v2/MetricsBarV2'
import AccionesRapidasV2 from '../components/v2/AccionesRapidasV2'
import EspecialidadesV2 from '../components/v2/EspecialidadesV2'
import StaffMedicoV2 from '../components/v2/StaffMedicoV2'
import PorQueNosotrosV2 from '../components/v2/PorQueNosotrosV2'
import AppDetectaV2 from '../components/v2/AppDetectaV2'
import PartnersV2 from '../components/v2/PartnersV2'
import FooterV2 from '../components/v2/FooterV2'
import VersionNavWidget from '../components/VersionNavWidget'

export default function V2() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderV2 />
      <HeroV2 />
      <AccionesRapidasV2 />
      <EspecialidadesV2 />
      <StaffMedicoV2 />
      <PorQueNosotrosV2 />
      <AppDetectaV2 />
      <PartnersV2 />
      <FooterV2 />
      <VersionNavWidget current="Versión 02 — Clinical Futurista" />
    </div>
  )
}
