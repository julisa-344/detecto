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
  neumoImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/neumologia/data'

export default function Neumologia() {
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
        video={neumoImages.heroVideo}
        titlePre="Neumología:"
        titleAccent="cuidamos tu salud respiratoria."
        paragraph="Diagnóstico y tratamiento integral de enfermedades respiratorias con tecnología avanzada y un equipo médico especializado."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="neumología?"
              paragraph="Especialidad médica dedicada al diagnóstico, tratamiento y prevención de las enfermedades del sistema respiratorio: pulmones, vías aéreas y todo lo relacionado con la respiración."
              listLabel="Motivos de consulta"
              items={sintomas}
              sideImage={neumoImages.side}
              sideAlt="Atención neumológica"
            />

            <ConditionsGrid
              eyebrow="Patologías tratadas"
              titlePre="¿Qué"
              titleAccent="tratamos?"
              items={condiciones}
            />

            <MisionCTA
              image={neumoImages.cta}
              imageAlt="Compromiso neumológico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación neumológica."
              paragraph="Cuida tu salud respiratoria con un equipo especializado en diagnóstico temprano y tratamientos personalizados."
            />

            <ServicesCard
              titlePre="Servicios y procedimientos"
              titleAccent="disponibles."
              paragraph="Atención integral para el cuidado de tus pulmones y vías respiratorias."
              service={servicios[0]}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestros servicios neumológicos."
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
