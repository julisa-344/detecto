import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

const heroVideo = `${import.meta.env.VITE_BASE_IMAGE_URL}preventivos/preventivoAzul.mp4`

import {
  ThemeProvider,
  BLUE_THEME,
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
} from '../components/preventivo-azul'

export default function PreventivoAzul() {
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

      <Hero
        video={heroVideo}
        titlePre="Preventivo Azul:"
        titleAccent="despistaje con enfoque integral."
        subtitle="Evaluación preventiva para próstata, testículos y salud urológica. Detectar a tiempo puede cambiarlo todo."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <PorQueHacerlo />

            <BeneficiosGrid
              eyebrow="¿Por qué elegirnos?"
              titlePre="Una propuesta pensada"
              titleAccent="para cuidarte."
              paragraph="Cuatro pilares que hacen del Preventivo Azul una experiencia diferente."
              items={beneficios}
              activeBg="linear-gradient(160deg, #52C0E1 0%, #0070A5 100%)"
              idleBg="linear-gradient(160deg, #E0F4FB 0%, #A5DCEE 100%)"
              collapsedTextColor="#0070A5"
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
