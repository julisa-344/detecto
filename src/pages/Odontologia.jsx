import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

import {
  ThemeProvider,
  BLUE_THEME,
  MisionCTA,
  ServicesStrip,
  SpecialtyHero,
  SpecialtyIntro,
  ConditionsGrid,
  ServicesGrid,
  FAQs,
  QuickContact,
  FortalezasClinica,
} from '../components/specialty'

import {
  odontoImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/odontologia/data'

export default function Odontologia() {
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

      <SpecialtyHero
        eyebrow="Especialidad odontológica"
        video={odontoImages.heroVideo}
        titlePre="Odontología"
        titleAccent="integral."
        paragraph="Sonríe con confianza. Atención preventiva, reconstructiva y estética con Innovación Tecnológica y trato cercano."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="odontología?"
              paragraph="Especialidad de la salud que cuida dientes, encías, maxilares y estructuras anexas. Ofrecemos servicios preventivos, reconstructivos y estéticos con un enfoque integral y moderno."
              listLabel="Motivos de consulta"
              items={sintomas}
              sideImage={odontoImages.side}
              sideAlt="Atención odontológica integral"
            />

            <ConditionsGrid
              eyebrow="CONDICIONES TRATADAS"
              titlePre="¿Qué"
              titleAccent="tratamos?"
              items={condiciones}
            />

            <MisionCTA
              image={odontoImages.cta}
              imageAlt="Compromiso odontológico Detecta"
              eyebrow=" "
              titlePre="Agenda tu"
              titleAccent="consulta dental."
              paragraph="Recupera la salud y estética de tu sonrisa con un equipo odontológico especializado."
            />

            <ServicesGrid
              titlePre="Atención integral para"
              titleAccent="tu salud bucal."
              paragraph="Diagnóstico avanzado, tratamientos personalizados y acompañamiento continuo."
              services={servicios}
              columns={3}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestra atención odontológica."
              faqs={faqs}
            />
          </main>

          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
            <QuickContact />
          </aside>
        </div>
      </div>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
