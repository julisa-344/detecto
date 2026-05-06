import { useState } from 'react'
import HeaderV3 from '../components/v3/HeaderV3'
import HeroV4 from '../components/v4/HeroV4'
import VersionNavWidget from '../components/VersionNavWidget'
import AccionesRapidasV2 from '../components/v2/AccionesRapidasV2'
import EspecialidadesV3 from '../components/v3/EspecialidadesV3'
import PartnersV3 from '../components/v3/PartnersV3'
import AppDetectaV4 from '../components/v4/AppDetectaV4'
import FooterV3 from '../components/v3/FooterV3'
import StaffMedico from '../components/v1/StaffMedico'
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
        <StaffMedico />
        <EspecialidadesV3 />
        <AppDetectaV4 />
        <PartnersV3 />
        <FooterV3 />
      </div>
      <WhatsAppButton />
    </>
  )
}
