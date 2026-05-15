import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

import heroVideo from '../assets/preventivoRosaBanner.mp4'
import bannerImg from '../assets/preventivoRosa.jpg'

import {
  ThemeProvider,
  PINK_THEME,
  Hero,
  ServicesStrip,
  BeneficiosGrid,
  MisionCTA,
  FAQs,
  QuickContact,
} from '../components/specialty'

import {
  PlanesPreventivo,
  OneDayBanner,
  PorQueHacerlo,
  servicios,
  beneficios,
  faqs,
} from '../components/preventivo-rosa'

export default function PreventivoRosa() {
  return (
    <ThemeProvider
      theme={PINK_THEME}
      className="min-h-screen"
      style={{
        fontFamily: 'Lexend, sans-serif',
        background: PINK_THEME.pageGradient,
      }}
    >
      <HeaderV3 />

      <Hero
        video={heroVideo}
        titlePre="Preventivo Rosa:"
        titleAccent="despistaje con enfoque integral."
        subtitle="Evaluación preventiva para mama, cuello uterino, ovarios, vagina y vulva. Detectar a tiempo puede cambiarlo todo."
      />

      <ServicesStrip items={servicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">

          <main className="min-w-0 space-y-20 lg:space-y-24">
            <PorQueHacerlo />

            <BeneficiosGrid
              eyebrow="¿Por qué elegirnos?"
              titlePre="Una propuesta pensada"
              titleAccent="para cuidarte."
              paragraph="Cuatro pilares que hacen del Preventivo Rosa una experiencia diferente."
              items={beneficios}
            />

            <PlanesPreventivo />

            <OneDayBanner />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas"
              subtitle="Información clara para que llegues a tu despistaje con tranquilidad."
              faqs={faqs}
            />
          </main>

          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
            <QuickContact
              title="¿Tienes dudas?"
              titleAccent="Estamos aquí."
            />
          </aside>

        </div>
      </div>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
