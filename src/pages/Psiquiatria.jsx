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
  psiquiatriaImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/psiquiatria/data'

export default function Psiquiatria() {
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
        eyebrow="Salud mental"
        video={psiquiatriaImages.heroVideo}
        titlePre="Psiquiatría"
        titleAccent="clínica."
        paragraph="Salud mental con un enfoque humano, integral y basado en evidencia para adolescentes y adultos."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="psiquiatría?"
              paragraph="Rama de la medicina enfocada en el diagnóstico, tratamiento y prevención de trastornos mentales, emocionales y conductuales, combinando tratamiento farmacológico y psicoterapéutico."
              listLabel="Motivos de consulta"
              items={sintomas}
              sideImage={psiquiatriaImages.side}
              sideAlt="Atención psiquiátrica"
            />

            <ConditionsGrid
              eyebrow="CONDICIONES TRATADAS"
              titlePre="¿Qué"
              titleAccent="tratamos?"
              items={condiciones}
            />

            <MisionCTA
              image={psiquiatriaImages.cta}
              imageAlt="Compromiso médico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="consulta psiquiátrica."
              paragraph="Cuida tu salud mental con un equipo especializado que respeta tu historia, tu ritmo y tus necesidades."
            />

            <ServicesCard
              titlePre="Servicios y abordaje"
              titleAccent="terapéutico."
              paragraph="Evaluación, tratamiento farmacológico y coordinación con psicoterapia para una atención integral."
              service={servicios[0]}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestra atención psiquiátrica."
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
