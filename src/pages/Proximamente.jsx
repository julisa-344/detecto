import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import { ThemeProvider, BLUE_THEME } from '../components/specialty'
import { Proximamente as ProximamenteScreen } from '../components/proximamente'

export default function Proximamente() {
  return (
    <ThemeProvider
      theme={BLUE_THEME}
      className="min-h-screen"
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >
      <HeaderV3 forceLight />
      <ProximamenteScreen pageName="Resultados de Laboratorio de Anatomía Patológica" />
      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
