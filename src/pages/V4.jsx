import { useState } from 'react'
import HeaderV3 from '../components/v3/HeaderV3'
import HeroV4 from '../components/v4/HeroV4'
import VersionNavWidget from '../components/VersionNavWidget'
import AccionesRapidasV4 from '../components/v4/AccionesRapidasV4'
import EspecialidadesV4 from '../components/v4/EspecialidadesV4'
import PartnersV3 from '../components/v3/PartnersV3'
import AppDetectaV4 from '../components/v4/AppDetectaV4'
import FooterV4 from '../components/v4/FooterV4'
import StaffMedicoV4 from '../components/v4/StaffMedicoV4'
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
        <AccionesRapidasV4 />
        <StaffMedicoV4 />
        <EspecialidadesV4 />
        <AppDetectaV4 />
        <PartnersV3 />
        <FooterV4 />
      </div>
      <WhatsAppButton />
    </>
  )
}
