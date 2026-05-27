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
} from '../components/specialty'

import {
  cardioImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
} from '../components/cardiologia/data'

export default function Cardiologia() {
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
        video={cardioImages.heroVideo}
        titlePre="Cardiología"
        titleAccent="clínica y preventiva."
        paragraph="Cuidamos tu corazón con Innovación Tecnológica y atención especializada en cada etapa del diagnóstico y tratamiento."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="cardiología?"
              paragraph="Especialidad médica dedicada al diagnóstico, tratamiento y prevención de enfermedades del corazón y del sistema cardiovascular, con enfoque clínico e integral."
              listLabel="Motivos de consulta"
              items={sintomas}
              sideImage={cardioImages.side}
              sideAlt="Atención cardiológica"
            />

            <ConditionsGrid
              eyebrow="PATOLOGÍAS TRATADAS"
              titlePre="¿Qué"
              titleAccent="tratamos?"
              items={condiciones}
            />

            <MisionCTA
              image={cardioImages.cta}
              imageAlt="Compromiso cardiológico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación cardiológica."
              paragraph="Cuida tu corazón con un equipo especializado en diagnóstico y tratamientos cardiovasculares personalizados."
            />

            <ServicesCard
              titlePre="Servicios y procedimientos"
              titleAccent="disponibles."
              paragraph="Evaluaciones y estudios integrales para el cuidado de tu salud cardiovascular."
              service={servicios[0]}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestros servicios cardiológicos."
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
