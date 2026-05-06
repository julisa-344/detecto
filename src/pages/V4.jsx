import { useState } from 'react'
import HeaderV3 from '../components/v3/HeaderV3'
import HeroV4 from '../components/v4/HeroV4'
import VersionNavWidget from '../components/VersionNavWidget'
import AccionesRapidasV2 from '../components/v2/AccionesRapidasV2'
import EspecialidadesV3 from '../components/v3/EspecialidadesV3'
import PartnersV2 from '../components/v2/PartnersV2'
import AppDetectaV3 from '../components/v3/AppDetectaV3'
import FooterV3 from '../components/v3/FooterV3'
import StaffMedicoV2 from '../components/v2/StaffMedicoV2'
import SplashV3 from '../components/v3/SplashV3'
import WhatsAppButton from '../components/WhatsAppButton'


export default function V4() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashV3 onComplete={() => setShowSplash(false)} />}
      <div className="min-h-screen" style={{ background: '#0a0c12' }}>
        <HeaderV3 />
        <HeroV4 />
        <VersionNavWidget current="Versión 04 — Disruptiva + Clinical" />
        <AccionesRapidasV2 />
        <StaffMedicoV2 />
        <EspecialidadesV3 />
        <AppDetectaV3 />
        <PartnersV2 />
        <FooterV3 />
      </div>
      <WhatsAppButton />
    </>
  )
}
