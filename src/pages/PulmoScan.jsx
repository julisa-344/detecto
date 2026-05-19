import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

const heroVideo = `${import.meta.env.VITE_BASE_IMAGE_URL}preventivos/pulmonScan.mp4`

import {
  ThemeProvider,
  GREEN_THEME,
  Hero,
  ServicesStrip,
  BeneficiosGrid,
  FAQs,
  QuickContact,
} from '../components/specialty'

import {
  PlanesPreventivo,
  OneDayBanner,
  PorQueHacerlo,
  ChecklistPreparacion,
  servicios,
  beneficios,
  faqs,
} from '../components/pulmoscan'

export default function PulmoScan() {
  return (
    <ThemeProvider
      theme={GREEN_THEME}
      className="min-h-screen"
      style={{
        fontFamily: 'Lexend, sans-serif',
        background: GREEN_THEME.pageGradient,
      }}
    >
      <HeaderV3 />

      <Hero
        video={heroVideo}
        titlePre="PulmoScan:"
        titleAccent="tu salud respiratoria en buenas manos."
        subtitle="Despistaje neumológico integral para detectar a tiempo EPOC, cáncer de pulmón y otras enfermedades respiratorias."
      />

      <ServicesStrip items={servicios} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <PorQueHacerlo />

            <BeneficiosGrid
              eyebrow="¿Por qué elegirnos?"
              titlePre="Una propuesta pensada"
              titleAccent="para cuidarte."
              paragraph="Cuatro pilares que hacen del PulmoScan una experiencia diferente."
              items={beneficios}
              activeBg="linear-gradient(160deg, #34D399 0%, #047857 100%)"
              idleBg="linear-gradient(160deg, #ECFDF5 0%, #A7F3D0 100%)"
              collapsedTextColor="#047857"
            />

            <PlanesPreventivo />

            <ChecklistPreparacion />

            <OneDayBanner />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas"
              subtitle="Información clara para que llegues a tu despistaje con tranquilidad."
              faqs={faqs}
            />
          </main>

          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
            <QuickContact title="¿Tienes dudas?" titleAccent="Estamos aquí." />
          </aside>
        </div>
      </div>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
