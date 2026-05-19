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
  ServicesCard,
  FAQs,
  QuickContact,
  FortalezasClinica,
} from '../components/specialty'

import {
  dermaImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/dermatologia/data'

export default function Dermatologia() {
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
        video={dermaImages.heroVideo}
        titlePre="Dermatología"
        titleAccent="clínica y estética."
        paragraph="Cuidamos tu piel con tecnología avanzada y atención cercana en cada etapa del tratamiento."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="dermatología?"
              paragraph="Especialidad médica dedicada al diagnóstico, tratamiento y prevención de enfermedades de la piel, el cabello y las uñas, con enfoque clínico y estético."
              listLabel="Motivos de consulta"
              items={sintomas}
              sideImage={dermaImages.side}
              sideAlt="Atención dermatológica"
            />

            <ConditionsGrid
              eyebrow="PATOLOGÍAS TRATADAS"
              titlePre="¿Qué"
              titleAccent="tratamos?"
              items={condiciones}
            />

            <MisionCTA
              image={dermaImages.cta}
              imageAlt="Compromiso dermatológico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación dermatológica."
              paragraph="Cuida tu piel con un equipo especializado en diagnóstico y tratamientos personalizados."
            />

            <ServicesCard
              titlePre="Servicios y procedimientos"
              titleAccent="disponibles."
              paragraph="Tratamientos integrales para el cuidado de tu piel, cabello y uñas."
              service={servicios[0]}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestros servicios dermatológicos."
              faqs={faqs}
            />
          </main>

          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
            <QuickContact />
          </aside>
        </div>
      </div>

      <FortalezasClinica words={fortalezas} />

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
