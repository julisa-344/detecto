import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import {
  QuienesSomos,
  DiferenciaSection,
  MisionVisionSection,
  FuturoTimeline,
  ClinicaVideoExpand,
} from '../components/sobre-detecta'

export default function SobreDetecta() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <HeaderV3 />
      <ClinicaVideoExpand />
      <QuienesSomos />
      <FuturoTimeline />
      <DiferenciaSection />
      <MisionVisionSection />
      <FooterV4 showCTA />
      <WhatsAppButton />
    </div>
  )
}
