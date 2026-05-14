import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

import { ThemeProvider, BLUE_THEME, FAQs } from '../components/specialty'

import {
  GestionEticaHero,
  Compromiso,
  Valores,
  Alcance,
  PrincipiosAtencion,
  EticaOncologia,
  ConductaEsperada,
  ModeloGestion,
  CanalDenuncias,
  Documentos,
  Indicadores,
  CTAFinal,
  faqs,
} from '../components/gestion-etica'

export default function GestionEtica() {
  return (
    <ThemeProvider
      theme={BLUE_THEME}
      className="min-h-screen"
      style={{
        fontFamily: 'Lexend, sans-serif',
        background: BLUE_THEME.pageGradient,
      }}
    >
      <HeaderV3 />

      <GestionEticaHero />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <main className="space-y-24 lg:space-y-32">
          <Compromiso />
          <Valores />
          <Alcance />
          <PrincipiosAtencion />
          <EticaOncologia />
          <ConductaEsperada />
          <ModeloGestion />
          <CanalDenuncias />
          <Documentos />
          <Indicadores />
          <FAQs
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas"
            subtitle="Información clara sobre nuestro modelo de gestión ética."
            faqs={faqs}
          />
          <CTAFinal />
        </main>
      </div>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
