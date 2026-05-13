import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import {
  HeroBanner,
  QuienesSomos,
  DiferenciaSection,
  MisionVisionSection,
  FuturoTimeline,
} from '../components/sobre-detecta'

export default function SobreDetecta() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <HeaderV3 />
      <HeroBanner />
      <QuienesSomos />
      <FuturoTimeline />
      <DiferenciaSection />
      <MisionVisionSection />
      <FooterV4 showCTA />
      <WhatsAppButton />
    </div>
  )
}
