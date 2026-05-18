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
  psicoImages,
  sintomas,
  abordamos,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/psicooncologia/data'

export default function Psicooncologia() {
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
        eyebrow="Especialidad oncológica"
        video={psicoImages.heroVideo}
        titlePre="Psicología"
        titleAccent="oncológica."
        paragraph="Acompañamos tu bienestar emocional y el de tu familia durante todo el tratamiento oncológico."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="psicooncología?"
              paragraph="Subespecialidad de la psicología clínica dedicada al apoyo emocional, cognitivo y conductual de pacientes con cáncer y sus familias."
              listLabel="Cuándo pedir apoyo"
              items={sintomas}
              sideImage={psicoImages.side}
              sideAlt="Acompañamiento psicooncológico"
            />

            <ConditionsGrid
              eyebrow="NUESTRO ABORDAJE"
              titlePre="¿Qué"
              titleAccent="abordamos?"
              items={abordamos}
            />

            <MisionCTA
              image={psicoImages.cta}
              imageAlt="Compromiso oncológico Detecta"
              eyebrow=" "
              titlePre="Agenda tu"
              titleAccent="acompañamiento emocional."
              paragraph="Apoyo profesional para pacientes y familias en cada etapa del proceso oncológico."
            />

            <ServicesCard
              eyebrow="Cómo te acompañamos"
              titlePre="Modalidades"
              titleAccent="de atención."
              paragraph="Sesiones flexibles y planes adaptados a cada etapa de tu proceso."
              label="/ Modalidades"
              service={servicios[0]}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre el acompañamiento psicooncológico."
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
