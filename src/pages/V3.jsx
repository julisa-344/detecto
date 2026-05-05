import { useState } from 'react'
import HeaderV3 from '../components/v3/HeaderV3'
import HeroV3 from '../components/v3/HeroV3'
import VersionNavWidget from '../components/VersionNavWidget'
import AccionesRapidasv3 from '../components/v3/AccionesRapidasV3'
import EspecialidadesV3 from '../components/v3/EspecialidadesV3'
import PartnersV3 from '../components/v3/PartnersV3'
import AppDetectaV3 from '../components/v3/AppDetectaV3'
import FooterV3 from '../components/v3/FooterV3'
import StaffMedico from '../components/v1/StaffMedico'
import SplashV3 from '../components/v3/SplashV3'
import WhatsAppButton from '../components/WhatsAppButton'


export default function V3() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashV3 onComplete={() => setShowSplash(false)} />}
      <div className="min-h-screen" style={{ background: '#0a0c12' }}>
        <HeaderV3 />
        <HeroV3 />
        <VersionNavWidget current="Versión 03 — Futurista Disruptiva" />
        <AccionesRapidasv3 />
        <StaffMedico />
        <EspecialidadesV3 />
        <AppDetectaV3 />
        <PartnersV3 />
        <FooterV3 />
        <WhatsAppButton />
      </div>
    </>
  )
}
