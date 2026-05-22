import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import detecto from '../assets/detecto.png'
import tecnologiaImg from '../assets/tecnologia.jpg'

import {
  ThemeProvider,
  BLUE_THEME,
  MisionCTA,
  FAQs,
  QuickContact,
  FortalezasClinica,
} from '../components/specialty'

import {
  DiagnosticoHero,
  EstudiosImagenes,
  PasosRapido,
  faqs,
  fortalezas,
} from '../components/diagnostico-imagenes'

export default function DiagnosticoImagenes() {
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

      <DiagnosticoHero />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <EstudiosImagenes />

            <MisionCTA
              image={tecnologiaImg}
              imageAlt="Tecnología de diagnóstico por imágenes"
              eyebrow="Tecnología de Alta Precisión"
              titlePre="Equipos de"
              titleAccent="última generación."
              paragraph="Trabajamos con Tecnología de Alta Precisión y especialistas radiólogos para entregarte imágenes claras y diagnósticos confiables que respaldan cada decisión clínica."
            />

            <PasosRapido />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestros estudios de imágenes."
              faqs={faqs}
            />
          </main>

          <aside className="hidden self-start lg:sticky lg:top-[96px] lg:block">
            <QuickContact />
          </aside>
        </div>
      </div>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
